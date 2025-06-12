import { Paper, useTheme, Typography, Stack } from "@mui/material";
import Pie from "../pieChart/pie";
import Bar from "../barChart/bar";
import Geo from "../geography/geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ mt: 2 }} flexWrap="wrap" gap={1.5}>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "28%" }}>
        <Typography
          variant="h6"
          fontWeight="600"
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" align="center" px={0.7} pb={0.3}>
          Includes extra misc expendtures and costs
        </Typography>
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Typography
          variant="h6"
          fontWeight="600"
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>
      <Paper sx={{ flexGrow: 1, minWidth: "400px", width: "33%" }}>
        <Geo isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;
