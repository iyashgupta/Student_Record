import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { _post } from "../../server" 
import './login.css'

const initialLoginData = {
      userEmail : "",
      userPassword : "",
}

const Login = () => {
  const [userData,setUserData] = useState(initialLoginData)


  const handleSubmit =async (e) => {
    e.preventDefault()

      try{
          const res = await _post('/login', userData)
            console.log(res,'front','printed')
      }catch(err) {

      }
  }

  const handleChange= ({ target }) => {
      const {name ,value} = target
      setUserData({ ...userData, [name]: value })
  }
  return (
    <div className='login-container'>
    <Container maxW="sm" centerContent>
      <Box
        w="100%"
        p={6}
        borderRadius="lg"
        border="1.8px solid"
        borderColor="#000"
        textAlign="center"
      >
        {/* Welcome Text */}
        <Heading as="h1" size="lg" mb={1} color="gray.700">
          Welcome Back
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={4}>
          Login to your account using your username or email
        </Text>

        {/* Form */}
        <VStack as="form" spacing={4} alignItems="center" h="100%" onSubmit={handleSubmit}>  {/* 100% height applied to VStack */}
          <FormControl id="emailOrUsername" isRequired>
            <FormLabel>Email </FormLabel>
            <Input
              type="text"
              placeholder="Enter email or username"
              focusBorderColor="blackAlpha.800"
              bg="white"
              borderRadius="md"
              name='userEmail'
              value={userData.userEmail}
              onChange={handleChange}
              />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              focusBorderColor="blackAlpha.800"
              bg="white"
              borderRadius="md"
              name='userPassword'
              value={userData.userPassword}
              onChange={handleChange}
            />
          </FormControl>

          {/* Login button */}
          <Button
            type="submit"
            colorScheme="blackAlpha"
            bg="black"
            color="white"
            width="full"
            _hover={{ bg: 'gray.700' }}
          >
            Login ➔
          </Button>
        </VStack>
      </Box>
    </Container>
    </div>
  );
};

export default Login;