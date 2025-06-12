import Bar from "./bar.jsx";
import MainTitle from "../../components/mainTitle";
import { Box } from "@mui/material";
const BarChart = () => {
  return (
    <Box>
            <MainTitle title="Bar Chart" description="The minimum wage in Germany, France and Spain (EUR/month)" />
      <Bar />
    </Box>
  );
};

export default BarChart;
