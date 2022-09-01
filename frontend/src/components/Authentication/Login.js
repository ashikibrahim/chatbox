import React, { useState }  from 'react';
import {Button} from "@chakra-ui/react"
import {VStack} from "@chakra-ui/react"
import { FormControl,FormLabel} from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleClick= () => setShow(!show);
  // const postDetails =(pics) => {

  // }
  // submitHandler = () => {

  // }

return <VStack spacing='5px' color="black">
      <FormControl id="email" isRequired>
      <FormLabel>Email Address</FormLabel>
      <Input
        type="email"
        placeholder="Enter Your Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          type={show ?"text" : "password"}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>

    <Button
      colorScheme="blue"
      width="100%"
      style={{ marginTop: 15 }}
      // onClick={submitHandler}
      // isLoading={picLoading}
    >
     Login
    </Button>
    <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
}

export default Login