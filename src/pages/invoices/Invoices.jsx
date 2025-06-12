import { Box } from "@mui/material";
import { rows, columns } from "./data.js";
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import MainTitle from "../../components/mainTitle";
function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ justifyContent: "flex-start" }}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: "Change density" } }}
      />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: "Export data" },
          button: { material: { variant: "outlined" } }
        }}
      />
    </GridToolbarContainer>
  );
}
const Invoices = () => {
  return (
    <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
      <MainTitle title="Invoices Balances" description="List of invoices balances" />
      <DataGrid
        checkboxSelection
        slots={{
          toolbar: CustomToolbar
        }}
        showToolbar
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

export default Invoices;
