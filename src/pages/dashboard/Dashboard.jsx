import { Box, Button, Stack } from "@mui/material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { DownloadOutlined } from "@mui/icons-material";
import MainTitle from "../../components/mainTitle";

const Dashboard = () => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
      <MainTitle title="DASHBOARD" description="Welcome to your dashboard" isDashboard={true} />
      <Box sx={{ textAlign: "right", mb: 1.3 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "capitalize" }}
        >
          <DownloadOutlined />
          Download Reports
        </Button>
        </Box>
        </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
