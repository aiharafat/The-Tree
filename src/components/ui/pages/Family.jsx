import React, { useState } from "react";

const Family = () => {
  const [referralLink, setReferralLink] = useState("");
  const [message, setMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false); // New state for button click

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

    setIsClicked(true); // Set to true when clicked
  };

  return (
    <div className="bg-white flex justify-center">
      <div className="w-full bg-[#7a7474] text-black h-screen font-bold flex flex-col max-w-xl">
        <div className="px-10 z-0">
          {/* Heading */}
          <div className="text-center text-xl mt-10">
            <p className="mt-2">Invite Friends!<br />Increase your family and get 100k bonus</p>
          </div>

          <div className=" text-white text-center px-6 py-6 rounded-3x1 flex justify-around transition-all duration-300" > 
            {/* Invite Button */}
            <div className={`flex justify-center mt-10 ${isClicked ? 'w-64 h-20' : 'w-48 h-16'} transition-all duration-300 ease-in-out`}>
              <button
                onClick={handleInviteClick}
                className="bg-gray-800 text-white p-2 rounded transition-all duration-300 ease-in-out py-0"
              >
                {isClicked ? "Referral link copied" : "Copy Link" }
              </button>
            </div>

            {/* Show the generated referral link */}
            {message && (
              <div className="mt-5 text-center ">
                {message}
              </div>
            )}
          </div>

          {/* List of Family and Generation */}
          <div className="mt-20 flex justify-center flex fixed-center space-x-6">
            <div className="border border-black-00 rounded-lg p-4 w-1/2">
              <h2 className="text-center">List of your Family (1)</h2>
              <p className="text-center mt-2">Arafat</p>
            </div>
            <div className="border border-black-500 rounded-lg p-4 w-1/2">
              <h2 className="text-center">List of your Generation (1st)</h2>
              <p className="text-center mt-2">Arafat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
