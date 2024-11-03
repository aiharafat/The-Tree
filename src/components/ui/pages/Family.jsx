import React, { useState } from "react";
import { EnergyProvider } from "./EnergyContext";
import "../../../../src/family.css";

const Family = () => {
  const [referralLink, setReferralLink] = useState("");
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleInviteClick = () => {
    const userId = "12345";
    const generatedLink = `https://yourapp.com/register?ref=${userId}`;

    setReferralLink(generatedLink);

    navigator.clipboard.writeText(generatedLink)
      .then(() => {
        setMessage("");
      })
      .catch(() => {
        setMessage("Failed to copy referral link.");
      });

    setIsClicked(true);
  };

  return (
    <EnergyProvider>
      <div className="container">
        <div className="family-wrapper">
          <div className="content">
            {/* Heading */}
            <div className="heading">
              <p className="heading-text">Invite Friends!<br />Increase your family and get 100k bonus</p>
            </div>

            {/* Invite Section */}
            <div className="invite-section">
              <div className={`invite-button-wrapper ${isClicked ? "clicked" : ""}`}>
                <button
                  onClick={handleInviteClick}
                  className="invite-button"
                >
                  {isClicked ? "Referral link copied" : "Copy Link"}
                </button>
              </div>

              {/* Show the generated referral link */}
              {message && (
                <div className="message">
                  {message}
                </div>
              )}
            </div>

            {/* Family and Generation Lists */}
            <div className="family-list-section">
              <div className="family-list">
                <h2 className="list-title">List of your Family (1)</h2>
                <p className="list-item">Arafat</p>
              </div>
              <div className="generation-list">
                <h2 className="list-title">List of your Generation (1st)</h2>
                <p className="list-item">Arafat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EnergyProvider>
  );
};

export default Family;
