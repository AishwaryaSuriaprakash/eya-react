import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Home = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'asset') setTabValue(0);
    else if (tab === 'index') setTabValue(1);
    else if (tab === 'data') setTabValue(2);
  }, [searchParams]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    const tabParam = newValue === 0 ? 'asset' : newValue === 1 ? 'index' : 'data';
    navigate(`/?tab=${tabParam}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center'
      }}>
        <IconButton 
          onClick={handleBack}
          sx={{ 
            ml: 1,
            '&:hover': {
              backgroundColor: 'transparent'
            }
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              minHeight: '40px',
              padding: '6px 16px',
              color: '#666',
              '&.Mui-selected': {
                color: '#000'
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#1976d2'
            }
          }}
        >
          <Tab label="Asset Data" />
          <Tab label="Index Data" />
          <Tab label="FDR Data" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <h2>Asset Data Content</h2>
        <p>Asset management and maintenance information will be displayed here.</p>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <h2>Index Data Content</h2>
        <p>Index management and maintenance information will be displayed here.</p>
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <h2>FDR Data Content</h2>
        <p>Data viewer and FDR information will be displayed here.</p>
      </TabPanel>
    </Box>
  );
};

export default Home; 