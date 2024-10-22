import React from "react";
import { Link, Outlet } from "react-router-dom";  // Import Outlet for nested routing

import BottomNavigation from "./BottomNavigation";


const News = () => {
  return (
    <div className="bg-black justify-center">
      <div className="w-full bg-[#1f2f40] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-4 z-0">
          <div className="flex items-center mt-[30px] justify-center space-x-2 pt-4">
            <h1 className="text-3xl">Latest News</h1>
          </div>

          {/* YouTube News Button */}
          <div className="flex items-center justify-between px-[50px] mt-[50px]">
  <Link to="/News/YouTube" className="text-center">
    <div className="relative bg-[#99bfb6] w-24 h-24 flex justify-center items-center rounded-full shadow-lg hover:bg-[#7fa49d] transition-transform duration-300 transform hover:scale-110">
      <img
        src="/assets/Youtube.png"
        alt="YouTube Icon"
        className="w-8 h-8 transition-transform duration-300"
      />
    </div>
    <span className="text-sm text-white mt-2 block">YouTube </span>
  </Link>
  
  <Link to="/News/Website" className="text-center">
    <div className="relative bg-[#99bfb6] w-24 h-24 flex justify-center items-center rounded-full shadow-lg hover:bg-[#7fa49d] transition-transform duration-300 transform hover:scale-110">
      <img
        src="/assets/Website.png"
        alt="Website Icon"
        className="w-[60px] h-[60px] transition-transform duration-300"
      />
    </div>
    <span className="text-sm text-white mt-2 block">Website</span>
  </Link>
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
  );
};

export default News;
