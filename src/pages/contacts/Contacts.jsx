import { Box } from "@mui/material";
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";
import { columns, rows } from "./data.js";
import MainTitle from "../../components/mainTitle";
function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{justifyContent: "flex-start"}}>
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

const Contacts = () => {
  return (
    <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
      <MainTitle title="CONTACTS" description="List of contacts for future refernce" />
      <DataGrid
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
};

export default Contacts;
