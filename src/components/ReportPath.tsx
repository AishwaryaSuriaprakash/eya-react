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
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ReportPathProps {
  onClose?: () => void;
}

const ReportPath: React.FC<ReportPathProps> = ({ onClose }) => {
  const [client, setClient] = useState('');
  const [reportPath, setReportPath] = useState('');

  const handleReset = () => {
    setClient('');
    setReportPath('');
  };

  const handleSave = () => {
    // Save logic here
    // For now, just log
    console.log('Saved:', { client, reportPath });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        minWidth: 420,
        maxWidth: 480,
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
          Report Path Setting
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
          <Typography sx={{ minWidth: 140 }}>Client:</Typography>
          <FormControl fullWidth>
            <Select
              value={client}
              onChange={e => setClient(e.target.value)}
              displayEmpty
              inputProps={{ 'aria-label': 'Select a Client' }}
            >
              <MenuItem value="">Select a Client...</MenuItem>
              <MenuItem value="Client1">Client 1</MenuItem>
              <MenuItem value="Client2">Client 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ minWidth: 140 }}>Schedule Report Path:</Typography>
          <TextField
            value={reportPath}
            onChange={e => setReportPath(e.target.value)}
            placeholder=""
            fullWidth
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{ minWidth: 100 }}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            onClick={handleReset}
            sx={{ minWidth: 100 }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ReportPath; 