import React, { useState } from 'react';
import { MemoryRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme, Box, Paper, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Card, CardActionArea, CardContent, Grid, Tabs, Tab, IconButton, Dialog, DialogContent, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PaymentIcon from '@mui/icons-material/Payment';
import BuildIcon from '@mui/icons-material/Build';
import Header from './components/Header';
import IndexMaintenance from './components/IndexMaintenance';
import DataViewer from './components/DataViewer';
import LoadFDRData from './components/LoadFDRData';
import PopupHeader from './components/PopupHeader';
import ReportPath from './components/ReportPath';
import ReportGeneration from './components/ReportGeneration';
import './App.css';

// Create theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

// Components for each route
const AssetMaintenance = () => {
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: 1,
      selected: false,
      cusip: '089830116',
      assetName: 'TSY 2.5 2024 I/L Stock',
      client: 'SW_OEIC',
      assetType: 'Index Linked Bonds',
      specialBusinessRequirement: '',
      dayCount: ''
    }
  ]);
  const navigate = useNavigate();

  const handleCheckboxChange = (id: number) => {
    setTableData(prevData =>
      prevData.map(row =>
        row.id === id ? { ...row, selected: !row.selected } : row
      )
    );
  };

  const handleSearch = () => {
    setShowTable(true);
  };

  return (
    <div style={{ padding: 0 }}>
      <Paper 
        elevation={1} 
        sx={{ 
          width: '100%',
          padding: 0,
          backgroundColor: '#fff',
          borderRadius: 0,
          border: '1px solid #e0e0e0'
        }}
      >
        <Typography
          variant="h6"
          sx={{
            bgcolor: '#f5f5f5',
            p: 1.5,
            pl: 3,
            borderBottom: '1px solid #e0e0e0',
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          ASSET DATA
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          padding: '12px 24px',
          background: 'linear-gradient(180deg, #e6e6e6 0%, #d9d9d9 100%)',
          borderBottom: '1px solid #ccc'
        }}>
          {/* Client Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label htmlFor="client-select" style={{ fontWeight: 500 }}>Client</label>
            <select id="client-select" style={{ 
              minWidth: 120, 
              padding: '8px', 
              borderRadius: 4, 
              border: '1px solid #ccc',
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)'
            }}>
              <option value="">Select Client</option>
              <option value="Client1">Client 1</option>
              <option value="Client2">Client 2</option>
            </select>
          </div>
          {/* Asset Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label htmlFor="asset-select" style={{ fontWeight: 500 }}>Asset</label>
            <select id="asset-select" style={{ 
              minWidth: 120, 
              padding: '8px', 
              borderRadius: 4, 
              border: '1px solid #ccc',
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)'
            }}>
              <option value="">Select Asset</option>
              <option value="Asset1">Asset 1</option>
              <option value="Asset2">Asset 2</option>
            </select>
          </div>
          {/* Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginLeft: '24px' }}>
            <button 
              title="Search" 
              onClick={handleSearch}
              style={{ 
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
                border: '1px solid #ccc',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}><span role="img" aria-label="search">🔍</span>Search</button>
            <button title="Add Asset" style={{ 
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
              border: '1px solid #ccc',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}><span role="img" aria-label="add">➕</span>Add Asset</button>
            <button title="Update Asset" style={{ 
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
              border: '1px solid #ccc',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}><span role="img" aria-label="update">♻️</span>Update Asset</button>
            <button title="Copy Asset" style={{ 
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
              border: '1px solid #ccc',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}><span role="img" aria-label="copy">📋</span>Copy Asset</button>
            <button title="Remove Asset" style={{ 
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
              border: '1px solid #ccc',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}><span role="img" aria-label="remove">🗑️</span>Remove Asset</button>
            <button title="View Factor" style={{ 
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
              border: '1px solid #ccc',
              cursor: 'pointer',
              padding: '4px 8px',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}><span role="img" aria-label="view">👁️</span>View Factor</button>
          </div>
        </Box>

        {/* Results Table */}
        {showTable && (
          <Box sx={{ overflowX: 'auto', marginTop: 0 }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              backgroundColor: '#fff'
            }}>
              <thead>
                <tr style={{ 
                  borderBottom: '2px solid #e0e0e0',
                  backgroundColor: '#f5f5f5'
                }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left', width: '40px', borderRight: '1px solid #e0e0e0' }}></th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', width: '40px', borderRight: '1px solid #e0e0e0' }}></th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Cusip</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Asset Name</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Client</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Asset Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Special Business Requirement</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Day Count</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ 
                      padding: '8px 16px', 
                      textAlign: 'left', 
                      borderRight: '1px solid #e0e0e0' 
                    }}>
                      {row.id}
                    </td>
                    <td style={{ 
                      padding: '8px 16px', 
                      textAlign: 'center', 
                      borderRight: '1px solid #e0e0e0' 
                    }}>
                      <input
                        type="checkbox"
                        checked={row.selected}
                        onChange={() => handleCheckboxChange(row.id)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.cusip}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.assetName}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.client}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.assetType}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.specialBusinessRequirement}</td>
                    <td style={{ padding: '8px 16px' }}>{row.dayCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        )}
      </Paper>
    </div>
  );
};

// SingleTabPage component
const SingleTabPage = ({ title, children, onClose }: { title: string; children: React.ReactNode; onClose?: () => void }) => {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();
  const [isCollapsing, setIsCollapsing] = useState(false);

  const handleCollapse = () => {
    setIsCollapsing(true);
    if (onClose) {
      onClose();
    }
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  return (
    <Box 
      sx={{ 
        width: '100%',
        transform: isCollapsing ? 'scale(0.7)' : 'scale(1)',
        opacity: isCollapsing ? 0 : 1,
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
      }}
    >
      {/* Only render the tab header if not FDR Loading */}
      {title !== 'FDR Loading' && (
        <Paper square>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Tabs value={tabValue} onChange={() => {}} aria-label="single tab">
              <Tab label={title} />
            </Tabs>
            {(title === 'Asset Maintenance' || title === 'Index Maintenance' || title === 'View FDR Data') && (
              <IconButton
                size="small"
                sx={{ 
                  position: 'relative',
                  mr: 1,
                  color: '#1976d2',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.04)'
                  }
                }}
                onClick={handleCollapse}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M5 12L5 19L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </IconButton>
            )}
          </Box>
        </Paper>
      )}
      {/* For FDR Loading, show only the collapse icon in the top right */}
      {title === 'FDR Loading' && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: 48 }}>
          <IconButton
            size="small"
            sx={{ 
              mr: 2,
              color: '#1976d2',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
            onClick={handleCollapse}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 12L5 19L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </IconButton>
        </Box>
      )}
      <Box sx={{ p: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

type CardTitle = 'Asset Maintenance' | 'Index Maintenance' | 'Data Viewer' | 'Load FDR Data' | 'Report Path' | 'Report Generation';

interface CardDetail {
  title: CardTitle;
  route: string;
  icon: React.ReactNode;
}

const HomeCards = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState<CardTitle | ''>('');
  const [showFDRPrompt, setShowFDRPrompt] = useState(false);
  const [showReportPathPrompt, setShowReportPathPrompt] = useState(false);
  const [showReportGenerationPrompt, setShowReportGenerationPrompt] = useState(false);

  const handleExpand = (title: CardTitle) => {
    if (title === 'Load FDR Data') {
      setShowFDRPrompt(true);
      setPopupTitle(title);
    } else if (title === 'Report Path') {
      setShowReportPathPrompt(true);
      setPopupTitle(title);
    } else if (title === 'Report Generation') {
      setShowReportGenerationPrompt(true);
      setPopupTitle(title);
    } else {
      setPopupTitle(title);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setShowFDRPrompt(false);
    setShowReportPathPrompt(false);
    setShowReportGenerationPrompt(false);
  };

  const cardDetails: CardDetail[] = [
    { title: 'Asset Maintenance', route: '/asset-maintenance', icon: <AccountBalanceWalletIcon fontSize="large" /> },
    { title: 'Index Maintenance', route: '/index-maintenance', icon: <ReceiptIcon fontSize="large" /> },
    { title: 'Data Viewer', route: '/data-viewer', icon: <LocalOfferIcon fontSize="large" /> },
    { title: 'Load FDR Data', route: '/load-fdr-data', icon: <AccountBalanceIcon fontSize="large" /> },
    { title: 'Report Path', route: '/report-path', icon: <CreditCardIcon fontSize="large" /> },
    { title: 'Report Generation', route: '/report-generation', icon: <MonetizationOnIcon fontSize="large" /> },
  ];

  const cardContentMap = {
    'Asset Maintenance': <SingleTabPage title="Asset Maintenance" onClose={handleClose}><AssetMaintenance /></SingleTabPage>,
    'Index Maintenance': <SingleTabPage title="Index Maintenance" onClose={handleClose}><IndexMaintenance /></SingleTabPage>,
    'Data Viewer': <SingleTabPage title="View FDR Data" onClose={handleClose}><DataViewer /></SingleTabPage>,
    'Load FDR Data': <SingleTabPage title="FDR Loading" onClose={handleClose}><LoadFDRData onClose={handleClose} /></SingleTabPage>,
    'Report Path': <ReportPath onClose={handleClose} />,
    'Report Generation': <ReportGeneration />
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f6fa' }}>
      <Grid container spacing={3} justifyContent="center" alignItems="center" sx={{ maxWidth: 600 }}>
        {cardDetails.map((card) => (
          <Grid item xs={4} key={card.title}>
            <Card
              sx={{
                minWidth: 120,
                minHeight: 120,
                maxWidth: 140,
                maxHeight: 140,
                margin: 'auto',
                borderRadius: 3,
                boxShadow: 1,
                position: 'relative',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.06)',
                },
              }}
            >
              <IconButton
                size="small"
                sx={{ position: 'absolute', top: 6, right: 6, zIndex: 2 }}
                onClick={e => {
                  e.stopPropagation();
                  handleExpand(card.title as CardTitle);
                }}
              >
                <OpenInNewIcon fontSize="small" />
              </IconButton>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pt: 3 }}>
                {card.icon}
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 500, textAlign: 'center', fontSize: 15 }}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Dialog for all except Load FDR Data, Report Path, and Report Generation */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            width: '90%',
            height: '90%',
            maxWidth: '1200px',
            maxHeight: '800px',
            margin: 'auto',
            borderRadius: '8px',
            position: 'relative',
          }
        }}
        TransitionProps={{
          enter: false,
          exit: false
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <PopupHeader onClose={handleClose} />
          <DialogContent sx={{ p: 0, flex: 1, overflow: 'auto' }}>
            {popupTitle && 
             popupTitle !== 'Load FDR Data' && 
             popupTitle !== 'Report Path' && 
             popupTitle !== 'Report Generation' && 
             cardContentMap[popupTitle] || (
              <Box sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6">{popupTitle}</Typography>
                <Typography variant="body2" color="text.secondary">No content available.</Typography>
              </Box>
            )}
          </DialogContent>
        </Box>
      </Dialog>
      {/* Direct prompt for Load FDR Data */}
      {showFDRPrompt && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', bgcolor: 'rgba(0,0,0,0.10)', zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LoadFDRData onClose={handleClose} />
        </Box>
      )}
      {/* Direct prompt for Report Path */}
      {showReportPathPrompt && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', bgcolor: 'rgba(0,0,0,0.10)', zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ReportPath onClose={handleClose} />
        </Box>
      )}
      {/* Direct prompt for Report Generation */}
      {showReportGenerationPrompt && (
        <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', bgcolor: 'rgba(0,0,0,0.10)', zIndex: 1300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ReportGeneration onClose={handleClose} />
        </Box>
      )}
    </Box>
  );
};

function App() {
  const location = useLocation();
  const isLoadFDRRoute = location.pathname === '/load-fdr-data';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: '#f5f6fa' }}>
        {/* Only show header if not on Load FDR Data route */}
        {!isLoadFDRRoute && <Header />}
        <Box sx={{ pt: isLoadFDRRoute ? 0 : 2 }}>
          <Routes>
            <Route path="/asset-maintenance" element={<SingleTabPage title="Asset Maintenance"><AssetMaintenance /></SingleTabPage>} />
            <Route path="/index-maintenance" element={<SingleTabPage title="Index Maintenance"><IndexMaintenance /></SingleTabPage>} />
            <Route path="/data-viewer" element={<SingleTabPage title="View FDR Data"><DataViewer /></SingleTabPage>} />
            <Route path="/load-fdr-data" element={<SingleTabPage title="FDR Loading"><LoadFDRData /></SingleTabPage>} />
            <Route path="/report-path" element={<ReportPath />} />
            <Route path="/report-generation" element={<ReportGeneration />} />
            <Route path="/" element={<HomeCards />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
