import React from 'react'
import "./Coursepage.css"
import girlimg from "../../Asset/graduatedgirl.png"
import { Link } from 'react-scroll'


function Coursepage() {
  return (
    <div className='container-fluid bgofcourse '>
        <div className='row'>
            <div className='col'>
                <div className=' mt-5 pt-5 ms-5'>
                    
                    <h1 className='text-start headfont'>LEARN ONLINE</h1>
                    <h3 className='text-light'>Why you are waiting for <span style={{ color:'#451b65' }}>Start Your Learning Today!</span></h3>
                    <p>Develop your Fullstack Skills by our course </p>
                    
                    <h4>This Skills Reach You to </h4>
                    
                    <ul className='text-center mt-5'>
                    <div className='descard'>
                        <li><b>Frontend Developer</b></li>
                        <li>Backend Developer</li>
                        <li>Fullstack Developer</li>
                        </div>
                    </ul>
                 {/* <Link to="/dashboard"><button className='btn btn-light'>View More</button></Link>   */}
                </div>
            </div>
            <div className='col'>
                <img src={girlimg}/>
            </div>
        </div>
        <div className='row'>
            <h1>Testimonials</h1>
        </div>
    </div>
  )
}

export default Coursepage