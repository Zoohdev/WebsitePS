// Utilities.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Utilities = () => {
  const [utilityType, setUtilityType] = useState('');
  const [serviceProvider, setServiceProvider] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentWindow, setPaymentWindow] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState('');

  // Utilities options
  const utilities = {
    Water: ['City of Accra', 'Durban Water', 'Nairobi Water'],
    Electricity: ['NEPA', 'Eskom', 'KPLC'],
    Gas: ['Shell Gas', 'Total Gas', 'Oando Gas'],
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(`https://api.example.com/payUtility`, {
        utilityType,
        serviceProvider,
        accountNumber,
        amount,
        paymentWindow,
      });

      setConfirmation(response.data.message);
      setError('');
    } catch (error) {
      setError('Failed to pay utility. Please try again.');
      console.error('Error paying utility:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Pay Utilities</h1>
      <div style={styles.form}>
        <label style={styles.label}>Utility Type</label>
        <select
          value={utilityType}
          onChange={(e) => setUtilityType(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Utility Type</option>
          {Object.keys(utilities).map((utility) => (
            <option key={utility} value={utility}>{utility}</option>
          ))}
        </select>

        <label style={styles.label}>Service Provider/Municipality</label>
        <select
          value={serviceProvider}
          onChange={(e) => setServiceProvider(e.target.value)}
          style={styles.select}
          disabled={!utilityType} // Disable until a utility type is selected
        >
          <option value="">Select Service Provider</option>
          {utilityType &&
            utilities[utilityType].map((provider) => (
              <option key={provider} value={provider}>{provider}</option>
            ))}
        </select>

        <label style={styles.label}>Account Number</label>
        <input
          type="text"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Payment Window</label>
        <input
          type="text"
          value={paymentWindow}
          onChange={(e) => setPaymentWindow(e.target.value)}
          style={styles.input}
          placeholder="Enter payment window"
        />

        <motion.button
          style={styles.payButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePayment}
        >
          Pay
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
  payButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Utilities;


