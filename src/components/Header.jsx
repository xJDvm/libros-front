// Header.jsx
import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function Header({ onRegisterClick }) {
  return (
    <header>
      <Box textAlign="center">
        <h1>Tabla de libros - Edlizabeth Ponce, Juan Valdés </h1>
        <Button variant="contained" color="primary" onClick={onRegisterClick}>
          Registrar
        </Button>
      </Box>
    </header>
  );
}

export default Header;
