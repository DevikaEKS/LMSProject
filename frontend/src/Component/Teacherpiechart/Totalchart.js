import React from 'react'
import BarChart from './Barchart'
import DoughnutChart from './Piechart'

function Totalchart() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-12 col-lg-6'>
                <BarChart/>
            </div>
            <div className='col-sm-12 col-lg-6'>
               <DoughnutChart/>
            </div>
        </div>
    </div>
  )
}

export default Totalchart