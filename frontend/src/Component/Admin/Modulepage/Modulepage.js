import React, { useState } from "react";
import axios from "axios";
import "./Modulepage.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Modulepage() {
  const [textareas, setTextareas] = useState([""]);

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

    // Filter out any empty textarea values
    const moduleNames = textareas.filter((name) => name.trim() !== "");

    if (moduleNames.length === 0) {
      alert("Please enter at least one module name.");
      return;
    }

    // Send the module names to the backend
    axios
      .post("http://localhost:5000/course/addmodule", {
        moduleNames, // Send all module names as an array
      })
      .then((res) => {
        console.log(res);

        if (
          res.data.message === "moduleNames is mandatory and should be an array"
        ) {
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
      <ToastContainer />
      <h3 className="violettext">Welcome to Course Module</h3>
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
