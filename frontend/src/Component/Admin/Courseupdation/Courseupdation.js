import React from 'react';
import './Courseupdation.css'; // Import your CSS file

function Courseupdation() {
  return (
    <div className='frmbg p-5 h-100'>
      <form className='bg-light p-5 rounded-5'>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseFullName">Course Full Name</label>
            <input id="courseFullName" type='text' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseShortName">Course Short Name</label>
            <input id="courseShortName" type='text' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseCategory">Course Category</label>
            <select className="form-control">
              <option>AWS</option>
              <option>FullStack</option>
              <option>Angular</option>
              <option>SQL</option>
              <option>MongoDB</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseVisibility">Course Visibility</label>
            <select className="form-control">
              <option>Students</option>
              <option>All</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseStartDate">Course Start Date</label>
            <input id="courseStartDate" type='date' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseEndDate">Course End Date</label>
            <input id="courseEndDate" type='datetime-local' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseImage">Course Image</label>
            <input id="courseImage" type='file' className="form-control" accept=".jpg, .jpeg" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseDescription">Course Description</label>
            <textarea id="courseDescription" className="form-control"></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Courseupdation;
