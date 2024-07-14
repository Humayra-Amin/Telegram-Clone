import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import LeftNavbar from './components/LeftNavbar/LeftNavbar';
import RightNavbar from './components/RightNavbar/RightNavbar';
import { useMediaQuery, useTheme } from '@mui/material';

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs={12} lg={3}>
          {(!isSmallScreen || !selectedChat) && (
            <LeftNavbar onSelectChat={handleSelectChat} />
          )}
        </Grid>
        <Grid item xs={12} lg={9}>
          {(!isSmallScreen || selectedChat) && (
            <RightNavbar selectedChat={selectedChat} onBack={handleBack} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
