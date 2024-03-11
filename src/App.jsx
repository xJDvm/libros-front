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
  const [idCounter, setIdCounter] = useState(libros.length + 1);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addLibro = (libro) => {
    const newLibro = { ...libro, id: idCounter };
    setLibros([...libros, newLibro]);
    setIdCounter(idCounter + 1);
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
