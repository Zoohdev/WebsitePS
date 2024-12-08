import React, { useState } from 'react';

const WalletBalance = () => {
  const [signalWalletBalance] = useState(100); // Example balance

  return (
    <div style={styles.balanceContainer}>
      <h2>Signal<span style={{ color: '#ff6600' }}>Wallet</span> Balance: ${signalWalletBalance}</h2>
      <button onClick={() => alert('Top up your balance!')} style={styles.topUpButton}>
        Top Up
      </button>
    </div>
  );
};

const styles = {
  balanceContainer: {
    margin: '20px 0',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  topUpButton: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default WalletBalance;
