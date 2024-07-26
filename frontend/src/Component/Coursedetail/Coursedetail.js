
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Coursedetail.css";
import { Link } from "react-router-dom";

function CourseDetail() {
  return (
    <div className="container-fluid bgfullpath mb-5">
      <div className="container card w-75">
        <h3 className="text-start p-4">Course Overview</h3>
        <hr />
        <div className="row mb-3">
          <div className="col-sm-4 col-md-4 ms-2">
            <input type="search" className="form-control" placeholder="Search courses..." />
          </div>
          <div className="col-sm-4 col-md-4">
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
              <img src="https://img.freepik.com/free-photo/school-supplies-with-laptop-tablet_23-2148179039.jpg?t=st=1720624830~exp=1720628430~hmac=65bee17fba281855bfc969f2c85a2149df474f1191fb525ee660af552924ee11&w=900" className="card-img-top" alt="Course" />
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <p className="card-text">Brief description of the course.</p>
                <Link to="/activecourse" className="btn btn-primary">Enroll</Link>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src="https://img.freepik.com/free-photo/office-supplies-keyboard-coffee-cup-card-eyeglasses-candle-headphone-blue-background_23-2148041892.jpg?t=st=1720624802~exp=1720628402~hmac=b63f990be6aea8031eb591bfa44835b42849be5061b37ee01f8b3a36b383303d&w=900" className="card-img-top" alt="Course" />
              <div className="card-body">
                <h5 className="card-title">HTML</h5>
                <p className="card-text">Brief description of the course.</p>
                <a href="#" className="btn btn-primary">Enroll</a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-3">
            <div className="card">
              <img src="https://img.freepik.com/free-photo/top-view-pink-keyboard-with-copyspace_23-2148198130.jpg?t=st=1720624774~exp=1720628374~hmac=68e2869e684e8091471df69091f15927aac780ea92d8a64625cfcdecf8a2ab75&w=900" className="card-img-top" alt="Course" />
              <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">Brief description of the course.</p>
                <a href="#" className="btn btn-primary">Enroll</a>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
