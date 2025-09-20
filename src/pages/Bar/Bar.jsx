import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Box, Typography} from '@mui/material';



const data = [
  {
    year: 2019,
    Germany: 450,
    India: 700,
    Egypt: 350,
  },
  {
    year: 2020,
    Germany: 420,
    India: 650,
    Egypt: 300,
  },
  {
    year: 2021,
    Germany: 460,
    India: 800,
    Egypt: 400,
  },
  {
    year: 2022,
    Germany: 500,
    India: 850,
    Egypt: 420,
  },
  {
    year: 2023,
    Germany: 520,
    India: 900,
    Egypt: 500,
  },
];

const Bar = ({theme,isDashboard = false}) => {
  return (
      <Box sx={{ height: '80vh', display: 'flex', flexDirection: 'column', gap: 2 }}>
      
      {/* العنوان */}
      {isDashboard ? null :(
         <Typography 
        variant="h4" 
        align="center" 
        sx={{ fontWeight: 'bold', color: 'rgba(18, 15, 194, 1)', mb: 2 }}
      >
        Employment Growth Trends (2019 - 2023)
      </Typography>
      ) }
     
      
      <ResponsiveBar
      theme={
        {
    "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "#ffffff"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "ticks": {
            "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": theme.palette.divider,
            "strokeWidth": 1
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "#ffffff"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": theme.palette.text.primary,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "container": {
            "background": "rgba(194, 186, 34, 1)",
            "color": theme.palette.text.primary,
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}
      }
        data={data}
        keys={['Germany', 'India', 'Egypt']}
        indexBy="year"
        margin={{ top: 50, right: 130, bottom: 60, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'set2' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:isDashboard?null : 'Year',
          legendPosition: 'middle',
          legendOffset: 40,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:isDashboard?null: 'Employment Rate',
          legendPosition: 'middle',
          legendOffset: -50,
        }}

        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}

        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 4,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            symbolSize: 20,
          },
        ]}
        role="application"
        ariaLabel="Employment bar chart"
      />
    </Box>
  )
}

export default Bar