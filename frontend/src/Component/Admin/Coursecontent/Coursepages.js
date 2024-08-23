import React from "react";
import "./Coursepages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Coursepages() {
  return (
    <div className="container-fluid">
      <div className="h-100 mx-5">
        <form className="p-3 rounded-4 frmshadow bgpurplecard">
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="availableFrom">Available From</label>
              <input
                id="availableFrom"
                type="date"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="availableUntil">Available Until</label>
              <input
                id="availableUntil"
                type="date"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="LevelofPass">Completion Criteria</label>
              <input
                id="LevelofPass"
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-inner w-75">
              <label htmlFor="groupMode">Group Mode</label>
              <div className="custom-dropdown">
                <select id="groupMode" className="form-control">
                  <option value="select the mode">Select the mode</option>
                  <option value="group">Group Mode</option>
                  <option value="individual">Individual</option>
                </select>
              </div>
            </div>
          </div>
          <input type="submit" className="orangebtn border-0 rounded-3" />
        </form>
      </div>
    </div>
  );
}

export default Coursepages;
