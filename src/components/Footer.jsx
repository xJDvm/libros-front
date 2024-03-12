import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Button variant="contained" color="primary" sx={{ marginRight: '8px' }}>
        Ver completo
      </Button>
      <Button variant="contained" color="secondary">
        Eliminar
      </Button>
    </Box>
  );
};

export default Footer;
