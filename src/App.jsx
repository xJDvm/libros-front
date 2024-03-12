import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
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

  const addLibro = (libro, imagen) => {
    // Guarda la imagen en la ubicación deseada
    const imagenName = `${libro.id}_${libro.nombre.replace(/\s+/g, '-')}.png`; // Genera el nombre de la imagen basado en el ID del libro y el nombre
    guardarImagen(imagen, imagenName);
    // Actualiza el estado de los libros con el nuevo libro y la imagen
    setLibros([...libros, { ...libro, imagen: imagenName }]);
  };

  const guardarImagen = (imagen, imageName) => {
    // Aquí deberías escribir la lógica para guardar la imagen en la ubicación deseada
    // Por simplicidad, aquí solo simulamos el guardado de la imagen
    console.log(`Guardando imagen "${imageName}"`);
  };

  return (
    <div>
      <Header onRegisterClick={openModal} />
      <div className="table-container">
        <Example data={libros} />
      </div>
      {showModal && <RegisterModal onClose={closeModal} onAddLibro={addLibro} />}
      <Footer />
    </div>
  );
}

export default App;
