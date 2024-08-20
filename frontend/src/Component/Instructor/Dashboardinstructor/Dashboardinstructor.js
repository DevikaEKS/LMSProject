
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebarinstructor from '../Sidebarinstructor/Sidebarinstructor';
// import './DashboardLayout.css'; // Assuming you have some styles for layout


const Dashboardinstructor = () => {
  return (
   <div className='container-fluid'>
    <div className='row'>
     <div className='col-sm-2 col-md-1'>
     <Sidebarinstructor/>
      </div>
      <div className='col-sm-10 col-md-11'>
      <div className="dashboard-content">
    <Outlet />
      </div>
      </div>hk
      </div>
    </div>
  );
};

export default Dashboardinstructor;