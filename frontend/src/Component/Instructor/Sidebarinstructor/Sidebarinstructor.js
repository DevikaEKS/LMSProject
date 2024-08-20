import React from 'react';
import { motion } from 'framer-motion';
import './Sidebarinstructor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser,faBars, faBook, faBookOpen, faLaptop, faClock, faFile, faFileLines, faLightbulb, faPowerOff, faCode, faFileUpload, faLaptopFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const sidebarVariants = {
  open: { width: '200px' },
  closed: { width: '50px' },
};

const linkVariants = {
  open: { opacity: 1, display: 'block' },
  closed: { opacity: 0, display: 'none' },
};

function Sidebarinstructor() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="sidebar"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul>
        <li>
            <Link to={"/instructordashboard/coursedetail"}><FontAwesomeIcon icon={faHome} className='mx-1 text-light'/></Link>
          <motion.span variants={linkVariants}>Home</motion.span>
        </li>
        <li>
            <Link to="/instructordashboard/coursecontent"><FontAwesomeIcon icon={faFileUpload} className='mx-1 text-light'/></Link>
            <motion.span variants={linkVariants}>Course Content</motion.span>
        </li>
        <li>
            <Link to="/instructordashboard/coursemodule"> <FontAwesomeIcon icon={faFile} className='mx-1 text-light'/></Link>
            <motion.span variants={linkVariants}>Module</motion.span>
        </li>
        <li>
            <Link to="/instructordashboard/coursesubmodule"> <FontAwesomeIcon icon={faFileLines} className='mx-1 text-light'/></Link>
            <motion.span variants={linkVariants}>SubModule</motion.span>
        </li>
        <li>
            <Link to="/instructordashboard/quilltxt"><FontAwesomeIcon icon={faLightbulb} className='mx-1 text-light'/></Link>
            <motion.span variants={linkVariants}>Quiz</motion.span>
        </li>
        <li>
            <Link to="/instructordashboard/"><FontAwesomeIcon icon={faCode} className='mx-1 text-light'/></Link>
            <motion.span variants={linkVariants}>Coading Exercise</motion.span>
        </li>
        
        <li>
            <Link to="/"><FontAwesomeIcon icon={faPowerOff} className='mx-1 text-light'/></Link>
            <motion.span variants={linkVariants}>Logout</motion.span>
        </li>
      </ul>
    </motion.div>
  );
}

export default Sidebarinstructor;
