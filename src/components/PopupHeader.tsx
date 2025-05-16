import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

interface PopupHeaderProps {
  onClose: () => void;
}

const PopupHeader: React.FC<PopupHeaderProps> = ({ onClose }) => {
  const navigate = useNavigate();
  
  const handleHomeClick = () => {
    onClose();
    navigate('/');
  };

  return (
    <AppBar position="static" elevation={1} sx={{ bgcolor: '#fff', color: '#222', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)' }}>
      <Toolbar sx={{ minHeight: 56, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo192.png" alt="Logo" style={{ height: 32, marginRight: 12 }} />
          <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: 1 }}>
            EYA Application
          </Typography>
          <IconButton size="large" edge="start" color="inherit" onClick={handleHomeClick} sx={{ ml: 1 }}>
            <HomeIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton size="large" edge="end" color="inherit">
            <Avatar sx={{ bgcolor: '#e0e0e0', color: '#555' }}>
              <PersonIcon />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PopupHeader; 