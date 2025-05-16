import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box, Paper, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material';
import Layout from './components/Layout';
import TabManager from './components/TabManager';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
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

const IndexMaintenance = () => (
  <div>
    <h2>Index Maintenance</h2>
    <p>Index management and configuration options will be shown here.</p>
  </div>
);

const DataViewer = () => (
  <div>
    <h2>Data Viewer</h2>
    <p>Data viewing and analysis tools will be available in this section.</p>
  </div>
);

const LoadFDRData = () => (
  <div>
    <h2>Load FDR Data</h2>
    <p>FDR data loading and processing options will be displayed here.</p>
  </div>
);

const ReportPath = () => (
  <div>
    <h2>Report Path</h2>
    <p>Report path configuration and management will be shown here.</p>
  </div>
);

const ReportGeneration = () => (
  <div>
    <h2>Report Generation</h2>
    <p>Report generation tools and options will be available in this section.</p>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TabManager>
          <Layout>
            <Routes>
              <Route path="/asset-maintenance" element={<AssetMaintenance />} />
              <Route path="/index-maintenance" element={<IndexMaintenance />} />
              <Route path="/data-viewer" element={<DataViewer />} />
              <Route path="/load-fdr-data" element={<LoadFDRData />} />
              <Route path="/report-path" element={<ReportPath />} />
              <Route path="/report-generation" element={<ReportGeneration />} />
              <Route path="/" element={<div>Welcome to EYA Application</div>} />
            </Routes>
          </Layout>
        </TabManager>
      </Router>
    </ThemeProvider>
  );
}

export default App;
