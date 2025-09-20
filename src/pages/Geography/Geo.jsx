import { ResponsiveChoropleth } from '@nivo/geo'
import { data } from './data'
import { Box, Button, Stack, useTheme } from '@mui/material'
import { geo } from './World_contires'
import { useState } from 'react'



const Geo = ({isDashboard = false}) => {
    const theme = useTheme();
    const [zoom,setzoom]=useState(90);
  return (
    <Box sx={{position:'relative', height:isDashboard?'100vh':'75vh',border:isDashboard?'none':`1px solid ${ theme.palette.text.primary}` , borderRadius:'10px'}}>
    <ResponsiveChoropleth /* or Choropleth for fixed dimensions */
        data={data}
        features={geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="spectral"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={false}
        projectionScale={zoom}
        graticuleLineColor="#dddddd"
        borderWidth={1.5}
        borderColor="#09C"
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
        legends={
            isDashboard?[]:
            [
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -30,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor:theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
       
    />
    <Stack>
     <Button sx={{fontSize:'25px', position:'absolute', height:'30px', width:'30px',
         top:3,left:5,backgroundColor:theme.palette.primary.main,color:theme.palette.getContrastText(theme.palette.primary.main)}}
         onClick={()=>setzoom(zoom+5)}>+</Button>

          <Button sx={{fontSize:'25px', height:'30px', width:'30px',position:'absolute', top:40,left:5,
         backgroundColor:theme.palette.primary.main,color:theme.palette.getContrastText(theme.palette.primary.main)}}
         onClick={()=>setzoom(zoom-5)}>-</Button>
 </Stack>
   </Box>
  )
}

export default Geo;