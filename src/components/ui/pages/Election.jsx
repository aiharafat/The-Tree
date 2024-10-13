import React from "react";
import Mainlayouts from "../../layouts/Mainlayouts";
import BottomNavigation from "./BottomNavigation";
import { Link } from "react-router-dom";

const Election = () => {
return (
 
  <div className="bg-black flex justify-center">
        <div className="w-full bg-[#7a7474] text-white h-screen font-bold flex flex-col max-w-xl">
     <div className="px-4 z-0"> 
          <div className="flex items-center space-x-2 pt-4s">
            <div className="p-3 rounded-lg bg-[#0e1c17]">
              
            </div>
            
          </div>
          <div className="flex items-center justify-between space-x-10 mt-10">
            <div className="flex items-center w-full h-full">
              <div className="w-full px-20 py-40 text-xl ">
                <span>This is the Election page </span>
                
              </div>
            </div>
{/* Add navigation buttons to other pages */}
<div className="flex justify-around mt-10">
            <Link to="/home" className="text-blue-500 underline">
              Go to Home
            </Link>
            <Link to="/family" className="text-blue-500 underline">
              Go to Family
            </Link>
            <Link to="/election" className="text-blue-500 underline">
              Go to Election
            </Link>
          </div>
            
            
            
          </div>
        </div>
        </div>
     </div>

      
);

};
 
export default Election;