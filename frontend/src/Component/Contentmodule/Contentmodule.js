// import React, { useState } from 'react';
// import "./Contentmodule.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// const images = [
//   {
//     src: 'https://img.freepik.com/free-photo/logo-designer-working-computer-desktop_23-2149142108.jpg',
//     title: 'Lesson1',
//   },
//   {
//     src: 'https://img.freepik.com/free-photo/asian-smiling-woman-wearing-glasses-using-laptop_171337-2132.jpg',
//     title: 'Lesson2',
//   },
//   {
//     src: 'https://img.freepik.com/free-photo/woman-retoucher-looking-camera-smiling-sitting-creative-design-media-agency_482257-18196.jpg',
//     title: 'Lesson3',
//   },
//   {
//     src: 'https://img.freepik.com/free-photo/top-view-illustrator-drawing-ipad_23-2150040090.jpg',
//     title: 'Lesson4',
//   },
//   {
//     src: 'https://img.freepik.com/free-photo/photo-woman-wearing-hat_23-2148922940.jpg',
//     title: 'Lesson5',
//   },
//   {
//     src: 'https://img.freepik.com/free-photo/still-life-camera-lens-digital-tablet_23-2148620000.jpg',
//     title: 'Lesson6',
//   },
// ];

// const itemsPerRow = 3;

// function Contentmodule() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => {
//       const maxIndex = Math.ceil(images.length / itemsPerRow) - 1;
//       return Math.min(prevIndex + 1, maxIndex);
//     });
//   };

//   return (
    
//     <div className='container-fluid slider-container'>
//       <button className='slider-btn prev' onClick={goToPrevious}><FontAwesomeIcon icon={faAngleLeft}/></button>
//       <div className='slider'>
//         <div className='slider-track' style={{ transform: `translateX(-${currentIndex * (100 / itemsPerRow)}%)` }}>
//           {images.map((image, index) => (
//             <div className='slider-item' key={index}>
//               <img src={image.src} alt={image.title} className='slider-image'/>
//               <p className='text-center'>{image.title}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//       <button className='slider-btn next' onClick={goToNext}><FontAwesomeIcon icon={faAngleRight}/></button>
//       {/* <iframe width="677" height="392" src="https://www.youtube.com/embed/M85iQzbuLMs" title="How to Create an Online Course for Beginners (start to finish)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
//     </div>
    
//   );
// }

// export default Contentmodule;


import React, { useState } from 'react';
import "./Contentmodule.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  {
    src: 'https://img.freepik.com/free-photo/logo-designer-working-computer-desktop_23-2149142108.jpg',
    title: 'Lesson1',
  },
  {
    src: 'https://img.freepik.com/free-photo/asian-smiling-woman-wearing-glasses-using-laptop_171337-2132.jpg',
    title: 'Lesson2',
  },
  {
    src: 'https://img.freepik.com/free-photo/woman-retoucher-looking-camera-smiling-sitting-creative-design-media-agency_482257-18196.jpg',
    title: 'Lesson3',
  },
  {
    src: 'https://img.freepik.com/free-photo/top-view-illustrator-drawing-ipad_23-2150040090.jpg',
    title: 'Lesson4',
  },
  {
    src: 'https://img.freepik.com/free-photo/photo-woman-wearing-hat_23-2148922940.jpg',
    title: 'Lesson5',
  },
  {
    src: 'https://img.freepik.com/free-photo/still-life-camera-lens-digital-tablet_23-2148620000.jpg',
    title: 'Lesson6',
  },
];

const itemsPerRow = 3;

function Contentmodule() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.ceil(images.length / itemsPerRow) - 1;
      return Math.min(prevIndex + 1, maxIndex);
    });
  };

  return (
    <div className='container-fluid'>
      <div className='slider-container'>
        <button className='slider-btn prev' onClick={goToPrevious}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div className='slider'>
          <div className='slider-track' style={{ transform: `translateX(-${currentIndex * (100 / itemsPerRow)}%)` }}>
            {images.map((image, index) => (
              <div className='slider-item' key={index}>
                <img src={image.src} alt={image.title} className='slider-image' />
                <p className='text-center'>{image.title}</p>
              </div>
            ))}
          </div>
        </div>
        <button className='slider-btn next' onClick={goToNext}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      
      {/* Video below the slider */}
      <div className='video-container mx-5 rounded-4'>
        <h3>Introduction to UI/UX</h3>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/M85iQzbuLMs"
          title="How to Create an Online Course for Beginners (start to finish)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h3>Introduction to UI/UX</h3>
        <p>Welcome to "UI/UX Design Fundamentals: From Concept to Creation," an immersive course designed to equip you with the essential skills and knowledge to become a proficient UI/UX designer.</p>
        <h5>User Personas:</h5>
        <p>Identify the primary users (students, instructors, administrators) and their specific needs.</p>
      </div>
    </div>
  );
}

export default Contentmodule;
