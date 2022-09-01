import React, { useState,useEffect } from 'react'
import axios from "axios";


const ChatPage = () => {
      const [chats,setChats] = useState([]);
      const fetchChats = async () =>{
        const  {data} = await axios.get("api/chat");
        setChats(data);
        console.log(data);
    };
 console.log(chats,"chatssssss");
 useEffect(() => {
    fetchChats();
 }, []);
 
 return <div>{chats.map( (chat)=>(
   <div key= {chat._id}>{chat.chatName}</div>
    ))}
   </div>
//  here user is a variable to accept the data it can be named anything.
}

export default ChatPage