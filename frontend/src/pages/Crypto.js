import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const CryptoSelector = styled.select`
  width: 200px;
  padding: 10px;
  margin: 20px auto;
  display: block;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;

const PriceTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
  }
`;

const CryptoPage = () => {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [cryptoPrices, setCryptoPrices] = useState({});

  // Fetch live crypto prices
  const fetchCryptoPrices = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd');
    const data = await response.json();
    setCryptoPrices(data);
  };

  useEffect(() => {
    fetchCryptoPrices();
    const interval = setInterval(() => fetchCryptoPrices(), 60000); // Refresh prices every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>Crypto Dashboard</Title>
      
      <CryptoSelector onChange={(e) => setSelectedCrypto(e.target.value)}>
        <option value="BTC">Bitcoin (BTC)</option>
        <option value="ETH">Ethereum (ETH)</option>
        <option value="XRP">Ripple (XRP)</option>
      </CryptoSelector>

      <div>
        <Button>Buy {selectedCrypto}</Button>
        <Button>Send {selectedCrypto}</Button>
        <Button>Exchange {selectedCrypto}</Button>
      </div>

      <h2>Current Crypto Prices</h2>
      <PriceTable>
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bitcoin (BTC)</td>
            <td>${cryptoPrices.bitcoin?.usd}</td>
          </tr>
          <tr>
            <td>Ethereum (ETH)</td>
            <td>${cryptoPrices.ethereum?.usd}</td>
          </tr>
          <tr>
            <td>Ripple (XRP)</td>
            <td>${cryptoPrices.ripple?.usd}</td>
          </tr>
        </tbody>
      </PriceTable>
    </Container>
  );
};

export default CryptoPage;
