import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button, Box } from '@mui/material';

const InputPopup = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Container Details
          <Button onClick={onClose}>X</Button>
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          placeholder="Ex : https://www.apple.com"
          label="URL"
          margin="normal"
        />
        <TextField
          fullWidth
          placeholder="Ex : 5000"
          label="Port Number"
          margin="normal"
        />
        <TextField
          fullWidth
          placeholder="Ex : India"
          label="Country"
          margin="normal"
          select
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSubmit} variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputPopup;