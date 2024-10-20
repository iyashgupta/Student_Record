import React, { useState } from "react";
import { _post } from "../../server";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import AlertAnimation from "../AlertAnimation/AlertAnimation"; 
import { passwordStrength } from "check-password-strength";
import EmailValidator from "email-validator";
import Register from "../../assests/register.svg"
import "./loginsignup.css";

// Initial form data
const initialData = {
  name: "",
  mobileNumber: "",
  password: "",
  email: "",
};


const Signup = () => {
  const [userInfo, setUserInfo] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  // Handle input changes
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });

    // Name validation
    // if (name === "name") {
    //   if (/\d/.test(value)) {
    //   }
    // }

    // Mobile number validation (optional: add validation logic here)
    // if (name === "mobileNumber") {
    //   setErrorMessage({
    //     ...errorMessage,
    //     mobileNumberError: initialError.mobileNumberError,
    //   });
    // }

    // Email validation
    // if (name === "email") {
    //   if (EmailValidator.validate(value)) {
    //   }
    // }

    // Password validation
  //   if (name === "password") {
  //     const strength = passwordStrength(value).value;
  //     if (strength === "Medium") {
  //   }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    setLoading(true);
    try {
      const data = await _post("/auth/signUp", userInfo);
      if (data.status) {
        handleClick("Data Added Successfully!", "success", "Success!");
        setUserInfo(initialData); // Reset form
        navigate("/login"); // Redirect to login page
      }
    } catch (err) {
      console.error(err);
      handleClick(err.response.data.message, "error", "Error!");
    } finally {
      setLoading(false);
    }
  };

  // Toast message handler
  const handleClick = (message, status, title) => {
    toast({
      position: "top",
      title,
      description: message,
      status,
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <div className="signup-container sign-up-mode">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input
                type="text"
                placeholder="Mobile number"
                name="mobileNumber"
                value={userInfo.mobileNumber}
                onChange={handleChange}
              />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userInfo.password}
                onChange={handleChange}
              />
            </div>

            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              {/* Social media icons */}
            </div>
          </form>
        </div>
      </div>
      {/* Rest of the UI */}
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={() => navigate('/login')}>
              Sign in
            </button>
          </div>
          <img src={Register} class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;




// import React, { Fragment, useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   FormControl,
//   FormLabel,
//   Grid,
//   Input,
//   Heading,
//   Text,
//   VStack,
//   useToast,
// } from "@chakra-ui/react";
// import { _post } from "../../server";
// import { useNavigate } from "react-router-dom";
// import Loader from "../Loader/Loader";
// import { passwordStrength } from "check-password-strength";
// import AlertAnimation from "../AlertAnimation/AlertAnimation";
// import EmailValidator from 'email-validator';

// // Initial form data
// const initialData = {
//   name: "",
//   mobileNumber: "",
//   password: "",
//   retypePassword: "",
//   email: "",
// };

// const initialError = {
//   passwordError: { message: "", status: "" },
//   mobileNumberError: { message: "", status: "" },
//   nameError: { message: "", status: "" },
//   emailError:{ message: "", status: "" }
// };

// const SignUp = () => {
//   const toast = useToast();
//   const [userInfo, setUserInfo] = useState(initialData);
//   const [errorMessage, setErrorMessage] = useState(initialError);
//   const navigate = useNavigate()
//   const [loading, setLoading] = useState(false);

//   // Handle input changes
//   const handleChange = ({ target }) => {
//     const { name, value } = target;
//     setUserInfo({ ...userInfo, [name]: value });

//     if (name === "name") {
//       if (value === "") {
//         return setErrorMessage({
//           ...errorMessage,
//           nameError: initialError.nameError,
//         });
//       }

//       if (/\d/.test(value)) {
//         return setErrorMessage({
//           ...errorMessage,
//           nameError: {
//             status: "error",
//             message: "No Numbers Allowed" ,
//           },
//         });
//       }

//       setErrorMessage({
//         ...errorMessage,
//         nameError:
//           value.length < 4
//             ? {
//                 message: "Too Short",
//                 status: "error",
//               }
//             : { message: "Looks Good", status: "success" },
//       });
//     }

//     if (name === "mobileNumber") {
//       if (value === "") {
//         return setErrorMessage({
//           ...errorMessage,
//           mobileNumberError: initialError.mobileNumberError,
//         });
//       }
//       // mobile number validation need to be right here
//     }

//     if(name === 'email'){
//            setErrorMessage({
//             ...errorMessage,
//             emailError: initialError.emailError,
//           });

//       if(EmailValidator.validate(value)){
//          return setErrorMessage({
//           ...errorMessage,
//           emailError: { message:"Valid Email!" , status:"success" },
//         });
//       }
//     }

//     if (name === "password") {
//       // Reset error if password is cleared
//       if (value === "") {
//         return setErrorMessage({
//           ...errorMessage,
//           passwordError: initialError.passwordError,
//         });
//       }

//       // Check for password strength
//       const strength = passwordStrength(value).value;
//       if (strength === "Weak" || strength === "Too weak") {
//         return setErrorMessage({
//           ...errorMessage,
//           passwordError: { message: "Weak Password", status: "error" },
//         });
//       }

//       if (strength === "Medium") {
//         return setErrorMessage({
//           ...errorMessage,
//           passwordError: { message: "Password Not Secured", status: "warning" },
//         });
//       }

//       // If password is strong
//       setErrorMessage({
//         ...errorMessage,
//         passwordError: { message: "Secured Password", status: "success" },
//       });
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent form reload

//     // Password matching validation
//     if (userInfo.password !== userInfo.retypePassword) {
//       return handleClick("Passwords don't match!", "error", "Failed!");
//     }

//     // Check if any form error is still present
//     const statusFalse = Object.keys(errorMessage).find(
//       (ele) => errorMessage[ele]["status"] === "error"
//     );

//     if (statusFalse) {
//       return handleClick("Please fix form errors before submitting.", "error", "Failed!");
//     }

//     setLoading(true);
//     try {
//       const data = await _post("/auth/signUp", userInfo);

//       // If data submission is successful
//       if (data.status) {
//         handleClick("Data Added Successfully!", "success", "Success!");

//         // Optionally reset form data here if needed
//         setUserInfo(initialData);

//         navigate("/login");
//       }
//     } catch (err) {
//       console.error(err);
//       handleClick(err.response.data.message, "error", "Error!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClick = (message, status,title) => {
//     toast({
//       position: "top",
//       title,
//       description: message,
//       status,
//       duration: 5000,
//       isClosable: true,
//     });
//   };

//   useEffect(() => {
//     // eslint-disable-next-line
//     console.log("Component Mounted");
//   }, []);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Container maxW="lg" centerContent>
//           <Box
//             w="100%"
//             p={8}
//             borderRadius="md"
//             boxShadow="md"
//             bg="white"
//             border="1.8px solid"
//             borderColor="gray.300"
//             textAlign="center"
//           >
//             <Heading as="h1" size="lg" mb={1}>
//               Welcome to Student
//             </Heading>
//             <Text fontSize="sm" color="gray.500" mb={2}>
//               Login to Aceternity if you can because we don’t have a login flow
//               yet
//             </Text>

//             <VStack
//               as="form"
//               spacing={2} // Increased spacing to accommodate absolute positioned alerts
//               onSubmit={handleSubmit}
//             >
//               <Grid templateColumns="repeat(2, 1fr)" gap={4}>
//                 <FormControl id="FullName" isRequired>
//                   <FormLabel>Full name</FormLabel>
//                   <Input
//                     placeholder="Full name"
//                     name="name"
//                     className="mb-1"
//                     value={userInfo.name}
//                     onChange={handleChange}
//                   />
//                   { errorMessage.nameError.status && <AlertAnimation
//                     message={errorMessage.nameError.message}
//                     status={errorMessage.nameError.status}
//                   />}

//                 </FormControl>

//                 <FormControl id="mobileNumber" isRequired>
//                   <FormLabel>Mobile Numebr</FormLabel>
//                   <Box>
//                     <Input
//                       placeholder="Mobile Number"
//                       name="mobileNumber"
//                       className="mb-1"
//                       value={userInfo.mobileNumber}
//                       onChange={handleChange}
//                     />
//                     {
//                       errorMessage.mobileNumberError.status && <AlertAnimation
//                       message={errorMessage.mobileNumberError.message}
//                       status={errorMessage.mobileNumberError.status}
//                     />
//                     }
//                   </Box>
//                 </FormControl>
//               </Grid>

//               <FormControl id="email" isRequired>
//                 <FormLabel>Email Address</FormLabel>
//                 <Input
//                   type="email"
//                   placeholder="Email"
//                   className='mb-1'
//                   name="email"
//                   value={userInfo.email}
//                   onChange={handleChange}
//                 />
//                 { errorMessage.emailError.status && <AlertAnimation message={errorMessage.emailError.message} status={errorMessage.emailError.status} />}
//               </FormControl>

//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <Box>
//                   <Input
//                     type="password"
//                     className="mb-1"
//                     placeholder="Password"
//                     name="password"
//                     value={userInfo.password}
//                     onChange={handleChange}
//                   />
//                   {
//                     errorMessage.passwordError.status && <AlertAnimation
//                     message={errorMessage.passwordError.message}
//                     status={errorMessage.passwordError.status}
//                   />
//                   }
//                 </Box>
//               </FormControl>

//               <FormControl id="ConfirmPassword" isRequired>
//                 <FormLabel>Confirm Password</FormLabel>
//                 <Input
//                   type="password"
//                   placeholder="Retype Password"
//                   name="retypePassword"
//                   value={userInfo.retypePassword}
//                   onChange={handleChange}
//                 />
//               </FormControl>

//               <Button
//                 type="submit"
//                 colorScheme="blackAlpha"
//                 bg="black"
//                 color="white"
//                 width="full"
//                 _hover={{ bg: "gray.700" }}
//               >
//                 Sign up ➔
//               </Button>
//             </VStack>
//           </Box>
//         </Container>
//       )}
//     </Fragment>
//   );
// };

// export default SignUp;
