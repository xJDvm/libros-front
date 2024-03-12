import React from 'react';
import { Modal, Typography, Box } from '@mui/material';

const BookModal = ({ open, onClose, selectedBook }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Detalles del libro
        </Typography>
        {selectedBook && (
          <div>
            <div>
            <Typography variant="subtitle1" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                ID:
              </Typography>
              <Typography align="center" gutterBottom>{selectedBook.id}</Typography>
              <Typography variant="subtitle1" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Nombre:
              </Typography>
              <Typography align="center" gutterBottom>{selectedBook.nombre}</Typography>
              <Typography variant="subtitle1" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Autores:
              </Typography>
              {selectedBook.autores.map((autor, index) => (
                <div key={index}>
                  <Typography align="center" gutterBottom style={{ fontWeight: 'bold' }}>{autor.nombre}</Typography>
                  <Typography align="center" gutterBottom>{`Fecha de nacimiento: ${autor.fechaNacimiento} - Fecha de fallecimiento: ${autor.fechaFallecimiento || 'Vivo'}`}</Typography>
                </div>
              ))}
              <Typography variant="subtitle1" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Género:
              </Typography>
              <Typography align="center" gutterBottom>{selectedBook.genero}</Typography>
              <Typography variant="subtitle1" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Fecha de publicación:
              </Typography>
              <Typography align="center" gutterBottom>{selectedBook.fechaPublicacion}</Typography>
              <Typography variant="subtitle1" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Editorial:
              </Typography>
              <Typography align="center" gutterBottom>{selectedBook.editorial}</Typography>
              <Typography variant="subtitle1" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
                Foto:
              </Typography>
              <img src={`src/assets/photos/${selectedBook.id}.png`} alt={selectedBook.nombre} style={{ display: 'block', margin: '0 auto', width: '20%', height: '20%' }} />
              {/* Mostrar la imagen con dimensiones 300x300 */}
              {/* Puedes agregar más detalles del libro aquí */}
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default BookModal;
