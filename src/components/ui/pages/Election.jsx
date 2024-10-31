import React, { useState } from "react";
import Mainlayouts from "../../layouts/Mainlayouts";
import BottomNavigation from "./BottomNavigation";
import { Link } from "react-router-dom";
import { EnergyProvider } from "./EnergyContext";
import dollarCoin from "../../../../public/assets/dollar-coin.png";

const Election = () => {
  const [activeTab, setActiveTab] = useState("task");
  
  const tasks = [
    { name: "Subscribe to the Telegram channel", link: "/subscribe-telegram", points: "+15" },
    { name: "Boost us", link: "/boost-blum", points: "+2" },
    { name: "Join our Instagram", link: "/join-instagram", points: "+5" },
    { name: "Follow Tomato on X", link: "/follow-x", points: "+5" },
    { name: "Follow CEO on X", link: "/follow-ceo-x", points: "+5" },
    { name: "Follow us on YouTube", link: "/follow-youtube", points: "+10" },
  ];

  return (
    <EnergyProvider>
      <div className="bg-black full-screen-adjust flex justify-center">
        <div className="w-full bg-[#1f2f40] text-white h-screen font-bold flex flex-col max-w-xl">
          <div className="px-4 z-0">
            <div className="flex items-center justify-center space-x-2 pt-4">
              <h1 className="text-2xl">Tasks</h1>
            </div>
            
            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 bg-[#99bfb6] rounded-2xl mt-8 w-full h-12">
              <button
                onClick={() => setActiveTab("task")}
                className={`w-1/2 h-full rounded-2xl ${activeTab === "task" ? "bg-blue-300" : "bg-transparent"}`}
              >
                Daily Task
              </button>
              <button
                onClick={() => setActiveTab("polling")}
                className={`w-1/2 h-full rounded-2xl ${activeTab === "polling" ? "bg-blue-300" : "bg-transparent"}`}
              >
                Polling
              </button>
            </div>

            {/* Content based on active tab */}
            <div className="mt-8 px-2 space-y-5">
              {activeTab === "task" ? (
                tasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#333] rounded-lg">
                    <Link to={task.link} className="text-white text-md">
                      {task.name}
                    </Link>
                    <div className="flex items-center space-x-1">
                      <span className="text-gray-400">{task.points}</span>
                      <img src={dollarCoin} alt="Coin Icon" className="h-6 w-6" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="space-y-4 ">
                  <span className="flex items-center mt-[150px] justify-center  pt-20 opacity-90 text-7xl ">TBA</span>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Navigation */}
          <BottomNavigation />
        </div>
      </div>
    </EnergyProvider>
  );
};

export default Election;
