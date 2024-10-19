import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import BottomNavigation from "./BottomNavigation"; 
import mainCharacter from "../../../../public/assets/Maincharacterr.png";
import dollarCoin from "../../../../public/assets/dollar-coin.png";
import energyIcon from "../../../../public/assets/energy.png";
import { Link } from "react-router-dom";
import newsIcon from "../../../../public/assets/News.png";
import electionIcon from "../../../../public/assets/Election.png";
import infoIcon from "../../../../public/assets/infoo.png";

const Home = () => {
  const [coins, setCoins] = useState(() => parseInt(localStorage.getItem("coins")) || 0);
  const [tapped, setTapped] = useState(false);
  const [energy, setEnergy] = useState(() => parseInt(localStorage.getItem("energy")) || 1000);
  const [coinPopups, setCoinPopups] = useState([]); // Track multiple coin popups
  const [showMessage, setShowMessage] = useState(false); // Defined showMessage
  const [boostActive, setBoostActive] = useState(false); // Tracks the boost status
  const [boostCount, setBoostCount] = useState(() => parseInt(localStorage.getItem("boostCount")) || 3); // 3 boosts per day
  const [boostUsedToday, setBoostUsedToday] = useState(() => JSON.parse(localStorage.getItem("boostUsedToday")) || false);
  const [boostTimer, setBoostTimer] = useState(0); // Timer for boost countdown

  useEffect(() => {
    localStorage.setItem("coins", coins);
    localStorage.setItem("energy", energy);
    localStorage.setItem("boostCount", boostCount);
    localStorage.setItem("boostUsedToday", boostUsedToday);
  }, [coins, energy, boostCount, boostUsedToday]);

  // Mechanism for daily boost open or not
  useEffect(() => {
    const lastBoostDate = localStorage.getItem("lastBoostDate");
    const today = new Date().toLocaleDateString();

    if (lastBoostDate !== today) {
      setBoostCount(3);
      localStorage.setItem("lastBoostDate", today);
    }
  }, []);

  // Function to handle multiple taps
  const handleTap = (e) => {
    if (energy <= 10) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return;
    }

    const tapPosition = {
      x: e.touches[0].clientX, // Get x coordinate of the tap
      y: e.touches[0].clientY, // Get y coordinate of the tap
      id: Date.now(), // Unique ID for each popup
    };

    const coinsToAdd = boostActive ? 20 : 10;

    setCoins(coins + coinsToAdd);
    setTapped(true);

    if (energy > 0) {
      setEnergy(energy - 10);
    }

    // Add new pop-up to the array
    setCoinPopups((prev) => [...prev, tapPosition]);

    // Remove the pop-up after 500ms
    setTimeout(() => {
      setCoinPopups((prev) => prev.filter((popup) => popup.id !== tapPosition.id));
    }, 500);

    setTimeout(() => {
      setTapped(false);
    }, 200);
  };

  const handleBoost = () => {
    if (boostCount > 0 && !boostActive) {
      setBoostActive(true);
      setBoostCount(boostCount - 1);
      setBoostTimer(30); // Start countdown at 30 seconds

      // Deactivation after 30 seconds
      const boostInterval = setInterval(() => {
        setBoostTimer((prevTime) => {
          if (prevTime > 1) {
            return prevTime - 1; // Decrease timer by 1 second
          } else {
            clearInterval(boostInterval); // Stop countdown when it reaches 0
            setBoostActive(false); // End boost
            return 0;
          }
        });
      }, 1000); // Update every second

      setTimeout(() => {
        clearInterval(boostInterval);
        setBoostActive(false);
      }, 30000); // Stop boost after 30 seconds
    } else {
      setShowMessage(true); // Not enough boosts
    }
  };

  // Automatically restore energy every second
  useEffect(() => {
    const interval = setInterval(() => {
      setEnergy((prevEnergy) => {
        if (prevEnergy < 1000) {
          return prevEnergy + 1; // Increase energy by 1 every second
        }
        return prevEnergy; // Ensure energy doesn't exceed 1000
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const buttonAnimation = useSpring({
    transform: tapped ? "scale(1.2)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  const isActive = (path) => location.pathname === path; // Check if current route is active

  return (
    <div className="bg-black flex justify-center">
    <div className="w-full bg-[#1f2f40] h-screen font-bold flex flex-col max-w-xl relative">
      <div />

      <div className="relative z-10 px-2"> {/* Ensure content is above background */}
        <div className="flex items-center space-x-2 pt-0">
          <div className="absolute top-0 right-[370px] mt-4 flex items-center px-2 text-white">  
            <Link to="/info" className="text-center">
              <div className="relative">
                <img
                  src={infoIcon}
                  alt="info Icon"
                  className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                    isActive("/info")
                      ? "transform scale-125 brightness-150 shadow-lg filter hue-rotate-15"
                      : "brightness-100"
                  }`}
                />
                <span className={`text-sm ${isActive("/info") ? "text-yellow-500" : "text-gray-600"}`}></span>
              </div>
            </Link>
          </div>
          <div>
            <p className="mt-4 px-6 text-xl">Arafat</p>
          </div>
        </div>

           {/* News Section */}
           <div className="cpx-4 py-2 mt-20 flex justify-between gap-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
                <Link to="/News" className="text-center">
                  <div className="relative">
                    <img
                      src={newsIcon}
                      alt="News Icon"
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        isActive("/News")
                          ? "transform scale-125 brightness-150 shadow-lg filter hue-rotate-15"
                          : "brightness-100"
                      }`}
                    />
                    <span className={`text-sm ${isActive("/News") ? "text-purple-500" : "text-gray-600"}`}>News</span>
                  </div>
                </Link>
              </div>
            ))}

            <div className="bg-[#272a2f] rounded-lg px-4 py-2 w-full relative">
              <Link to="/Election" className="text-center">
                <div className="relative">
                  <img
                    src={electionIcon}
                    alt="Election Icon"
                    className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                      isActive("/Election")
                        ? "transform scale-125 brightness-150 shadow-lg filter hue-rotate-15"
                        : "brightness-100"
                    }`}
                  />
                  <span className={`text-sm ${isActive("/Election") ? "text-yellow-500" : "text-gray-600"}`}>
                    Election
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Coin Earn Section */}
          <div className="px-4 mt-3 flex justify-center">
            <div className="px-2  mt-0 flex items-center space-x-0">
              <img src={dollarCoin} className="w-[50px] h-[50px] py-0" />
              <p className="text-4xl mt-0 text-white">{1000 + coins}</p>
            </div>
          </div>

          {/* Points Display */}
          <div className="absolute top-0 right-[90px] mt-4 flex items-center px-2 text-white ">
            <span>Total earn = </span>
            <p className="text-xl text-white"> {1000 + coins}</p>
            <img src={dollarCoin} className="w-[30px] h-[30px]" />
          </div>

          {/* Tappable Button Section */}
          <div className="px-7 mt-5 flex justify-center">
            <animated.button
              style={buttonAnimation}
              onTouchStart={handleTap}
              className={`w-[330px] h-[330px] px-3 p-4 rounded-full bg-[#272a2f] flex justify-center items-center cursor-pointer transform transition duration-200 ease-in-out ${
                energy > 0 ? "hover:scale-90 active:scale-75" : "cursor-not-allowed"
              }`}
              disabled={energy <= 0}
            >
              <div className="w-full h-full rounded-full bg-[#0e1c17] flex justify-center brightness-1 items-center">
                <img src={dollarCoin} className="w-full h-full" />
              </div>
            </animated.button>
          </div>

          {/* Boost Timer */}
          {boostActive && boostTimer > 0 && (
            <div className="text-center text-white font-bold mt-4">
              Boost Active! Time Left: {boostTimer}s
            </div>
          )}

          {/* Coin Pop-ups */}
          {coinPopups.map((popup) => (
            <div
              key={popup.id}
              className="absolute text-yellow-500 font-bold"
              style={{
                top: popup.y,
                left: popup.x,
                transform: "translate(-50%, -50%)",
                fontSize: "40px", // Adjust size
              }}
            >
              +{boostActive ? 20 : 10}
            </div>
          ))}

          <div className="flex justify-between gap-3 px-2 py-3">
            {/* Energy Display */}
            <div className="flex items-center px-2 w-[130px] h-8 bg-gray-800 text-white rounded-md shadow-lg">
              <img src={energyIcon} className="w-[20px] h-[20px] mr-2" />
              <span>{energy}/1000</span>
            </div>

            {/* Boost Button */}
            <div
              className="flex items-center px-2 w-[150px] h-8 bg-gray-800 text-white rounded-md shadow-lg"
              onClick={handleBoost}
            >
              <span>{boostCount > 0 ? `Boost (${boostCount} left)` : "No Boosts Left"}</span>
              <img src={dollarCoin} className="w-[30px] h-[30px]" />
            </div>
          </div>

          {/* Error message when energy is out */}
          {showMessage && (
            <div className="text-center mt-10 text-red-500 font-semibold">
              Sorry, not enough energy or Boosts!
            </div>
          )}

          {/* Bottom Navigation */}
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default Home;
