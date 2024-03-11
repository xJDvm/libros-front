// Header.jsx
import React from 'react';

function Header({ onRegisterClick }) {
  return (
    <header>
      <h1>Tabla de registros</h1>
      <div className="header-buttons">
        <button onClick={onRegisterClick}>Registrar</button>
      </div>
    </header>
  );
}

export default Header;
