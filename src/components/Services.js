import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const ServicesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 20px;
  padding: 2rem;
  background-color: white;
  transition: all 0.3s ease-in-out;
`;

const ServiceCard = styled.div`
  background-color: white;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ServiceButton = styled.button`
  background-color: #ff6600;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }
`;

const Services = () => (
  <ServicesSection>
    <ServiceCard>
      <h3>Accounts</h3>
      <p>Manage your accounts easily and securely.</p>
      <ServiceButton>Go to Accounts</ServiceButton>
    </ServiceCard>

    <ServiceCard>
      <h3>Prepaid</h3>
      <p>Buy prepaid services with ease.</p>
      <ServiceButton>Buy Prepaid</ServiceButton>
    </ServiceCard>

    <ServiceCard>
      <h3>Crypto</h3>
      <p>Buy and sell cryptocurrency securely.</p>
      <ServiceButton>Crypto Market</ServiceButton>
    </ServiceCard>

    <ServiceCard>
      <h3>Send Money</h3>
      <p>Send money across borders.</p>
      <ServiceButton>Send Money</ServiceButton>
    </ServiceCard>
  </ServicesSection>
);

export default Services;
