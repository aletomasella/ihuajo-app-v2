import React, { useState, useEffect } from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { Checkbox } from "@mui/material";
import { Animal } from "../../../models/animals";
import axios from "axios";
import { api } from "../../../utilities";
import { Link } from "react-router-dom";

const colums = [
  {
    field: "tagId",
    headerName: "Nro de Caravana",
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => (
      <>
        <Link
          to={`details/${params.value}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          {params.value}
        </Link>
      </>
    ),
  },
  {
    field: "race",
    headerName: "Raza",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "genre",
    headerName: "Genero",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "boughtPrice",
    headerName: "Precio de Compra",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "initialWeight",
    headerName: "Peso Inicial",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "finalWeight",
    headerName: "Pesos Final",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.value ? params.value : "-"}</>
    ),
  },
  {
    field: "actualLocation",
    headerName: "Establecimiento Actual",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "isCastrated",
    headerName: "Castrado",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => (
      <>{params.value ? "SI" : "NO"}</>
    ),
  },
];

const AnimalsTable = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    axios.get(api.endopoints.animalsURL).then((res) => setAnimals(res.data));
  }, []);

  const PAGE_SIZE = 15;
  return (
    <DataGrid
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      rows={animals}
      columns={colums}
      pageSize={PAGE_SIZE}
      rowsPerPageOptions={[PAGE_SIZE]}
      getRowId={(row) => row.tagId}
      style={{
        height: "100%",
        width: "100%",
        color: "white",
      }}
    />
  );
};

export default AnimalsTable;
