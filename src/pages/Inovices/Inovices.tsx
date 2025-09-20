import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { GridToolbar } from '@mui/x-data-grid/internals'
import { columns, rows } from './data'
import Header from '../../components/Header';

const Inovices = () => {
  return (
     <Box sx={{ height: 600, width: '98%',mx:'auto' }}>
      <Header title={"Invoices"} subTitle={"Invoices List page"}/>
             <DataGrid rows={rows} 
             checkboxSelection
       // @ts-ignore
             columns={columns}
             slots={{
              toolbar: GridToolbar,
             }}
              />
           </Box>
  )
}

export default Inovices