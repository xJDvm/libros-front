import React, { useState, useEffect } from 'react';
import {
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info'; // Importa InfoIcon
import BookModal from './BookModal'; // Importa el componente del modal

const columns = [
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: 'autores',
    header: 'Autores',
    accessorFn: (rowData) =>
      rowData.autores.map((autor) => autor.nombre).join(', '),
  },
  {
    accessorKey: 'genero',
    header: 'Género',
  },
  {
    accessorKey: 'fechaPublicacion',
    header: 'Fecha de publicación',
  },
  {
    accessorKey: 'editorial',
    header: 'Editorial',
  },
];

const Example = ({ data }) => {
  const [rowData, setRowData] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDelete = (row) => {
    const updatedData = rowData.filter((item) => item.id !== row.original.id);
    setRowData(updatedData);
  };

  const handleOpenModal = (row) => {
    setSelectedBook(row.original);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
    useEffect(() => {
    setRowData(data);
  }, [data]);

  const table = useMaterialReactTable({
    columns,
    data: rowData,
    enableRowSelection: false,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true,
    },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
      variant: 'outlined',
    },
    paginationDisplayMode: 'pages',
  });

  return (
    <Stack sx={{ m: '2rem 0' }}>
      <Typography variant="h4" textAlign="left" marginLeft="3%">
        Buscar libros
      </Typography>
      <Box
        sx={{
          display: 'flex',
          marginLeft: '3%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
        }}
      >
        <MRT_GlobalFilterTextField table={table} />
        <MRT_TablePagination table={table} />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell align="center" variant="head" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.Header ??
                            header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableCell>
                ))}
                <TableCell align="center" variant="head">Acciones</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <TableRow key={row.id} selected={row.getIsSelected()}>
                {row.getVisibleCells().map((cell, _columnIndex) => (
                  <TableCell align="center" variant="body" key={cell.id}>
                    <MRT_TableBodyCellValue
                      cell={cell}
                      table={table}
                      staticRowIndex={rowIndex}
                    />
                  </TableCell>
                ))}
                <TableCell align="center" variant="body">
                  <IconButton onClick={() => handleDelete(row)} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleOpenModal(row)} aria-label="details">
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
      
      {/* Renderiza el componente del modal */}
      <BookModal open={openModal} onClose={handleCloseModal} selectedBook={selectedBook} />
    </Stack>
  );
};

export default Example;
