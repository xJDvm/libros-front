import React, { useState } from 'react';
import './RegisterModal.css'; // Importamos el archivo CSS donde pondremos los estilos

function RegisterModal({ onClose, onAddLibro }) {
  const [nombreLibro, setNombreLibro] = useState('');
  const [autores, setAutores] = useState([{ nombre: '', fechaNacimiento: '', fechaFallecimiento: '' }]);
  const [genero, setGenero] = useState('');
  const [fechaPublicacion, setFechaPublicacion] = useState('');
  const [editorial, setEditorial] = useState('');

  const handleAddAuthor = () => {
    setAutores([...autores, { nombre: '', fechaNacimiento: '', fechaFallecimiento: '' }]);
  };

  const handleChangeAuthor = (index, field, value) => {
    const newAutores = [...autores];
    newAutores[index][field] = value;
    setAutores(newAutores);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLibro = {
      nombre: nombreLibro,
      autores: autores.filter(autor => autor.nombre !== ''),
      genero,
      fechaPublicacion,
      editorial,
    };
    onAddLibro(newLibro);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2 style={{ textAlign: 'center'}}>Registrar nuevo libro</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <h4>Nombre del libro:</h4>
            <input type="text" value={nombreLibro} onChange={(e) => setNombreLibro(e.target.value)} placeholder="Nombre del libro" required />
          </label>
          <label>
            <h4>Autores, fecha nacimineto, fecha fallecimiento:</h4>
            {autores.map((autor, index) => (
              <div key={index} className="author-container">
                <input type="text" value={autor.nombre} onChange={(e) => handleChangeAuthor(index, 'nombre', e.target.value)} placeholder="Nombre del autor" required />
                <input type="date" value={autor.fechaNacimiento} onChange={(e) => handleChangeAuthor(index, 'fechaNacimiento', e.target.value)} placeholder="Fecha de nacimiento" required />
                <input type="date" value={autor.fechaFallecimiento} onChange={(e) => handleChangeAuthor(index, 'fechaFallecimiento', e.target.value)} placeholder="Fecha de fallecimiento" />
              </div>
            ))}
            <button type="button" onClick={handleAddAuthor}>Agregar Autor</button>
          </label>
          <label>
            <h4>Genero del libro</h4>
            <select value={genero} onChange={(e) => setGenero(e.target.value)} required>
              <option value="">Seleccionar</option>
              <option value="Ficción">Ficción</option>
              <option value="No ficción">No ficción</option>
              <option value="Drama">Drama</option>
              {/* Agregar más opciones de género según sea necesario */}
            </select>
          </label>
          <label>
            <h4>Fecha de publicación:</h4>
            <input type="date" value={fechaPublicacion} onChange={(e) => setFechaPublicacion(e.target.value)} required />
          </label>
          <label>
            <h4>Editorial:</h4>
            <input type="text" value={editorial} onChange={(e) => setEditorial(e.target.value)} placeholder="Nombre de editorial" required />
          </label>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
