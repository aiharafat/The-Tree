import React from "react";
import Mainlayouts from "../../layouts/Mainlayouts";
import BottomNavigation from "./BottomNavigation";

const Family = () => {
return (
  <div className="bg-black flex justify-center">
        <div className="w-full bg-[#7a7474] text-white h-screen font-bold flex flex-col max-w-xl">
     <div className="px-4 z-0"> 
          <div className="flex items-center space-x-2 pt-4">
            <div className="p-1 rounded-lg bg-[#0e1c17]">
              
            </div>
            
          </div>
          <div className="grid grid-cols-1 grid-cols-2 items-center justify-between space-x-5 mt-10">
            <div className="flex items-center w-1/4">
              <div className="w-full">
                <span>lorem</span>
                
              </div>
            </div>

            <div className=" grid grid-cols-1 grid-cols-2 items-center justify-between space-">
              
            <span>lorem</span>


            </div>
            
            
          </div>
        </div>
        </div>
     </div>

      
);

};
 
export default Family;