import React from "react";
import { Link } from "react-router-dom";
// Importing the  icon from assets
import newsIcon from "../../../assets/";


const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl h-16">
      <div className="text-center text-white font-bold w-1/5">
        <Link to="/Home" className="bg-[#272a2f] rounded-lg px-3 py-2 w-full text-center">
          Home
        </Link>
      </div>

      <div className="text-center text-white font-bold w-1/5">
        <Link to="/Family" className="bg-[#272a2f] rounded-lg px-3 py-2 w-full text-center">
          Family
        </Link>
      </div>

      <div className="text-center text-white font-bold w-1/5">
        <Link to="/News" className="bg-[#272a2f] rounded-lg px-3 py-2 w-full text-center">
          
          <img src={newsIcon} alt="News Icon" className="w-6 h-6 mx-auto" />
        </Link>
      </div>

      <div className="text-center text-white font-bold w-1/4">
        <Link to="/Election" className="bg-[#272a2f] rounded-lg px-1 py-2 w-full text-center">
          Election
        </Link>
      </div>

      <div className="text-center text-white font-bold w-1/4">
        <Link to="/Airdrop" className="bg-[#272a2f] rounded-lg px-1 py-2 w-full text-center">
          Airdrop
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
