import { useTheme } from "@emotion/react";
import {
  Email,
  PersonAdd,
  PieChart,
  PointOfSale,
  Traffic
} from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { data1, data2, data3, data4 } from "./data.js";

const Row1 = () => {
  const theme = useTheme();
  const cardsData = [
    {
      icon: (
        // @ts-ignore
        <Email sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />
      ),
      title: "12,361",
      subTitle: "Emails Sent",
      chart: <PieChart />,
      data: data1,
      scheme: "nivo",
      increase: "+14%"
    },
    {
      icon: (
        <PointOfSale
          // @ts-ignore
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "431,225",
      subTitle: "Sales Obtained",
      chart: <PieChart />,
      data: data2,
      scheme: "category10",
      increase: "+21%"
    },
    {
      icon: (
        <PersonAdd
          // @ts-ignore
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "32,441",
      subTitle: "New Clients",
      chart: <PieChart />,
      data: data3,
      scheme: "accent",
      increase: "+5%"
    },
    {
      icon: (
        <Traffic
          // @ts-ignore
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "1,325,134",
      subTitle: "Traffic Received",
      chart: <PieChart />,
      data: data4,
      scheme: "dark2",
      increase: "+43%"
    }
  ];
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      gap={1}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      {cardsData.map((el, index) => {
        return (
          <Paper
            key={index}
            sx={{
              flexGrow: 1,
              minWidth: "333px",
              p: 1.5,
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <Stack gap={1}>
              {el.icon}
              <Typography variant="body2" sx={{ fontSize: "13px" }}>
                {el.title}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "13px" }}>
                {el.subTitle}
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Box sx={{ height: "80px", width: "80px" }}>
                <ResponsivePie
                  data={el.data}
                  margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
                  // @ts-ignore
                  colors={{ scheme: el.scheme }}
                  innerRadius={0.7}
                  padAngle={0.6}
                  cornerRadius={2}
                  activeOuterRadiusOffset={8}
                  enableArcLabels={false}
                  enableArcLinkLabels={false}
                  theme={{
                    // @ts-ignore
                    textColor: theme.palette.text.primary,
                    fontSize: 11,
                    axis: {
                      domain: {
                        line: {
                          // @ts-ignore
                          stroke: theme.palette.divider,
                          strokeWidth: 1
                        }
                      },
                      legend: {
                        text: {
                          fontSize: 12,
                          // @ts-ignore
                          fill: theme.palette.text.primary
                        }
                      },
                      ticks: {
                        line: {
                          // @ts-ignore
                          stroke: theme.palette.divider,
                          strokeWidth: 1
                        },
                        text: {
                          fontSize: 11,
                          // @ts-ignore
                          fill: theme.palette.text.secondary
                        }
                      }
                    },
                    grid: {
                      line: {
                        // @ts-ignore
                        stroke: theme.palette.divider,
                        strokeWidth: 1
                      }
                    },
                    legends: {
                      title: {
                        text: {
                          fontSize: 11,
                          // @ts-ignore
                          fill: theme.palette.text.primary
                        }
                      },
                      text: {
                        fontSize: 11,
                        // @ts-ignore
                        fill: theme.palette.text.primary
                      },
                      ticks: {
                        line: {},
                        text: {
                          fontSize: 10,
                          // @ts-ignore
                          fill: theme.palette.text.primary
                        }
                      }
                    },
                    annotations: {
                      text: {
                        fontSize: 13,
                        // @ts-ignore
                        fill: theme.palette.text.primary,
                        outlineWidth: 2,
                        outlineColor: "#ffffff",
                        outlineOpacity: 1
                      },
                      link: {
                        stroke: "#000000",
                        strokeWidth: 1,
                        outlineWidth: 2,
                        outlineColor: "#ffffff",
                        outlineOpacity: 1
                      },
                      outline: {
                        stroke: "#000000",
                        strokeWidth: 2,
                        outlineWidth: 2,
                        outlineColor: "#ffffff",
                        outlineOpacity: 1
                      },
                      symbol: {
                        fill: "#000000",
                        outlineWidth: 2,
                        outlineColor: "#ffffff",
                        outlineOpacity: 1
                      }
                    },
                    tooltip: {
                      container: {
                        // @ts-ignore
                        background: theme.palette.background.default,
                        // @ts-ignore
                        color: theme.palette.text.primary,
                        fontSize: 12
                      },
                      basic: {},
                      chip: {},
                      table: {},
                      tableCell: {},
                      tableCellValue: {}
                    }
                  }}
                />
              </Box>
              <Typography variant="body2">{el.increase}</Typography>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
};

export default Row1;
