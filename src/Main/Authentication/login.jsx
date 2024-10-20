import React, { useState } from 'react';
import { _post } from "../../server";
import './loginsignup.css';
import logo from "../../assests/logo.svg"
import { useNavigate } from 'react-router-dom';

const initialLoginData = {
  email: "",
  password: "",
};

const Login = () => {
  const [userData, setUserData] = useState(initialLoginData);
  const navigate= useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await _post('/auth/login', userData);
       if(res.status){
        sessionStorage.setItem('token',res.token)
        navigate('/dashboard')
       }else{
          console.log('err while login')
       }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="signup-container">
    <div className="forms-container">
      <div className="signin-signup">
      <form className="sign-in-form" onSubmit={handleSubmit}>
<h2 className="title">Sign in</h2>
<div className="input-field">
  <i className="fas fa-user"></i>
  <input
    type="text"
    placeholder="Username"
    name="email"
    value={userData.email}
    onChange={handleChange}
    required
  />
</div>
<div className="input-field">
  <i className="fas fa-lock"></i>
  <input
    type="password"
    placeholder="Password"
    name="password"
    value={userData.password}
    onChange={handleChange}
    required
  />
</div>
<input type="submit" value="Login" className="btn solid" />
<p className="social-text">Or Sign in with social platforms</p>
<div className="social-media">
  <a href="#" className="social-icon">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="#" className="social-icon">
    <i className="fab fa-google"></i>
  </a>
  <a href="#" className="social-icon">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>
</form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Debitis, ex ratione. Aliquid!
          </p>
          <button className="btn transparent" id="sign-up-btn" onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </div>
        <img src="img/log.svg" className="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>One of us ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </p>
          <button className="btn transparent" id="sign-in-btn">
            Sign in
          </button>
        </div>
        <img src={logo} className="image" alt="" />
      </div>
    </div>
  </div>
  );
};

export default Login;











// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   FormControl,
//   FormLabel,
//   Input,
//   Heading,
//   Text,
//   VStack,
// } from '@chakra-ui/react';
// import { _post } from "../../server" 
// import './loginsignup.css'

// const initialLoginData = {
//       email : "",
//       password : "",
// }

// const Login = () => {
//   const [userData,setUserData] = useState(initialLoginData)


//   const handleSubmit =async (e) => {
//     e.preventDefault()

//       try{
//           const res = await _post('/login', userData)
//             console.log(res,'front','printed')
//       }catch(err) {

//       }
//   }

//   const handleChange= ({ target }) => {
//       const {name ,value} = target
//       setUserData({ ...userData, [name]: value })
//   }
//   return (
 
//     <div className='login-container'>
//     <Container maxW="sm" centerContent>
//       <Box
//         w="100%"
//         p={6}
//         borderRadius="lg"
//         border="1.8px solid"
//         borderColor="#000"
//         textAlign="center"
//       >
//         {/* Welcome Text */}
//         <Heading as="h1" size="lg" mb={1} color="gray.700">
//           Welcome Back
//         </Heading>
//         <Text fontSize="sm" color="gray.500" mb={4}>
//           Login to your account using your username or email
//         </Text>

//         {/* Form */}
//         <VStack as="form" spacing={4} alignItems="center" h="100%" onSubmit={handleSubmit}>  {/* 100% height applied to VStack */}
//           <FormControl id="emailOrUsername" isRequired>
//             <FormLabel>Email </FormLabel>
//             <Input
//               type="text"
//               placeholder="Enter email or username"
//               focusBorderColor="blackAlpha.800"
//               bg="white"
//               borderRadius="md"
//               name='email'
//               value={userData.email}
//               onChange={handleChange}
//               />
//           </FormControl>

//           <FormControl id="password" isRequired>
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               placeholder="Enter your password"
//               focusBorderColor="blackAlpha.800"
//               bg="white"
//               borderRadius="md"
//               name='password'
//               value={userData.password}
//               onChange={handleChange}
//             />
//           </FormControl>

//           {/* Login button */}
//           <Button
//             type="submit"
//             colorScheme="blackAlpha"
//             bg="black"
//             color="white"
//             width="full"
//             _hover={{ bg: 'gray.700' }}
//           >
//             Login ➔
//           </Button>
//         </VStack>
//       </Box>
//     </Container>
//     </div>
//   );
// };

// export default Login;