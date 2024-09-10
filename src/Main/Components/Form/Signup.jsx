import React from 'react';
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
} from '@chakra-ui/react';

const Form = () => {
  return (
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
        {/* Welcome Text */}
        <Heading as="h1" size="lg" mb={1}>
          Welcome to Student 
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>
          Login to Aceternity if you can because we don’t have a login flow yet
        </Text>

        {/* Form */}
        <VStack as="form" spacing={4}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <FormControl id="FullName" isRequired>
              <FormLabel>Full name</FormLabel>
              <Input placeholder="Full name" defaultValue="Tyler" />
            </FormControl>
            <FormControl id="UserName" isRequired>
              <FormLabel>User Name</FormLabel>
              <Input placeholder="User name" defaultValue="Durden" />
            </FormControl>
          </Grid>

          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Email" defaultValue="projectmayhem@fc.com" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" defaultValue="******" />
          </FormControl>

          <FormControl id="Confirm Password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Twitter Password" defaultValue="******" />
          </FormControl>

          {/* Sign up button */}
          <Button
            type="submit"
            colorScheme="blackAlpha"
            bg="black"
            color="white"
            width="full"
            _hover={{ bg: 'gray.700' }}
          >
            Sign up ➔
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Form;
