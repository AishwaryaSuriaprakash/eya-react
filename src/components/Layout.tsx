import React, { useState, useContext } from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  useTheme,
  Collapse
} from '@mui/material';
import {
  Logout,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore,
  Folder
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { TabContext } from './TabManager';

const drawerWidth = 240;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const { openTab } = useContext(TabContext);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleNavClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuItems = [
    { text: 'Asset Maintenance', path: '/asset-maintenance' },
    { text: 'Index Maintenance', path: '/index-maintenance' },
    { text: 'Data Viewer', path: '/data-viewer' },
    { text: 'Load FDR Data', path: '/load-fdr-data' },
    { text: 'Report Path', path: '/report-path' },
    { text: 'Report Generation', path: '/report-generation' },
  ];

  const handleMenuItemClick = (item: { text: string; path: string }) => {
    openTab(item.text, item.path);
    handleDrawerToggle();
  };

  const drawer = (
    <Box sx={{ overflow: 'auto', backgroundColor: '#f8f8f8', height: '100%' }}>
      <List>
        <ListItemButton onClick={handleNavClick}>
          <ListItemIcon>
            <Folder />
          </ListItemIcon>
          <ListItemText 
            primary="Navigation" 
            sx={{ 
              '& .MuiTypography-root': { 
                fontWeight: 'bold',
                color: '#000'
              } 
            }}
          />
          {isNavOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={isNavOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.text}
                onClick={() => handleMenuItemClick(item)}
                sx={{ pl: 4 }}
              >
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontSize: '0.9rem',
                      color: '#333'
                    } 
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton onClick={() => {}} sx={{ mt: 2 }}>
          <ListItemIcon><Logout /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <IconButton 
        onClick={handleDrawerToggle}
        sx={{
          position: 'fixed',
          left: isDrawerOpen ? drawerWidth : 0,
          top: 10,
          zIndex: 1200,
          transition: theme.transitions.create('left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="permanent"
        open={isDrawerOpen}
        sx={{
          width: isDrawerOpen ? drawerWidth : 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f8f8f8',
            border: 'none',
            borderRight: '1px solid #ddd',
            transform: isDrawerOpen ? 'none' : 'translateX(-100%)',
            transition: theme.transitions.create('transform', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }
        }}
      >
        {drawer}
      </Drawer>

      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          height: '100%',
          overflow: 'hidden',
          width: '100%',
          ml: isDrawerOpen ? `${drawerWidth}px` : 0,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 