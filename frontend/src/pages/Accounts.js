import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaIdCard, FaShoppingCart, FaHistory } from 'react-icons/fa';

const AccountContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const Icon = styled(motion.div)`
  margin-right: 10px;
  color: #ff6600;
  font-size: 1.5rem;
`;

const DetailInfo = styled.div`
  color: #333;
  font-size: 1rem;
`;

const Button = styled(motion.button)`
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e65c00;
  }
`;

const Accounts = () => {
  return (
    <AccountContainer>
      <Title>Account Details</Title>

      <DetailRow>
        <Icon whileHover={{ scale: 1.2 }}>
          <FaPhone />
        </Icon>
        <DetailInfo>Linked Phone: +123 456 789</DetailInfo>
      </DetailRow>

      <DetailRow>
        <Icon whileHover={{ scale: 1.2 }}>
          <FaIdCard />
        </Icon>
        <DetailInfo>Account ID: PS12345678</DetailInfo>
      </DetailRow>

      <DetailRow>
        <Icon whileHover={{ scale: 1.2 }}>
          <FaShoppingCart />
        </Icon>
        <DetailInfo>Purchase History:</DetailInfo>
      </DetailRow>

      <ul>
        {['Purchase 1', 'Purchase 2', 'Purchase 3'].map((purchase, index) => (
          <DetailRow key={index}>
            <Icon whileHover={{ rotate: 360, scale: 1.1 }}>
              <FaHistory />
            </Icon>
            <DetailInfo>{purchase}</DetailInfo>
          </DetailRow>
        ))}
      </ul>

      <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Update Account
      </Button>
    </AccountContainer>
  );
};

export default Accounts;