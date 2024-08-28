import React, { useState } from 'react';
import "./Drkenhome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FaRegClock } from 'react-icons/fa';
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Overview from '../Overview/Overview';
import Lessons from '../Lessons/Lessons';
import icon1 from "../../../Asset/tabler_book.png";


function Drkenhome() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    if (activeTab === 'overview') {
      return (
       <Overview/>
      );
    } else if (activeTab === 'lessons') {        
      return (
       <Lessons/>
      );
    }
  };

  return (
    <div className='container text-center entiretext'>
      <div className='mx-4'>
      <h5 className='mb-2 mt-5'style={{fontWeight:"600" }}>Introduction of My Spine Coach</h5>
      <p style={{fontWeight:"500" }}>Spine therapy, often referred to as spinal rehabilitation or physical therapy for the spine, is a type of treatment designed to alleviate pain, improve function, and enhance mobility in individuals suffering from spine-related issues.</p>
      </div>
      <div className='container'>
        <div className='row lessontext py-2'>
          <div className='col'>
            <h6 className='fw-bold'><img src={icon1} style={{height:"20px",width:"20px"}} className='mx-2'/> 18 Lessons</h6>
          </div>
          <div className='col'>
            <h6 className='fw-bold'><img src={icon1} style={{height:"20px",width:"20px"}} className='mx-2'/>15 Hours</h6> 
          </div>
          <div className='col'>
            <h6 className='fw-bold'><img src={icon1} style={{height:"20px",width:"20px"}} className='mx-2'/>3,000 Enrolled</h6>
          </div>
        </div>

        <div className='row my-3'>
          <div className='col-2 mx-3'>
            <Link 
              to="#" 
              style={{ color: 'black',fontWeight:"500" }}
              onClick={() => setActiveTab('overview')} 
              className={activeTab === 'overview' ? 'active-link' : ''}
            >
              Overview
            </Link>
          </div>
          <div className='col-2 mx-3'>
            <Link 
              to="#" 
              style={{ color: 'black',fontWeight:"500" }}
              onClick={() => setActiveTab('lessons')} 
              className={activeTab === 'lessons' ? 'active-link' : ''}
            >
              Lessons
            </Link>
          </div>
        </div>

        <hr />

        <div className='content-area'>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Drkenhome;
