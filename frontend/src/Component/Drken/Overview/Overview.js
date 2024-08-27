import React from 'react'
import DrKen from "../../../Asset/ken.png";
import "./Overview.css";

function Overview() {
  return (
    <div className='container overviewcontent'>
            <div className='row my-5'>
                <div className='col'>
                    <div className='dcurve'>
                    <img src={DrKen} alt='About Dr.Ken Hansraj,M.D' className='drimg'/>
                    </div>
                </div>
                <div className='col aboutDr mt-5'>
                <h2 className='Drtext my-4'>Dr.Ken Hansraj,M.D</h2>
                <p className='abtdr'>Kenneth K. Hansraj, M.D. is a spinal and orthopedic surgeon specializing in cervical, thoracic and lumbar procedures. He performs knifeless surgery, bloodless spine surgery, minimally invasive approaches when possible, advanced bone grafting, techniques using spinal navigation to assess instrumentation placement, modern operating tables, spinal cord and nerve monitoring during spine surgery and uses stem cells in spine surgery.</p>
                <p className='abtdr'>Dr.Ken beleives in whole body wellness,preventative care and that the spine is a principal indicator of general health impacted by "human software and hardware."</p>
                </div>
            </div>
        </div>
  )
}

export default Overview