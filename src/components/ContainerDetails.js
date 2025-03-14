import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const ContainerDetails = () => {
  const metrics = {
    general: { secureNotifications: 1, runningProcesses: 2, systemCalls: '1.2M' },
    file: { bytesInOut: '302.6M', bytesIn: '225.6M', accessedFiles: '72.6M' },
    network: { bytesInOut: '72.6M', connections: '7.7K', listeningPorts: 5 },
    // Add more metrics as needed
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Container Details
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(metrics).map(([category, data]) => (
          <Grid item xs={12} md={6} key={category}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {category.toUpperCase()}
              </Typography>
              {Object.entries(data).map(([key, value]) => (
                <Box key={key} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography>{key}</Typography>
                  <Typography>{value}</Typography>
                </Box>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContainerDetails;