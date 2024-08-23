// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const CategoryQuizList = () => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [quizzes, setQuizzes] = useState([]);
//   const [selectedQuizzes, setSelectedQuizzes] = useState({});

//   // Handle file upload and parse the Excel file
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const data = new Uint8Array(e.target.result);
//         const workbook = XLSX.read(data, { type: 'array' });
//         const sheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(worksheet);

//         // Separate categories and quizzes
//         const categories = Array.from(new Set(jsonData.map(item => item.Category)));
//         setCategories(categories);

//         // Store all quizzes
//         setQuizzes(jsonData);
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   // Handle category click
//   const handleCategoryClick = (category) => {
//     const filteredQuizzes = quizzes.filter(quiz => quiz.Category === category);
//     setSelectedCategory(category);
//     setQuizzes(filteredQuizzes);
//   };

//   // Handle checkbox change
//   const handleCheckboxChange = (quizId) => {
//     setSelectedQuizzes(prev => {
//       const updated = { ...prev };
//       if (updated[quizId]) {
//         delete updated[quizId];
//       } else {
//         updated[quizId] = true;
//       }
//       return updated;
//     });
//   };

//   return (
//     <div className='container-fluid'>
//       <h1>Upload Quiz</h1>
      
//       {/* Upload Button */}
//       <input
//         type="file"
//         accept=".xlsx, .xls"
//         onChange={handleFileUpload}
//         style={{ marginBottom: '20px' }}
//       />
      
//       {/* Display Categories */}
//       {categories.length > 0 && !selectedCategory && (
//         <div>
//           <h2>Categories</h2>
//           <ol>
//             {categories.map((category, index) => (
//               <li key={index}>
//                 <button onClick={() => handleCategoryClick(category)} className='btn btn-light border-0 mx-4'>{category}</button>
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}

//       {/* Display Quizzes */}
//       {selectedCategory && (
//         <div>
//           <h2>{selectedCategory} Quizzes</h2>
//           <ul>
//             {quizzes.map((quiz, index) => (
//               <li key={index} style={{ marginBottom: '10px' }}>
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={!!selectedQuizzes[quiz['Quiz ID']]}
//                     onChange={() => handleCheckboxChange(quiz['Quiz ID'])}
//                   />
//                   {quiz.Question}
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryQuizList;




import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import "./CategoryQuizList.css";

const CategoryQuizList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizzes, setSelectedQuizzes] = useState({});
  const [addedQuizzes, setAddedQuizzes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [marks, setMarks] = useState('');

  // Handle file upload and parse the Excel file
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

        // Separate categories and quizzes
        const categories = Array.from(new Set(jsonData.map(item => item.Category)));
        setCategories(categories);

        // Store all quizzes
        setQuizzes(jsonData);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  // Handle category change
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSelectedCategories(prev => {
      const updatedCategories = category ? [category] : [];
      const filteredQuizzes = quizzes.filter(quiz => updatedCategories.includes(quiz.Category));
      setQuizzes(filteredQuizzes);
      return updatedCategories;
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (quizId) => {
    setSelectedQuizzes(prev => {
      const updated = { ...prev };
      if (updated[quizId]) {
        delete updated[quizId];
      } else {
        updated[quizId] = true;
      }
      return updated;
    });
  };

  // Handle marks input change
  const handleMarksChange = (event) => {
    setMarks(event.target.value);
  };

  // Add selected quizzes to the list
  const handleAddQuizzes = () => {
    const selectedQuizList = quizzes.filter(quiz => selectedQuizzes[quiz['Quiz ID']]);
    const updatedQuizList = selectedQuizList.map(quiz => ({
      ...quiz,
      Marks: marks
    }));
    setAddedQuizzes(prev => [...prev, ...updatedQuizList]);
    setSelectedQuizzes({});
    setMarks('');
  };

  return (
    <div className='container-fluid'>
        <div className='frmshadow m-4 p-2'>
      <h1>Upload Quiz</h1>
      
      {/* Upload Button */}
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ marginBottom: '20px' }}
      />
      
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Display Categories and Marks Input */}
        <div style={{ flex: 1 }}>
          <h2>Categories</h2>
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

          {/* Marks Input */}
          <div style={{ marginTop: '20px' }}>
            <label>
              Marks:
              <input
                type="number"
                value={marks}
                onChange={handleMarksChange}
                style={{ marginLeft: '10px', width: '100px' }}
              />
            </label>
          </div>

          {/* Display Quizzes */}
          {selectedCategory && (
            <div style={{ marginTop: '20px' }}>
              <h2>Quizzes</h2>
              <ol>
                {quizzes.map((quiz, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    <label
                      style={{
                        fontWeight: !!selectedQuizzes[quiz['Quiz ID']] ? 'bold' : 'normal',
                        color: !!selectedQuizzes[quiz['Quiz ID']] ? 'red' : 'black',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={!!selectedQuizzes[quiz['Quiz ID']]}
                        onChange={() => handleCheckboxChange(quiz['Quiz ID'])}
                      />
                      {quiz.Question}
                    </label>
                  </li>
                ))}
              </ol>
              <button onClick={handleAddQuizzes} style={{ marginTop: '20px' }}>
                Add Selected Quizzes
              </button>
            </div>
          )}
        </div>

        {/* Display Added Quizzes */}
        <div style={{ flex: 1, marginLeft: '20px' }}>
          <h2>Added Quizzes</h2>
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
    </div>
  );
};

export default CategoryQuizList;









