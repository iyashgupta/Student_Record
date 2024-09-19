import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Heading,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { _post } from "../../server";
import Loader from "../Loader/Loader";
import { passwordStrength } from "check-password-strength";
import AlertAnimation from "../AlertAnimation/AlertAnimation";
import EmailValidator from 'email-validator';

// Initial form data
const initialData = {
  userFullName: "",
  userName: "",
  userPassword: "",
  userRetypePassword: "",
  userEmail: "",
};

const initialError = {
  passwordError: { message: "", status: "" },
  userNameError: { message: "", status: "" },
  userFullNameError: { message: "", status: "" },
  emailError:{ message: "", status: "" }
};

const SignUp = () => {
  const toast = useToast();
  const [userInfo, setUserInfo] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState(initialError);
  const [loading, setLoading] = useState(false);

  // Validating Unique userName
  const validateUniqueUserName = async (value) => {
    const usernamePattern =
      /^(?=.{3,16}$)(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

    if (!usernamePattern.test(value)) {
      return setErrorMessage({
        ...errorMessage,
        userNameError: { status: "error", message: "Invalid User Name!" },
      });
    }
    try {
      const { message, status } = await _post("/uniqueusername", {
        userName: value,
      });
      setErrorMessage({
        ...errorMessage,
        userNameError: { status: status ? "success" : "error", message },
      });
    } catch (err) {
      setErrorMessage({
        ...errorMessage,
        userNameError: { status: "error", message: err.response.data.message },
      });
      console.log(err);
    }
  };

  // Handle input changes
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });

    if (name === "userFullName") {
      if (value === "") {
        return setErrorMessage({
          ...errorMessage,
          userFullNameError: initialError.userFullNameError,
        });
      }

      if (/\d/.test(value)) {
        return setErrorMessage({
          ...errorMessage,
          userFullNameError: {
            status: "error",
            message: "No Numbers Allowed" ,
          },
        });
      }

      setErrorMessage({
        ...errorMessage,
        userFullNameError:
          value.length < 4
            ? {
                message: "Too Short",
                status: "error",
              }
            : { message: "Looks Good", status: "success" },
      });
    }
     
    if (name === "userName") {
      if (value === "") {
        return setErrorMessage({
          ...errorMessage,
          userNameError: initialError.userNameError,
        });
      }
      validateUniqueUserName(value);
    }

    if(name === 'userEmail'){
      if(value === ""){
           return setErrorMessage({
            ...errorMessage,
            emailError: initialError.emailError,
          });
      }
      if(!EmailValidator.validate(value)){
         return  setErrorMessage({
          ...errorMessage,
          emailError: { message:"Email Invalid!" , status:"error" },
        });
      }

      setErrorMessage({
        ...errorMessage,
        emailError: { message:"Valid Email!" , status:"success" },
      });
    }

    if (name === "userPassword") {
      // Reset error if password is cleared
      if (value === "") {
        return setErrorMessage({
          ...errorMessage,
          passwordError: initialError.passwordError,
        });
      }

      // Check for password strength
      const strength = passwordStrength(value).value;
      if (strength === "Weak" || strength === "Too weak") {
        return setErrorMessage({
          ...errorMessage,
          passwordError: { message: "Weak Password", status: "error" },
        });
      }

      if (strength === "Medium") {
        return setErrorMessage({
          ...errorMessage,
          passwordError: { message: "Password Not Secured", status: "warning" },
        });
      }

      // If password is strong
      setErrorMessage({
        ...errorMessage,
        passwordError: { message: "Secured Password", status: "success" },
      });
    }  
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    setLoading(true);

    try {
      const data = await _post("/registeruser", userInfo);
      setUserInfo(initialData);
      handleClick("Data Added Successfully!", "success");
    } catch (err) {
      console.log(err, "data");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (message, status) => {
    toast({
      position: "top",
      title: "Success!",
      description: message,
      status,
      duration: 5000,
      isClosable: true,
    });
  };

  useEffect(() => {
    // eslint-disable-next-line
    console.log("Component Mounted");
  }, []);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Container maxW="lg" centerContent>
          <Box
            w="100%"
            p={8}
            borderRadius="md"
            boxShadow="md"
            bg="white"
            border="1.8px solid"
            borderColor="gray.300"
            textAlign="center"
          >
            <Heading as="h1" size="lg" mb={1}>
              Welcome to Student
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              Login to Aceternity if you can because we don’t have a login flow
              yet
            </Text>

            <VStack
              as="form"
              spacing={2} // Increased spacing to accommodate absolute positioned alerts
              onSubmit={handleSubmit}
            >
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <FormControl id="FullName" isRequired>
                  <FormLabel>Full name</FormLabel>
                  <Input
                    placeholder="Full name"
                    name="userFullName"
                    className="mb-1"
                    value={userInfo.userFullName}
                    onChange={handleChange}
                  />
                  <AlertAnimation
                    message={errorMessage.userFullNameError.message}
                    status={errorMessage.userFullNameError.status}
                  />
                </FormControl>

                <FormControl id="UserName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Box position="relative">
                    <Input
                      placeholder="User name"
                      name="userName"
                      className="mb-1"
                      value={userInfo.userName}
                      onChange={handleChange}
                    />
                    <AlertAnimation
                      message={errorMessage.userNameError.message}
                      status={errorMessage.userNameError.status}
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      bg="white"
                      zIndex="docked"
                    />
                  </Box>
                </FormControl>
              </Grid>

              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  className='mb-1'
                  name="userEmail"
                  value={userInfo.userEmail}
                  onChange={handleChange}
                />
                <AlertAnimation message={errorMessage.emailError.message} status={errorMessage.emailError.status} />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Box position="relative">
                  <Input
                    type="password"
                    className="mb-1"
                    placeholder="Password"
                    name="userPassword"
                    value={userInfo.userPassword}
                    onChange={handleChange}
                  />
                  <AlertAnimation
                    message={errorMessage.passwordError.message}
                    status={errorMessage.passwordError.status}
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    bg="white"
                    zIndex="docked"
                  />
                </Box>
              </FormControl>

              <FormControl id="ConfirmPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Retype Password"
                  name="userRetypePassword"
                  value={userInfo.userRetypePassword}
                  onChange={handleChange}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="blackAlpha"
                bg="black"
                color="white"
                width="full"
                _hover={{ bg: "gray.700" }}
              >
                Sign up ➔
              </Button>
            </VStack>
          </Box>
        </Container>
      )}
    </Fragment>
  );
};

export default SignUp;
