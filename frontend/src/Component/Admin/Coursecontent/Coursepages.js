import React from 'react';
import "./Coursecontent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Coursepages() {
    return (
        <div className='container-fluid'>
            <div className=' h-100'>
                <form className='p-3 rounded-4 frmshadow'>
                    <div className="form-group">
                        <div className="form-group-inner">
                            <label htmlFor="courseIntroduction">Course Introduction</label>
                            <input id="courseIntroduction" type='text' className="form-control" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group-inner">
                            <label htmlFor="coursesubmoduleName">Course Content</label>
                            <input id="coursesubmoduleName" type='text' className="form-control" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group-inner">
                            <label htmlFor="courseImage">Displaywidth</label>
                            <input id="courseImage" type='text' className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group-inner">
                            <label htmlFor="courseAudio">Displayheight</label>
                            <input id="courseAudio" type='text' className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="form-group-inner">
                            <label htmlFor="availableFrom">Available From</label>
                            <input id="availableFrom" type="datetime-local" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group-inner">
                            <label htmlFor="availableUntil">Available Until</label>
                            <input id="availableUntil" type="datetime-local" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group-inner">
                            <label htmlFor="LevelofPass">Completion Criteria</label>
                            <input id="LevelofPass" type='text' className="form-control" required />
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <div className="form-group-inner w-75">
                            <label htmlFor="AcessMode">Restrict Access</label>
                            <select id="AcessMode" className="form-control">
                                <option value="Select the Access">Select the Access</option>
                                <option value="Provide Access">Provide Access</option>
                                <option value="Restrict Access">Restrict Access</option>
                            </select>
                        </div>
                    </div> */}
                    
        <div className="form-group">
            <div className="form-group-inner w-75">
              <label htmlFor="groupMode">Group Mode</label>
              <div className="custom-dropdown">
                <select id="groupMode" className="form-control" >
                  <option value="select the mode">Select the mode</option>
                  <option value="group">Group Mode</option>
                  <option value="individual">Individual</option>
                </select>
              </div>
            </div>
          </div>
       </form>
            </div>
        </div>
    );
}

export default Coursepages;
