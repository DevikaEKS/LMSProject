import React, { useState } from 'react';
import './Courseupdation.css';

function Courseupdation() {
  const [categories, setCategories] = useState([
    'AWS',
    'FullStack',
    'Angular',
    'SQL',
    'MongoDB',
  ]);

  const [dropdowns, setDropdowns] = useState([{ id: 0, options: categories }]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [newCategory, setNewCategory] = useState(""); // State for new category input
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(null); // State to track the selected dropdown

  const handleOpenModal = (index) => {
    setSelectedDropdownIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewCategory("");
  };

  const handleAddCategory = () => {
    if (newCategory.trim() === "") return;

    const newDropdowns = dropdowns.map((dropdown, index) => {
      if (index === selectedDropdownIndex) {
        return {
          ...dropdown,
          options: [...dropdown.options, newCategory],
        };
      }
      return dropdown;
    });

    setDropdowns(newDropdowns);
    handleCloseModal(); // Close the modal after adding the category
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const courseFullName = event.target.courseFullName.value;
    const courseImage = event.target.courseImage.files[0];

    if (courseFullName === "") {
      alert('Course Full Name is required');
      return;
    }

    if (!courseImage) {
      alert('Course Image is required');
      return;
    }
    console.log('Form submitted successfully');
  };

  return (
    <div className='container-fluid p-0'>
      <div className='frmbg p-3 h-100'>
        <form className='bg-light p-3 rounded-2' onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseFullName">Course Full Name</label>
              <input id="courseFullName" name="courseFullName" type='text' className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseShortName">Course Short Name</label>
              <input id="courseShortName" name="courseShortName" type='text' className="form-control" />
            </div>
          </div>

          <div className="form-group">
            {dropdowns.map((dropdown, index) => (
              <div className="form-group-inner" key={dropdown.id}>
                <label htmlFor={`courseCategory-${dropdown.id}`}>Course Category</label>
                <select
                  id={`courseCategory-${dropdown.id}`}
                  name={`courseCategory-${dropdown.id}`}
                  className="form-control"
                >
                  <option>Select the course</option>
                  {dropdown.options.map((option, i) => (
                    <option key={i} value={option}>{option}</option>
                  ))}
                </select>
                <button
                  type="button"
                  className="btn btn-dark mt-2"
                  onClick={() => handleOpenModal(index)}
                >
                  +
                </button>
              </div>
            ))}
          </div>

          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseStartDate">Course Start Date</label>
              <input id="courseStartDate" name="courseStartDate" type='date' className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseEndDate">Course End Date</label>
              <input id="courseEndDate" name="courseEndDate" type='datetime-local' className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseImage">Course Image</label>
              <input id="courseImage" name="courseImage" type='file' className="form-control" accept=".jpg, .jpeg" required />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseDescription">Course Description</label>
              <textarea id="courseDescription" name="courseDescription" className="form-control"></textarea>
            </div>
          </div>
          <input type='submit' className='frmbutton' />
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Category</h5>
                {/* <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter new category"
                  className="form-control"
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={handleCloseModal}>Close</button>
                <button type="button" className="btn btn-primary" onClick={handleAddCategory}>Add Category</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courseupdation;
