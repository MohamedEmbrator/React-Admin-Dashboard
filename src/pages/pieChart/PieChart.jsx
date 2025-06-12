import Pie from "./pie.jsx";
import MainTitle from "../../components/mainTitle";
import { Box } from "@mui/material";
const PieChart = () => {
  return (
    <Box>
      <MainTitle title="Pie Chart" description="Simple Pie Chart" />
      <Pie />
    </Box>
  );
};

export default PieChart;
