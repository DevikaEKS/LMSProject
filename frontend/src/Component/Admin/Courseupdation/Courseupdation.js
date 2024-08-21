import React, { useEffect, useState } from "react";
import "./Courseupdation.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Courseupdation() {
  const [categories, setCategories] = useState([]);
  const [dropdowns, setDropdowns] = useState([{ id: 0, options: [] }]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [selectedDropdownIndex, setSelectedDropdownIndex] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get(`http://localhost:5000/category/getcategory`).then((res) => {
      const fetchedCategories = res.data.result.map((category) => ({
        name: category.course_category_name,
        id: category.course_category_id,
      }));
      setCategories(fetchedCategories);
      setDropdowns([{ id: 0, options: fetchedCategories }]);
    });
  };

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

    axios
      .post(`http://localhost:5000/category/addcategory`, {
        course_category_name: newCategory,
      })
      .then((response) => {
        if (response.data.message === "Category added successfully") {
          toast.success("Category added successfully");
          fetchCategories(); // Refresh the category list
        }

        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error adding new category:", error);
        toast.error("Error adding new category");
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const courseFullName = event.target.courseFullName.value;
    const courseShortName = event.target.courseShortName.value;
    const courseStartDate = event.target.courseStartDate.value;
    const courseEndDate = event.target.courseEndDate.value;
    const courseImage = event.target.courseImage.files[0];
    const courseDescription = event.target.courseDescription.value;

    // Validate required fields
    if (
      !courseFullName ||
      !courseShortName ||
      !courseStartDate ||
      !courseEndDate ||
      !courseImage ||
      !courseDescription
    ) {
      alert("All fields are required.");
      return;
    }

    // Get the selected category IDs
    const selectedCategories = dropdowns
      .map((dropdown) => {
        const selectedCategory =
          event.target[`courseCategory-${dropdown.id}`].value;
        return selectedCategory ? parseInt(selectedCategory, 10) : null;
      })
      .filter((id) => id !== null); // Remove any null values

    // Prepare form data for the API
    const formData = new FormData();
    formData.append("courseFullName", courseFullName);
    formData.append("courseShortName", courseShortName);
    formData.append("courseStartDate", courseStartDate);
    formData.append("courseEndDate", courseEndDate);
    formData.append("courseImage", courseImage); // Assuming you will handle the image upload in the backend
    formData.append("courseDescription", courseDescription);
    formData.append("selectedCategories", selectedCategories); // JSON.stringify for array of IDs

    console.log(formData);
    try {
      // Send the form data to the backend API
      axios
        .post("http://localhost:5000/course/addcourse", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);

          if (response.data.message === "Course added successfully") {
            toast.success("Course added successfully");
          } else {
            toast.error("Failed to add course");
          }

          // console.log("Form submitted successfully:", response.data);
        });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form");
    }
  };

  return (
    <div className="container-fluid p-0">
      <ToastContainer />
      <div className="frmbg p-3 h-100">
        <form className="bg-light p-3 rounded-2" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseFullName">Course Full Name</label>
              <input
                id="courseFullName"
                name="courseFullName"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseShortName">Course Short Name</label>
              <input
                id="courseShortName"
                name="courseShortName"
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            {dropdowns.map((dropdown, index) => (
              <div className="form-group-inner" key={dropdown.id}>
                <label htmlFor={`courseCategory-${dropdown.id}`}>
                  Course Category
                </label>
                <select
                  id={`courseCategory-${dropdown.id}`}
                  name={`courseCategory-${dropdown.id}`}
                  className="form-control"
                >
                  <option>Select the course</option>
                  {dropdown.options.map((option, i) => (
                    <option key={i} value={option.id}>
                      {option.name}
                    </option>
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
              <input
                id="courseStartDate"
                name="courseStartDate"
                type="date"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseEndDate">Course End Date</label>
              <input
                id="courseEndDate"
                name="courseEndDate"
                type="date"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseImage">Course Image</label>
              <input
                id="courseImage"
                name="courseImage"
                type="file"
                className="form-control"
                accept=".jpg, .jpeg"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-inner">
              <label htmlFor="courseDescription">Course Description</label>
              <textarea
                id="courseDescription"
                name="courseDescription"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <input type="submit" className="frmbutton" />
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Category</h5>
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
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddCategory}
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courseupdation;
