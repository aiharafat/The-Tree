import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import usePageTransition from "../pages/usePageTransition";
import BottomNavigation from "./BottomNavigation"; // Import your BottomNavigation component


const Home = () => {
  const [coins, setCoins] = useState(0);
  const [tapped, setTapped] = useState(false);
  const [points, setPoints] = useState(100);

  const handleTap = () => {
    setCoins(coins + 100);
    setTapped(true);
    setTimeout(() => setTapped(false), 500); // Reset animation after 500ms
  };

  const buttonAnimation = useSpring({
    transform: tapped ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 }
  });

  const pageTransition = usePageTransition(); // Apply the sand-like page transition

  return (
    <animated.div style={pageTransition} className="bg-black flex justify-center">
      <div className="w-full bg-[#7a7474] text-white h-screen font-bold flex flex-col max-w-xl">
        <div className="px-2 z-0">
          <div className="flex items-center space-x-2 pt-0">
            <div className="p-2 mt-2 rounded-lg bg-[#0e1c17]"></div>
            <div>
              <p className="mt-4 text-medium">Arafat</p>
            </div>
          </div>

          {/* News Section */}
          <div className="px-4 py-2 mt-20 flex justify-between gap-3">
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <p className="text-[10px] text-center text-white mt-1">News 1</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <p className="text-[10px] text-center text-white mt-1">News 2</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <p className="text-[10px] text-center text-white mt-1">News 3</p>
            </div>
            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <p className="text-[10px] text-center text-white mt-1">Election</p>
            </div>
          </div>

          {/* Coin Earn Section */}
          <div className="px-4 mt-4 flex justify-center">
            <div className="px-4 py-2 flex items-center space-x-2">
              <p className="text-4xl text-white"> {1000 + coins}</p>
            </div>
          </div>

          {/* Tappable Button Section */}
          <div className="px-4 mt-12 flex justify-center">
            <animated.button
              style={buttonAnimation}
              onClick={handleTap}
              className="w-60 h-60 p-4 rounded-full bg-[#272a2f] flex justify-center items-center cursor-pointer transform transition duration-200 ease-in-out hover:scale-105 active:scale-95"
            >
              <div className="w-full h-full rounded-full bg-[#0e1c17] flex justify-center items-center">
                <p className="text-white text-xl">Tap to Earn 100 Coins</p>
              </div>
            </animated.button>
          </div>

          {/* Points Display */}
          <div className="px-4 mt-4 flex justify-center">
            <div className="px-4 py-2 flex items-center space-x-2">
              <p className="text-4xl text-white">{points.toLocaleString()}</p>
            </div>
          </div>

          {/* Bottom Navigation */}
          <BottomNavigation />
        </div>
      </div>
    </animated.div>
  );
};

export default Home;
