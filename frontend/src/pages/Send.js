import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react';

const Send = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [phone, setPhone] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [signalWalletBalance, setSignalWalletBalance] = useState(100); // Wallet Balance

  // Fetch exchange rate for USD to ZAR
  const fetchExchangeRate = async () => {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
      setExchangeRate(response.data.rates['ZAR']);
    } catch (error) {
      console.error('Error fetching the exchange rate:', error);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const handleAmountChange = (e) => {
    const inputAmount = e.target.value;
    setAmount(inputAmount);
    if (exchangeRate) {
      setConvertedAmount(inputAmount * exchangeRate);
    }
  };

  const handleSendMoney = () => {
    if (amount && signalWalletBalance >= amount) {
      setSignalWalletBalance(signalWalletBalance - amount);
      alert(`Sent $${amount} to ${recipient || phone || bankAccount} successfully!`);
      setAmount('');
      setRecipient('');
      setPhone('');
      setBankAccount('');
    } else {
      alert('Insufficient balance or invalid amount!');
    }
  };

  return (
    <div style={styles.sendMoney}>
      <h1>Send Money</h1>

      {/* Wallet Balance */}
      <div style={styles.balanceContainer}>
        <h2>Wallet Balance: ${signalWalletBalance.toFixed(2)}</h2>
      </div>

      <motion.div 
        style={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Currency Converter */}
        <section style={styles.converter}>
          <h2>Convert from any African country</h2>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount in USD"
            style={styles.input}
          />
          <div style={styles.exchangeRate}>
            <h3>Exchange Rate: {exchangeRate ? `1 USD = ${exchangeRate} ZAR` : 'Loading...'}</h3>
            {amount && <p>Converted Amount: {convertedAmount.toFixed(2)} ZAR</p>}
          </div>
        </section>

        {/* Peer-to-Peer Transfer */}
        <section style={styles.peerToPeer}>
          <h2>Peer-to-Peer Money Transfer</h2>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Recipient's Phone Number"
            style={styles.input}
          />
          <input
            type="text"
            value={bankAccount}
            onChange={(e) => setBankAccount(e.target.value)}
            placeholder="Recipient's Bank Account"
            style={styles.input}
          />
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Choose amount"
            style={styles.input}
          />
          <button onClick={handleSendMoney} style={styles.button}>Send Money</button>
        </section>

        {/* QR Code */}
        <section style={styles.qrCode}>
          <h2>Scan QR Code to Send Money</h2>
          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={styles.qrPlaceholder}
          >
            <QRCodeSVG value={`Send ${amount} to ${recipient || phone || bankAccount}`} size={100} />
          </motion.div>
        </section>
      </motion.div>

      {/* Buy Cryptocurrency Button */}
      <div style={styles.cryptoContainer}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert('Buy CryptoCurrency feature coming soon!')}
          style={styles.buyCryptoButton}
        >
          Buy CryptoCurrency
        </motion.button>
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  sendMoney: {
    padding: '20px',
    background: 'linear-gradient(to bottom, #ffecd2, #fcb69f)',
    textAlign: 'center',
    minHeight: '100vh',
  },
  balanceContainer: {
    margin: '20px 0',
    padding: '15px',
    border: '2px solid #ff6600',
    borderRadius: '12px',
    backgroundColor: '#fff',
    maxWidth: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '20px',
  },
  converter: {
    border: '2px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: 'white',
    minWidth: '300px',
    maxWidth: '400px',
    textAlign: 'center',
  },
  peerToPeer: {
    border: '2px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: '#fff',
    minWidth: '300px',
    maxWidth: '400px',
    textAlign: 'center',
  },
  qrCode: {
    border: '2px solid #ccc',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: '#fff',
    minWidth: '300px',
    maxWidth: '400px',
    textAlign: 'center',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '8px',
    transition: 'border-color 0.3s ease',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#ff6600',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  exchangeRate: {
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  qrPlaceholder: {
    margin: '10px',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
  },
  cryptoContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  buyCryptoButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Send;















