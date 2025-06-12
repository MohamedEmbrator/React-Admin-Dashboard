import { Box, useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
const data = [
  {
    year: 2019,
    Spain: 900,
    France: 1400,
    Germany: 1700
  },

  {
    year: 2020,
    Spain: 1000,
    France: 1500,
    Germany: 1800
  },

  {
    year: 2021,
    Spain: 1100,
    France: 1600,
    Germany: 1900
  },

  {
    year: 2022,
    Spain: 1200,
    France: 1700,
    Germany: 2000
  },

  {
    year: 2023,
    Spain: 1260,
    France: 1709,
    Germany: 2080
  }
];
const Bar = ({ isDashboard=false }) => {
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: isDashboard ? "350px" : "75vh" }}>
      <ResponsiveBar
        data={data}
        indexBy="year"
        theme={{
          // @ts-ignore
          textColor: theme.palette.text.primary,
          fontSize: 11,
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1
              }
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary
              }
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary
              }
            }
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1
            }
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary
              }
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary
              }
            }
          },
          annotations: {
            text: {
              fontSize: 13,
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
              background: theme.palette.background.default,
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
        labelSkipWidth={12}
        labelSkipHeight={12}
        keys={["Spain", "France", "Germany"]}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16
          }
        ]}
        axisBottom={{ legend: isDashboard ? null : "Year", legendOffset: 35 }}
        axisLeft={{
          legend: isDashboard ? null : "Minimum wage/month",
          legendOffset: -50
        }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        colors={{ scheme: "paired" }}
      />
    </Box>
  );
};

export default Bar;
