import React from 'react';
import "./Coursecontent.css";
import { Link } from 'react-router-dom';

function Coursecontent() {
  return (
    <div className='container-fluid'>
      <div className=' h-100'>
        <form className='p-3 rounded-4 frmshadow'>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseFullName">Course Full Name</label>
              <input id="courseFullName" type='text' className="form-control" required/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseModuleName">Course Module Name</label>
              <input id="courseModuleName" type='text' className="form-control" required/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="coursesubmoduleName">Course Submodule Name</label>
              <input id="coursesubmoduleName" type='text' className="form-control" required/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseImage">Course Image</label>
              <input id="courseImage" type='file' className="form-control" accept=".jpg,.jpeg" />
            </div>
          </div>
         
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseAudio">Course Audio</label>
              <input id="courseAudio" type='file' className="form-control" accept=".mp3,.wav" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseVideo">Course Video</label>
              <input id="courseVideo" type='file' className="form-control" accept=".mp4,.avi,.mov" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="coursePDF">Course PDF</label>
          <input id="coursePDF" type='file' className="form-control" accept=".pdf" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="coursePPT">Course PPT</label>
              <input id="coursePPT" type='file' className="form-control" accept=".ppt,.pptx" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" className="form-control"></textarea>
            </div>
          </div>
          <Link to="/instructordashboard/pages" className="submitbutton1 pt-2 px-2 rounded-3 btn btn-dark">
       Next
      </Link>
        </form>
      </div>
    </div>
  );
}

export default Coursecontent;
