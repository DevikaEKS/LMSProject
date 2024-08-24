// import React, { useState, useEffect } from 'react';
// import quizData from './quizData.json'; 
// import "./CategoryQuizList.css";

// const CategoryQuizList = () => {
//   const [categories, setCategories] = useState([]);
//   const [quizzes, setQuizzes] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedQuizzes, setSelectedQuizzes] = useState({});
//   const [addedQuizzes, setAddedQuizzes] = useState([]);
//   const [marks, setMarks] = useState({});
//   const [headerMarks, setHeaderMarks] = useState('');

//   useEffect(() => {
//     const uniqueCategories = Array.from(new Set(quizData.map(item => item.Category)));
//     setCategories(uniqueCategories);
//     setQuizzes(quizData);
//   }, []);

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   const handleCheckboxChange = (quizId) => {
//     setSelectedQuizzes(prev => {
//       const updated = { ...prev };
//       if (updated[quizId]) {
//         delete updated[quizId];
//         setMarks(prevMarks => {
//           const updatedMarks = { ...prevMarks };
//           delete updatedMarks[quizId];
//           return updatedMarks;
//         });
//       } else {
//         updated[quizId] = true;
//         setMarks(prevMarks => ({
//           ...prevMarks,
//           [quizId]: headerMarks
//         }));
//       }
//       return updated;
//     });
//   };

//   const handleMarksChange = (quizId, value) => {
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [quizId]: value
//     }));
//   };

//   const handleHeaderMarksChange = (event) => {
//     const value = event.target.value;
//     setHeaderMarks(value);
//     setMarks(prevMarks => {
//       const updatedMarks = { ...prevMarks };
//       Object.keys(selectedQuizzes).forEach(quizId => {
//         if (selectedQuizzes[quizId]) {
//           updatedMarks[quizId] = value;
//         }
//       });
//       return updatedMarks;
//     });
//   };

//   const handleAddQuizzes = () => {
//     const selectedQuizList = quizzes.filter(quiz => selectedQuizzes[quiz['Quiz ID']]);
//     const updatedQuizList = selectedQuizList.map(quiz => ({
//       ...quiz,
//       Marks: marks[quiz['Quiz ID']] || ''
//     }));
//     setAddedQuizzes(prev => [...prev, ...updatedQuizList]);
//     setSelectedQuizzes({});
//     setMarks({});
//   };

//   const filteredQuizzes = quizzes.filter(quiz => quiz.Category === selectedCategory);

//   return (
//     <div className='container-fluid'>
//       <div className='frmshadow m-4 p-2'>
//         <h1>Quiz Management</h1>

//         <div style={{ marginBottom: '20px' }}>
//           <h2>Categories</h2>
//           <select
//             value={selectedCategory}
//             onChange={handleCategoryChange}
//             style={{ width: '50%', padding: '10px' }}
//           >
//             <option value="">Select a category</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>

//         {selectedCategory && (
//           <div style={{ marginTop: '20px' }}>
//             <h2>Quizzes</h2>
//             <table className='table'>
//               <thead>
//                 <tr className='bghead'>
//                   <th>Select</th>
//                   <th>Question ID</th>
//                   <th>Question Text</th>
//                   <th>Usage Frequency</th>
//                   <th>
//                     Marks
//                     <input
//                       type="number"
//                       placeholder="Set Mark"
//                       value={headerMarks}
//                       onChange={handleHeaderMarksChange}
//                       style={{ marginLeft: '10px', width: '100px' }}
//                     />
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredQuizzes.map((quiz, index) => (
//                   <tr key={index}>
//                     <td>
//                       <input
//                         type="checkbox"
//                         checked={!!selectedQuizzes[quiz['Quiz ID']]}
//                         onChange={() => handleCheckboxChange(quiz['Quiz ID'])}
//                       />
//                     </td>
//                     <td>{quiz['Quiz ID']}</td>
//                     <td>{quiz.Question}</td>
//                     <td>{quiz['Usage Frequency'] || 'N/A'}</td>
//                     <td>
//                       <input
//                         type="number"
//                         value={marks[quiz['Quiz ID']] || ''}
//                         onChange={(e) => handleMarksChange(quiz['Quiz ID'], e.target.value)}
//                         disabled={!selectedQuizzes[quiz['Quiz ID']]}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

// {/* sequential flow */}
// <div>
// <label>Set Time</label>
// <input type='number'/><br/>
// <h4>Question View Type</h4>
// <input type='radio' className='me-3 ms-1'/>
// <label>Sequential</label>
// <input type='radio' className='mx-3'/>
// <label>Random</label>
// </div>

// {/* //end of sequence */}

//             <button onClick={handleAddQuizzes} style={{ marginTop: '20px' }}>
//               Add Selected Quizzes
//             </button>
//           </div>
//         )}

//         <div style={{ marginTop: '20px' }}>
//           <h2>Added Quizzes</h2>
//           <ol>
//             {addedQuizzes.map((quiz, index) => (
//               <li key={index} style={{ marginBottom: '10px' }}>
//                 <div><strong>Question:</strong> {quiz.Question}</div>
//                 <div><strong>Marks:</strong> {quiz.Marks}</div>
//                 <div><strong>Options:</strong></div>
//                 <ol>
//                   {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option, idx) => (
//                     <li key={idx} type="A">
//                       <input type="checkbox" disabled />
//                       {quiz[option]}
//                     </li>
//                   ))}
//                 </ol>
//                 <div><strong>Correct Option:</strong> {quiz['Correct Option']}</div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryQuizList;


import React, { useState, useEffect } from 'react';
import quizData from './quizData.json'; 
import "./CategoryQuizList.css";

const CategoryQuizList = () => {
  const [categories, setCategories] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedQuizzes, setSelectedQuizzes] = useState({});
  const [addedQuizzes, setAddedQuizzes] = useState([]);
  const [marks, setMarks] = useState({});
  const [headerMarks, setHeaderMarks] = useState('');
  const [maxRandomValue, setMaxRandomValue] = useState('');
  const [viewType, setViewType] = useState('Sequential');

  useEffect(() => {
    const uniqueCategories = Array.from(new Set(quizData.map(item => item.Category)));
    setCategories(uniqueCategories);
    setQuizzes(quizData);
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCheckboxChange = (quizId) => {
    setSelectedQuizzes(prev => {
      const updated = { ...prev };
      if (updated[quizId]) {
        delete updated[quizId];
        setMarks(prevMarks => {
          const updatedMarks = { ...prevMarks };
          delete updatedMarks[quizId];
          return updatedMarks;
        });
      } else {
        updated[quizId] = true;
        setMarks(prevMarks => ({
          ...prevMarks,
          [quizId]: headerMarks // Set headerMarks for new selection
        }));
      }
      return updated;
    });
  };

  const handleMarksChange = (quizId, value) => {
    setMarks(prevMarks => ({
      ...prevMarks,
      [quizId]: value
    }));
  };

  const handleHeaderMarksChange = (event) => {
    const value = event.target.value;
    setHeaderMarks(value);
    setMarks(prevMarks => {
      const updatedMarks = { ...prevMarks };
      Object.keys(selectedQuizzes).forEach(quizId => {
        if (selectedQuizzes[quizId]) {
          updatedMarks[quizId] = value;
        }
      });
      return updatedMarks;
    });
  };

  const handleAddQuizzes = () => {
    const selectedQuizList = quizzes.filter(quiz => selectedQuizzes[quiz['Quiz ID']]);
    const updatedQuizList = selectedQuizList.map(quiz => ({
      ...quiz,
      Marks: marks[quiz['Quiz ID']] || ''
    }));
    setAddedQuizzes(prev => [...prev, ...updatedQuizList]);
    setSelectedQuizzes({});
    setMarks({});
  };

  const handleMaxRandomValueChange = (event) => {
    const value = Number(event.target.value);
    const numberOfBoxes = Object.keys(selectedQuizzes).length;
    if (value >= 0 && value <= numberOfBoxes) {
      setMaxRandomValue(value);
    } 
    // else {
    //   alert('Value must be between 0 and the number of selected quizzes.');
    // }
  };

  const handleViewTypeChange = (type) => {
    setViewType(type);
    if (type === 'Random') {
      handleMaxRandomValueChange({ target: { value: maxRandomValue } }); // Ensure value is valid
    }
  };

  const filteredQuizzes = quizzes.filter(quiz => quiz.Category === selectedCategory);

  return (
    <div className='container-fluid'>
      <div className='frmshadow m-4 p-2'>
        <div style={{ marginBottom: '20px' }}>
          <h5>Categories</h5>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            style={{ width: '50%', padding: '10px' }}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div style={{ marginTop: '20px' }}>
            <h2>Quizzes</h2>
            <table className='table'>
              <thead>
                <tr className='bghead'>
                  <th>Select</th>
                  <th>Question ID</th>
                  <th>Question Text</th>
                  <th>Usage Frequency</th>
                  <th>
                    Marks
                    <input
                      type="number"
                      min="0"
                      placeholder="Set Mark"
                      value={headerMarks}
                      onChange={handleHeaderMarksChange}
                      style={{ marginLeft: '10px', width: '100px' }}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredQuizzes.map((quiz, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={!!selectedQuizzes[quiz['Quiz ID']]}
                        onChange={() => handleCheckboxChange(quiz['Quiz ID'])}
                      />
                    </td>
                    <td>{quiz['Quiz ID']}</td>
                    <td>{quiz.Question}</td>
                    <td>{quiz['Usage Frequency'] || 'N/A'}</td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={marks[quiz['Quiz ID']] || ''}
                        onChange={(e) => handleMarksChange(quiz['Quiz ID'], e.target.value)}
                        disabled={!selectedQuizzes[quiz['Quiz ID']]}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div>
              <label>Set Time</label>
              <input type='number' min="0"/><br/>
              <h4>Question View Type</h4>
              <input 
                type='radio' 
                name='viewType'
                className='me-3 ms-1'
                checked={viewType === 'Sequential'}
                onChange={() => handleViewTypeChange('Sequential')}
              />
              <label>Sequential</label>
              <input 
                type='radio' 
                name='viewType'
                className='mx-3'
                checked={viewType === 'Random'}
                onChange={() => handleViewTypeChange('Random')}
              />
              <label>Random</label>
            </div>

            {viewType === 'Random' && (
              <div>
                <label>Max Number of Random Inputs</label>
                <input
                  type="number"
                  min="0"
                  value={maxRandomValue}
                  onChange={handleMaxRandomValueChange}
                />
                {/* {Array.from({ length: Number(maxRandomValue) }, (_, index) => (
                  <div key={index}>
                    <label>Input {index}</label>
                    <input type="number" min="0" />
                  </div>
                ))} */}
              </div> 
            )}

            <button onClick={handleAddQuizzes} style={{ marginTop: '20px' }}>
              Add Selected Quizzes
            </button>
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          <h5>Added Quizzes</h5>
          <ol>
            {addedQuizzes.map((quiz, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                <div><strong>Question:</strong> {quiz.Question}</div>
                <div><strong>Marks:</strong> {quiz.Marks}</div>
                <div><strong>Options:</strong></div>
                <ol>
                  {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((option, idx) => (
                    <li key={idx} type="A">
                      <input type="checkbox" disabled />
                      {quiz[option]}
                    </li>
                  ))}
                </ol>
                <div><strong>Correct Option:</strong> {quiz['Correct Option']}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CategoryQuizList;

