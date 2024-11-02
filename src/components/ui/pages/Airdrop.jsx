import React, { useState } from "react";
import "../../../../src/airdrop.css"; // Import the new CSS file
import Mainlayouts from "../../layouts/Mainlayouts";
import BottomNavigation from "./BottomNavigation";
import { EnergyProvider } from "./EnergyContext";

const Airdrop = () => {
  const [wallet, setWallet] = useState('');
  const showBlackScreen = true;

  const handleAddWallet = () => {
    alert(`Wallet ${wallet} added successfully!`);
  };

  return (
    <EnergyProvider>
      <div className="full-screen-adjust">
        <div className="airdrop-container">
          {showBlackScreen ? (
            <div className="black-screen">
              <span className="black-screen-text">TBA</span>
            </div>
          ) : (
            <>
              <div className="header">
                <div className="header-title">
                  <h1>Airdrop</h1>
                </div>

                <div className="content-container">
                  <div className="content-inner">
                    <span>Enter your Telegram Wallet to participate in the Airdrop:</span>
                    
                    <input
                      type="text"
                      placeholder="Enter Telegram Wallet"
                      value={wallet}
                      onChange={(e) => setWallet(e.target.value)}
                      className="input-field"
                    />
                    
                    <button
                      onClick={handleAddWallet}
                      className="add-wallet-button">
                      Add Wallet
                    </button>
                  </div>
                </div>
              </div>

              <BottomNavigation />
            </>
          )}
        </div>
      </div>
    </EnergyProvider>
  );
};

export default Airdrop;
