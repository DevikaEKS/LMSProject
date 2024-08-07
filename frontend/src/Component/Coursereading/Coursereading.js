// import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faTimes } from '@fortawesome/free-solid-svg-icons';
// import { Link, NavLink } from 'react-router-dom';
// import Coursecontent from '../Admin/Coursecontent/Coursecontent';
// import Contentmodule from '../Contentmodule/Contentmodule';
// import "./Coursereading.css";
// import Studentattendance from '../Teacher/Studentattendance';
// import Attendancetime from '../Attendancetime/Attendancetime';
// import Totalchart from '../Teacherpiechart/Totalchart';
// import Approvedattendance from '../Teacher/Approved';
// import Unapprovedattendance from '../Teacher/Unapproved';

// function Coursereading() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);
//   const [activeSection, setActiveSection] = useState(localStorage.getItem('activeSection') || 'Dashboard');

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 991);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (activeSection === 'CourseProject') {
//       console.log("CourseProject section activated");
//       // Add any other logic that needs to run when CourseProject is active
//     }
//   }, [activeSection]);

//   useEffect(() => {
//     localStorage.setItem('activeSection', activeSection);
//   }, [activeSection]);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const renderContent = () => {
//     switch (activeSection) {
//       case 'Dashboard':
//         return <h2>Welcome to Teacher panel</h2>;
//       case 'Attendance':
//         return <Studentattendance/> ;
//       case 'Attendancetime':
//         return <Attendancetime/> ;
//         case 'Approved':
//           return  <Coursecontent/> ;
//         case 'Unapproved':
//           return  <Approvedattendance/>;
//         case 'Courseoutcome':
//           return <Unapprovedattendance/>;                                                                              n;
//         case 'StudentProgress':
//           return <Totalchart/>;
//       default:
//         return <h2>Welcome to the Admin Panel</h2>;
//     }
//   };

//   return (
//     <div className="container-fluid">
//       {/* Top Navbar */}
//       <div className="row">
//         {/* Sidebar */}
//         <div className={`col-md-2 sidebar bg-light ${isSidebarOpen ? 'open' : ''}`}>
//           <div className="sidebar-header">
//             <button className="close-btn" onClick={toggleSidebar}>
//               <FontAwesomeIcon icon={faTimes} />
//             </button>
//           </div>
//           <Nav className="flex-column text-dark">
//             <Nav.Link onClick={() => setActiveSection('Dashboard')} className='text-dark'>Dashboard</Nav.Link>
//             <Nav.Link onClick={() => setActiveSection('Attendance')} className='text-dark'>Student Attendance</Nav.Link>
//             <Nav.Link onClick={() => setActiveSection('Unapproved')} className='text-dark'>Unapproved</Nav.Link>
//             <Nav.Link onClick={() => setActiveSection('Approved')} className='text-dark'>Approved</Nav.Link>
//             <Nav.Link onClick={() => setActiveSection('Attendancetime')} className='text-dark'>Attendance Time</Nav.Link>
//             <Nav.Link onClick={() => setActiveSection('StudentProgress')} className='text-dark'>StudentProgress</Nav.Link>
//             <Nav.Link as={Link} to="/">Logout</Nav.Link>
//           </Nav>
//         </div>
//         <div className={`col-md-10 ${isSidebarOpen ? 'content-open' : 'content-closed'}`}>
//           <div className="content-area">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Coursereading;



import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Coursecontent from '../Admin/Coursecontent/Coursecontent';
import Contentmodule from '../Contentmodule/Contentmodule';
import "./Coursereading.css";
import Studentattendance from '../Teacher/Studentattendance';
import Attendancetime from '../Attendancetime/Attendancetime';
import Totalchart from '../Teacherpiechart/Totalchart';
import Approvedattendance from '../Teacher/Approved';
import Unapprovedattendance from '../Teacher/Unapproved';

function Coursereading() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 991);
  const [activeSection, setActiveSection] = useState(localStorage.getItem('activeSection') || 'Dashboard');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 991);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (activeSection === 'CourseProject') {
      console.log("CourseProject section activated");
      // Add any other logic that needs to run when CourseProject is active
    }
  }, [activeSection]);

  useEffect(() => {
    localStorage.setItem('activeSection', activeSection);
  }, [activeSection]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Dashboard':
        return <h2>Welcome to Teacher panel</h2>;
      case 'Attendance':
        return <Studentattendance />;
      case 'Attendancetime':
        return <Attendancetime />;
      case 'Approved':
        return <Coursecontent />;
      case 'Unapproved':
        return <Approvedattendance />;
      case 'Courseoutcome':
        return <Unapprovedattendance />;
      case 'StudentProgress':
        return <Totalchart />;
      default:
        return <h2>Welcome to the Admin Panel</h2>;
    }
  };

  return (
    <div className="container-fluid">
      {/* Top Navbar */}
      <div className="row">
        {/* Sidebar */}
        <div className={`col-md-2 sidebar bg-light ${isSidebarOpen ? 'open' : ''}`}>
         
          <Nav className="flex-column text-dark">
            <Nav.Link onClick={() => setActiveSection('Dashboard')} className='text-dark'>Dashboard</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('Attendance')} className='text-dark'>Student Attendance</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('Unapproved')} className='text-dark'>Unapproved</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('Approved')} className='text-dark'>Approved</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('Attendancetime')} className='text-dark'>Attendance Time</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('StudentProgress')} className='text-dark'>Student Progress</Nav.Link>
            <Nav.Link as={Link} to="/">Logout</Nav.Link>
          </Nav>
        </div>
        <div className={`col-md-10 ${isSidebarOpen ? 'content-open' : 'content-closed'}`}>
          <div className="content-area">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursereading;
