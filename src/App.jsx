import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Example from './components/Table';
import makeData from './components/makeData';
import RegisterModal from './components/RegisterModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [libros, setLibros] = useState(makeData());

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [idCounter, setIdCounter] = useState(libros.length + 1);
  const addLibro = (libro, imagen) => {
    // Guarda la imagen en la ubicación deseada
    const imagenName = `${libro.id}}.png`; // Genera el nombre de la imagen basado en el ID del libro y el nombre
    guardarImagen(imagen, imagenName);
    // Actualiza el estado de los libros con el nuevo libro y la imagen
    setLibros([...libros, { ...libro, id: idCounter, imagen: imagenName }]);
    setIdCounter(idCounter + 1);
  };

  const guardarImagen = (imagen, imageName) => {
    console.log(`Guardando imagen "${imageName}"`);
  };

  return (
    <div>
      <Header onRegisterClick={openModal} />
      <div className="table-container">
        <Example data={libros} />
      </div>
      {showModal && <RegisterModal onClose={closeModal} onAddLibro={addLibro} />}
    </div>
  );
}

export default App;
