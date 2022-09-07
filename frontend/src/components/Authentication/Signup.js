import React from 'react'
import {Button} from "@chakra-ui/react"
import {VStack} from "@chakra-ui/react"
import { FormControl,FormLabel} from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useState } from "react";
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const history = useHistory();

    const handleClick= () => setShow(!show);

    // cloudinary and profile pic part
    const postDetails =(pics) => {
      setLoading(true);
      if(pic === undefined){
        toast({
          title: 'Please select an image ',
          description: "We've created your account for you.",
          status: 'warning ',
          duration: 5000,
          isClosable: true,
          position:"bottom"
        });
        return;
      }
      if(pics.type === "image/jpeg" || pics.type === "image/png"){
        const data = new FormData();
        data.append("file",pics);
        // chatbox is the name given in cloudinary
        data.append("upload_present", "chatbox")
        data.append("cloud_name","dgvg7tbl4")
        fetch("https://api.cloudinary.com/v1_1/dgvg7tbl4/image/upload", {
          method: "post",
          body: data,
        })
        .then((res)=> res.json())
        .then((data)=>{
          setPic(data.url.toString())
          setLoading(false);
        })
        .catch((err)=>{
          console.log(err);
          setLoading(false)
        }); 
      }else{
        toast({
          title: 'Please select an image ',
          description: "We've created your account for you.",
          status: 'warning ',
          duration: 5000,
          isClosable: true,
          position:"bottom"
        });
        setLoading(false);
        return;
      }
    };


  const submitHandler = async() => { 
    setLoading(true);
    if(!name || !email || !password || !confirmpassword){
      toast({
        title: 'Please fill all the fields ',
        status: 'warning ',
        duration: 5000,
        isClosable: true,
        position:"bottom"
      });
      setLoading(false)
      return;
    }
    if(password !== confirmpassword){
      toast({
        title: 'passwords does not match ',
        status: 'warning ',
        duration: 5000,
        isClosable: true,
        position:"bottom"
      });
      return;
    }
    try{
      const config ={
        headers:{
          "Content-type":"application/json"
        }
      };
      const {data} = await axios.post(
        "/api/user",
        {name,email,password,pic},
      config
      );
      toast({
        title: 'registartion successfull ',
        status: 'success ',
        duration: 5000,
        isClosable: true,
        position:"bottom"
      });
localStorage.setItem("userInfo",JSON.stringify(data));

setLoading(false);
history.push('/chats')


    }catch(error){
      toast({
        title: 'error occured ',
        description: error.response.data.messsage,
        status: 'error ',
        duration: 5000,
        isClosable: true,
        position:"bottom"
      });
      setLoading(false);
      return;
    }
  };


  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
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
            type={show ? "text" : "password"}
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
      <FormControl id="password" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;