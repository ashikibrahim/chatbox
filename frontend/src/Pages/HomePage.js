import React from 'react'
import {Container,Box,Text,TabList,TabPanel,TabPanels,Tabs,Tab} from "@chakra-ui/react"
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
const HomePage = () => {
  return( 
  <Container maxW='xl' centerContent>
    {/* Box is similar to div which is used in chakra */}
    <Box 
    display="flex"
      justifyContent='center'
      p={3}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px">
      <Text fontSize="4xl" fontFamily="Work sans" color="black">Chatbox</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
    <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
    </Box>
  </Container>
  );
};

export default HomePage