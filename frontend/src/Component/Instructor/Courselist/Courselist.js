import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Courselist.css";
import { Link } from "react-router-dom";
import coursecontent1 from "../../../Asset/coursecontent1.jpg";
import coursecontent2 from "../../../Asset/Coursecontent2.jpg";
import coursecontent3 from "../../../Asset/coursecontent3.jpg";

function Courselist() {
  return (
    <div className="container-fluid bgfullpath mb-5">
      <div className="container card mt-3">
        <h3 className="text-start p-4">Course Overview</h3>
        <hr/>
        <div className="row mb-3 ">
          <div className="col-sm-4 col-md-4 my-3">
            <input type="search" className="form-control" placeholder="Search courses..." />
          </div>
          <div className="col-sm-4 col-md-4 my-3">
            <select className="form-select">
              <option value="">Sort by Course Name</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
              <option value="course4">Course 4</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={coursecontent1} className="card-img-top" alt="Course" />
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <p className="card-text">Brief description of the course.</p>
                <Link to="/instructordashboard/coursemodule" className="btn btn-primary">Add Course Content</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={coursecontent2} className="card-img-top" alt="Course" />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">Brief description of the course.</p>
                <Link to="/instructordashboard/coursemodule" className="btn btn-primary">Add Course Content</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src={coursecontent3} className="card-img-top" alt="Course" />
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">Brief description of the course.</p>
                <Link to="/instructordashboard/coursemodule" className="btn btn-primary">Add Course Content</Link>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default Courselist;
