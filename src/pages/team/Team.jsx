import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { useTheme } from '@mui/material';
import { Box, Typography } from "@mui/material";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import Header from '../../components/Header';




const Team = () => {
  const theme = useTheme();

  const columns = [
  { field: 'id', headerName: 'ID', flex: 1, align: 'center', headerAlign: 'center' },
  { field: 'name', headerName: 'Name', flex: 1, align: 'center', headerAlign: 'center' },
  { field: 'email', headerName: 'Email', flex: 2, align: 'center', headerAlign: 'center' },
  { field: 'age', headerName: 'Age', flex: 1, align: 'center', headerAlign: 'center' },
  { field: 'phone', headerName: 'Phone', flex: 2, align: 'center', headerAlign: 'center' },
  { field: 'access', headerName: 'Access', flex: 1, align: 'center', headerAlign: 'center',
   
    // destract  values of access  from rows  
    renderCell:({row: {access} })=>{
    return(
        <Box sx={{
          p:'5px',
          textAlign:'center',
          mx:'auto',
          my:'10px',
          width:'99px',
          borderRadius:'3px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:'5px',
          backgroundColor:access ==='Admin' ?
           theme.palette.primary.dark:access ==='Manager'?theme.palette.secondary.main:"#3da58a",
        }}>
         {access === 'Admin' && (<AdminPanelSettingsOutlined sx={{color:'#FFF'}} fontSize='small'/>)}
          {access === 'Manager' && (<SecurityOutlined sx={{color:'#FFF'}} fontSize='small'/>)}
          {access === 'User' && (<LockOpenOutlined sx={{color:'#fff'}} fontSize='small'/>)}

            <Typography sx={{fontSize:'13px',color:'#fff'}}>{access}</Typography>
        </Box>
    )
  } },
];


  return (
    <div>

       <Box sx={{ height: 600, width: '98%',mx:'auto' }}>
         <Header title={'Team Member'} subTitle={'Manging the Team Member'}/>
      <DataGrid rows={rows} 
// @ts-ignore
      columns={columns} />
    </Box>

    </div>
  )
}

export default Team