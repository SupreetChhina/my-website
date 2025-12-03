import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${!isAnimating ? 'fade-out' : ''}`}>
      <div className="loading-logo">
        <div className="hexagon-container">
          <svg className="hexagon-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <polygon 
              className="hexagon-shape"
              points="100,20 170,60 170,140 100,180 30,140 30,60" 
              fill="none" 
              stroke="#00d9ff" 
              strokeWidth="3"
            />
          </svg>
          <span className="logo-s">S</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;