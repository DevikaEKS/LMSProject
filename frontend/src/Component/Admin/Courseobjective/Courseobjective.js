import React, { useEffect, useState } from 'react';
import "./Courseobjective.css";
import axios from 'axios';

function Courseobjective() {
  const [modules, setModules] = useState([]);
  const [textareas, setTextareas] = useState(['']);
  const [selectedModule, setSelectedModule] = useState('');
  const [courseId, setCourseId] = useState(1); // You can set this based on your requirement

  useEffect(() => {
    axios.get("http://localhost:5000/api/getModules")
      .then(res => {
        console.log("Fetched modules:", res.data); // Debugging output
        setModules(res.data); // Update state with fetched modules
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

    // Assume only the first textarea value is the submodule name for simplicity
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

  console.log("Modules state:", modules); // Debugging output

  return (
    <div className='container-fluid'>
      <form onSubmit={handleSubmit}>
        <div className='d-flex'>
          <h4 className='mx-4'>Course Objective</h4>
          <select value={selectedModule} onChange={handleModuleChange} className='custom-select' required>
            <option value="">Select the Course Module</option>
            {modules.length > 0 ? (
              modules.map(module => (
                <option key={module.moduleid} value={module.moduleid}>
                  {module.modulename}
                </option>
              ))
            ) : (
              <option value="">No modules available</option>
            )}
          </select>
        </div>
        {textareas.map((textarea, index) => (
          <div key={index} className='d-flex align-items-center my-2'>
            <textarea
              className='form-control mx-3'
              value={textarea}
              onChange={(e) => handleTextareaChange(index, e.target.value)}
              rows="3"
              cols="50"
              required
            />
            <button type='button' className='addbutton' onClick={addTextarea}>+</button>
          </div>
        ))}
        <button type="submit" className='submitbutton'>Submit</button>
      </form>
    </div>
  );
}

export default Courseobjective;
