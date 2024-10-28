import React from "react";
import { Link, useLocation } from "react-router-dom";  // No need for Outlet now
import BottomNavigation from "./BottomNavigation";
import { EnergyProvider } from "./EnergyContext";

// Importing the subpage components directly
import National from "./national";
import WebsiteNews from "./WebsiteNews";
import YouTubeNews from "./YouTubeNews";

const News = () => {
  const location = useLocation();

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <EnergyProvider>
      <div className="bg-[#1f2f40] min-h-screen pb-[100px] flex justify-center">
        <div className="w-full bg-[#1f2f40] text-white font-bold flex flex-col max-w-xl">
          <div className="px-3 z-0">
            <div className="flex items-center mt-[6px] justify-center pt-4">
              <h1 className="text-3xl">Latest News</h1>
            </div>

            <div className="flex justify-between gap-3 bg-[#99bfb6] opacity-85 rounded-lg w-full h-[50px] mt-10">
              <div className="flex items-center justify-between gap-8 px-3">
                {/* National Link */}
                <Link to="/News/national" className="text-center">
                  <div
                    className={`flex justify-center items-center w-full h-full shadow-lg rounded-lg px-3 py-2 transition-all duration-300 transform 
                    ${isActive("/News/national") ? "bg-[#7fa49d] scale-105" : "hover:bg-[#7fa49d] hover:scale-105"}`}>
                    <span
                      className={`text-md text-white transition-transform duration-300 ${
                        isActive("/News/national")
                          ? "transform scale-125 brightness-150"
                          : ""
                      }`}
                    >
                      National
                    </span>
                  </div>
                </Link>

                {/* International Link */}
                <Link to="/News/Website" className="text-center">
                  <div
                    className={`flex justify-center items-center w-full h-full shadow-lg rounded-lg px-3 py-2 transition-all duration-300 transform 
                    ${isActive("/News/Website") ? "bg-[#7fa49d] scale-105" : "hover:bg-[#7fa49d] hover:scale-105"}`}>
                    <span
                      className={`text-md text-white transition-transform duration-300 ${
                        isActive("/News/Website")
                          ? "transform scale-125 brightness-150"
                          : ""
                      }`}
                    >
                      International
                    </span>
                  </div>
                </Link>

                {/* Crypto Link */}
                <Link to="/News/YouTube" className="text-center">
                  <div
                    className={`flex justify-center items-center w-full h-full shadow-lg rounded-lg px-3 py-2 transition-all duration-300 transform 
                    ${isActive("/News/YouTube") ? "bg-[#7fa49d] scale-105" : "hover:bg-[#7fa49d] hover:scale-105"}`}>
                    <span
                      className={`text-md text-white transition-transform duration-300 ${
                        isActive("/News/YouTube")
                          ? "transform scale-125 brightness-150"
                          : ""
                      }`}
                    >
                      Crypto
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Display news from all subpages */}
            <div className="mt-6 space-y-6">
              {/* Rendering the National News */}
              <div>
                <h2 className="text-xl mb-2">National News</h2>
                <National /> {/* Render National news */}
              </div>

              {/* Rendering the International News */}
              <div>
                <h2 className="text-xl mb-2">International News</h2>
                <WebsiteNews /> {/* Render International news */}
              </div>

              {/* Rendering the Crypto News */}
              <div>
                <h2 className="text-xl mb-2">Crypto News</h2>
                <YouTubeNews /> {/* Render Crypto news */}
              </div>
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
