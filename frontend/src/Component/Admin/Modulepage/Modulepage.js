
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Modulepage.css";

function Modulepage() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [textareas, setTextareas] = useState(['']);

  useEffect(() => {
    // Fetch courses from the backend
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        console.log(response.data);
        setCourses(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the courses!", error);
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

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  const handleSaveModule = () => {
    console.log(textareas, selectedCourse);
    // Save the module data to the backend
    textareas.forEach(textarea => {
      if (textarea.trim() !== '' && selectedCourse !== '') {
        axios.post('http://localhost:5000/api/createModules', {
          courseid: selectedCourse,
          modulename: textarea
        })
        .then(response => {
          console.log("Module saved successfully!");
        })
        .catch(error => {
          console.error("There was an error saving the module!", error);
        });
      }
    });
  };

  return (
    <div className='container-fluid'>
      <div className=' rounded-5'>
      <div className='d-flex '>
        <h4 className='mx-4'>Course Module</h4>
       
         
          <select onChange={handleCourseChange} value={selectedCourse} className='custom-select' required>
            <option value=''>Select the Course</option>
            {courses.map(course => (
              <option key={course.courseid} value={course.courseid}>{course.coursename}</option>
            ))}
          </select>
        </div>
      </div>

      {textareas.map((textarea, index) => (
        <div key={index} className='d-flex align-items-center my-2'>
          <textarea
            className='form-control mx-3'
            value={textarea}
            onChange={(e) => handleTextareaChange(index, e.target.value)}
            rows="3"
            cols="50"
          />
          <button
            className='addbutton rounded-3'
            onClick={addTextarea}
          >
            +
          </button>
        </div>
      ))}
      <div className="d-flex justify-content-center mt-3">
          <button type="submit" className='btn btn-small btn-success'>Submit</button>
         
        </div>
        </div>
   
  );
}

export default Modulepage;
