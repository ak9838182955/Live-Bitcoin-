import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as Chartjs, CategoryScale , LinearScale , PointElement , LineElement , Title ,Tooltip , Legend} from 'chart.js';

Chartjs.register
(
{
    Chartjs , CategoryScale , LinearScale , PointElement , LineElement , Title ,Tooltip , Legend}
)

const Chart = (   {arr = [], currency , days}) => {

    
        const prices = [1,2,34,];
        const date = [ "12/2/22", "23/2/23", "32/2/23"]


      const data={

      };



    
  return (
    <>
      
      <Line   options={{
        responsive:true,

      }}  data = {{
        labels: date,
        datasets:[{
            label:`price in currency ${currency}`,
            data: prices ,borderColor:"rgb(255 , 99 ,132)",
            backgroundColor:"rgba(255,99,132)"
        },]
      }}   />
        

    </>
  )
}

export default Chart