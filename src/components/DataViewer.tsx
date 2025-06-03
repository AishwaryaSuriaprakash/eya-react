import React, { useState } from 'react';
import {
  Box,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const DataViewer: React.FC = () => {
  const [showTable, setShowTable] = useState(false);
  const [tableData, setTableData] = useState([
    {
      id: 1,
      selected: false,
      client: '',
      fundId: '',
      cusip: '',
      assetName: '',
      gmmAccountNumber: '',
      issueDate: '',
      assetType: '',
      specialBusinessRequirements: '',
      dayCount: '',
      daysInPeriod: '',
      par: '',
      firstIncomeDate: '',
      rpiLag: '',
      index: '',
      currencyTracker: '',
      localOriginalCost: '',
      localCurrency: '',
      settlementDate: '',
      maturityDate: '',
      periodEndDate: '',
      assumedInflationRate: '',
      flatCouponRate: '',
      localAmortisedCost: '',
      baseRPI: '',
      isin: '',
      sinkingBondFlag: '',
      bondFloor: '',
      distressedDate: '',
      paymentFrequency: '',
      amortisationDate: ''
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
          {/* Fund Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label htmlFor="fund-select" style={{ fontWeight: 500 }}>FUND</label>
            <select id="fund-select" style={{ 
              minWidth: 120, 
              padding: '8px', 
              borderRadius: 4, 
              border: '1px solid #ccc',
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)'
            }}>
              <option value="">Select Fund</option>
              <option value="Fund1">Fund 1</option>
              <option value="Fund2">Fund 2</option>
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

          {/* Data Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label htmlFor="data-select" style={{ fontWeight: 500 }}>Data</label>
            <select id="data-select" style={{ 
              minWidth: 120, 
              padding: '8px', 
              borderRadius: 4, 
              border: '1px solid #ccc',
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)'
            }}>
              <option value="">Select Data</option>
              <option value="Data1">Data 1</option>
              <option value="Data2">Data 2</option>
            </select>
          </div>

          {/* Asset Type Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label htmlFor="asset-type-select" style={{ fontWeight: 500 }}>Asset Type</label>
            <select id="asset-type-select" style={{ 
              minWidth: 120, 
              padding: '8px', 
              borderRadius: 4, 
              border: '1px solid #ccc',
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)'
            }}>
              <option value="">Select Asset Type</option>
              <option value="Type1">Type 1</option>
              <option value="Type2">Type 2</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
              border: '1px solid #ccc',
              cursor: 'pointer',
              padding: '8px 16px',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <SearchIcon fontSize="small" />
            Search
          </button>
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
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Client</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Fund ID</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Cusip</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Asset Name</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>GMM Account Number</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Issue Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Asset Type</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Special Business Requirements</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Day Count</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Days in Period</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Par</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>First Income Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>RPI Lag</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Index</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Currency Tracker</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Local Original Cost</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Local Currency</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Settlement Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Maturity Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Period End Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Assumed Inflation Rate</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Flat Coupon Rate</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Local Amortised Cost</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Base RPI</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>ISIN</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Sinking Bond Flag</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Bond Floor</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Distressed Date</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left', borderRight: '1px solid #e0e0e0' }}>Payment Frequency</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Amortisation Date</th>
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
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.client}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.fundId}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.cusip}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.assetName}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.gmmAccountNumber}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.issueDate}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.assetType}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.specialBusinessRequirements}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.dayCount}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.daysInPeriod}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.par}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.firstIncomeDate}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.rpiLag}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.index}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.currencyTracker}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.localOriginalCost}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.localCurrency}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.settlementDate}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.maturityDate}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.periodEndDate}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.assumedInflationRate}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.flatCouponRate}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.localAmortisedCost}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.baseRPI}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.isin}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.sinkingBondFlag}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.bondFloor}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.distressedDate}</td>
                    <td style={{ padding: '8px 16px', borderRight: '1px solid #e0e0e0' }}>{row.paymentFrequency}</td>
                    <td style={{ padding: '8px 16px' }}>{row.amortisationDate}</td>
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

export default DataViewer; 