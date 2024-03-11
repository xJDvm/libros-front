const data = [
    { 
        id: 1,
        nombre: 'El Principito', 
        autores: [{ nombre: 'Antoine de Saint-Exupéry', fechaNacimiento: '1900-06-29', fechaFallecimiento: '1944-07-31' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1943-04-06', 
        editorial: 'Editorial A' 
    },
    { 
        id: 2, 
        nombre: 'Cien años de soledad', 
        autores: [{ nombre: 'Gabriel García Márquez', fechaNacimiento: '1927-03-06', fechaFallecimiento: '2014-04-17' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1967-05-30', 
        editorial: 'Editorial B' 
    },
    { 
        id: 3, 
        nombre: 'Harry Potter y la piedra filosofal', 
        autores: [{ nombre: 'J.K. Rowling', fechaNacimiento: '1965-07-31' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1997-06-26', 
        editorial: 'Editorial C' 
    },
    { 
        id: 4, 
        nombre: 'Crimen y castigo', 
        autores: [{ nombre: 'Fyodor Dostoevsky', fechaNacimiento: '1821-11-11', fechaFallecimiento: '1881-02-09' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1866-01-01', 
        editorial: 'Editorial D' 
    },
    { 
        id: 5, 
        nombre: 'Orgullo y prejuicio', 
        autores: [{ nombre: 'Jane Austen', fechaNacimiento: '1775-12-16', fechaFallecimiento: '1817-07-18' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1813-01-28', 
        editorial: 'Editorial E' 
    },
    { 
        id: 6, 
        nombre: '1984', 
        autores: [{ nombre: 'George Orwell', fechaNacimiento: '1903-06-25', fechaFallecimiento: '1950-01-21' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1949-06-08', 
        editorial: 'Editorial F' 
    },
    { 
        id: 7, 
        nombre: 'Moby Dick', 
        autores: [{ nombre: 'Herman Melville', fechaNacimiento: '1819-08-01', fechaFallecimiento: '1891-09-28' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1851-10-18', 
        editorial: 'Editorial G' 
    },
    { 
        id: 8, 
        nombre: 'El gran Gatsby', 
        autores: [{ nombre: 'F. Scott Fitzgerald', fechaNacimiento: '1896-09-24', fechaFallecimiento: '1940-12-21' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1925-04-10', 
        editorial: 'Editorial H' 
    },
    { 
        id: 9, 
        nombre: 'Don Quijote de la Mancha', 
        autores: [{ nombre: 'Miguel de Cervantes', fechaNacimiento: '1547-09-29', fechaFallecimiento: '1616-04-22' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1605-01-16', 
        editorial: 'Editorial I' 
    },
    { 
        id: 10, 
        nombre: 'La metamorfosis', 
        autores: [{ nombre: 'Franz Kafka', fechaNacimiento: '1883-07-03', fechaFallecimiento: '1924-06-03' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1915-10-15', 
        editorial: 'Editorial J' 
    },
    { 
        id: 11, 
        nombre: 'Matar un ruiseñor', 
        autores: [{ nombre: 'Harper Lee', fechaNacimiento: '1926-04-28', fechaFallecimiento: '2016-02-19' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1960-07-11', 
        editorial: 'Editorial K' 
    },
    { 
        id: 12, 
        nombre: 'Anna Karenina', 
        autores: [{ nombre: 'Leo Tolstoy', fechaNacimiento: '1828-09-09', fechaFallecimiento: '1910-11-20' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1878-01-01', 
        editorial: 'Editorial L' 
    },
    { 
        id: 13, 
        nombre: 'El señor de los anillos', 
        autores: [{ nombre: 'J.R.R. Tolkien', fechaNacimiento: '1892-01-03', fechaFallecimiento: '1973-09-02' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1954-07-29', 
        editorial: 'Editorial M' 
    },
    { 
        id: 14, 
        nombre: 'La Odisea', 
        autores: [{ nombre: 'Homero', fechaNacimiento: '', fechaFallecimiento: '' }], 
        genero: 'Ficción épica', 
        fechaPublicacion: 'Siglo VIII a.C.', 
        editorial: 'Editorial N' 
    },
    { 
        id: 15, 
        nombre: 'El retrato de Dorian Gray', 
        autores: [{ nombre: 'Oscar Wilde', fechaNacimiento: '1854-10-16', fechaFallecimiento: '1900-11-30' }], 
        genero: 'Ficción', 
        fechaPublicacion: '1890-07-20', 
        editorial: 'Editorial O' 
    },
];

export default function makeData() {
    return data;
}
