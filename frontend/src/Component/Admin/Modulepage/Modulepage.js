<<<<<<< HEAD
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
//       // alert(Selected: ${currentNode.label});

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
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
=======

import React, { useState, useEffect } from "react";
import DropdownTreeSelect from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css';
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
import axios from "axios";
import "./Modulepage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Modulepage() {
  const [textareas, setTextareas] = useState([""]);
  const [selected, setSelected] = useState([]);
<<<<<<< HEAD
  const [courses, setCourses] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [path, setPath] = useState("");
  const [courseId, setCourseId] = useState("");
  const [parentModule, setParentModule] = useState("");
  const [moduleStructure, setModuleStructure] = useState({});
  const [selectedModuleId, setSelectedModuleId] = useState("");
  const [selectedFile, setSelectedFile] = useState(null); // New state for file upload

  useEffect(() => {
    axios
      .get("http://localhost:5000/course/structured-data")
      .then((res) => {
        setCourses(res.data);
        setModuleStructure(buildModuleStructure(res.data));
=======
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
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
      })
      .catch((error) => {
        toast.error("Failed to fetch courses!");
        console.error(error);
      });
  }, []);

<<<<<<< HEAD
  const buildModuleStructure = (nodes) => {
    const structure = {};

    nodes.forEach((node, index) => {
      const path = `${index + 1}`;
      structure[node.value] = path;

      if (node.children && node.children.length > 0) {
        traverseChildren(node.children, path, structure);
      }
    });

    return structure;
  };

  const traverseChildren = (children, parentPath, structure) => {
    children.forEach((child, index) => {
      const childPath = `${parentPath}/${index + 1}`;
      structure[child.value] = childPath;

      if (child.children && child.children.length > 0) {
        traverseChildren(child.children, childPath, structure);
      }
    });
  };

  const findNextNumber = (parentPath) => {
    const submodulePaths = Object.values(moduleStructure).filter(
      (p) => p.startsWith(parentPath) && p !== parentPath
    );

    if (submodulePaths.length === 0) {
      return 1;
    }

    const existingNumbers = submodulePaths.map((p) => {
      const parts = p.split("/").filter(Boolean);
      return parseInt(parts[parts.length - 1], 10);
    });

    return Math.max(...existingNumbers, 0) + 1;
  };

  const addNewModule = (parentNode, newModuleName) => {
    const parentPath = moduleStructure[parentNode.value] || "";
    const nextNumber = findNextNumber(parentPath);
    const newPath = `${parentPath}/${nextNumber}`;

    const newModule = {
      value: newModuleName,
      children: [],
    };

    const updatedCourses = [...courses];
    const parent = findParentNode(updatedCourses, parentNode.value);
    if (parent) {
      const index = parent.children.findIndex(
        (child) => child.value === parentNode.value
      );
      if (index !== -1) {
        if (!parent.children[index].children) {
          parent.children[index].children = [];
        }
        parent.children[index].children.push(newModule);
      }
    }

    setModuleStructure((prevStructure) => ({
      ...prevStructure,
      [newModuleName]: newPath,
    }));

    setCourses(updatedCourses);
  };

  const findParentNode = (nodes, targetId) => {
    for (const node of nodes) {
      if (node.children && node.children.length > 0) {
        for (const child of node.children) {
          if (child.value === targetId) {
            return node;
          }
          const result = findParentNode(node.children, targetId);
          if (result) {
            return result;
          }
        }
      }
    }
    return null;
  };

  const handleChange = (currentNode, selectedNodes, newModuleName) => {
    setSelected(selectedNodes);
    setSelectedNode(currentNode);

    if (currentNode) {
      const nodePath = moduleStructure[currentNode.value] || "";

      if (newModuleName) {
        addNewModule(currentNode, newModuleName);
      } else {
        setPath(nodePath);
      }

      const parentNode = findParentNode(courses, currentNode.value);
      setParentModule(parentNode ? parentNode.value : "");

      setSelectedModuleId(currentNode.value || "");
    }
=======
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
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
  };

  const addTextarea = () => {
    setTextareas([...textareas, ""]);
  };

  const handleTextareaChange = (index, value) => {
    const newTextareas = [...textareas];
    newTextareas[index] = value;
    setTextareas(newTextareas);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const moduleNames = textareas.filter((name) => name.trim() !== "");

    if (moduleNames.length === 0) {
      alert("Please enter at least one module name.");
      return;
    }

<<<<<<< HEAD
    const pathParts = path.split("/");
    const cleanedPath = pathParts.slice(1).join("/") || "1";

    const formData = new FormData();
    formData.append("moduleNames", JSON.stringify(moduleNames));
    formData.append("path", cleanedPath);
    formData.append("parentModule", parentModule);
    formData.append("courseId", courseId);
    formData.append("selectedModuleId", selectedModuleId);
    if (selectedFile) {
      formData.append("moduleImage", selectedFile); // Append the file to the formData
    }

    console.log(formData);

    axios
      .post("http://localhost:5000/course/addmodule", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (
          res.data.message === "moduleNames is mandatory and should be an array"
        ) {
          toast.error("moduleNames is mandatory and should be an array");
        } else if (res.data.message === "modules added successfully") {
          toast.success("Modules added successfully");
          setTextareas([""]);
          setModuleStructure((prev) => ({
            ...prev,
            [cleanedPath]: cleanedPath,
          }));
          setSelectedFile(null); // Clear the selected file after successful submission
        } else if (res.data.message === "db_error") {
          toast.error("Database error occurred!");
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
        data={courses}
        onChange={handleChange}
        className="bootstrap-demo"
        texts={{ placeholder: "Select..." }}
        value={selectedNode ? [selectedNode] : []}
      />
=======
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
      <div className="purplecards rounded-2 p-3 my-5">
      <h3 className="violettext">Welcome to Course Module</h3>
      <h6>Select the Course</h6>
      <DropdownTreeSelect
        data={formatData(courses)}
        onChange={handleChange}
        className="bootstrap-demo"
        texts={{ placeholder: "Select..." }}/>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
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
<<<<<<< HEAD
          <div className="my-3">
            <label htmlFor="fileUpload" className="violettext">
              Upload Image:
            </label>
            <input
              type="file"
              id="fileUpload"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button type="submit" className="addbutton rounded-pill">
=======
          <div className="d-flex justify-content-between">
            <button type="submit" className="submitbutton rounded-3">
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
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
