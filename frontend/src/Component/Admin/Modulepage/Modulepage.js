

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Modulepage.css";
import { Link } from 'react-router-dom';

function Modulepage() {
  const [modules, setModules] = useState([]);
  const [textareas, setTextareas] = useState(['']);
  const [selectedModule, setSelectedModule] = useState('');
  const [courseId, setCourseId] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/api/getModules")
      .then(res => {
        console.log("Fetched modules:", res.data);
        setModules(res.data);
      })
      .catch(error => {
        console.error("There was an error fetching the modules!", error);
      });
  }, []);

  const addTextarea = () => {
    setTextareas([...textareas, '']);
  };

  const handleTextareaChange = (index, value) => {
    const newTextareas = [...textareas];
    newTextareas[index] = value;
    setTextareas(newTextareas);
  };

  const handleModuleChange = (e) => {
    setSelectedModule(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submodulename = textareas[0]; 

    axios.post("http://localhost:5000/api/createSubModules", {
      courseid: courseId,
      moduleid: selectedModule,
      submodulename: submodulename
    })
    .then(res => {
      console.log("Submodule created:", res.data);
      alert("Submodule created successfully!");
    })
    .catch(error => {
      console.error("There was an error creating the submodule!", error);
    });
  };

  return (
    <div className='container-fluid modpart'>
      <h3 className='violettext'>Welcome to Course Module</h3>
      <div className='row'>
        <form onSubmit={handleSubmit}>
          <div className='col-12'>
            <h5 className='mt-4 violettext'>Select Course</h5>
            <select>
              <option>select the course</option>
              <option>select the course</option>
            </select>
          </div>
          <p className='violettext my-1'>Add Module</p>
          <div className='submodulebox rounded-3'>
            {textareas.map((textarea, index) => (
              <div key={index} className='d-flex align-items-center my-2 p-2'>
                <textarea className='form-control mx-3' value={textarea} onChange={(e) => handleTextareaChange(index, e.target.value)} rows="2" cols="40" required />
                <button type='button' className='addbutton' onClick={addTextarea}>+</button>
              </div>
            ))}
          </div>
          <div className='d-flex justify-content-between'>
          <button type="submit" className='submitbutton'>Submit</button>
          <Link to="/instructordashboard/coursesubmodule" className="submitbutton1 pt-2 px-2 rounded-3">
        Add Course Submodule
      </Link>
          </div>
        </form>
      </div> 
    </div>
  );
}

export default Modulepage;
