import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import Coursecontent from '../Admin/Coursecontent/Coursecontent';
import Contentmodule from '../Contentmodule/Contentmodule';

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
        return <h2>Welcome to Student panel</h2>;
      case 'Courses':
        return <p>hello guys</p> ;
      case 'Settings':
        return (
          <div>
            <form>
              <div className="form-group">
                <label>Course Full Name</label>
                <input type='text' className="form-control" />
              </div>
            </form>
          </div>
        );
      case 'Area':
        return (
          <Link to="/">AON</Link> 
        );
        case 'Courseobjective':
          return  <Coursecontent/> ;
        case 'Coursemodule':
          return   <h1>Outcome</h1>;
        case 'Courseoutcome':
          return <h1>Outcome</h1>;
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
          <div className="sidebar-header">
            <button className="close-btn" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <Nav className="flex-column">
            <Nav.Link onClick={() => setActiveSection('Dashboard')}>Dashboard</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('Courses')}>Course Modules</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('CourseProject')}>Course Settings</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('Coursecontent')}>Course Content</Nav.Link>
            <NavDropdown title="Activity" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => setActiveSection('Exercise')}>Practise Exercise</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setActiveSection('CodingQuestion')}>Coding Question</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setActiveSection('Area')}>Coding Area</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => setActiveSection('Participants')}>Participants</Nav.Link>
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
