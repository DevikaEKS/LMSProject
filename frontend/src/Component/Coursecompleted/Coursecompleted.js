import React from 'react'
import "./Coursecompleted.css";
import stud1 from "../../Asset/graduatedgirl.png";
import stud2 from "../../Asset/stud2.png";
import stud3 from "../../Asset/lapcard.png";
import certificate from "../../Asset/certificate.png";
import StarRating from './StarRating';
import { Link } from 'react-router-dom';

function Coursecompleted() {
    const now = 60;
  return (
    <div className='container-fluid'>
    <div className='row my-3'>
        <div className='col'>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4 p-2">
                        <img src={stud1} class="img-fluid rounded-start" alt="..." />
                    </div>
                    {/* demo */}
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title titletext my-2">Learn UI/UX Design Fundamentals</h5>
                            <div className='d-flex justify-content-center'>
                            <StarRating rating={4.5} />
                            </div>
                            <p>Overall Progress</p>
                            <button className='rounded-2 my-2'>Click to Download the Certificate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='col'> 
        <img src={certificate} alt='certificate' className='cert'/>
        </div>
    </div>

    {/* //secondpart */}

    <div className='row my-3'>
        <div className='col'>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4 p-2">
                        <img src={stud2} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title titletext mt-2">React JS</h5>
                            <div className='d-flex justify-content-center'>
                            <StarRating rating={4} />
                            </div> 
                            <p>Overall Progress</p> 
                            <button className='rounded-2 my-2'>Click to Download the Certificate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='col'>   
        <img src={certificate} alt='certificate' className='cert'/>
        </div>
    </div>

    {/* thirdpart */}
    <div className='row my-3'>
        <div className='col'>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                    <div class="col-md-4 p-2">
                        <img src={stud3} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title titletext mt-2">Frontend Development</h5> 
                            <div className='d-flex justify-content-center'>
                            <StarRating rating={4} />
                            </div>
                            <p>Overall Progress</p>
                            <Link>Click to Download the Certificate</Link>
                            {/* <button className='rounded-2 my-2'>Click to Download the Certificate</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='col'> 
           <img src={certificate} alt='certificate' className='cert'/>  
        </div>
    </div>
</div>
  )
}

export default Coursecompleted