import React from "react";
import { Link, Outlet } from "react-router-dom";  // Import Outlet for nested routing

import BottomNavigation from "./BottomNavigation";
import { EnergyProvider } from "./EnergyContext";


const News = () => {
  return (
    <EnergyProvider>
    <div className="bg-[#1f2f40] pb-[100px]  justify-center">
      <div className="w-full bg-[#1f2f40] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-0">
          <div className="flex items-center mt-[6px] justify-center  pt-4"> 
            <h1 className="text-3xl">Latest News</h1>
          </div>

          <div className="flex justify-between gap-3 bg-[#99bfb6] opacity-85 rounded-lg w-full h-[50px] mt-10">
          {/* YouTube News Button */}
          <div className="flex items-center  justify-between gap-8 px-3">
            <Link to="/News/national" className="text-center">
             <div className="flex bg-[#99bfb6] w-full flex justify-between gap-3 shadow-lg hover:bg-[#7fa49d] transition-transform duration-300 transform hover:scale-110">
               
              </div>
              <span className="text-xl text-white mt-0block">National </span>
            </Link>
  
            <Link to="/News/Website" className="text-center">
              <div className="bg-[#99bfb6] w-full h-full flex justify-center items-center shadow-lg hover:bg-[#7fa49d] transition-transform duration-300 transform hover:scale-110">
               
             </div>
              <span className="text-xl text-white  block">International</span>
           </Link>
           <Link to="/News/YouTube" className="text-center">
             <div className="flex bg-[#99bfb6] w-full flex justify-between gap-3 shadow-lg hover:bg-[#7fa49d] transition-transform duration-300 transform hover:scale-110">
               
              </div>
              <span className="text-xl text-white mt-0block">Crypto </span>
            </Link>
           </div>
          </div>


          

          {/* Outlet for Subpages */}
          <div className="mt-6">
            <Outlet />  {/* This will render nested routes like YouTubeNews here */}
          </div>

          {/* Bottom Navigation */}
          <BottomNavigation />
        </div>
      </div>
    </div>
    </EnergyProvider>
  );
};

export default News;
