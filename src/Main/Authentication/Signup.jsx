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
import AlertAnimation from "../AlertAnimation/AlertAnimation"

// Initial form data
const initialData = {
  userFullName: "",
  userName: "",
  userPassword: "",
  userRetypePassword: "",
  userEmail: "",
};

const initialError = {
  passwordError : { message:"" , status:""}
}

const SignUp = () => {
  const toast = useToast();
  const [userInfo, setUserInfo] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState(initialError);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  
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
      handleClick("Data Added Sucessfully!", "success");
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
        console.log('Component Mounted')
  },[])

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
              spacing={3}
              onSubmit={handleSubmit} // Make sure the handler is here
            >
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <FormControl id="FullName" isRequired>
                  <FormLabel>Full name</FormLabel>
                  <Input
                    placeholder="Full name"
                    name="userFullName"
                    value={userInfo.userFullName}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl id="UserName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input
                    placeholder="User name"
                    name="userName"
                    value={userInfo.userName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  name="userEmail"
                  value={userInfo.userEmail}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  className="mb-1"
                  placeholder="Password"
                  name="userPassword"
                  value={userInfo.userPassword}
                  onChange={handleChange}
                />
               <AlertAnimation message={errorMessage.passwordError.message} status={errorMessage.passwordError.status} />
              </FormControl>

              <FormControl id="Confirm Password" isRequired>
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
                type="submit" // Submit button must be of type "submit"
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
