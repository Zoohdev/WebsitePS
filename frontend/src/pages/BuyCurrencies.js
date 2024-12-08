// BuyCurrencies.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for routing

const BuyCurrencies = () => {
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState('');

  // List of all currencies
  const currencies = [
    'USD', 'EUR', 'GBP', 'AUD', 'CAD', 'JPY', 'CNY', 'ZAR', 'INR', 'BRL', 
    'NGN', 'KES', 'GHS', 'EGP', 'MAD', 'TZS', 'UGX', 'ZMW', 'NAD', 'XOF', 
    'XAF', 'BWP', 'SGD', 'CHF', 'HKD', 'MXN', 'RUB', 'PLN', 'SEK', 'DKK', 
    'NOK', 'KRW', 'THB', 'MYR', 'IDR', 'PHP'
  ];

  const handleCurrencyPurchase = async () => {
    try {
      const response = await axios.post(`https://api.example.com/buyCurrencies`, {
        currency,
        amount,
      });

      setConfirmation(response.data.message);
      setError('');
    } catch (error) {
      setError('Failed to purchase currency. Please try again.');
      console.error('Error purchasing currency:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Buy Currencies</h1>
      <div style={styles.form}>
        <label style={styles.label}>Currency</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Currency</option>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
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
          style={styles.buyButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCurrencyPurchase}
        >
          Buy
        </motion.button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {confirmation && <p style={{ color: 'green' }}>{confirmation}</p>}

      <Link to="/deposit-wallet" style={styles.link}>
        Deposit into Wallet
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
  buyButton: {
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

export default BuyCurrencies;


