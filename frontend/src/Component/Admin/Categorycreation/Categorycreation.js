import React, { useState } from 'react';

function Categorycreation() {
  const [categories, setCategories] = useState(['AWS', 'FullStack', 'Angular', 'SQL', 'MongoDB']);
  const [newCategory, setNewCategory] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim() !== "") {
      setCategories([...categories, newCategory]);
      setNewCategory(""); // Clear input after adding
      setShowInput(false); // Hide input after adding
    }
  };

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4' style={{ width: '600px', height: '400px' }}>
        <div className='d-flex align-items-center'>
          <select className='form-select'>
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button
            className='btn btn-primary ms-2'
            onClick={() => setShowInput(!showInput)}
          >
            +
          </button>
        </div>

        {showInput && (
          <div className='mt-3'>
            <input
              type='text'
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder='Enter new category'
              className='form-control'
            />
            <button
              className='btn btn-secondary mt-2'
              onClick={handleAddCategory}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categorycreation;
