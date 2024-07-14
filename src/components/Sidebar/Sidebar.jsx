import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const Sidebar = ({ chats, selectedChat, onSelectChat }) => {
  return (
    <Box sx={{ width: 300, borderRight: '1px solid #e0e0e0', height: '100vh', overflowY: 'auto' }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Chats
      </Typography>
      <List>
        {chats.map((chat, index) => (
          <ListItem
            button
            key={index}
            selected={selectedChat === index}
            onClick={() => onSelectChat(index)}
          >
            <ListItemText primary={chat.name} secondary={chat.lastMessage} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
