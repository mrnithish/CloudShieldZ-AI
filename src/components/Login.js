import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { fadeIn } from './animations';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.email === "tharun.ks.cse.2021@snsce.ac.in" && 
        credentials.password === "2003") {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

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
        {/* Add your logo and hero content here */}
        <Typography variant="h4">The First Conversational AI</Typography>
        <Typography variant="h4">Cloud Security Analyst</Typography>
      </Box>
      
      <Box sx={{
        width: '50%',
        bgcolor: 'white',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        animation: `${fadeIn} 0.6s ease-out`,
        '& .MuiTextField-root': {
          animation: `${fadeIn} 0.6s ease-out`,
          animationFillMode: 'both',
        }
      }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Welcome back!</Typography>
        
        <Button variant="outlined" fullWidth sx={{ mb: 2 }}>
          Log in with Google
        </Button>
        
        <Typography sx={{ textAlign: 'center', my: 2 }}>or</Typography>
        
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={credentials.email}
            onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          />
          
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          />
          
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />
          
          <Button 
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            LOG IN
          </Button>
        </form>
        
        <Typography sx={{ mt: 2, textAlign: 'center' }}>
          No Account yet? 
          <Button onClick={() => navigate('/signup')}>SIGN UP</Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;