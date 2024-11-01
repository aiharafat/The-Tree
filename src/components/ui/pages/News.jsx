import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BottomNavigation from "./BottomNavigation";
import { EnergyProvider } from "./EnergyContext";

// Importing the subpage components
import National from "./national";
import WebsiteNews from "./WebsiteNews";
import YouTubeNews from "./YouTubeNews";

const News = () => {
  const location = useLocation();

  // State to track the currently selected category, default is "all" to show everything
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);  // Update the state with the selected category
  };

  return (
    <EnergyProvider>
      <div className="bg-[#1f2f40] min-h-screen pb-[80px] flex justify-center">
        <div className="w-full bg-[#1f2f40] text-white h-screen font-bold flex flex-col max-w-xl">
          <div className="px-3 z-0">
            <div className="flex items-center mt-[6px] justify-center pt-4">
              <h1 className="text-3xl">Latest News</h1>
            </div>

            <div className="flex justify-center bg-[#99bfb6] rounded-2xl mt-8 w-full h-[60px]">
              {/* National Link */}
              <Link
                to="/News/national"
                onClick={() => handleCategoryChange("national")} // Update state on click
                className="w-1/3 h-full flex items-center justify-center rounded-2xl"
              >
                <div
                  className={`w-full h-full flex items-center justify-center rounded-2xl
                    ${isActive("/News/national") ? "bg-blue-300" : "bg-transparent"}`}
                >
                  <span className="text-md text-white">National</span>
                </div>
              </Link>

              {/* International Link */}
              <Link
                to="/News/Website"
                onClick={() => handleCategoryChange("international")}
                className="w-1/3 h-full flex items-center justify-center rounded-2xl"
              >
                <div
                  className={`w-full h-full flex items-center justify-center rounded-2xl
                    ${isActive("/News/Website") ? "bg-blue-300" : "bg-transparent"}`}
                >
                  <span className="text-lg text-grey">International</span>
                </div>
              </Link>

              {/* Crypto Link */}
              <Link
                to="/News/YouTube"
                onClick={() => handleCategoryChange("crypto")}
                className="w-1/3 h-full flex items-center justify-center rounded-2xl"
              >
                <div
                  className={`w-full h-full flex items-center justify-center rounded-2xl
                    ${isActive("/News/YouTube") ? "bg-blue-300" : "bg-transparent"}`}
                >
                  <span className="text-lg text-grey-500">Crypto</span>
                </div>
              </Link>
            </div>

            {/* Conditionally Render News Based on Selected Category */}
            <div className="mt-6 space-y-6">
              {selectedCategory === "all" && (
                <div>
                  <h2 className="text-xl mb-2">All News</h2>
                  <National /> {/* Render National news */}
                  <WebsiteNews /> {/* Render International news */}
                  <YouTubeNews /> {/* Render Crypto news */}
                </div>
              )}

              {selectedCategory === "national" && (
                <div>
                  <h2 className="text-xl mb-2">National News</h2>
                  <National /> {/* Render National news */}
                </div>
              )}

              {selectedCategory === "international" && (
                <div>
                  <h2 className="text-xl mb-2">International News</h2>
                  <WebsiteNews /> {/* Render International news */}
                </div>
              )}

              {selectedCategory === "crypto" && (
                <div>
                  <h2 className="text-xl mb-2">Crypto News</h2>
                  <YouTubeNews /> {/* Render Crypto news */}
                </div>
              )}
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
