// src/Component/Sidebar/Sidebarnew.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; 
const Sidebarnew = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Dashboard</div>
      <div className="list-group list-group-flush">
        <NavLink to="/dashboard/studattendance" className="list-group-item list-group-item-action bg-light">Home</NavLink>
        <NavLink to="/dashboard/unapproved" className="list-group-item list-group-item-action bg-light">Profile</NavLink>
        <NavLink to="/dashboard/approved" className="list-group-item list-group-item-action bg-light">Settings</NavLink>
      </div>
    </div>
  );
}

export default Sidebarnew;
