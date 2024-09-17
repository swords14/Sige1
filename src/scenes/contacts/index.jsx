import React from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "NOME",
      headerName: "NOME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "IDADE",
      headerName: "IDADE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "TELEFONE",
      headerName: "TELEFONE",
      flex: 1,
    },
    {
      field: "E-MAIL",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "ENDEREÇO",
      headerName: "ENDEREÇO",
      flex: 1,
    },
    {
      field: "CIDADE",
      headerName: "CIDADE",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTATOS"
        subtitle="Lista de contatos para referência"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </Box>
  );
};

export default Contacts;
