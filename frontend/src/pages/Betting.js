// Betting.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BettingMatches from './BettingMatches'; // Import the BettingMatches component

const Betting = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [provider, setProvider] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [voucherAmount, setVoucherAmount] = useState(''); // State for voucher amount

  // Betting providers
  const providers = {
    Nigeria: ['BetNaija', 'NairaBet', '1xBet', 'SportyBet'],
    SouthAfrica: ['Betway', 'Hollywood Bets', 'SportPesa', 'Paddy Power'],
    USA: ['DraftKings', 'FanDuel', 'BetMGM', 'PointsBet'],
  };

  // Country codes
  const countryCodes = {
    Nigeria: '+234',
    SouthAfrica: '+27',
    USA: '+1',
  };

  const handleSendOtp = async () => {
    setOtpSent(true);
    try {
      const response = await axios.post(`https://api.example.com/sendOtp`, {
        provider,
        countryCode,
        phoneNumber,
      });
      console.log('OTP sent:', response.data.message);
    } catch (error) {
      setError('Failed to send OTP. Please try again.');
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post(`https://api.example.com/verifyOtp`, {
        provider,
        countryCode,
        phoneNumber,
        otp,
      });
      setOtpVerified(true);
      setConfirmation(response.data.message);
      setError('');
      navigate('/betting-matches', { state: { voucherAmount, provider }}); // Route to BettingMatches component with props
    } catch (error) {
      setError('Invalid OTP. Please try again.');
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Sports Betting</h1>
      <div style={styles.form}>
        <label style={styles.label}>Select Provider</label>
        <select value={provider} onChange={(e) => setProvider(e.target.value)} style={styles.select}>
          <option value="">Select Provider</option>
          <optgroup label="Nigeria">
            {providers.Nigeria.map((prov) => (
              <option key={prov} value={prov}>{prov}</option>
            ))}
          </optgroup>
          <optgroup label="South Africa">
            {providers.SouthAfrica.map((prov) => (
              <option key={prov} value={prov}>{prov}</option>
            ))}
          </optgroup>
          <optgroup label="USA">
            {providers.USA.map((prov) => (
              <option key={prov} value={prov}>{prov}</option>
            ))}
          </optgroup>
        </select>

        <label style={styles.label}>Select Country Code</label>
        <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} style={styles.select}>
          <option value="">Select Country</option>
          <option value={countryCodes.Nigeria}>{countryCodes.Nigeria} Nigeria</option>
          <option value={countryCodes.SouthAfrica}>{countryCodes.SouthAfrica} South Africa</option>
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

        <label style={styles.label}>Voucher Amount</label>
        <input
          type="number"
          value={voucherAmount}
          onChange={(e) => setVoucherAmount(e.target.value)}
          style={styles.input}
          placeholder="Enter voucher amount"
        />

        {otpSent ? (
          <>
            <label style={styles.label}>Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              style={styles.input}
              placeholder="Enter OTP"
            />
            <motion.button
              style={styles.verifyButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </motion.button>
          </>
        ) : (
          <motion.button
            style={styles.sendOtpButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendOtp}
          >
            Send OTP
          </motion.button>
        )}
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {confirmation && otpVerified && (
        <p style={{ color: 'green' }}>Betting confirmed for {phoneNumber} with {provider}.</p>
      )}
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
  sendOtpButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  verifyButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Betting;




   

