import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data.js";
import { Box, Typography, useTheme } from "@mui/material";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import MainTitle from "../../components/mainTitle";
const Team = () => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center"
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              mx: "auto",
              my: "10px",
              justifyContent: "space-evenly",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a"
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}

            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      }
    }
  ];
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <MainTitle title="TEAM" description="Managing the team members" />
        <DataGrid rows={rows} 
// @ts-ignore
        columns={columns} />
      </Box>
  );
};

export default Team;
