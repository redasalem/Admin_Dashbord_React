import { Box, Paper, Stack, Typography, useTheme } from '@mui/material'
import { ResponsivePie } from '@nivo/pie'




const Card = ({icon,title,subTitle,increase,data,scheme}) => {
  const theme = useTheme();
  return (
    <Paper sx={{flexGrow:1, minWidth:'333px', padding:1.5,display:'flex'
    , justifyContent:'space-between', marginTop:'10px'}}>
        <Stack gap={1}>
          {icon}

          <Typography sx={{fontSize:'13px'}} >{title} </Typography>
           <Typography>{subTitle}</Typography>


        </Stack>
        <Stack alignItems={'center'}>
          <Box height={'70px'} width={'70px'}>
   <ResponsivePie
    data={data}
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
    margin={{ top: 0, right: 0, bottom: 10, left: 0 }}
    innerRadius={0.5}
    padAngle={0.6}
    cornerRadius={2}
    activeOuterRadiusOffset={8}
    colors={{ scheme:scheme  }}
    borderWidth={1}
   borderColor={{ from: 'color', modifiers: [['darker', 0.7]] }}
  
    
/>

          </Box>
          <Typography>{increase}</Typography>

        </Stack>

      </Paper>
  )
}

export default Card