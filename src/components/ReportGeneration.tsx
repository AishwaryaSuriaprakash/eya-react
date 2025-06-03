import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  TextField,
  IconButton,
  Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ReportGenerationProps {
  onClose?: () => void;
}

const ReportGeneration: React.FC<ReportGenerationProps> = ({ onClose }) => {
  const [reportName, setReportName] = useState('');
  const [reportLevel, setReportLevel] = useState('');
  const [valueDate, setValueDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fund, setFund] = useState('');
  const [asset, setAsset] = useState('');
  const [accounts, setAccounts] = useState('');
  const [accountSelect, setAccountSelect] = useState('');

  const handleReset = () => {
    setReportName('');
    setReportLevel('');
    setValueDate('');
    setFromDate('');
    setEndDate('');
    setFund('');
    setAsset('');
    setAccounts('');
    setAccountSelect('');
  };

  return (
    <Paper
      elevation={3}
      sx={{
        minWidth: 480,
        maxWidth: 520,
        mx: 'auto',
        mt: 4,
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
        overflow: 'hidden',
      }}
    >
      {/* Fixed Header with title and close icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#f5f7fa',
          borderBottom: '1px solid #e0e0e0',
          px: 2.5,
          py: 1.5,
          position: 'sticky',
          top: 0,
          zIndex: 1,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1a237e', letterSpacing: 0.2 }}>
          Report
        </Typography>
        <IconButton
          size="small"
          aria-label="close"
          onClick={onClose}
          sx={{ 
            color: '#888', 
            '&:hover': { 
              color: '#d32f2f', 
              bgcolor: 'transparent' 
            } 
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Scrollable Content */}
      <Box 
        sx={{ 
          flexGrow: 1, 
          overflowY: 'auto',
          px: 3,
          py: 2,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      >
        <Stack spacing={2}>
          {/* Report Name Dropdown */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ minWidth: 120 }}>Report Name:</Typography>
            <FormControl fullWidth>
              <Select
                value={reportName}
                onChange={(e) => setReportName(e.target.value)}
                displayEmpty
                placeholder="Select a report..."
              >
                <MenuItem value="extract">Extract Amortisation Summary</MenuItem>
                <MenuItem value="gmas">GMAS Macro Input</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Report Level Dropdown */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ minWidth: 120 }}>Report Level:</Typography>
            <FormControl fullWidth>
              <Select
                value={reportLevel}
                onChange={(e) => setReportLevel(e.target.value)}
                displayEmpty
                placeholder="Select a level..."
              >
                
                <MenuItem value="fund">Fund Level</MenuItem>
                <MenuItem value="asset">Asset Level</MenuItem>
                <MenuItem value="account">Account Level</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Date Fields */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ minWidth: 120 }}>Value Date:</Typography>
            <TextField
              type="date"
              value={valueDate}
              onChange={(e) => setValueDate(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: <CalendarTodayIcon sx={{ color: '#757575', cursor: 'pointer' }} />
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ minWidth: 120 }}>From Date:</Typography>
            <TextField
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: <CalendarTodayIcon sx={{ color: '#757575', cursor: 'pointer' }} />
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ minWidth: 120 }}>End Date:</Typography>
            <TextField
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              fullWidth
              InputProps={{
                endAdornment: <CalendarTodayIcon sx={{ color: '#757575', cursor: 'pointer' }} />
              }}
            />
          </Box>

          {/* Fund and Asset Dropdowns */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ minWidth: 120 }}>Fund:</Typography>
            <FormControl fullWidth>
              <Select
                value={fund}
                onChange={(e) => setFund(e.target.value)}
                displayEmpty
                placeholder="Select a Fund..."
              >
                <MenuItem value="">Select a Fund...</MenuItem>
                <MenuItem value="fund1">Fund 1</MenuItem>
                <MenuItem value="fund2">Fund 2</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ minWidth: 120 }}>Asset:</Typography>
            <FormControl fullWidth>
              <Select
                value={asset}
                onChange={(e) => setAsset(e.target.value)}
                displayEmpty
                placeholder="Select an Asset..."
              >
                <MenuItem value="">Select an Asset...</MenuItem>
                <MenuItem value="asset1">Asset 1</MenuItem>
                <MenuItem value="asset2">Asset 2</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* GMM Account Section with new styling */}
          <Box sx={{ mt: 1 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                bgcolor: '#e8eaf6',
                p: 1,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                border: '1px solid #c5cae9',
                borderBottom: 'none'
              }}
            >
              <KeyboardArrowUpIcon sx={{ color: '#3f51b5' }} />
              <Typography sx={{ fontWeight: 500, color: '#3f51b5' }}>
                GMM Account
              </Typography>
            </Box>
            
            <Box 
              sx={{ 
                p: 2,
                border: '1px solid #c5cae9',
                borderTop: 'none',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                bgcolor: '#fff'
              }}
            >
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ minWidth: 100 }}>Accounts:</Typography>
                  <TextField
                    value={accounts}
                    onChange={(e) => setAccounts(e.target.value)}
                    fullWidth
                    size="small"
                  />
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography sx={{ minWidth: 100 }}>Account Select:</Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      value={accountSelect}
                      onChange={(e) => setAccountSelect(e.target.value)}
                      displayEmpty
                    >
                      <MenuItem value="">Select...</MenuItem>
                      <MenuItem value="acc1">Account 1</MenuItem>
                      <MenuItem value="acc2">Account 2</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Stack>
            </Box>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3, mb: 2 }}>
            <Button
              variant="contained"
              onClick={() => {}}
              sx={{ minWidth: 100 }}
            >
              OK
            </Button>
            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{ minWidth: 100 }}
            >
              Reset
            </Button>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
};

export default ReportGeneration; 