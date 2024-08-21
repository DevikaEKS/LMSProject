// // import React, { useState } from 'react';
// // import "./Coursecontent.css";
// // import { Link } from 'react-router-dom';
// // import ReactQuill from 'react-quill';
// // import 'react-quill/dist/quill.snow.css';

// // function Coursecontent() {
// //   const [description, setDescription] = useState('');
// //   const [courseFullName, setCourseFullName] = useState('');
// //   const [moduleName, setModuleName] = useState('');
// //   const [submoduleName, setSubmoduleName] = useState('');

// //   const handleDescriptionChange = (value) => {
// //     setDescription(value);
// //     console.log(value)
// //   };

// //   function func(){
// //     console.log(description)
// //   }
// //   return (
// //     <div className='container-fluid'>
// //       <div className='h-100'>
// //         <form className='p-3 rounded-4 frmshadow'>
// //           <div className="form-group">
// //             <div className="form-group-inner">
// //               <label htmlFor="courseFullName">Course Full Name</label>
// //               <select
// //                 id="courseFullName"
// //                 className="form-control"
// //                 value={courseFullName}
// //                 onChange={(e) => setCourseFullName(e.target.value)}
// //                 required>
// //                 <option value="">Select Course</option>
// //                 <option value="course1">Course 1</option>
// //                 <option value="course2">Course 2</option>
// //                 <option value="course3">Course 3</option>
// //               </select>
// //             </div>
// //           </div>
// //           <div className="form-group">
// //             <div className="form-group-inner">
// //               <label htmlFor="courseModuleName">Module Name</label>
// //               <select
// //                 id="courseModuleName"
// //                 className="form-control"
// //                 value={moduleName}
// //                 onChange={(e) => setModuleName(e.target.value)}
// //                 required>
// //                 <option value="">Select Module</option>
// //                 <option value="module1">Module 1</option>
// //                 <option value="module2">Module 2</option>
// //                 <option value="module3">Module 3</option>
// //               </select>
// //             </div>
// //           </div>
// //           <div className="form-group">
// //             <div className="form-group-inner">
// //               <label htmlFor="coursesubmoduleName">Submodule Name</label>
// //               <select
// //                 id="coursesubmoduleName"
// //                 className="form-control"
// //                 value={submoduleName}
// //                 onChange={(e) => setSubmoduleName(e.target.value)}
// //                 required >
// //                 <option value="">Select Submodule</option>
// //                 <option value="submodule1">Submodule 1</option>
// //                 <option value="submodule2">Submodule 2</option>
// //                 <option value="submodule3">Submodule 3</option>
// //               </select>
// //             </div>
// //           </div>

// //           <div className="form-group">
// //             <div className="form-group-inner">
// //               <label htmlFor="courseDescription">Description</label>
// //               <textarea id="courseDescription" className="form-control"></textarea>
// //             </div>
// //           </div>

// //           {/* Rich Text Editor for Course Content */}
// //           <div className="form-group">
// //             <div className="form-group-inner">
// //               <label htmlFor="courseContent">Page Content</label>
// //               <ReactQuill
// //                 value={description}
// //                 onChange={handleDescriptionChange}
// //                 modules={{
// //                   toolbar: [
// //                     [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
// //                     [{ size: [] }],
// //                     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
// //                     [{'list': 'ordered'}, {'list': 'bullet'}, 
// //                      {'indent': '-1'}, {'indent': '+1'}],
// //                     ['link', 'image', 'video'],
// //                     [{ 'color': [] }, { 'background': [] }],
// //                     ['clean'] 
// //                   ]
// //                 }}
// //                 formats={[
// //                   'header', 'font', 'size',
// //                   'bold', 'italic', 'underline', 'strike', 'blockquote',
// //                   'list', 'bullet', 'indent',
// //                   'link', 'image', 'video',
// //                   'color', 'background',  
// //                  'clean'
// //                 ]}
// //               />
// //             </div>
// //           </div>

// //           <Link to="/instructordashboard/pages" className="submitbutton1 pt-2 px-2 rounded-3 btn btn-dark" onClick={func()}>
// //             Next

// //           </Link>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Coursecontent;




// import React, { useState } from 'react';
// import "./Coursecontent.css";
// import { Link } from 'react-router-dom';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// function Coursecontent() {
//   const [description, setDescription] = useState('');
//   const [courseFullName, setCourseFullName] = useState('');
//   const [moduleName, setModuleName] = useState('');
//   const [submoduleName, setSubmoduleName] = useState('');

//   const handleDescriptionChange = (value) => {
//     setDescription(value);
//     console.log(value);
//   };

//   function func() {
//     console.log(description);
//   }

//   return (
//     <div className='container-fluid'>
//       <div className='h-100'>
//         <form className='p-3 rounded-4 frmshadow'>
//           <div className="form-group">
//             <div className="form-group-inner">
//               <label htmlFor="courseFullName">Course Full Name</label>
//               <select
//                 id="courseFullName"
//                 className="form-control"
//                 value={courseFullName}
//                 onChange={(e) => setCourseFullName(e.target.value)}
//                 required>
//                 <option value="">Select Course</option>
//                 <option value="course1">Course 1</option>
//                 <option value="course2">Course 2</option>
//                 <option value="course3">Course 3</option>
//               </select>
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="form-group-inner">
//               <label htmlFor="courseModuleName">Module Name</label>
//               <select
//                 id="courseModuleName"
//                 className="form-control"
//                 value={moduleName}
//                 onChange={(e) => setModuleName(e.target.value)}
//                 required>
//                 <option value="">Select Module</option>
//                 <option value="module1">Module 1</option>
//                 <option value="module2">Module 2</option>
//                 <option value="module3">Module 3</option>
//               </select>
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="form-group-inner">
//               <label htmlFor="coursesubmoduleName">Submodule Name</label>
//               <select
//                 id="coursesubmoduleName"
//                 className="form-control"
//                 value={submoduleName}
//                 onChange={(e) => setSubmoduleName(e.target.value)}
//                 required >
//                 <option value="">Select Submodule</option>
//                 <option value="submodule1">Submodule 1</option>
//                 <option value="submodule2">Submodule 2</option>
//                 <option value="submodule3">Submodule 3</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-group">
//             <div className="form-group-inner">
//               <label htmlFor="courseDescription">Description</label>
//               <textarea id="courseDescription" className="form-control"></textarea>
//             </div>
//           </div>

//           {/* Rich Text Editor for Course Content */}
//           <div className="form-group">
//             <div className="form-group-inner">
//               <label htmlFor="courseContent">Page Content</label>
//               <ReactQuill
//                 value={description}
//                 onChange={handleDescriptionChange}
//                 modules={{
//                   toolbar: [
//                     [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
//                     [{ size: [] }],
//                     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//                     [{'list': 'ordered'}, {'list': 'bullet'}, 
//                      {'indent': '-1'}, {'indent': '+1'}],
//                     ['link', 'image', 'video'],
//                     [{ 'color': [] }, { 'background': [] }],
//                     ['clean'] 
//                   ]
//                 }}
//                 formats={[
//                   'header', 'font', 'size',
//                   'bold', 'italic', 'underline', 'strike', 'blockquote',
//                   'list', 'bullet', 'indent',
//                   'link', 'image', 'video',
//                   'color', 'background',  
//                  'clean'
//                 ]}
//               />
//             </div>
//           </div>

//           <Link 
//             to="/instructordashboard/pages" 
//             className="submitbutton1 pt-2 px-2 rounded-3 btn btn-dark" 
//             onClick={func} // Remove parentheses here
//           >
//             Next
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Coursecontent;



 import React, { useState, useRef, useEffect } from "react";
 import { Card, CardBody, Form, Input, Label, Button, Container } from "reactstrap";
 import JoditEditor from "jodit-react";
 import { Link } from 'react-router-dom';
 import "./Coursecontent.css"


 const Coursecontent = () => {
   const editor = useRef(null);
   const [courses, setCourses] = useState([]);
   const [modules, setModules] = useState([]);
   const [submodules, setSubModules] = useState([]);
   const [selectedCourse, setSelectedCourse] = useState('');
   const [selectedModule, setSelectedModule] = useState('');
   const [selectedSubmodule, setSelectedSubmodule] = useState('');
   const [description, setDescription] = useState('');
   const [post, setPost] = useState({
     title: '',
     content: '',
     categoryId: ''
   });
   const [image, setImage] = useState(null);

   useEffect(() => {
     setCourses([
       { id: 1, name: 'Course 1' },
       { id: 2, name: 'Course 2' },
       { id: 3, name: 'Course 3' }
     ]);
     setModules([
       { id: 1, name: 'Module 1' },
       { id: 2, name: 'Module 2' },
       { id: 3, name: 'Module 3' }
     ]);
     setSubModules([
       { id: 1, name: 'Submodule 1' },
       { id: 2, name: 'Submodule 2' },
       { id: 3, name: 'Submodule 3' }
     ]);
   }, []);

   const handleCourseChange = (e) => {
     setSelectedCourse(e.target.value);
      
   };

  const handleModuleChange = (e) => {
    setSelectedModule(e.target.value);
   };

  const handleSubModuleChange = (e) => {
     setSelectedSubmodule(e.target.value);
   };

   const handleDescriptionChange = (e) => {
     setDescription(e.target.value);
   };

   const handleFileChange = (event) => {
     console.log(event.target.files[0]);
     setImage(event.target.files[0]);
   };

   const handleEditorChange = (content) => {
     setPost((prevPost) => ({
       ...prevPost,
       content
     }));
   };

   return (
     <div className="container-fluid wrapper ">
       <Card className="mx-5 shadow-sm border-0 mt-2 bgpurplecard">
         <CardBody>
           <h3>Page Content</h3>
           <Form>
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
                   <option key={course.id} value={course.id}>{course.name}</option>
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
                 className="rounded-0" >
                 <option value="">Select Module</option>
                 {modules.map((module) => (
                   <option key={module.id} value={module.id}>{module.name}</option>
                 ))}
               </Input>
             </div>

             <div className="my-3">
               <Label for="submoduleSelect">Submodule Name</Label>
               <Input
                 type="select"
                 id="submoduleSelect"
                 value={selectedSubmodule}
                 onChange={handleSubModuleChange}
                 className="rounded-0"
               >
                 <option value="">Select Submodule</option>
                 {submodules.map((submodule) => (
                   <option key={submodule.id} value={submodule.id}>{submodule.name}</option>
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
                     images: {
                       url: handleFileChange,
                     },
                     files: {
                       url: handleFileChange,
                     },
                   },
                 }}
                 onChange={handleEditorChange}/>
             </div>

             <Container className="text-center"> 
               <Button className="rounded-0 ms-2" color="primary">Reset Content</Button>
               <Link to="/instructordashboard/pages" className="submitbutton1 pt-2 px-2 ms-2 btn btn-dark">Next</Link>
            </Container>
          </Form>
         </CardBody>
      </Card>


    </div>
   );
 };

 export default Coursecontent;
