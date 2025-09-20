import { ResponsiveChoropleth } from '@nivo/geo'
import Geo from './geo'
import Header from '../../components/Header'


const Geography = () => {

  return (

<>
<Header title={'Geography'} subTitle={'Map showing the population of countries around the world'}/>

  <Geo/>
  </>
 


    
  )
}

export default Geography