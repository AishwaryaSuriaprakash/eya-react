import React, { useState } from 'react';
import {
  Box,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import UpdateIcon from '@mui/icons-material/Update';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const IndexMaintenance: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState('');
  const [showTable, setShowTable] = useState(false);

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
            <select 
              id="client-select" 
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              style={{ 
                minWidth: 120, 
                padding: '8px', 
                borderRadius: 4, 
                border: '1px solid #ccc',
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)'
              }}
            >
              <option value="">Select Client</option>
              <option value="Client1">Client 1</option>
              <option value="Client2">Client 2</option>
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

            <button 
              title="Add Index"
              style={{ 
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
                border: '1px solid #ccc',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}><span role="img" aria-label="add">➕</span>Add Index</button>

            <button 
              title="Update Index"
              style={{ 
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
                border: '1px solid #ccc',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}><span role="img" aria-label="update">♻️</span>Update Index</button>

            <button 
              title="Copy Index"
              style={{ 
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
                border: '1px solid #ccc',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}><span role="img" aria-label="copy">📋</span>Copy Index</button>

            <button 
              title="Remove Index"
              style={{ 
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
                border: '1px solid #ccc',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}><span role="img" aria-label="remove">🗑️</span>Remove Index</button>

            <button 
              title="View RPI"
              style={{ 
                background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
                border: '1px solid #ccc',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}><span role="img" aria-label="view">👁️</span>View RPI</button>
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
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Bloomberg Ticker</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Index Name</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Assumed Inflation Rate</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Client</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}></td>
                  <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}></td>
                  <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}></td>
                  <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}></td>
                  <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}></td>
                  <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}></td>
                  <td style={{ padding: '8px 16px' }}></td>
                </tr>
              </tbody>
            </table>
          </Box>
        )}
      </Paper>
    </div>
  );
};

export default IndexMaintenance; 