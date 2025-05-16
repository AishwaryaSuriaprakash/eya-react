import React, { useState } from 'react';
import { 
  Box, 
  Tab, 
  Tabs, 
  IconButton, 
  Typography,
  Button,
  Breadcrumbs,
  Link,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';

interface TabData {
  id: string;
  label: string;
  path: string;
}

interface TabManagerProps {
  children: React.ReactNode;
}

export const TabContext = React.createContext<{
  openTab: (label: string, path: string) => void;
}>({
  openTab: () => {},
});

const TabManager: React.FC<TabManagerProps> = ({ children }) => {
  const [tabs, setTabs] = useState<TabData[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const navigate = useNavigate();

  const openTab = (label: string, path: string) => {
    // Check if a tab with this path already exists
    const existingTab = tabs.find(tab => tab.path === path);
    if (existingTab) {
      // If it exists, just activate it
      setActiveTab(existingTab.id);
      navigate(path);
      return;
    }
    // If it doesn't exist, create a new tab
    const id = `${label}-${Date.now()}`;
    setTabs(prev => [...prev, { id, label, path }]);
    setActiveTab(id);
    navigate(path);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
    const tab = tabs.find(t => t.id === newValue);
    if (tab) {
      navigate(tab.path);
    }
  };

  const handleTabClose = (event: React.MouseEvent, tabId: string) => {
    event.stopPropagation();
    setTabs(prev => prev.filter(tab => tab.id !== tabId));
    if (activeTab === tabId) {
      const remainingTabs = tabs.filter(tab => tab.id !== tabId);
      if (remainingTabs.length > 0) {
        setActiveTab(remainingTabs[remainingTabs.length - 1].id);
        navigate(remainingTabs[remainingTabs.length - 1].path);
      } else {
        setActiveTab(null);
        navigate('/');
      }
    }
  };

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <TabContext.Provider value={{ openTab }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        backgroundColor: '#fff',
        marginLeft: 0,
        paddingTop: '100px'
      }}>
        {tabs.length > 0 && (
          <>
            <Box sx={{ 
              backgroundColor: '#fff',
              borderBottom: '1px solid #e0e0e0',
              padding: '0 16px'
            }}>
            

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {tabs.map(tab => (
                  <Box
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '8px 16px',
                      backgroundColor: activeTab === tab.id ? '#f5f5f5' : 'transparent',
                      borderBottom: activeTab === tab.id ? '2px solid #1976d2' : 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: '#f5f5f5'
                      }
                    }}
                  >
                    <Typography variant="body2" sx={{ mr: 1 }}>
                      {tab.label}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={(e) => handleTabClose(e, tab.id)}
                      sx={{ padding: '2px' }}
                    >
                      <CloseIcon sx={{ fontSize: '16px' }} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>

            <Paper 
              elevation={0} 
              sx={{ 
                m: 2, 
                backgroundColor: '#f5f5f5',
                borderRadius: '4px'
              }}
            >
            
            </Paper>
          </>
        )}
        
        <Box sx={{ 
          flexGrow: 1, 
          overflow: 'auto',
          padding: '16px'
        }}>
          {children}
        </Box>
      </Box>
    </TabContext.Provider>
  );
};

export default TabManager; 