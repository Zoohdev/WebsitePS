import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // Import Axios

// Sample cities
const cities = ['Accra', 'Kumasi', 'Takoradi', 'Tamale', 'Cape Coast'];

const BookingComponent = ({ type }) => {
  const [departingCity, setDepartingCity] = useState('');
  const [arrivingCity, setArrivingCity] = useState('');
  const [price, setPrice] = useState(null);
  const [time, setTime] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (departingCity && arrivingCity && departingCity !== arrivingCity) {
      try {
        const response = await axios.get(`https://api.example.com/getPrice`, {
          params: {
            departing: departingCity,
            arriving: arrivingCity,
          },
        });

        // Assuming your API returns { price: number, time: string }
        setPrice(response.data.price);
        setTime(response.data.time);
        setError(''); // Clear any previous errors
      } catch (error) {
        setError('Failed to fetch prices. Please try again.');
        console.error('Error fetching prices:', error);
      }
    } else {
      setError('Please select different cities for departure and arrival.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>{type} Booking</h1>
      <div style={styles.form}>
        <label style={styles.label}>Departing From</label>
        <select value={departingCity} onChange={(e) => setDepartingCity(e.target.value)} style={styles.select}>
          <option value="">Select City</option>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </select>

        <label style={styles.label}>Travelling To</label>
        <select value={arrivingCity} onChange={(e) => setArrivingCity(e.target.value)} style={styles.select}>
          <option value="">Select City</option>
          {cities.map(city => <option key={city} value={city}>{city}</option>)}
        </select>

        <motion.button
          style={styles.searchButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSearch}
        >
          Search
        </motion.button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {price && (
        <div style={styles.results}>
          <h2>Route: {departingCity} → {arrivingCity}</h2>
          <p>Time: {time}</p>
          <p>Price: ${price}</p>
        </div>
      )}
    </div>
  );
};

// Common styles (unchanged)
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
  searchButton: {
    padding: '10px 20px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
  results: {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
};

export const FlightBooking = () => <BookingComponent type="Flight" />;
export const BusBooking = () => <BookingComponent type="Bus" />;
export const TrainBooking = () => <BookingComponent type="Train" />;

export default BookingComponent;


