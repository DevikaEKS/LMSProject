import React, { useState, useRef, useEffect } from "react";
import { Card,CardBody,Form,Input,Label,Button,Container} from "reactstrap";
import JoditEditor from "jodit-react";
import axios from "axios";
import "./Coursecontent.css";
import { useNavigate } from "react-router-dom";

const Coursecontent = () => {
  const editor = useRef(null);
  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(""); 
  const [selectedModule, setSelectedModule] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: "",
  });
  const [selectedCourseDetails, setSelectedCourseDetails] = useState({
    courseId: "",
    course_category_id: "",
  });
  const [image, setImage] = useState(null);
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");
  const [completionCriteria, setCompletionCriteria] = useState("");
  const [groupMode, setGroupMode] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/course/getcourse`).then((res) => {
      setCourses(res.data.result);
    });

    axios.get(`http://localhost:5000/course/getmodule`).then((res) => {
      setModules(res.data.result);
    });
  }, []);

  const handleCourseChange = (e) => {
    const selectedCourseId = e.target.value;
    const selectedCourse = courses.find(
      (course) => course.courseid.toString() === selectedCourseId
    );
    if (selectedCourse) {
      setSelectedCourse(selectedCourseId);
      setSelectedCourseDetails({
        courseId: selectedCourse.courseid,
        course_category_id: selectedCourse.course_category_id,
      });
    }
  };

  const handleModuleChange = (e) => {
    setSelectedModule(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleEditorChange = (content) => {
    setPost((prevPost) => ({
      ...prevPost,
      content,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("courseId", selectedCourseDetails.courseId);
    formData.append(
      "course_category_id",
      selectedCourseDetails.course_category_id
    );
    formData.append("moduleId", selectedModule);
    formData.append("description", description);
    formData.append("content", post.content);
    formData.append("availableFrom", availableFrom);
    formData.append("availableUntil", availableUntil);
    formData.append("completionCriteria", completionCriteria);
    formData.append("groupMode", groupMode);

    if (image) {
      formData.append("image", image);
    }

    axios
      .post("http://localhost:5000/course/submitcon", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.message === "Content submitted successfully") {
          alert("Content submitted successfully");
          navigate("/instructordashboard/displaycontent", {
            state: {
              ...selectedCourseDetails,
              moduleId: selectedModule,
              description,
              content: post.content,
              availableFrom,
              availableUntil,
              completionCriteria,
              groupMode,
              image,
            },
          });
        } else if (response.data.error === "Failed to insert activity data") {
          alert("Failed to insert activity data");
        } else if (response.data.error === "Failed to insert context data") {
          alert("Failed to insert context data");
        } else if (response.data.error === "Failed to insert page data") {
          alert("Failed to insert page data");
        }
      })
      .catch((error) => {
        console.error("Backend returned an error:", error);
      });
  };

  return (
    <div className="container-fluid wrapper bgpurplecard py-5">
      <Card className="mx-5 shadow-sm border-0 pt-4">
        <CardBody>
          <h3>Page Content</h3>
          <Form onSubmit={handleSubmit}>
            <div className="my-3">
              <Label for="courseSelect">Course Name</Label>
              <Input
                type="select"
                id="courseSelect"
                value={selectedCourse}
                onChange={handleCourseChange}
                className="rounded-0"
              >
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option
                    key={course.courseid}
                    value={course.courseid.toString()}
                  >
                    {course.coursename}
                  </option>
                ))}
              </Input>
            </div>

            <div className="my-3">
              <Label for="moduleSelect">Module Name</Label>
              <Input
                type="select"
                id="moduleSelect"
                value={selectedModule}
                onChange={handleModuleChange}
                className="rounded-0"
              >
                <option value="">Select Module</option>
                {modules.map((module) => (
                  <option key={module.moduleid} value={module.moduleid}>
                    {module.modulename}
                  </option>
                ))}
              </Input>
            </div>

            <div className="my-3">
              <Label for="courseDescription">Description</Label>
              <Input
                type="textarea"
                id="courseDescription"
                value={description}
                onChange={handleDescriptionChange}
                className="rounded-0"
              />
            </div>

            <div className="my-3">
              <Label for="content">Post Content</Label>
              <JoditEditor
                ref={editor}
                value={post.content}
                config={{
                  uploader: {
                    insertImageAsBase64URI: true,
                  },
                }}
                onChange={handleEditorChange}
              />
            </div>

            <div className="my-3">
              <Label for="availableFrom">Available From</Label>
              <Input
                type="date"
                id="availableFrom"
                value={availableFrom}
                onChange={(e) => setAvailableFrom(e.target.value)}
                className="rounded-0"
              />
            </div>

            <div className="my-3">
              <Label for="availableUntil">Available Until</Label>
              <Input
                type="date"
                id="availableUntil"
                value={availableUntil}
                onChange={(e) => setAvailableUntil(e.target.value)}
                className="rounded-0"
              />
            </div>

            <div className="my-3">
              <Label for="LevelofPass">Completion Criteria</Label>
              <Input
                type="text"
                id="LevelofPass"
                value={completionCriteria}
                onChange={(e) => setCompletionCriteria(e.target.value)}
                className="rounded-0"
                required
              />
            </div>

            <div className="my-3">
              <Label for="Restriction Access">Restriction</Label>
              <Input
                type="select"
                id="RestrictionSelect"
                onChange={handleModuleChange}
                className="rounded-0"
              >
                <option>Select the Restriction</option>
                <option value="">Viewed</option>
                <option value="">Graded</option>
              </Input>
            </div>

            <div className="my-3 w-75">
              <Label for="groupMode">Group Mode</Label>
              <Input
                type="select"
                id="groupMode"
                value={groupMode}
                onChange={(e) => setGroupMode(e.target.value)}
                className="rounded-0"
              >
                <option value="">Select the mode</option>
                <option value="group">Group Mode</option>
                <option value="individual">Individual</option>
              </Input>
            </div>

            <Container className="text-center">
              <Button type="submit" className="rounded-0 ms-2" color="primary">
                Submit Content
              </Button>
              <Button
                type="reset"
                className="rounded-0 ms-2"
                color="secondary"
                onClick={() => {
                  setSelectedCourse("");
                  setSelectedModule("");
                  setDescription("");
                  setPost({ title: "", content: "", categoryId: "" });
                  setImage(null);
                  setAvailableFrom("");
                  setAvailableUntil("");
                  setCompletionCriteria("");
                  setGroupMode("");
                }}
              >
                Reset Content
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Coursecontent;
