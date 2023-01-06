import { ResponsiveChoropleth } from "@nivo/geo";
import { mockGeographyData } from "../data/mockData";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { geoFeatures } from "../data/mockGeoFeatures";

const GeographyChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <ResponsiveChoropleth
            data={mockGeographyData}
            theme={{
                // added
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.grey[100],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: colors.grey[100],
                    },
                },
            }}
            // this is setting data which we need to pass
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isDashboard ? 40 : 150}
            projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.5}
            borderColor="#ffffff"
            legends={
                isDashboard
                    ? undefined
                    : [
                          {
                              anchor: "bottom-left",
                              direction: "column",
                              justify: true,
                              translateX: 20,
                              translateY: -100,
                              itemsSpacing: 0,
                              itemWidth: 94,
                              itemHeight: 18,
                              itemDirection: "left-to-right",
                              itemTextColor: colors.grey[100],
                              itemOpacity: 0.85,
                              symbolSize: 18,
                              effects: [
                                  {
                                      on: "hover",
                                      style: {
                                          itemTextColor: "#ffffff",
                                          itemOpacity: 1,
                                      },
                                  },
                              ],
                          },
                      ]
            }
        />
    );
};

export default GeographyChart;
