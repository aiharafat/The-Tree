import React, { useState } from "react";
import Mainlayouts from "../../layouts/Mainlayouts";
import BottomNavigation from "./BottomNavigation";


const Home = () => {
  const [points, setPoints] = useState(100); 

  
  const handleCardClick = () => {
    console.log("Tappable area clicked!");
    
  };

  return (
    <div className="bg-black flex justify-center">
      <div className="w-full bg-[#7a7474] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-2 z-0">
          <div className="flex items-center space-x-2 pt-0">
            <div className="p-2 mt-2 rounded-lg bg-[#0e1c17]"></div>
            <div>
              <p className="mt-4 text-medium">Arafat</p>
            </div>
          </div>
          

          <div className="px-4 py-2 mt-20 flex justify-between gap-3">
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <p className="text-[10px] text-center text-white mt-1">News 1</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <p className="text-[10px] text-center text-white mt-1">News 2</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <p className="text-[10px] text-center text-white mt-1">News 3</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <p className="text-[10px] text-center text-white mt-1">Election</p>
            </div>
          </div>
        </div>
        

        
        <div className="flex-grow mt-4 rounded-t-[46px] relative top-glow">
          
          <div className="px-4 mt-4 flex justify-center">
            <div className="px-4 py-2 flex items-center space-x-2">
              <p className="text-4xl text-white">{points.toLocaleString()}</p>
            </div>
          </div>

          
          <div className="px-4 mt-12 flex justify-center">
            <div
              className="w-60 h-60 p-4 rounded-full bg-[#272a2f] flex justify-center items-center cursor-pointer transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
              onClick={handleCardClick}
            >
              <div className="w-full h-full rounded-full bg-[#0e1c17] flex justify-center items-center">
                <p className="text-white text-xl">Tap Me</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
