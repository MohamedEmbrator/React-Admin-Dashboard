import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "React",
    label: "React",
    value: 272,
    color: "hsl(107, 70%, 50%)"
  },
  {
    id: "stylus",
    label: "stylus",
    value: 543,
    color: "hsl(64, 70%, 50%)"
  },
  {
    id: "sass",
    label: "sass",
    value: 401,
    color: "hsl(41, 70%, 50%)"
  },
  {
    id: "haskell",
    label: "haskell",
    value: 434,
    color: "hsl(172, 70%, 50%)"
  },
  {
    id: "Vue",
    label: "Vue",
    value: 333,
    color: "hsl(219, 70%, 50%)"
  }
];

const Pie = ({isDashboard = false}) => {
  const theme = useTheme();
  return (
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsivePie
        data={data}
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
        margin={ isDashboard ? {top: 10, right: 0, bottom: 10, left: 0} :{top: 40, right: 80, bottom: 80, left: 80} }
        innerRadius={isDashboard ? 0.8 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        enableArcLabels={!isDashboard}
        enableArcLinkLabels={!isDashboard}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: "circle"
                }
              ]
        }
      />
    </Box>
  );
};

export default Pie;
