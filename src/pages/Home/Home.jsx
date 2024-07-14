import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
// import ChatWindow from '../components/ChatWindow';
// import MessageInput from '../components/MessageInput';

const Home = () => {
  const [chats, setChats] = useState([
    { name: 'Chat 1', lastMessage: 'Hello', messages: [{ content: 'Hello', timestamp: '10:00 AM' }] },
    { name: 'Chat 2', lastMessage: 'Hi', messages: [{ content: 'Hi', timestamp: '10:05 AM' }] },
  ]);
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const onSendMessage = () => {
    if (message.trim()) {
      const newChats = [...chats];
      newChats[selectedChat].messages.push({ content: message, timestamp: new Date().toLocaleTimeString() });
      newChats[selectedChat].lastMessage = message;
      setChats(newChats);
      setMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar chats={chats} selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      
      {/* <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <ChatWindow chat={chats[selectedChat]} />
        <MessageInput message={message} setMessage={setMessage} onSendMessage={onSendMessage} />
      </Box> */}
    </Box>
  );
};

export default Home;
