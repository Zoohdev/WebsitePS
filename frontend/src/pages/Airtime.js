// TopUpAirtime.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const TopUpAirtime = () => {
  const [network, setNetwork] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState('');

  // Networks for South Africa, Nigeria, and the USA
  const networks = {
    SouthAfrica: ['MTN', 'Vodacom', 'Cell C', 'Telkom'],
    Nigeria: ['MTN', 'Glo', 'Airtel', '9mobile'],
    USA: ['Verizon', 'AT&T', 'T-Mobile', 'Sprint'],
  };

  // Country codes
  const countryCodes = {
    SouthAfrica: '+27',
    Nigeria: '+234',
    USA: '+1',
  };

  const handleTopUp = async () => {
    try {
      const response = await axios.post(`https://api.example.com/topUpAirtime`, {
        network,
        countryCode,
        phoneNumber,
        amount,
      });

      setConfirmation(response.data.message);
      setError('');
    } catch (error) {
      setError('Failed to top up airtime. Please try again.');
      console.error('Error topping up airtime:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Top Up Airtime</h1>
      <div style={styles.form}>
        <label style={styles.label}>Select Network</label>
        <select value={network} onChange={(e) => setNetwork(e.target.value)} style={styles.select}>
          <option value="">Select Network</option>
          <optgroup label="South Africa">
            {networks.SouthAfrica.map((net) => (
              <option key={net} value={net}>{net}</option>
            ))}
          </optgroup>
          <optgroup label="Nigeria">
            {networks.Nigeria.map((net) => (
              <option key={net} value={net}>{net}</option>
            ))}
          </optgroup>
          <optgroup label="USA">
            {networks.USA.map((net) => (
              <option key={net} value={net}>{net}</option>
            ))}
          </optgroup>
        </select>

        <label style={styles.label}>Select Country Code</label>
        <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} style={styles.select}>
          <option value="">Select Country</option>
          <option value={countryCodes.SouthAfrica}>{countryCodes.SouthAfrica} South Africa</option>
          <option value={countryCodes.Nigeria}>{countryCodes.Nigeria} Nigeria</option>
          <option value={countryCodes.USA}>{countryCodes.USA} USA</option>
        </select>

        <label style={styles.label}>Phone Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={styles.input}
          placeholder="Enter phone number"
        />

        <label style={styles.label}>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />

        <motion.button
          style={styles.topUpButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleTopUp}
        >
          Top Up
        </motion.button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {confirmation && <p style={{ color: 'green' }}>{confirmation}</p>}
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
  select: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '200px',
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    width: '200px',
    marginBottom: '15px',
  },
  topUpButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TopUpAirtime;



