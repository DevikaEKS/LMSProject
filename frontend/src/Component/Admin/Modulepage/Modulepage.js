
import React, { useState, useEffect } from "react";
import DropdownTreeSelect from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css';
import axios from "axios";
import "./Modulepage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Modulepage() {
  const [textareas, setTextareas] = useState([""]);
  const [selected, setSelected] = useState([]);
  const [courses, setCourses] = useState([]); 

  useEffect(() => {
    // Fetch the courses when the component mounts
    axios.get("http://localhost:5000/course/getcourse")
      .then((res) => {
        console.log(res.data);
        if (res.data && res.data.result) {
          setCourses(res.data.result); 
        } else {
          toast.error("Unexpected response format.");
        }
      })
      .catch((error) => {
        toast.error("Failed to fetch courses!");
        console.error(error);
      });
  }, []);

  // Transform course data for DropdownTreeSelect
  const formatData = (courses) => {
    if (!courses || !Array.isArray(courses)) {
      return []; // Return an empty array if courses is not defined or not an array
    }

    return courses.map(course => ({
      label: course.coursename, // Assuming course object has a 'name' property
      value: course.id,   // Assuming course object has an 'id' property
      children: course.modules ? course.modules.map(module => ({
        label: module.name, // Assuming module object has a 'name' property
        value: module.id,   // Assuming module object has an 'id' property
        children: module.submodules ? module.submodules.map(submodule => ({
          label: submodule.name, // Assuming submodule object has a 'name' property
          value: submodule.id,   // Assuming submodule object has an 'id' property
        })) : [],
      })) : [],
    }));
  };

  const handleChange = (currentNode, selectedNodes) => {
    setSelected(selectedNodes);
    console.log('Selected Nodes:', selectedNodes);
  };

  const addTextarea = () => {
    setTextareas([...textareas, ""]);
  };

  const handleTextareaChange = (index, value) => {
    const newTextareas = [...textareas];
    newTextareas[index] = value;
    setTextareas(newTextareas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const moduleNames = textareas.filter((name) => name.trim() !== "");

    if (moduleNames.length === 0) {
      alert("Please enter at least one module name.");
      return;
    }

    axios.post("http://localhost:5000/course/addmodule", {
      moduleNames,
    })
    .then((res) => {
      console.log(res);
      if (res.data.message === "moduleNames is mandatory and should be an array") {
        toast.error("moduleNames is mandatory and should be an array");
      } else if (res.data.message === "modules added successfully") {
        toast.success("modules added successfully");
        setTextareas([""]); // Clear textareas after successful submission
      } else if (res.data.message === "db_error") {
        toast.error("db_error");
      }
    })
    .catch((error) => {
      toast.error("There was an error creating the modules!", error);
    });
  };

  return (
    <div className="container-fluid">
      <div className="purplecards rounded-2 p-3">
      <h3 className="violettext">Welcome to Course Module</h3>
      <h6>Select the Course</h6>
      <DropdownTreeSelect
        data={formatData(courses)}
        onChange={handleChange}
        className="bootstrap-demo"
        texts={{ placeholder: "Select..." }}/>
      <ToastContainer />
      <div className="row">
        <form onSubmit={handleSubmit}>
          <p className="violettext my-1">Add Module</p>
          <div className="submodulebox rounded-3">
            {textareas.map((textarea, index) => (
              <div key={index} className="d-flex align-items-center my-2 p-2">
                <textarea
                  className="form-control mx-3"
                  value={textarea}
                  onChange={(e) => handleTextareaChange(index, e.target.value)}
                  rows="2"
                  cols="40"
                  required />
                {index === textareas.length - 1 && (
                  <button
                    type="button"
                    className="addbutton rounded-2"
                    onClick={addTextarea} >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="submitbutton rounded-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Modulepage;
