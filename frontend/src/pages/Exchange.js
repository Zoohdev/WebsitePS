// Exchange.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

const Exchange = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);

  // List of currencies including more African currencies
  const currencies = [
    'USD', 'EUR', 'GBP', 'AUD', 'CAD', 'JPY', 'CNY', 'ZAR', 'INR', 'BRL', 
    'NGN', 'KES', 'GHS', 'EGP', 'MAD', 'TZS', 'UGX', 'ZMW', 'NAD', 'XOF', 'XAF', 'BWP'
  ];

  const handleExchange = async () => {
    try {
      const response = await axios.post(`https://api.example.com/exchange`, {
        fromCurrency,
        toCurrency,
        amount,
      });

      setConvertedAmount(response.data.convertedAmount);
      setExchangeRate(response.data.exchangeRate);
      setError('');
    } catch (error) {
      setError('Failed to exchange currency. Please try again.');
      console.error('Error exchanging currency:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Currency Exchange</h1>
      <div style={styles.form}>
        <label style={styles.label}>From Currency</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Currency</option>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>

        <label style={styles.label}>To Currency</label>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Currency</option>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>

        <label style={styles.label}>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />

        <motion.button
          style={styles.exchangeButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleExchange}
        >
          Exchange
        </motion.button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {convertedAmount && (
        <p style={{ color: 'green' }}>
          Converted Amount: {convertedAmount} {toCurrency}
          <br />
          Exchange Rate: {exchangeRate} {fromCurrency} to {toCurrency}
        </p>
      )}

      <Link to="/send-money" style={styles.link}>
        Send and Deposit to Recipient
      </Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to bottom, #ffecd2, #fcb69f)',
    textAlign: 'center',
    minHeight: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px 0',
  },
  label: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '200px',
    marginBottom: '15px',
  },
  select: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '200px',
    marginBottom: '15px',
  },
  exchangeButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  link: {
    marginTop: '20px',
    color: '#007bff',
    textDecoration: 'underline',
  },
};

export default Exchange;


