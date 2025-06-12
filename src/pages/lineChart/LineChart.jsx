import Line from "./Line";
import MainTitle from "../../components/mainTitle";
import { Box } from "@mui/material";
const LineChart = () => {
  return (
    <Box>
      <MainTitle title="Line Chart" description="Simple Line Chart" />
      <Line />
    </Box>
  );
}

export default LineChart;
