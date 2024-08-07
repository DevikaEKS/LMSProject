import React from 'react';
import './Courseupdation.css'; // Import your CSS file

function Courseupdation() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const courseFullName = event.target.courseFullName.value;
    const courseImage = event.target.courseImage.files[0];

    if (courseFullName=="") {
      alert('Course Full Name is required');
      return;
    }

    if (!courseImage) {
      alert('Course Image is required');
      return;
    }

    // Add additional form submission logic here
    console.log('Form submitted successfully');
  };

  return (
    <div className='frmbg p-5 h-100'>
      <form className='bg-light p-5 rounded-5' onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseFullName">Course Full Name</label>
            <input id="courseFullName" name="courseFullName" type='text' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseShortName">Course Short Name</label>
            <input id="courseShortName" name="courseShortName" type='text' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseCategory">Course Category</label>
            <select id="courseCategory" name="courseCategory" className="form-control">
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
            <select id="courseVisibility" name="courseVisibility" className="form-control">
              <option>Students</option>
              <option>All</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseStartDate">Course Start Date</label>
            <input id="courseStartDate" name="courseStartDate" type='date' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseEndDate">Course End Date</label>
            <input id="courseEndDate" name="courseEndDate" type='datetime-local' className="form-control" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseImage">Course Image</label>
            <input id="courseImage" name="courseImage" type='file' className="form-control" accept=".jpg, .jpeg" required />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-inner">
            <label htmlFor="courseDescription">Course Description</label>
            <textarea id="courseDescription" name="courseDescription" className="form-control"></textarea>
          </div>
        </div>
        <input type='submit' className='frmbutton' />
      </form>
    </div>
  );
}

export default Courseupdation;
