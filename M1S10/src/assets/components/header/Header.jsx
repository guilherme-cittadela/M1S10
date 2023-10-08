import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <img
        src="caminho-para-sua-logo.png"
        alt="Logo da Empresa"
        style={logoStyle}
      />
    </header>
  );
}

const headerStyle = {
  background: '#333', 
  color: '#fff', 
  textAlign: 'center',
  padding: '10px',
  position: 'fixed', 
  top: '0', 
  width: '100%', 
};

const logoStyle = {
  maxWidth: '150px', 
};

export {Header};
