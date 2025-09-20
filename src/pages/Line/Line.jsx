import { Box, useTheme } from '@mui/material'
import { ResponsiveLine } from '@nivo/line'
import { data } from './data';


const Line = ({isDashboard = false}) => {
    const theme = useTheme();
  return (
     <Box sx={{height:isDashboard?'280px':'75vh'}}>
      <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        curve='catmullRom'
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend:isDashboard?null:'transportation', legendOffset: 36 }}
        axisLeft={{ legend:isDashboard? null: 'Count', legendOffset: -45 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
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
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
    </Box>
  )
}

export default Line