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
  const editorRef = useRef(null);

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
  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

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
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setUploadedQuestions(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="container-fluid">
      <h3 className='text-center'>Quiz</h3>
      <div className='bgpurplecard p-5 rounded-3'>
      <h5>Select the module</h5>
      <DropdownTreeSelect
        data={data}
        onChange={handleChange}
        className="bootstrap-demo"
        texts={{ placeholder: "Select..." }}
      />
      <div className="question-type-dropdown d-flex justify-content-between my-3" style={{ marginBottom: '10px' }}>
        <div className='mx-2'>
          <label htmlFor="questionType"><b>Select Question Type:</b></label>
          <select
            id="questionType"
            value={questionType}
            onChange={handleQuestionTypeChange}
            style={{ marginLeft: '10px' }}>
            <option value="multiple choice">Multiple Choice</option>
            <option value="description">Description</option>
            <option value="true/false">True/False</option>
          </select>
        </div>
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
        config={{
          readonly: false,
          toolbar: true,
        }} onBlur={handleEditorChange}/>

      {questionType === 'true/false' && (
        <div className="true-false-options" style={{ marginTop: '10px' }}>
          <div className='d-flex justify-content-around'>
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

      {questionType === 'multiple choice' && (
        <div style={{ marginTop: '10px' }}>
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
                className='m-3 feedbackbtn rounded-2 '
                onClick={() => toggleFeedback(index)}>
                Add Feedback
              </button>
              {showFeedback[index] && (
                <div className="feedback" style={{ marginTop: '10px' }}>
                  <label>Feedback for Option {index + 1}:</label>
                  <JoditEditor
                    value={feedbacks[index]}
                    config={{
                      readonly: false,
                      toolbar: true,
                    }}
                    onBlur={(newContent) => handleFeedbackChange(index, newContent)}
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

      {questionType === 'description' && (
        <div className="description" style={{ marginTop: '10px' }}>
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

      {/* <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <button onClick={handleButtonClick}>Show Content</button>
      </div> */}

      <div style={{ marginTop: '20px' }}>
        <button type="submit" style={{ marginLeft: '10px' }} className='rounded-2'>
          Submit
        </button>
      </div>

      {uploadedQuestions.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Uploaded Questions</h3>
          <ul>
            {uploadedQuestions.map((question, index) => (
              <li key={index}>
                <div>
                  <strong>Question {index + 1}:</strong> {question.Question}
                </div>
                <div>
                  <strong>Options:</strong> {question.Options.join(', ')}
                </div>
                <div>
                  <strong>Correct Option:</strong> {question.CorrectOption}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Question;
