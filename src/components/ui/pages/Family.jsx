import React, { useState } from "react";


const Family = () => {
  const [referralLink, setReferralLink] = useState("");
  const [message, setMessage] = useState("");

 
  const handleInviteClick = () => {
    const userId = "12345"; 
    const generatedLink = `https://yourapp.com/register?ref=${userId}`; 

    setReferralLink(generatedLink);

   
    navigator.clipboard.writeText(generatedLink).then(() => {
      setMessage("Referral link copied to clipboard!");
    }).catch(() => {
      setMessage("Failed to copy referral link.");
    });
  };

  return (
    <div className="bg-white flex justify-center">
      <div className="w-full bg-[#7a7474] text-black h-screen font-bold flex flex-col max-w-xl">
        <div className="px-6 z-0">
          {/* Heading */}
          <div className="text-center mt-10">
            
            <p className="mt-2">Invite Friends!<br />Increase your family and get big bonus</p>
          </div>

          {/* Invite Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={handleInviteClick}
              className="border bg-black text-white text-center px-6 py-2 rounded-3x1 flex justify-around "
            >
              Invite Friends<br />100k for you and your friends
            </button>
          </div>

          {/* Show the generated referral link */}
          {referralLink && (
            <div className="mt-10 text-center">
              <p>Copy link: <span className="text-red-500">{referralLink}</span></p>
            </div>
          )}

          {/* Message for copied link */}
          {message && (
            <div className="mt-5 text-center ">
              {message}
            </div>
          )}

          {/* Bonus Information */}
          <div className="mt-10 text-center text-sm px-4">
            <p>
              Friends invite his friends<br />
              
            </p>
          </div>

          {/* List of Family and Generation */}
          <div className="mt-20 flex justify-center space-x-6">
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
