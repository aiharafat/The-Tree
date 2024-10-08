import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/pages/BottomNavigation";
 
const Mainlayouts = () => {
return (
    <div data-theme="synthwave">
      <Outlet/>
      <BottomNavigation/>
    </div>
);

};
 
export default Mainlayouts;