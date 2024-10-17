import React from "react";
import { Link } from "react-router-dom";
import newsIcon from "../../../../public/assets/News.png"; // Make sure this path is correct
import familyIcon from "../../../../public/assets/Family.png";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-white flex justify-around items-center z-50 rounded-3xl h-20 p-2 shadow-lg border border-white border-opacity-20 backdrop-blur-md">
      
      <div className="flex w-full justify-around items-center space-x-3">
        
        {/* Home Button */}
        <Link to="/Home" className="text-white font-bold text-center w-1/5 py-2 rounded-lg hover:text-blue-300 hover:shadow-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Home
        </Link>
        
        {/* Family Button */}
        <Link to="/Family" className="text-white font-bold text-center w-1/5 py-2 rounded-lg hover:text-pink-300 hover:shadow-pink-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
        <div className="relative">
            <img 
              src={familyIcon} 
              alt="Family Icon" 
              className="w-16 h-16 opacity-90 filter brightness-200 transition-all duration-300 transform hover:scale-125 hover:shadow-cyan-400 shadow-lg"
            />
            {/* Adding a glow effect behind the icon */}
            <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-lg"></div>
          </div>
        </Link>

        {/* News Icon */}
        <Link to="/News" className="rounded-lg w-1/5 text-center flex justify-center items-center transition-all duration-300 transform hover:scale-110">
          <div className="relative">
            <img 
              src={newsIcon} 
              alt="News Icon" 
              className="w-16 h-16 opacity-90 filter brightness-200 transition-all duration-300 transform hover:scale-125 hover:shadow-cyan-400 shadow-lg"
            />
            {/* Adding a glow effect behind the icon */}
            <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-lg"></div>
          </div>
        </Link>

        {/* Election Button */}
        <Link to="/Election" className="text-white font-bold text-center w-1/5 py-2 rounded-lg hover:text-yellow-300 hover:shadow-yellow-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Election
        </Link>

        {/* Airdrop Button */}
        <Link to="/Airdrop" className="text-white font-bold text-center w-1/5 py-2 rounded-lg hover:text-green-300 hover:shadow-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          Airdrop
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
