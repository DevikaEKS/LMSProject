
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Drmenubar.css";

function Drmenubar() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className='text-dark navpart'>Home</Nav.Link>
            <Nav.Link as={Link} to="/" className='text-dark navpart' >MyCourses</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Drmenubar;
