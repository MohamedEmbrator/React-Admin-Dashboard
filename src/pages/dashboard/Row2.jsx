import {
  Box,
  Paper,
  Stack,
  useTheme,
  Typography,
  IconButton
} from "@mui/material";
import Line from "../lineChart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data.js";
const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" flexWrap="wrap" gap={1.5} mt={2}>
      <Paper sx={{minWidth: "400px", maxWidth: "900px", flexGrow: 2 }}>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box sx={{ maxHeight: "380px", flexGrow: 1, minWidth: "200px", overflow: "auto" }}>
        <Paper>
          <Typography
            variant="h6"
            color={theme.palette.secondary.main}
            fontWeight="bold"
            p={1.2}
          >
            Recent Transactions
          </Typography>
          </Paper>
          {Transactions.map((trasnaction, index) => {
            return (
              <Paper
                key={index}
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Box p={1.2}>
                  <Typography variant="body1" fontWeight={600}>
                    {trasnaction.txId}
                  </Typography>
                  <Typography variant="body2">{trasnaction.user}</Typography>
                </Box>
                <Typography variant="body2">{trasnaction.date}</Typography>
                <Typography
                  variant="body2"
                  borderRadius={1.4}
                  p={1}
                  bgcolor={theme.palette.error.main}
                  color={theme.palette.getContrastText(
                    theme.palette.error.main
                  )}
                >
                  ${trasnaction.cost}
                </Typography>
              </Paper>
            );
          })}
      </Box>
    </Stack>
  );
};

export default Row2;
