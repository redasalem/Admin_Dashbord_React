import React from 'react'
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import { Box, Button } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';
import Header from '../../components/Header';

const Dashboard = () => {
  return (
    <div>
     
     
      <Box sx={{ textTransform:'capitalize',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap'}}>
         <Header title={'Dashboard'} subTitle={'Welcome to your Dashboard'} isDashboard={true}/>
      <Button variant='contained'>
        <DownloadOutlined/>
        Downlod Reports
        </Button>
        </Box>
      <Row1/>
       <Row2/> 
       <Row3/> 
      
    </div>
  )
}

export default Dashboard;