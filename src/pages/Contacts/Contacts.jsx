import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { columns, rows } from './data'
import { GridToolbar } from '@mui/x-data-grid/internals'
import Header from '../../components/Header';

const Contacts = () => {
  return (
     <Box sx={{ height: 600, width: '98%',mx:'auto' }}>
      <Header title={'Contacts information'} subTitle={'contact with this employes'}/>
         <DataGrid rows={rows} 
   // @ts-ignore
         columns={columns}
         slots={{
          toolbar: GridToolbar,
         }}
          />
       </Box>
  )
}

export default Contacts