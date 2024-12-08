import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import styled from 'styled-components';

const BannerSection = styled.section`
  background-color: #ff8000;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const DownloadButton = styled.button`
  margin-top: 20px;
  background-color: white;
  color: #ff6600;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;

  img {
    width: 1px;
    margin-right: 10px;
  }
`;

const AnimatedGraphic = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
  margin: 1rem auto;
`;

const Banner = () => {
  const [exchangeRate, setExchangeRate] = useState(null);

  // Function to fetch the exchange rates
  const fetchExchangeRate = () => {
    axios.get('https://api.exchangerate-api.com/v4/latest/USD')
      .then((response) => {
        setExchangeRate(response.data.rates['ZAR']); // South African Rands
      })
      .catch((error) => {
        console.error('Error fetching the exchange rate:', error);
      });
  };

  useEffect(() => {
    // Initial fetch when the component mounts
    fetchExchangeRate();

    // Set an interval to fetch the exchange rate every 4 hours (14400000 ms)
    const intervalId = setInterval(fetchExchangeRate, 14400000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <BannerSection>
      <h2>Seamless Payments Across Africa</h2>
      <p>Convert your money across borders easily.</p>
      <div>Exchange Rate: {exchangeRate ? `1 USD = ${exchangeRate} ZAR` : 'Loading...'}</div>
      
      <AnimatedGraphic
        animate={{ y: [0, -20, 0], opacity: [0, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <DownloadButton>
        <img src="mobile.jpeg" alt="" />
        <span>Download Mobile App!</span>
      </DownloadButton>
    </BannerSection>
  );
};

export default Banner;

