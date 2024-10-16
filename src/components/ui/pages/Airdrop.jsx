import React, { useState } from 'react';
import usePageTransition from '../pages/usePageTransition';

const Airdrop = () => {
  const [wallet, setWallet] = useState('');
  const pageTransition = usePageTransition();

  const handleAddWallet = () => {
    alert(`Wallet ${wallet} added successfully!`);
  };

  return (
    <animated.div style={pageTransition} className="airdrop">
      <h1>Airdrop</h1>
      <input
        type="text"
        placeholder="Enter Telegram Wallet"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
      />
      <button onClick={handleAddWallet}>Add Wallet</button>
    </animated.div>
  );
};

export default Airdrop;
