import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/pages/BottomNavigation";
import Loading from "../ui/pages/Loading"; // Import your loading component

const Mainlayouts = () => {
  const [isLoading, setIsLoading] = useState(!sessionStorage.getItem("hasLoadedBefore"));

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoadedBefore", "true");
      }, 3000); // Show loading for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />; // Show only the loading component while loading
  }

  return (
    <div data-theme="synthwave">
      <Outlet /> {/* Render the routed page content */}
      <BottomNavigation /> {/* Bottom navigation shows only after loading is done */}
    </div>
  );
};

export default Mainlayouts;
