import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex',
      height: '100vh',
      background: 'linear-gradient(135deg, #6B5ECD 0%, #A594F9 100%)'
    }}>
      <Box sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
      }}>
        <Typography variant="h4">The First Conversational AI</Typography>
        <Typography variant="h4">Cloud Security Analyst</Typography>
      </Box>
      
      <Box sx={{
        width: '50%',
        bgcolor: 'white',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Create Account</Typography>
        
        <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
          Sign up with Google
        </Button>
        
        <Typography sx={{ textAlign: 'center', my: 2 }}>or</Typography>
        
        <form>
          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
          />
          
          <Button 
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            SIGN UP
          </Button>
        </form>
        
        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          Already have an account? 
          <Button onClick={() => navigate('/')}>LOGIN</Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;