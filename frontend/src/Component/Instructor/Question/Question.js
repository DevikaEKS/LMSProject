<<<<<<< HEAD
// import React, { useState, useRef } from 'react';
// import JoditEditor from 'jodit-react';

// const Question = () => {
//   const [content, setContent] = useState(''); // State for question content
//   const [questionType, setQuestionType] = useState('multiple choice'); // State for question type
//   const [correctOption, setCorrectOption] = useState(''); // State for selected correct option
//   const [options, setOptions] = useState(['', '', '', '']); // State for multiple choice options
//   const [keywords, setKeywords] = useState([{ keyword: '', marks: '' }]); // State for keywords and marks
//   const editorRef = useRef(null);

//   // Handle editor content changes
//   const handleEditorChange = (newContent) => {
//     setContent(newContent);
//   };

//   // Handle button click to display editor content
//   const handleButtonClick = () => {
//     if (editorRef.current) {
//       const editorInstance = editorRef.current;
//       const currentContent = editorInstance.value;
//       setContent(currentContent);
//     }
//   };

//   // Handle dropdown change for question type
//   const handleQuestionTypeChange = (event) => {
//     setQuestionType(event.target.value);
//     setCorrectOption(''); // Reset correct option when changing question type
//   };

//   // Handle correct option selection change
//   const handleCorrectOptionChange = (e) => {
//     setCorrectOption(e.target.value);
//   };

//   // Handle input change for multiple choice options
//   const handleOptionChange = (index, value) => {
//     const newOptions = [...options];
//     newOptions[index] = value;
//     setOptions(newOptions);
//   };

//   // Handle keyword and marks changes
//   const handleKeywordChange = (index, field, value) => {
//     const newKeywords = [...keywords];
//     newKeywords[index] = { ...newKeywords[index], [field]: value };
//     setKeywords(newKeywords);
//   };

//   // Add a new keyword input
//   const addKeyword = () => {
//     setKeywords([...keywords, { keyword: '', marks: '' }]);
//   };

//   // Remove a keyword input
//   const removeKeyword = (index) => {
//     setKeywords(keywords.filter((_, i) => i !== index));
//   };

//   return (

//     <div className="editor-container" style={{ textAlign: 'left' }}>
//       <div className="question-type-dropdown" style={{ marginBottom: '10px' }}>
//         <label htmlFor="questionType">Select Question Type:</label>
//         <select
//           id="questionType"
//           value={questionType}
//           onChange={handleQuestionTypeChange}
//           style={{ marginLeft: '10px' }}
//         >
//           <option value="multiple choice">Multiple Choice</option>
//           <option value="description">Description</option>
//           <option value="true/false">True/False</option>
//         </select>
//       </div>

//       {/* Question Input Area */}
//       <JoditEditor
//         ref={editorRef}
//         value={content}
//         config={{
//           readonly: false,
//           toolbar: true,
//         }}
//         onBlur={handleEditorChange} />

//       {/* Conditionally render True/False options */}
//       {questionType === 'true/false' && (
//         <div className="true-false-options" style={{ marginTop: '10px' }}>
//             <div className='d-flex justify-content-around'>
//           <div>
//             <label>
//               <input type="radio" name="trueFalseOption" value="true" disabled />
//               True
//             </label>
//           </div>
//           <div>
//             <label>
//               <input type="radio" name="trueFalseOption" value="false" disabled />
//               False
//             </label>
//           </div>
//           </div>
//           <div style={{ marginTop: '10px', marginBottom: '10px' }}>
//             <label>Correct Option:</label>
//             <select
//               value={correctOption}
//               onChange={handleCorrectOptionChange}
//               style={{ marginLeft: '10px' }}
//             >
//               <option value="">Select Correct Option</option>
//               <option value="true">True</option>
//               <option value="false">False</option>
//             </select>
//           </div>
//         </div>
//       )}

//       {/* Conditionally render Multiple Choice inputs */}
//       {questionType === 'multiple choice' && (
//         <div style={{ marginTop: '10px' }}>
//           {options.map((option, index) => (
//             <div key={index} style={{ marginBottom: '10px' }}>
//               <label htmlFor={`option${index + 1}`}>Option {index + 1}:</label>
//               <input
//                 type="text"
//                 id={`option${index + 1}`}
//                 placeholder={`Option ${index + 1}`}
//                 value={option}
//                 onChange={(e) => handleOptionChange(index, e.target.value)}
//                 style={{ marginLeft: '10px' }}
//               />
//             </div>
//           ))}
//           <div style={{ marginBottom: '10px' }}>
//             <label>Correct Option:</label>
//             <select
//               value={correctOption}
//               onChange={handleCorrectOptionChange}
//               style={{ marginLeft: '10px' }}
//             >
//               <option value="">Select Correct Option</option>
//               {options.map((option, index) => (
//                 <option key={index} value={option}>
//                   Option {index + 1}: {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       )}

//       {/* Conditionally render Description inputs */}
//       {questionType === 'description' && (
//         <div className="description" style={{ marginTop: '10px' }}>
//           {keywords.map((keyword, index) => (
//             <div key={index} style={{ marginBottom: '10px' }}>
//               <label htmlFor={`keyword${index}`}>Keyword {index + 1}:</label>
//               <input
//                 type="text"
//                 id={`keyword${index}`}
//                 placeholder="Enter the keyword"
//                 value={keyword.keyword}
//                 onChange={(e) => handleKeywordChange(index, 'keyword', e.target.value)}
//                 style={{ marginLeft: '10px' }}
//               />
//               <label htmlFor={`marks${index}`} style={{ marginLeft: '20px' }}>Marks:</label>
//               <input
//                 type="number"
//                 id={`marks${index}`}
//                 placeholder="Enter marks"
//                 value={keyword.marks}
//                 onChange={(e) => handleKeywordChange(index, 'marks', e.target.value)}
//                 style={{ marginLeft: '10px' }}
//               />
//               <button
//                 type="button"
//                 onClick={() => removeKeyword(index)}
//                 style={{ marginLeft: '10px' }}>
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button type="button" onClick={addKeyword} style={{ marginTop: '10px' }}>
//             Add Keyword
//           </button>
//         </div>
//       )}

//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleButtonClick}>Show Content</button>
//         <button type="submit" style={{ marginLeft: '10px' }}>
//           Submit
//         </button>
//         <h3>Editor Content:</h3>
//         <div
//           dangerouslySetInnerHTML={{ __html: content }}
//           style={{ border: '1px solid #ddd', padding: '10px', minHeight: '100px' }}/>
//       </div>
//     </div>
//   );
// };

// export default Question;

import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import * as XLSX from "xlsx";
import axios from "axios"; // Added axios import
import "./Question.css";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = () => {
  const [content, setContent] = useState("");
  const [questionType, setQuestionType] = useState("multiple choice");
  const [correctOption, setCorrectOption] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [feedbacks, setFeedbacks] = useState(["", "", "", ""]);
  const [showFeedback, setShowFeedback] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [keywords, setKeywords] = useState([{ keyword: "", marks: "" }]);
  const [uploadedQuestions, setUploadedQuestions] = useState([]);
  const [selected, setSelected] = useState([]);
=======
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import * as XLSX from 'xlsx';
import "./Question.css";
import DropdownTreeSelect from 'react-dropdown-tree-select';
import 'react-dropdown-tree-select/dist/styles.css';
import { FaUpload } from 'react-icons/fa';
const Question = () => {
  const [content, setContent] = useState(''); 
  const [questionType, setQuestionType] = useState('multiple choice'); 
  const [correctOption, setCorrectOption] = useState(''); 
  const [options, setOptions] = useState(['', '', '', '']); 
  const [feedbacks, setFeedbacks] = useState(['', '', '', '']); 
  const [showFeedback, setShowFeedback] = useState([false, false, false, false]); 
  const [keywords, setKeywords] = useState([{ keyword: '', marks: '' }]); 
  const [uploadedQuestions, setUploadedQuestions] = useState([]);
  const [selected, setSelected] = useState([]); 
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
  const editorRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const [moduleStructure, setModuleStructure] = useState({});

  useEffect(() => {
    // Fetch the courses when the component mounts
    axios
      .get("http://localhost:5000/course/structured-data")
      .then((res) => {
        console.log(res.data);
        setCourses(res.data);
        setModuleStructure(buildModuleStructure(res.data));
      })
      .catch((error) => {
        toast.error("Failed to fetch courses!");
        console.error(error);
      });
  }, []);

  // Build module structure from the fetched data
  const buildModuleStructure = (nodes) => {
    const structure = {};

    nodes.forEach((node, index) => {
      const path = `${index + 1}`; // Use array index + 1 as the path value
      structure[node.value] = path;

      if (node.children && node.children.length > 0) {
        traverseChildren(node.children, path, structure);
      }
    });

    return structure;
  };

  // Recursive function to traverse child nodes
  const traverseChildren = (children, parentPath, structure) => {
    children.forEach((child, index) => {
      const childPath = `${parentPath}/${index + 1}`; // Append child index + 1 to the parent path
      structure[child.value] = childPath;

      if (child.children && child.children.length > 0) {
        traverseChildren(child.children, childPath, structure);
      }
    });
  };

  const data = [
    {
      label: "Category 1",
      value: "category-1",
      children: [
        {
          label: "Course 1.1",
          value: "course-1-1",
          children: [
            {
              label: "Module 1.1.1",
              value: "module-1-1-1",
              children: [
                {
                  label: "Submodule 1.1.1.1",
                  value: "submodule-1-1-1-1",
                },
                {
                  label: "Submodule 1.1.1.2",
                  value: "submodule-1-1-1-2",
                },
              ],
            },
            {
              label: "Module 1.1.2",
              value: "module-1-1-2",
              children: [
                {
                  label: "Submodule 1.1.2.1",
                  value: "submodule-1-1-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "Course 1.2",
          value: "course-1-2",
          children: [
            {
              label: "Module 1.2.1",
              value: "module-1-2-1",
              children: [
                {
                  label: "Submodule 1.2.1.1",
                  value: "submodule-1-2-1-1",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Category 2",
      value: "category-2",
      children: [
        {
          label: "Course 2.1",
          value: "course-2-1",
          children: [
            {
              label: "Module 2.1.1",
              value: "module-2-1-1",
              children: [
                {
                  label: "Submodule 2.1.1.1",
                  value: "submodule-2-1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "Course 2.2",
          value: "course-2-2",
          children: [
            {
              label: "Module 2.2.1",
              value: "module-2-2-1",
              children: [
                {
                  label: "Submodule 2.2.1.1",
                  value: "submodule-2-2-1-1",
                },
              ],
            },
            {
              label: "Module 2.2.2",
              value: "module-2-2-2",
              children: [
                {
                  label: "Submodule 2.2.2.1",
                  value: "submodule-2-2-2-1",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const handleChange = (currentNode, selectedNodes) => {
    setSelected(selectedNodes);

    // Show alert with the label of the selected node
    if (currentNode && currentNode.label) {
      alert(`Selected: ${currentNode.label}`);
    }

    console.log("Selected Nodes:", selectedNodes);
  };

<<<<<<< HEAD
=======
  const data = [
    {
      label: 'Category 1',
      value: 'category-1',
      children: [
        {
          label: 'Course 1.1',
          value: 'course-1-1',
          children: [
            {
              label: 'Module 1.1.1',
              value: 'module-1-1-1',
              children: [
                {
                  label: 'Submodule 1.1.1.1',
                  value: 'submodule-1-1-1-1',
                },
                {
                  label: 'Submodule 1.1.1.2',
                  value: 'submodule-1-1-1-2',
                },
              ],
            },
            {
              label: 'Module 1.1.2',
              value: 'module-1-1-2',
              children: [
                {
                  label: 'Submodule 1.1.2.1',
                  value: 'submodule-1-1-2-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Course 1.2',
          value: 'course-1-2',
          children: [
            {
              label: 'Module 1.2.1',
              value: 'module-1-2-1',
              children: [
                {
                  label: 'Submodule 1.2.1.1',
                  value: 'submodule-1-2-1-1',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Category 2',
      value: 'category-2',
      children: [
        {
          label: 'Course 2.1',
          value: 'course-2-1',
          children: [
            {
              label: 'Module 2.1.1',
              value: 'module-2-1-1',
              children: [
                {
                  label: 'Submodule 2.1.1.1',
                  value: 'submodule-2-1-1-1',
                },
              ],
            },
          ],
        },
        {
          label: 'Course 2.2',
          value: 'course-2-2',
          children: [
            {
              label: 'Module 2.2.1',
              value: 'module-2-2-1',
              children: [
                {
                  label: 'Submodule 2.2.1.1',
                  value: 'submodule-2-2-1-1',
                },
              ],
            },
            {
              label: 'Module 2.2.2',
              value: 'module-2-2-2',
              children: [
                {
                  label: 'Submodule 2.2.2.1',
                  value: 'submodule-2-2-2-1',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const handleChange = (currentNode, selectedNodes) => {
    setSelected(selectedNodes);

    // Show alert with the label of the selected node
    if (currentNode && currentNode.label) {
      alert(`Selected: ${currentNode.label}`);
    }

    console.log('Selected Nodes:', selectedNodes);
  };
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

<<<<<<< HEAD
  const handleButtonClick = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current;
      const currentContent = editorInstance.value;
      setContent(currentContent);
    }
  };

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
    setCorrectOption("");
=======
  // const handleButtonClick = () => {
  //   if (editorRef.current) {
  //     const editorInstance = editorRef.current;
  //     const currentContent = editorInstance.value;
  //     setContent(currentContent);
  //   }
  // };

  const handleQuestionTypeChange = (event) => {
    setQuestionType(event.target.value);
    setCorrectOption(''); 
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
  };

  const handleCorrectOptionChange = (e) => {
    setCorrectOption(e.target.value);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleFeedbackChange = (index, newContent) => {
    const newFeedbacks = [...feedbacks];
    newFeedbacks[index] = newContent;
    setFeedbacks(newFeedbacks);
  };

  const toggleFeedback = (index) => {
    const newShowFeedback = [...showFeedback];
    newShowFeedback[index] = !newShowFeedback[index];
    setShowFeedback(newShowFeedback);
  };

  const handleKeywordChange = (index, field, value) => {
    const newKeywords = [...keywords];
    newKeywords[index] = { ...newKeywords[index], [field]: value };
    setKeywords(newKeywords);
  };

  const addKeyword = () => {
    setKeywords([...keywords, { keyword: '', marks: '' }]);
  };

  const removeKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
<<<<<<< HEAD
        const workbook = XLSX.read(data, { type: "array" });
=======
        const workbook = XLSX.read(data, { type: 'array' });
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setUploadedQuestions(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

<<<<<<< HEAD
  // Integrated handleSubmit function
  const handleSubmit = () => {
    let questionData = {
      text: content,
      type: questionType,
      selectedModules: selected.map((node) => node.value), // Capture selected module values
    };

    if (questionType === "multiple choice") {
      const optionsWithFeedbacks = options.map((option, index) => ({
        option_text: option,
        feedback: feedbacks[index] || "",
      }));
      questionData.options = optionsWithFeedbacks;
      questionData.correctOption = correctOption;
    } else if (questionType === "true/false") {
      questionData.correctOption = correctOption;
    } else if (questionType === "description") {
      questionData.keywords = keywords;
    }

    console.log("Submitting Question Data:", questionData);

    // axios
    //   .post("http://localhost:5000/quiz/addquiz", questionData)
    //   .then((response) => {
    //     console.log("Success:", response.data);
    //     // Optionally, reset the form or provide user feedback here
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     // Optionally, handle errors (e.g., show a notification to the user)
    //   });
  };

  return (
    <div className="container-fluid bgpurplecard py-5">
      <h6>Select the module</h6>
=======
  return (
    <div className="container-fluid">
      <h3 className='text-center'>Quiz</h3>
      <div className='bgpurplecard p-5 rounded-3'>
      <h5>Select the module</h5>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
      <DropdownTreeSelect
        data={data}
        onChange={handleChange}
        className="bootstrap-demo"
        texts={{ placeholder: "Select..." }}
      />
<<<<<<< HEAD
      <div
        className="question-type-dropdown d-flex justify-content-around"
        style={{ marginBottom: "10px" }}
      >
        <div>
          <label htmlFor="questionType">Select Question Type:</label>
=======
      <div className="question-type-dropdown d-flex justify-content-between my-3" style={{ marginBottom: '10px' }}>
        <div className='mx-2'>
          <label htmlFor="questionType"><b>Select Question Type:</b></label>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
          <select
            id="questionType"
            value={questionType}
            onChange={handleQuestionTypeChange}
<<<<<<< HEAD
            style={{ marginLeft: "10px" }}
          >
=======
            style={{ marginLeft: '10px' }}>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
            <option value="multiple choice">Multiple Choice</option>
            <option value="description">Description</option>
            <option value="true/false">True/False</option>
          </select>
        </div>
<<<<<<< HEAD
        <div>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            style={{ marginRight: "10px" }}
          />
        </div>
      </div>

      <JoditEditor
        ref={editorRef}
        value={content}
=======
        <div className='mx-2'>

        <div style={{ display: 'flex', alignItems: 'center' }} className='border border-2'>
      <label
        htmlFor="file-upload"
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        <FaUpload  className='iconclr'/>
        <input
          id="file-upload"
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        <span className='fw-bold'>Upload File</span>
      
      </label>
    </div>
        </div>
      </div>

      <JoditEditor ref={editorRef} value={content}
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
        config={{
          readonly: false,
          toolbar: true,
        }} onBlur={handleEditorChange}/>

<<<<<<< HEAD
      {questionType === "true/false" && (
        <div className="true-false-options" style={{ marginTop: "10px" }}>
          <div className="d-flex justify-content-around">
=======
      {questionType === 'true/false' && (
        <div className="true-false-options" style={{ marginTop: '10px' }}>
          <div className='d-flex justify-content-around'>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
            <div>
              <label>
                <input type="radio" name="trueFalseOption" value="true" disabled />
                True
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="trueFalseOption" value="false" disabled />
                False
              </label>
            </div>
          </div>
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <label>Correct Option:</label>
            <select
              value={correctOption}
              onChange={handleCorrectOptionChange}
              style={{ marginLeft: '10px' }}
            >
              <option value="">Select Correct Option</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </div>
      )}

<<<<<<< HEAD
      {questionType === "multiple choice" && (
        <div style={{ marginTop: "10px" }}>
=======
      {questionType === 'multiple choice' && (
        <div style={{ marginTop: '10px' }}>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
          {options.map((option, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <label htmlFor={`option${index + 1}`}>Option {index + 1}:</label>
              <input
                type="text"
                id={`option${index + 1}`}
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                style={{ marginLeft: '10px' }}
              />
              <button
<<<<<<< HEAD
                className="m-3 feedbackbtn rounded-2"
                onClick={() => toggleFeedback(index)}
              >
                Add Feedback
              </button>
              {showFeedback[index] && (
                <div className="feedback" style={{ marginTop: "10px" }}>
=======
                className='m-3 feedbackbtn rounded-2 '
                onClick={() => toggleFeedback(index)}>
                Add Feedback
              </button>
              {showFeedback[index] && (
                <div className="feedback" style={{ marginTop: '10px' }}>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
                  <label>Feedback for Option {index + 1}:</label>
                  <JoditEditor
                    value={feedbacks[index]}
                    config={{
                      readonly: false,
                      toolbar: true,
                    }}
<<<<<<< HEAD
                    onBlur={(newContent) =>
                      handleFeedbackChange(index, newContent)
                    }
=======
                    onBlur={(newContent) => handleFeedbackChange(index, newContent)}
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
                  />
                </div>
              )}
            </div>
          ))}
          <div style={{ marginBottom: '10px' }}>
            <label>Correct Option:</label>
            <select
              value={correctOption}
              onChange={handleCorrectOptionChange}
              style={{ marginLeft: '10px' }}
            >
              <option value="">Select Correct Option</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  Option {index + 1}: {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

<<<<<<< HEAD
      {questionType === "description" && (
        <div className="description" style={{ marginTop: "10px" }}>
=======
      {questionType === 'description' && (
        <div className="description" style={{ marginTop: '10px' }}>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
          {keywords.map((keyword, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <label htmlFor={`keyword${index}`}>Keyword {index + 1}:</label>
              <input
                type="text"
                id={`keyword${index}`}
                placeholder="Enter the keyword"
                value={keyword.keyword}
                onChange={(e) => handleKeywordChange(index, 'keyword', e.target.value)}
                style={{ marginLeft: '10px' }}
              />
              <label htmlFor={`marks${index}`} style={{ marginLeft: '20px' }}>Marks:</label>
              <input
                type="number"
                id={`marks${index}`}
                placeholder="Enter marks"
                value={keyword.marks}
                onChange={(e) => handleKeywordChange(index, 'marks', e.target.value)}
                style={{ marginLeft: '10px' }}
              />
              <button
                type="button"
                onClick={() => removeKeyword(index)}
                style={{ marginLeft: '10px' }}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addKeyword} style={{ marginTop: '10px' }} >
            Add Keyword
          </button>
        </div>
      )}

<<<<<<< HEAD
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button onClick={handleButtonClick}>Show Content</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          type="button"
          onClick={handleSubmit}
          style={{ marginLeft: "10px" }}
        >
=======
      {/* <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <button onClick={handleButtonClick}>Show Content</button>
      </div> */}

      <div style={{ marginTop: '20px' }}>
        <button type="submit" style={{ marginLeft: '10px' }} className='rounded-2'>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
          Submit
        </button>
      </div>

      {uploadedQuestions.length > 0 && (
<<<<<<< HEAD
        <div style={{ marginTop: "20px" }}>
=======
        <div style={{ marginTop: '20px' }}>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
          <h3>Uploaded Questions</h3>
          <ul>
            {uploadedQuestions.map((question, index) => (
              <li key={index}>
                <div>
                  <strong>Question {index + 1}:</strong> {question.Question}
                </div>
                <div>
<<<<<<< HEAD
                  <strong>Options:</strong> {question.Options.join(", ")}
=======
                  <strong>Options:</strong> {question.Options.join(', ')}
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
                </div>
                <div>
                  <strong>Correct Option:</strong> {question.CorrectOption}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
<<<<<<< HEAD
=======
    </div>
>>>>>>> 5961dbfd80e155634386d2bca3ef4ffce4b0e74d
    </div>
  );
};

export default Question;
