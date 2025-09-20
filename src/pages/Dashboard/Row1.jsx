import { Stack, useTheme } from '@mui/material'
import Card from './Card'
import { Email } from '@mui/icons-material'
import { PointOfSale } from '@mui/icons-material'
import { PersonAdd } from '@mui/icons-material'
import { Traffic } from '@mui/icons-material'
import { data1, data2, data3, data4 } from './data'


const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack direction={'row'} sx={{flexWrap:'wrap',gap:1, alignItems:'center'}}
     justifyContent={{xs:'center',md:'space-between'}}>
     
     <Card icon={<Email sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={"12,361"} subTitle={'Email sent'}
      increase={'+14%'} data={data1} scheme={'nivo'}/>
      <Card icon={<PointOfSale sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />}
      title={'431.225'} subTitle={'sales obtaind'} increase={'+21%'} data={data2} scheme={'set1'}/>
      <Card icon={<PersonAdd sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />} title={'32.441'}
      subTitle={'New Clients'} increase={'+5%'} data={data3} scheme={'set3'}/>
     <Card icon={<Traffic sx={{ fontSize: '23px', color: theme.palette.secondary.main }} />}
      title={'1,325,124'} subTitle={'trransactions'} increase={'+62%'} data={data4} scheme={'set2'}/>  
     
      </Stack>
  )
}

export default Row1