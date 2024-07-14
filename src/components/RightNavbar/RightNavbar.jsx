import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, IconButton, Avatar, Typography, Box, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useMediaQuery, useTheme } from '@mui/material';

const RightNavbar = ({ selectedChat, onBack }) => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!selectedChat || !selectedChat.id) return;

  //   axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${selectedChat.id}`)
  //     .then(response => {
  //       const { data } = response.data;
  //       if (data && Array.isArray(data)) {
  //         setMessages(data);
  //       } else {
  //         console.error('Invalid response structure:', response.data);
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Error fetching messages:', error);
  //     });
  // }, [selectedChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isSmallScreen && !selectedChat) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <AppBar position="static" sx={{ background: '#ffffff', color: '#000000', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar>
          {isSmallScreen && (
            <IconButton edge="start" color="inherit" onClick={onBack}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <Avatar alt="User Avatar" src="/path-to-avatar.jpg" />
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            <Typography variant="h6">{selectedChat ? selectedChat.creator.name : 'Select a chat'}</Typography>
            <Typography variant="body2" color="textSecondary">Last seen at...</Typography>
          </Box>
          <IconButton edge="end" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <PhoneIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Box flexGrow={1} sx={{ overflowY: 'auto', padding: 2, backgroundColor: '#8BABD8', position: 'relative' }}>
        {messages.map(message => (
          <Box key={message.id} sx={{ mb: 2, display: 'flex', justifyContent: message.sender_id === 1 ? 'flex-end' : 'flex-start' }}>
            <Paper sx={{ maxWidth: '80%', p: 2, backgroundColor: message.sender_id === 1 ? '#ffffff' : '#dcedc8' }}>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>{message.message}</Typography>
              {message.sender_id === 1 && (
                <Typography variant="caption" color="textSecondary">BeyondChat</Typography>
              )}
            </Paper>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Box> */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        right: isSmallScreen ? 30 : 130,
        width: isSmallScreen ? 'calc(90% - 20px)' : 'calc(70% - 180px)',
      }}>
        <Paper
          component="form"
          sx={{ display: 'flex', alignItems: 'center', width: '100%', p: '2px 4px' }}
        >
          <IconButton sx={{ p: '10px' }}>
            <EmojiEmotionsIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Message…"
          />
          <IconButton type="submit" sx={{ p: '10px' }}>
            <SendIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default RightNavbar;
