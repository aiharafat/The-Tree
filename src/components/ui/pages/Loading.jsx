// Loading.js
import React, { useEffect } from "react";
import "../../../Loading.css"; // Separate CSS file for animations
import logoIcon from "../../../../public/assets/Logo.png";
const Loading = ({ onLoad }) => {
  useEffect(() => {
    const timer = setTimeout(onLoad, 10000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, [onLoad]);

  return (
    <div className="loading-container">
      <img src={logoIcon} alt="Logo" className="loading-logo" />
      <span className="text-4xl text-white">Loading...</span>
    </div>
  );
};

export default Loading;
