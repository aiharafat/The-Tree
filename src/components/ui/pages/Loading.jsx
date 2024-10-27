// Loading.js
import React, { useEffect } from "react";
import "../../../Loading.css"; // Separate CSS file for animations
import logoIcon from "../../../../public/assets/Logo.png";
const Loading = ({ onLoad }) => {
  useEffect(() => {
    const timer = setTimeout(onLoad, 3000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, [onLoad]);

  return (
    <div className="loading-container">
      <img src={logoIcon} alt="Logo" className="loading-logo" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
