import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Admindashboard.css";
import Adminsidebar from '../Adminsidebar/Adminsidebar';

function Admindashboard() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
            <Adminsidebar/>
            </div>
            <div className='col-10'>
            <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Admindashboard

