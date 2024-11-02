import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../../src/bottomnav.css"; // Import CSS file
import newsIcon from "../../../../public/assets/News.png";
import familyIcon from "../../../../public/assets/Family.png";
import homeIcon from "../../../../public/assets/Home.png";
import taskpageIcon from "../../../../public/assets/taskpage.png";
import airdropIcon from "../../../../public/assets/Airdropp.png";

const BottomNavigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bottom-nav">
      <div className="flex w-full justify-around items-center space-x-4">
        <Link to="/Home" className="text-center">
          <div className="relative">
            <img
              src={homeIcon}
              alt="Home Icon"
              className={`nav-icon ${isActive("/Home") ? "active-icon" : ""}`}
            />
            <span className={`nav-text ${isActive("/Home") ? "text-active-home" : ""}`}>
              Home
            </span>
          </div>
        </Link>

        <Link to="/Family" className="text-center">
          <div className="relative">
            <img
              src={familyIcon}
              alt="Family Icon"
              className={`nav-icon ${isActive("/Family") ? "active-icon" : ""}`}
            />
            <span className={`nav-text ${isActive("/Family") ? "text-active-family" : ""}`}>
              Family
            </span>
          </div>
        </Link>

        <Link to="/News" className="text-center">
          <div className="relative">
            <img
              src={newsIcon}
              alt="News Icon"
              className={`nav-icon ${isActive("/News") ? "active-icon" : ""}`}
            />
            <span className={`nav-text ${isActive("/News") ? "text-active-news" : ""}`}>
              News
            </span>
            <span className="notification-badge"></span>
          </div>
        </Link>

        <Link to="/taskpage" className="text-center">
          <div className="relative">
            <img
              src={taskpageIcon}
              alt="Task Icon"
              className={`nav-icon ${isActive("/taskpage") ? "active-icon" : ""}`}
            />
            <span className={`nav-text ${isActive("/taskpage") ? "text-active-task" : ""}`}>
              Task
            </span>
          </div>
        </Link>

        <Link to="/Airdrop" className="text-center">
          <div className="relative">
            <img
              src={airdropIcon}
              alt="Airdrop Icon"
              className={`nav-icon ${isActive("/Airdrop") ? "active-icon" : ""}`}
            />
            <span className={`nav-text ${isActive("/Airdrop") ? "text-active-airdrop" : ""}`}>
              Airdrop
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
