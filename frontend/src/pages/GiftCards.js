// GiftCards.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const GiftCards = () => {
  const [recipientId, setRecipientId] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [country, setCountry] = useState('');
  const [store, setStore] = useState('');
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState('');

  // Sample data for dropdowns
  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];
  const stores = ['Amazon', 'Walmart', 'Best Buy', 'eBay', 'Target'];
  const luxuryBrands = ['Gucci', 'Louis Vuitton', 'Chanel', 'Prada', 'Rolex'];
  const products = ['Gift Card', 'E-Gift Card', 'Physical Gift Card'];

  const handleGiftCardPurchase = async () => {
    try {
      const response = await axios.post(`https://api.example.com/buyGiftCard`, {
        recipientId,
        recipientEmail,
        country,
        store,
        brand,
        product,
        amount,
      });

      setConfirmation(response.data.message);
      setError('');
    } catch (error) {
      setError('Failed to purchase gift card. Please try again.');
      console.error('Error purchasing gift card:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Buy Gift Cards</h1>
      <div style={styles.form}>
        <label style={styles.label}>Recipient ID</label>
        <input
          type="text"
          value={recipientId}
          onChange={(e) => setRecipientId(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Recipient Email</label>
        <input
          type="email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Country</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>

        <label style={styles.label}>Store</label>
        <select
          value={store}
          onChange={(e) => setStore(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Store</option>
          {stores.map((store) => (
            <option key={store} value={store}>{store}</option>
          ))}
        </select>

        <label style={styles.label}>Luxury Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Luxury Brand</option>
          {luxuryBrands.map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>

        <label style={styles.label}>Product</label>
        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          style={styles.select}
        >
          <option value="">Select Product</option>
          {products.map((product) => (
            <option key={product} value={product}>{product}</option>
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
          onClick={handleGiftCardPurchase}
        >
          Buy Gift Card
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
};

export default GiftCards;


