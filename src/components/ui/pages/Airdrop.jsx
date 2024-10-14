import React from "react";
import Mainlayouts from "../../layouts/Mainlayouts";
import BottomNavigation from "./BottomNavigation";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Airdrop = () => {
  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-[#7a7474] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-0">
          <div className="flex items-center space-x-2 pt-4">
           
          </div>

          <div className="flex items-center justify-between space-x-10 mt-10">
            <div className="flex items-center w-full h-full">
              <div className="w-full px-20 py-40 text-xl ">
                <span>This is the News page</span>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Airdrop;
