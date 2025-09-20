import { useTheme } from "@mui/material";
import Bar from "./Bar";
import Header from '../../components/Header';

const BarChart = () => {
  const theme = useTheme()
  return (
  <>
  <Header title={'Bar Chart'} subTitle={'Chart of countries employment rates'}/>
  <Bar theme={theme}/>
  </>
  )
}

export default BarChart
