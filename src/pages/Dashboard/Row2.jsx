import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material"
import Line from "../../pages/Line/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack display="flex" direction="row" alignItems={"center"} flexWrap="wrap" gap={1.5} mt={3}>
  <Paper sx={{ flex: '1 1 500px' }}>
    <Stack direction="row" flexWrap="wrap" sx={{display:'flex',
       justifyContent:'space-between', alignItems:'center'}}>
      <Box>
        <Typography
        color={theme.palette.secondary.main}
        mb={1}
        mt={2}
        ml={4}
        variant="h6"
        >Revenue Generated</Typography>

        <Typography variant="body2" ml={4}>$59,342,32</Typography>

      </Box>
      <Box>
        <IconButton sx={{mr:3}}>
          <DownloadOutlined />
        </IconButton>

      </Box>

    </Stack>
    <Line isDashboard={true} />
  </Paper>

  <Box sx={{ flex: '1 1 200px', height: '360px', overflow:'auto' }}>
    <Paper>
      <Typography
        color={theme.palette.secondary.main}
        fontWeight="bold"
        p={1.2}
        variant="h6"
      >
        Recent Transactions
      </Typography>
    </Paper>

    {transactions.map((transaction) => (
      <Paper
      sx={{
        mt: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1.5,
      }}
    >
      {/* العمود الأول: ID + User */}
      <Box>
        <Typography variant="body1" fontWeight={600}>
         {transaction.txId}
        </Typography>
        <Typography variant="body2">{transaction.user}</Typography>
      </Box>

      {/* العمود الثاني: Date */}
      <Typography variant="body1">{transaction.date}</Typography>

      {/* العمود الثالث: Cost */}
      <Typography
        borderRadius={1.4}
        p={1}
        bgcolor={theme.palette.error.main}
        color={theme.palette.getContrastText(theme.palette.error.main)}
        variant="body2"
      >
        ${transaction.cost}
      </Typography>
    </Paper>
      
))}



    
  </Box>
</Stack>

  )
}

export default Row2