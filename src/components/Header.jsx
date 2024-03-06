import React from 'react';

function Header({ onRegisterClick }) {
  return (
    <header>
      <h1>Tabla de registros</h1>
      <div className="header-buttons">
        <button onClick={onRegisterClick}>Registrar</button>
        <button>Buscar</button>
        <input type="text" placeholder="Buscar por nombre o autor" />
      </div>
    </header>
  );
}

export default Header;
