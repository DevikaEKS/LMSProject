// import React, { useEffect, useState } from 'react';
// import "./Courseobjective.css";
// import axios from 'axios';

// function Courseobjective() {
//   const [modules, setModules] = useState([]);
//   const [textareas, setTextareas] = useState(['']);
//   const [selectedModule, setSelectedModule] = useState('');
//   const [courseId, setCourseId] = useState(1); 

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/getModules")
//       .then(res => {
//         console.log("Fetched modules:", res.data); 
//         setModules(res.data); 
//       })
//       .catch(error => {
//         console.error("There was an error fetching the modules!", error);
//       });
//   }, []);

//   const addTextarea = () => {
//     setTextareas([...textareas, '']);
//   };

//   const handleTextareaChange = (index, value) => {
//     const newTextareas = [...textareas];
//     newTextareas[index] = value;
//     setTextareas(newTextareas);
//   };

//   const handleModuleChange = (e) => {
//     setSelectedModule(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Assume only the first textarea value is the submodule name for simplicity
//     const submodulename = textareas[0];

//     axios.post("http://localhost:5000/api/createSubModules", {
//       courseid: courseId,
//       moduleid: selectedModule,
//       submodulename: submodulename
//     })
//     .then(res => {
//       console.log("Submodule created:", res.data);
//       alert("Submodule created successfully!");
//     })
//     .catch(error => {
//       console.error("There was an error creating the submodule!", error);
//     });
//   };

//   console.log("Modules state:", modules); 

//   return (
//     <div className='container-fluid'>
//       <h3 className='violettext'>Welcome to Course Submodule</h3>
//       <div className='row'>
//       <form onSubmit={handleSubmit}>
//         <div className='col-12'>
//           <h5 className='mt-4 violettext'>Select Module</h5>
//           <select value={selectedModule} onChange={handleModuleChange} className='custom-select rounded-3 brd mt-1' required>
//             <option value="">Select the Course Module</option>
//             {modules.length > 0 ? (
//               modules.map(module => (
//                 <option key={module.moduleid} value={module.moduleid}>
//                   {module.modulename}
//                 </option>
//               ))
//             ) : (
//               <option value="">No modules available</option>
//             )}
//           </select>
//         </div>
//         <p className='violettext my-1'>Add SubModule</p>
//         <div className='submodulebox rounded-3'>
//         {textareas.map((textarea, index) => (
//           <div key={index} className='d-flex align-items-center my-2  p-2'>
//             <textarea
//               className='form-control mx-3'
//               value={textarea}
//               onChange={(e) => handleTextareaChange(index, e.target.value)}
//               rows="2"
//               cols="40"
//               required
//             />
//             <button type='button' className='addbutton' onClick={addTextarea}>+</button>
//           </div>
//         ))}
//         </div>
//         <button type="submit" className='submitbutton'>Submit</button>
//       </form>
//       </div>
//     </div>
//   );
// }

// export default Courseobjective;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Courseobjective.css";

function Courseobjective() {
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

    const submodulename = textareas[0]; // Assuming the first textarea for simplicity

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
    <div className='container-fluid'>
      <h3 className='violettext '>Welcome to Course Submodule</h3>
      <div className='row mx-5'>
        <form onSubmit={handleSubmit}>
          <div className='col-12'>
            <h5 className='mt-4 violettext'>Select Module</h5>
            <select>
              <option>select the module</option>
              <option>select the module</option>
            </select>
          </div>
          <p className='violettext my-1'>Add SubModule</p>
          <div className='submodulebox rounded-3'>
            {textareas.map((textarea, index) => (
              <div key={index} className='d-flex align-items-center my-2 p-2'>
                <textarea
                  className='form-control mx-3'
                  value={textarea}
                  onChange={(e) => handleTextareaChange(index, e.target.value)}
                  rows="2"
                  cols="40"
                  required
                />
                <button type='button' className='addbutton' onClick={addTextarea}>+</button>
              </div>
            ))}
          </div>
          <button type="submit" className='submitbutton'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Courseobjective;
