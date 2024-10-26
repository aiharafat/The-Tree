import React, { useState } from "react";
import Mainlayouts from "../../layouts/Mainlayouts";
import BottomNavigation from "./BottomNavigation";
import { EnergyProvider } from "./EnergyContext";

const Airdrop = () => {
  const [wallet, setWallet] = useState('');
  const showBlackScreen = true; // Toggle this to show/hide black screen

  const handleAddWallet = () => {
    alert(`Wallet ${wallet} added successfully!`);
  };

  return (
    <EnergyProvider>
      <div className="bg-black full-screen-adjust flex justify-center">
        <div className="w-full bg-[#1f2f40] text-white h-screen font-bold flex flex-col max-w-xl">
          
          {showBlackScreen ? (
            // Black Screen
            <div className="w-full h-full bg-[#1f2f40]">
              <span className="flex items-center mt-[150px] justify-center  pt-20 opacity-90 text-7xl ">TBA</span>
            </div>
          ) : (
            // Original Airdrop content
            <>
              {/* Header Section */}
              <div className="px-4 z-0">
                <div className="flex items-center space-x-2 pt-4">
                  <h1 className="text-3xl">Airdrop</h1>
                </div>

                {/* Main Content */}
                <div className="flex items-center justify-between space-x-10 mt-10">
                  <div className="flex items-center w-full h-full">
                    <div className="w-full px-6 py-20 text-xl">
                      <span>Enter your Telegram Wallet to participate in the Airdrop:</span>
                      
                      {/* Wallet Input */}
                      <input
                        type="text"
                        placeholder="Enter Telegram Wallet"
                        value={wallet}
                        onChange={(e) => setWallet(e.target.value)}
                        className="mt-4 p-2 rounded bg-gray-800 text-white w-full"
                      />
                      
                      {/* Add Wallet Button */}
                      <button
                        onClick={handleAddWallet}
                        className="mt-4 bg-blue-600 p-2 rounded-lg text-white font-bold transition hover:bg-blue-500">
                        Add Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Navigation */}
              <BottomNavigation />
            </>
          )}
        </div>
      </div>
    </EnergyProvider>
  );
};

export default Airdrop;
