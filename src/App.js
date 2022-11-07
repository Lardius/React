import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/inputForm';
import MessageList from './components/messageList';
import ListChats from './components/listchats';
import { Box } from '@mui/material';

function App() {
  const [messageList, setMessageList] = useState([])

function addComment(newCom){
  setMessageList(prestate => [...prestate, newCom])
  }

const DescrRobot = {autor: "Robot", text: "Ваше сообщение получено"}

useEffect(()=>{
  setTimeout(() => {
    if(messageList.length !== 0 && messageList[messageList.length -1].autor !== "Robot")
    {setMessageList(prestate => [...prestate, DescrRobot])}
  }, 3000);
}, [messageList])

  return <Box  className="App">
        <ListChats/>
          <div>
            <InputForm add = {addComment}/>
            <MessageList messages = {messageList}/>
          </div>
    </Box>;
}

export default App;
