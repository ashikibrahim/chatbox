import {Button} from "@chakra-ui/react"
import "./App.css"
import { Route } from "react-router-dom"
import ChatPage from "../src/Pages/ChatPage"
import HomePage from "../src/Pages/HomePage"

function App() {
  return (
    <div className="App">
     <Route path="/"  component={HomePage} exact/>
     <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
