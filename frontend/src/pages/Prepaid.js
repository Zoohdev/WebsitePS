import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faMobileAlt, faGift } from '@fortawesome/free-solid-svg-icons';

const PrepaidContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
`;

const ButtonGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px; /* Increased spacing between buttons */
`;

const ServiceButton = styled(motion.button)`
  background-color: #ff6600;
  color: white;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #e65c00;
    transform: translateY(-3px);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const Subtitle = styled.h4`
  margin-bottom: 0.5rem; /* Space between heading and button */
  color: #666;
  font-weight: normal;
`;

const Prepaid = () => {
  const navigate = useNavigate();

  const goToElectricity = () => navigate('/main/electricity'); // Adjusted path
  const goToAirtime = () => navigate('/main/airtime'); // Adjusted path
  const goToBetting = () => navigate('/main/betting'); // Adjusted path
  const goToGiftCards = () => navigate('/main/gift-cards'); // Adjusted path

  return (
    <PrepaidContainer>
      <Title>Prepaid Services</Title>
      <ButtonGrid>
        <div>
          <Subtitle>Power Up Your Home</Subtitle>
          <ServiceButton 
            whileHover={{ scale: 1.05 }} 
            onClick={goToElectricity}
          >
            <Icon icon={faBolt} /> Buy Electricity
          </ServiceButton>
        </div>

        <div>
          <Subtitle>Stay Connected</Subtitle>
          <ServiceButton 
            whileHover={{ scale: 1.05 }} 
            onClick={goToAirtime}
          >
            <Icon icon={faMobileAlt} /> Top Up Airtime
          </ServiceButton>
        </div>

        <div>
          <Subtitle>Bet on Your Favorites</Subtitle>
          <ServiceButton 
            whileHover={{ scale: 1.05 }} 
            onClick={goToBetting}
          >
            Buy Betting Voucher
          </ServiceButton>
        </div>

        <div>
          <Subtitle>Gift a Surprise</Subtitle>
          <ServiceButton 
            whileHover={{ scale: 1.05 }} 
            onClick={goToGiftCards}
          >
            <Icon icon={faGift} /> Buy Gift Cards
          </ServiceButton>
        </div>
      </ButtonGrid>
    </PrepaidContainer>
  );
};

export default Prepaid;


