import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // For API calls

const Receive = () => {
  const [signalWalletBalance, setSignalWalletBalance] = useState(100); // Example balance
  const [walletCode, setWalletCode] = useState('');
  const [accountNumber] = useState('ACC-12345678'); // Example account number
  const [phoneNumber] = useState('+1234567890'); // Example phone number
  const [cryptoPrices, setCryptoPrices] = useState({}); // State for cryptocurrency prices

  // Generates a wallet code
  const handleGenerateWalletCode = () => {
    const generatedCode = 'WALLET-12345'; // Example generated code
    setWalletCode(generatedCode);
  };

  // Fetches cryptocurrency prices using CoinGecko API
  const fetchCryptoPrices = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin&vs_currencies=usd'
      );
      setCryptoPrices(response.data);
    } catch (error) {
      console.error('Error fetching cryptocurrency prices:', error);
    }
  };

  // Fetches cryptocurrency prices every minute
  useEffect(() => {
    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 60000); // Refreshes every minute
    return () => clearInterval(interval); // Cleans up interval on unmount
  }, []);

  return (
    <div style={styles.receiveMoney}>
      <h1>Receive Money</h1>

      <div style={styles.balanceContainer}>
        <h2>Signal<span style={{ color: '#ff6600' }}>Wallet</span> Balance: ${signalWalletBalance}</h2>
        <p>Account Number: {accountNumber}</p>
        <p>Phone Number: {phoneNumber}</p>
        <button onClick={() => alert('Top up your balance!')} style={styles.topUpButton}>
          Top Up
        </button>
      </div>

      <motion.div
        style={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section style={styles.walletCodeSection}>
          <h2>Generate Wallet Code to Receive Crypto</h2>
          {walletCode && <p style={styles.walletCode}>{walletCode}</p>}
          <button onClick={handleGenerateWalletCode} style={styles.button}>
            Generate Wallet Code
          </button>
        </section>

        {/* Cryptocurrency Prices Section */}
        <section style={styles.cryptoPrices}>
          <h2>Current Cryptocurrency Prices</h2>
          <ul>
            <li>Bitcoin: ${cryptoPrices.bitcoin?.usd || 'Loading...'}</li>
            <li>Ethereum: ${cryptoPrices.ethereum?.usd || 'Loading...'}</li>
            <li>Litecoin: ${cryptoPrices.litecoin?.usd || 'Loading...'}</li>
          </ul>
        </section>
      </motion.div>

    
    </div>
  );
};



// Inline styles
const styles = {
  receiveMoney: {
    padding: '20px',
    background: 'linear-gradient(to bottom, #ffecd2, #fcb69f)', // Light pastel orange gradient
    textAlign: 'center',
    minHeight: '100vh',
  },
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
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '0 auto',
    maxWidth: '1200px',
    flexWrap: 'wrap',
  },
  walletCodeSection: {
    margin: '10px',
    padding: '15px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    flex: '1',
    minWidth: '300px',
    maxWidth: '400px',
    textAlign: 'center',
  },
  walletCode: {
    margin: '10px 0',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  cryptoPrices: {
    margin: '10px',
    padding: '15px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    flex: '1',
    minWidth: '300px',
    maxWidth: '400px',
    textAlign: 'center',
  },
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    zIndex: 1000,
  },
  chatbotBubble: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chatbotText: {
    margin: '10px 0',
  },
  chatbotButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  chatbotButton: {
    padding: '8px 12px',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Receive;








