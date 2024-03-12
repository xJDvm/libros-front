import { useState } from 'react';

// La función de eliminación
const FuncionEliminar = (table) => {
  const selectedRows = table.getRows().filter((row) => row.getIsSelected());

  // Obtener los IDs de las filas seleccionadas
  const selectedRowIds = selectedRows.map((row) => row.original.id);

  // Eliminar las filas del conjunto de datos
  setData((prevData) =>
    prevData.filter((row) => !selectedRowIds.includes(row.id))
  );

  // Limpiar la selección después de la eliminación
  table.toggleAllRowsSelected(false);
};

// Componente principal
const Example = ({ data }) => {
  const [tableData, setTableData] = useState(data);

  const table = useMaterialReactTable({
    columns,
    data: tableData, // Usar el estado local para los datos de la tabla
    enableRowSelection: true,
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
    <div>
      {/* Agregar un botón para activar la función de eliminación */}
      <button onClick={() => FuncionEliminar(table)}>Eliminar seleccionados</button>
      {/* El resto de tu código de tabla */}
    </div>
  );
};
