import React from 'react';
import './Loading.css'; // Import your CSS file

const Loading = () => {
  return (
    <div className="loading-container">
      <p>Loading...</p>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
