import React from 'react'
import "./Lessons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLock } from '@fortawesome/free-solid-svg-icons';
import img2 from "../../../Asset/lapcard.png";
import { Link } from 'react-router-dom';
import lesson2 from "../../../Asset/who suffers.png";

function Lessons() {
    const handleLockClick = () => {
        alert("Complete the previous session to access next session");
    };
    return (
        <div className='container-fluid'>
            <div className='row lessoncard py-2 rounded-3 my-4 '>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={lesson2} alt='lesson1' className='rounded-3 lesson'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center textpart'>
                    <h5>LESSON 1</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                <Link to="/courseview" className='text-light text-decoration-none'> <FontAwesomeIcon icon={faAngleRight}/> </Link>     
                </div>
            </div>


            <div className='row lessoncard py-2 rounded-3 my-4 text-start'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={lesson2} alt='lesson1' className='rounded-3 lesson'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center '>
                    <h5>LESSON 2</h5>
                            <h3>Who Suffers?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>


            <div className='row lessoncard py-2 rounded-3 my-4 text-start'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center '>
                    <h5>LESSON 3</h5>
                            <h3>How may people are suffering?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>


            <div className='row lessoncard py-2 rounded-3 my-4 text-start'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center '>
                    <h5>LESSON 4</h5>
                            <h3>The Dangerous Red Flag Diagnoses</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock} onClick={handleLockClick}/>   
                </div>
            </div>           


                <div className='row lessoncard py-2 rounded-3 my-4 text-start'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center'>
                    <h5>LESSON 5</h5>
                            <h3>The Global Costs of Back Pain</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

             <div className='row lessoncard py-2 rounded-3 my-4 text-start'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center'>
                        <h5>LESSON 6</h5>
                    <h3>All About Your Spine</h3>
                    <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

             {/* <div className='row lessoncard py-2 rounded-3 my-3 text-start'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 7</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

             <div className='row lessoncard py-2 rounded-3 my-3 text-start'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 8</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

             <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 9</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

             <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 10</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

             <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 11</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div> 

            <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 12</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-2 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

            <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 13</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

            <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 14</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

            <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 15</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

            <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 16</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

            <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 17</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div>

            <div className='row lessoncard py-2 rounded-3 my-3'>
                    <div className='col-sm-12 col-lg-4'>
                    <img src={img2} alt='lesson1' className='rounded-3'/>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
                    <h5>LESSON 18</h5>
                            <h3>Who am I?</h3>
                            <p>1 video 2 Quizzes</p>
                    </div>
                    <div className='col-sm-12 col-lg-4 d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon icon={faLock}/>   
                </div>
            </div> */}

        </div>
    )
}

export default Lessons