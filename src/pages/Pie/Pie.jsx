import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box, useTheme } from '@mui/material'



const data = [
  {
    "id": "scala",
    "label": "scala",
    "value": 128,
    "color": "hsl(36, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 398,
    "color": "hsl(334, 70%, 50%)"
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 313,
    "color": "hsl(293, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 583,
    "color": "hsl(95, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 230,
    "color": "hsl(128, 70%, 50%)"
  }
];

const Pie = ({isDashboard = false}) => {
     const theme = useTheme();
  return (
     <Box sx={{height:isDashboard?'220px':'75vh'}}>
        <ResponsivePie 
        data={data}
        margin={isDashboard?{ top: 10, right: 0, bottom: 10, left: 80 }:{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        theme={{
          text: {
            fontSize: 13,
            fill: theme.palette.mode === "dark" ? "#e0e0e0" : "#333333", // أوضح مع الثيم
            outlineWidth: 0,
          },
          axis: {
            legend: {
              text: {
                fontSize: 13,
                fill: theme.palette.mode === "dark" ? "#ffffff" : "#111111",
              }
            },
            ticks: {
              text: {
                fontSize: 12,
                fill: theme.palette.mode === "dark" ? "#cccccc" : "#444444",
              }
            }
          },
          legends: {
            text: {
              fontSize: 12,
              fill: theme.palette.mode === "dark" ? "#f5f5f5" : "#222222",
            }
          },
           tooltip: {
    container: {
      background: theme.palette.mode === "dark" ? "#333333" : "#ffffff",
      color: theme.palette.mode === "dark" ? "#ffffff" : "#111111",
      fontSize: 12,
      borderRadius: "6px",
      boxShadow: "0px 2px 6px rgba(0,0,0,0.25)"
    }
  }
        }}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.mode === "dark" ? "#dddddd" : "#333333"}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        enableArcLabels={isDashboard?false:true}
        enableArcLinkLabels={isDashboard?false:true}
        legends={
          isDashboard ? [] :
          
          [
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
  )
}

export default Pie