import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useMemo, useState } from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "./theme.jsx";
import { Outlet } from "react-router-dom";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

export default function MiniDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [mode, setMode] = useState(
    localStorage.getItem("mode") !== null
      ? localStorage.getItem("mode")
      : "light"
  );
  const theme = useMemo(()=> createTheme(getDesignTokens(mode)), [mode]) 
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar {...{ handleDrawerOpen, open, setMode }} />
        <SideBar {...{ open, theme, handleDrawerClose }} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
