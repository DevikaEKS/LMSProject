// import React, { useState } from "react";
// import DropdownTreeSelect from 'react-dropdown-tree-select';
// import 'react-dropdown-tree-select/dist/styles.css';


// import axios from "axios";
// import "./Modulepage.css";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Modulepage() {
//   const [textareas, setTextareas] = useState([""]);
//   const [selected, setSelected] = useState([]);


//   useEffect(() => {
//     // Fetch the courses when the component mounts
//     axios.get("http://localhost:5000/course/getcourse")
//     .then((res) => {
//       console.log(res.data);
//       setCourses(res.data.result); 
//     });
//   }, []);



//   // Example category data with nested courses, modules, and submodules
//   const data = [
//     {
//       label: 'Course 1',
//       value: 'Course-1',
//       children: [
//         {
//           label: 'Module 1.1',
//           value: 'Module-1-1',
//           children: [
//             {
//               label: 'Submodule 1.1.1',
//               value: 'Submodule-1-1-1',
//               children: [
//                 {
//                   label: 'Video 1.1.1.1',
//                   value: 'Video-1-1-1-1',
//                 },
//                 {
//                   label: 'Quiz 1.1.1.2',
//                   value: 'Quiz-1-1-1-2',
//                 },
//               ],
//             },
//             {
//               label: 'Module 1.1.2',
//               value: 'module-1-1-2',
//               children: [
//                 {
//                   label: 'Submodule 1.1.2.1',
//                   value: 'submodule-1-1-2-1',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           label: 'Course 1.2',
//           value: 'course-1-2',
//           children: [
//             {
//               label: 'Module 1.2.1',
//               value: 'module-1-2-1',
//               children: [
//                 {
//                   label: 'Submodule 1.2.1.1',
//                   value: 'submodule-1-2-1-1',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: 'Category 2',
//       value: 'category-2',
//       children: [
//         {
//           label: 'Course 2.1',
//           value: 'course-2-1',
//           children: [
//             {
//               label: 'Module 2.1.1',
//               value: 'module-2-1-1',
//               children: [
//                 {
//                   label: 'Submodule 2.1.1.1',
//                   value: 'submodule-2-1-1-1',
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           label: 'Course 2.2',
//           value: 'course-2-2',
//           children: [
//             {
//               label: 'Module 2.2.1',
//               value: 'module-2-2-1',
//               children: [
//                 {
//                   label: 'Submodule 2.2.1.1',
//                   value: 'submodule-2-2-1-1',
//                 },
//               ],
//             },
//             {
//               label: 'Module 2.2.2',
//               value: 'module-2-2-2',
//               children: [
//                 {
//                   label: 'Submodule 2.2.2.1',
//                   value: 'submodule-2-2-2-1',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   const handleChange = (currentNode, selectedNodes) => {
//     setSelected(selectedNodes);

   
//     if (currentNode && currentNode.label) {
//       // alert(`Selected: ${currentNode.label}`);

//     }

//     console.log('Selected Nodes:', selectedNodes);
//   };
//   const addTextarea = () => {
//     setTextareas([...textareas, ""]);
//   };

//   const handleTextareaChange = (index, value) => {
//     const newTextareas = [...textareas];
//     newTextareas[index] = value;
//     setTextareas(newTextareas);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Filter out any empty textarea values
//     const moduleNames = textareas.filter((name) => name.trim() !== "");

//     if (moduleNames.length === 0) {
//       alert("Please enter at least one module name.");
//       return;
//     }

//     // Send the module names to the backend
//     axios
//       .post("http://localhost:5000/course/addmodule", {
//         moduleNames, // Send all module names as an array
//       })
//       .then((res) => {
//         console.log(res);

//         if (
//           res.data.message === "moduleNames is mandatory and should be an array"
//         ) {
//           toast.error("moduleNames is mandatory and should be an array");
//         } else if (res.data.message === "modules added successfully") {
//           toast.success("modules added successfully");
//           setTextareas([""]); // Clear textareas after successful submission
//         } else if (res.data.message === "db_error") {
//           toast.error("db_error");
//         }
//       })
//       .catch((error) => {
//         toast.error("There was an error creating the modules!", error);
//       });
//   };

//   return (
//     <div className="container-fluid modpart">
//        <h3 className="violettext">Welcome to Course Module</h3>
//        <h6>Select the Course</h6>
//       <DropdownTreeSelect
//         data={data}
//         onChange={handleChange}
//         className="bootstrap-demo"
//         texts={{ placeholder: "Select..." }}
//       />
//       <ToastContainer />
     
//       <div className="row">
//         <form onSubmit={handleSubmit}>
//           <p className="violettext my-1">Add Module</p>
//           <div className="submodulebox rounded-3">
//             {textareas.map((textarea, index) => (
//               <div key={index} className="d-flex align-items-center my-2 p-2">
//                 <textarea
//                   className="form-control mx-3"
//                   value={textarea}
//                   onChange={(e) => handleTextareaChange(index, e.target.value)}
//                   rows="2"
//                   cols="40"
//                   required
//                 />
//                 {index === textareas.length - 1 && (
//                   <button
//                     type="button"
//                     className="addbutton"
//                     onClick={addTextarea}
//                   >
//                     +
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//           <div className="d-flex justify-content-between">
//             <button type="submit" className="submitbutton">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Modulepage;



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
  const [courses, setCourses] = useState([]); // Initialize with an empty array

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
    <div className="container-fluid modpart">
      <h3 className="violettext">Welcome to Course Module</h3>
      <h6>Select the Course</h6>
      <DropdownTreeSelect
        data={formatData(courses)}
        onChange={handleChange}
        className="bootstrap-demo"
        texts={{ placeholder: "Select..." }}
      />
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
                  required
                />
                {index === textareas.length - 1 && (
                  <button
                    type="button"
                    className="addbutton"
                    onClick={addTextarea}
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="submitbutton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modulepage;
