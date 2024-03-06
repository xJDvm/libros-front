import React from 'react';
import './Table.css';

function Table({ libros }) {
    return (
        <div className="table-container">
            <div className="table-wrapper">
                <table className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre del libro</th>
                    <th>Autores del libro</th>
                    <th>Género del libro</th>
                    <th>Fecha de publicación</th>
                    <th>Editorial</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro, index) => (
                    <tr key={index}>
                        <td>{libro.id}</td>
                        <td>{libro.nombre}</td>
                        <td>{libro.autores.map(autor => autor.nombre).join(', ')}</td>
                        {/* Usamos map() para obtener solo los nombres de los autores */}
                        <td>{libro.genero}</td>
                        <td>{libro.fechaPublicacion}</td>
                        <td>{libro.editorial}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
  }

export default Table;
