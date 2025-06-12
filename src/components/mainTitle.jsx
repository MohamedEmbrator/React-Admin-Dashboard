import { Box, Typography, useTheme } from '@mui/material';
const MainTitle = ({title, description, isDashboard = false}) => {
  const theme = useTheme();
  return (
      <Box sx={{mb: isDashboard ? 2 :  4}}>
        <Typography variant="h5" sx={{color: theme.palette.info.light, fontWeight: "bold"}}>
          {title}
        </Typography>
        <Typography variant="body1">
          {description}
        </Typography>
      </Box>
  );
}

export default MainTitle;
