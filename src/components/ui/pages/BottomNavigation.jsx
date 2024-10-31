import React from "react";
import { Link, useLocation } from "react-router-dom";
import newsIcon from "../../../../public/assets/News.png";
import familyIcon from "../../../../public/assets/Family.png";
import homeIcon from "../../../../public/assets/Home.png";
import electionIcon from "../../../../public/assets/Election.png";
import airdropIcon from "../../../../public/assets/Airdropp.png";

const BottomNavigation = () => {
  const location = useLocation();

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#99bfb6] p-[5px] flex justify-around items-center z-50 h-[60px] shadow-lg border-t border-gray-200 rounded-3xl">
      <div className="flex w-full justify-around items-center space-x-4">
        
        {/* Home Button */}
        <Link to="/Home" className="text-center">
          <div className="relative">
            <img
              src={homeIcon}
              alt="Home Icon"
              className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                isActive("/Home")
                  ? "transform scale-125 brightness-150 shadow-lg filter hue-rotate-15"
                  : "brightness-100"
              }`}
            />
            <span
              className={`text-sm ${
                isActive("/Home") ? "text-blue-500 text-bold" : "text-gray-600"
              }`}
            >
              Home
            </span>
          </div>
        </Link>

        {/* Family Button */}
        <Link to="/Family" className="text-center">
          <div className="relative">
            <img
              src={familyIcon}
              alt="Family Icon"
              className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                isActive("/Family")
                  ? "transform scale-125 brightness-150 shadow-lg filter hue-rotate-15"
                  : "brightness-100"
              }`}
            />
            <span
              className={`text-sm ${
                isActive("/Family") ? "text-pink-500" : "text-gray-600"
              }`}
            >
              Family
            </span>
          </div>
        </Link>

        {/* News Button */}
        <Link to="/News" className="text-center">
          <div className="relative">
            <img
              src={newsIcon}
              alt="News Icon"
              className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                isActive("/News")
                  ? "transform scale-125 brightness-150 shadow-lg filter hue-rotate-15"
                  : "brightness-100"
              }`}
            />
            <span
              className={`text-sm ${
                isActive("/News") ? "text-purple-500" : "text-gray-600"
              }`}
            >
              News
            </span>
            <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </div>
        </Link>

        {/* Election Button */}
        <Link to="/Election" className="text-center">
          <div className="relative">
            <img
              src={electionIcon}
              alt="Election Icon"
              className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                isActive("/Election")
                  ? "transform scale-125 brightness-150 shadow-lg filter hue-rotate-15"
                  : "brightness-100"
              }`}
            />
            <span
              className={`text-sm ${
                isActive("/Election") ? "text-yellow-500" : "text-gray-600"
              }`}
            >
              Task
            </span>
            <span className="absolute top-0 right-0 inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </div>
        </Link>

        {/* Airdrop Button */}
        <Link to="/Airdrop" className="text-center">
          <div className="relative">
            <img
              src={airdropIcon}
              alt="Airdrop Icon"
              className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                isActive("/Airdrop")
                  ? "transform scale-125 brightness-150 shadow-lg filter hue-rotate-15"
                  : "brightness-100"
              }`}
            />
            <span
              className={`text-sm ${
                isActive("/Airdrop") ? "text-green-500" : "text-gray-600"
              }`}
            >
              Airdrop
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
