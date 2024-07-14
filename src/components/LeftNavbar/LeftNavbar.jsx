import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, IconButton, InputBase, List, ListItem, ListItemAvatar, Avatar, ListItemText, Box, Paper, Typography, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import ContactsIcon from '@mui/icons-material/Contacts';
import PhoneIcon from '@mui/icons-material/Phone';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import ShareIcon from '@mui/icons-material/Share';

const LeftNavbar = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);
  const [showMenu, setShowMenu] = useState(false); // State to control menu visibility

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        const { data } = response.data;
        if (data && data.data) {
          setChats(data.data);
        } else {
          console.error('Invalid response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching chats:', error);
      }
    };
    fetchChats();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Toggle menu visibility
  };

  return (
    <Box sx={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto', borderRight: '1px solid #ccc' }}>
      <AppBar position="static" sx={{ background: '#ffffff', color: '#000000', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
            <MenuIcon />
          </IconButton>
          <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 400, ml: 2, boxShadow: 'none', background: '#f0f0f0', padding: '0 8px' }}
          >
            <SearchIcon />
            <InputBase
              placeholder="Search…"
              sx={{ ml: 1, flex: 1 }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Paper>
        </Toolbar>
      </AppBar>
      {showMenu && (
        <Box p={2} borderBottom="1px solid #ccc">
          <Avatar alt="User Avatar" src={`https://api.adorable.io/avatars/32/user@example.com`} />
          <Typography variant="subtitle1">User's Name</Typography>
          <Typography variant="body2">+1234567890</Typography>
        </Box>
      )}
      {showMenu && (
        <List>
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <AccountCircleIcon />
            </IconButton>
            <ListItemText primary="My Profile" />
          </ListItem>
          <Divider />
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <GroupIcon />
            </IconButton>
            <ListItemText primary="New Group" />
          </ListItem>
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <ContactsIcon />
            </IconButton>
            <ListItemText primary="Contacts" />
          </ListItem>
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <PhoneIcon />
            </IconButton>
            <ListItemText primary="Calls" />
          </ListItem>
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <PeopleAltIcon />
            </IconButton>
            <ListItemText primary="People Nearby" />
          </ListItem>
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <BookmarkIcon />
            </IconButton>
            <ListItemText primary="Saved Messages" />
          </ListItem>
          <Divider />
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <SettingsIcon />
            </IconButton>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <ShareIcon />
            </IconButton>
            <ListItemText primary="Invite Friends" />
          </ListItem>
          <ListItem button>
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <ListItemText primary="Telegram Features" />
          </ListItem>
        </List>
      )}
      {!showMenu && (
        <List>
          {chats.map(chat => (
            <ListItem button key={chat.id} onClick={() => onSelectChat(chat)}>
              <ListItemAvatar>
                <Avatar alt={chat.creator.name} src={`https://api.adorable.io/avatars/32/${chat.creator.email}`} />
              </ListItemAvatar>
              <ListItemText primary={chat.creator.name || 'Unknown'} secondary={`Last message: ${chat.msg_count > 0 ? chat.msg_count : 'No messages'}`} />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default LeftNavbar;
