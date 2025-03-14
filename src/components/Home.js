import React, { useState } from 'react';
import { Box, Button, Typography, AppBar, Toolbar, IconButton, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import InputPopup from './InputPopup';
import { fadeIn } from './animations';

const Home = () => {
  const navigate = useNavigate();
  const [isInputPopupOpen, setInputPopupOpen] = useState(false);

  const metrics = {
    general: [
      { title: 'Secure Notification', value: '1' },
      { title: 'Running Processes', value: '2' },
      { title: 'System Calls', value: '1.2M' }
    ],
    file: [
      { title: 'File Bytes In+Out', value: '302.6M' },
      { title: 'File Bytes In', value: '225.6M' },
      { title: 'Accessed Files', value: '72.6M' },
      { title: 'Modified Files', value: '640' }
    ],
    network: [
      { title: 'Net Bytes In+Out', value: '72.6M' },
      { title: 'Active Network', value: '7.7K' },
      { title: 'Listening Ports', value: '5' }
    ],
    security: [
      { title: 'Executed Commands', value: '2.1K' },
      { title: 'Modified System File', value: '292' }
    ],
    performance: [
      { title: 'HTTP Requests', value: '9' },
      { title: 'File open Errors', value: '1.2K' },
      { title: 'Fork Count', value: '3.1K' }
    ],
    logs: [
      { title: 'App Log Messages', value: '2.1K' },
      { title: 'Messages', value: '0' }
    ],
    infrastructure: [
      { title: 'Docker Events', value: '11' },
      { title: 'Container Events', value: '4' }
    ]
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f7fa' }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #6B5ECD 0%, #A594F9 100%)' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            /Users/loris/captures/malware.scap
          </Typography>
          <IconButton
            size="small"
            sx={{ 
              bgcolor: 'black', 
              mr: 1,
              '&:hover': {
                bgcolor: '#333',
                transform: 'scale(1.1)'
              }
            }}
            onClick={() => navigate('/ai-report')}
          >
            <Box sx={{ width: 12, height: 12, bgcolor: 'white' }} />
          </IconButton>
          <Button 
            color="inherit" 
            onClick={() => setInputPopupOpen(true)}
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.2)'
              }
            }}
          >
            Open
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          mb: 4,
          animation: `${fadeIn} 0.6s ease-out`
        }}>
          {Object.keys(metrics).map((tab) => (
            <Button 
              key={tab} 
              variant="text"
              sx={{
                color: '#6B5ECD',
                '&:hover': {
                  bgcolor: 'rgba(107, 94, 205, 0.1)'
                }
              }}
            >
              {tab.toUpperCase()}
            </Button>
          ))}
        </Box>

        <Grid container spacing={3}>
          {Object.entries(metrics).map(([category, items]) => (
            <Grid item xs={12} key={category}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 3,
                  borderRadius: 2,
                  background: 'white',
                  animation: `${fadeIn} 0.6s ease-out`,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: '#6B5ECD' }}>
                  {category.toUpperCase()}
                </Typography>
                <Grid container spacing={2}>
                  {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Box sx={{ 
                        p: 2, 
                        borderRadius: 1,
                        border: '1px solid rgba(107, 94, 205, 0.1)',
                        '&:hover': {
                          bgcolor: 'rgba(107, 94, 205, 0.05)',
                          transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease'
                      }}>
                        <Typography variant="body2" color="textSecondary">
                          {item.title}
                        </Typography>
                        <Typography variant="h5" sx={{ mt: 1, color: '#6B5ECD' }}>
                          {item.value}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <InputPopup 
        open={isInputPopupOpen} 
        onClose={() => setInputPopupOpen(false)}
        onSubmit={() => {
          setInputPopupOpen(false);
          navigate('/container-details');
        }}
      />
    </Box>
  );
};

export default Home;