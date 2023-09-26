import React from 'react';
import "../css/Home.css";
import captureImage from '../images/Capture.png'; // Import the image correctly

export default function Home() {
  return (
    <div className='hm'>
      {/* Use the imported image */}
      <img src={captureImage} alt="Capture" />
    </div>
  );
}
