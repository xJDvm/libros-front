// App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';
import RegisterModal from './components/RegisterModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [libros, setLibros] = useState([
    { id: 1, nombre: 'El Principito', autores: [{ nombre: 'Antoine de Saint-Exupéry' }], genero: 'Ficción', fechaPublicacion: '1943-04-06', editorial: 'Editorial A' },
    { id: 2, nombre: 'Cien años de soledad', autores: [{ nombre: 'Gabriel García Márquez' }], genero: 'Ficción', fechaPublicacion: '1967-05-30', editorial: 'Editorial B' },
    { id: 3, nombre: 'Harry Potter y la piedra filosofal', autores: [{ nombre: 'J.K. Rowling' }], genero: 'Ficción', fechaPublicacion: '1997-06-26', editorial: 'Editorial C' },
  ]);
  const [idCounter, setIdCounter] = useState(4); // Inicia el contador en 4

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addLibro = (libro) => {
    const newLibro = { ...libro, id: idCounter };
    setLibros([...libros, newLibro]);
    setIdCounter(idCounter + 1); // Incrementa el contador
  };

  return (
    <div>
      <Header onRegisterClick={openModal} />
      <div className="table-container">
        <Table libros={libros} />
      </div>
      {showModal && <RegisterModal onClose={closeModal} onAddLibro={addLibro} />}
      <Footer />
    </div>
  );
}

export default App;
