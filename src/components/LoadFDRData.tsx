import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  IconButton
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';

interface LoadFDRDataProps {
  onClose?: () => void;
}

const LoadFDRData: React.FC<LoadFDRDataProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedFund, setSelectedFund] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleFundChange = (event: any) => {
    setSelectedFund(event.target.value);
  };

  const handleOkClick = () => {
    // Handle OK button logic here
    console.log('Selected Date:', selectedDate);
    console.log('Selected Fund:', selectedFund);
    // Close the prompt box or perform further actions
  };

  return (
    <Paper
      elevation={3}
      sx={{
        minWidth: 380,
        maxWidth: 420,
        mx: 'auto',
        mt: 8,
        p: 0,
        borderRadius: 2,
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)',
        overflow: 'hidden',
      }}
    >
      {/* Header with title and close icon */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#f5f7fa',
          borderBottom: '1px solid #e0e0e0',
          px: 2.5,
          py: 1.5,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#1a237e', letterSpacing: 0.2 }}>
          FDR Loading
        </Typography>
        <IconButton
          size="small"
          aria-label="close"
          onClick={onClose}
          sx={{ color: '#888', '&:hover': { color: '#d32f2f', bgcolor: 'transparent' } }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      {/* Prompt content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ minWidth: 60 }}>Date:</Typography>
          <TextField
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: <CalendarTodayIcon sx={{ cursor: 'pointer' }} />, // purely visual
            }}
            fullWidth
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ minWidth: 60 }}>Fund:</Typography>
          <FormControl fullWidth>
            <Select
              value={selectedFund}
              onChange={handleFundChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Select a Fund' }}
            >
              <MenuItem value="">Select a Fund...</MenuItem>
              <MenuItem value="B9MU">B9MU</MenuItem>
              <MenuItem value="ACJG">ACJG</MenuItem>
              <MenuItem value="VGRJ">VGRJ</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" onClick={handleOkClick} sx={{ minWidth: 100 }}>
            OK
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoadFDRData; 