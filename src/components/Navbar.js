import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #FAC898;
  color: black;
  position: relative;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
    margin-right: 10px;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  position: relative;

  li {
    position: relative;
    &:hover > ul {
      display: block;
    }
  }

  a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 0.5rem 0;
  list-style: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  li {
    padding: 0.5rem 1rem;
  }

  a {
    color: black;
    &:hover {
      background-color: #ff6600;
      color: white;
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>
      <img src="C:\\Users\\sngqw\\PaySignal Website\\paysignal-website\\src\\components\\logo.png" alt="Logo" />
    </Logo>
    <NavLinks>
      {/* Bank with Send & Receive */}
      <li>
        <a href="#bank">Bank</a>
        <DropdownMenu>
          <li><Link to="/send">Send</Link></li>
          <li><Link to="/receive">Receive</Link></li>
        </DropdownMenu>
      </li>
      
      {/* Travel with Flight, Bus, Train Booking */}
      <li>
        <a href="#travel">Travel</a>
        <DropdownMenu>
          <li><Link to="/flight-booking">Flight Booking</Link></li>
          <li><Link to="/bus-booking">Bus Booking</Link></li>
          <li><Link to="/train-booking">Train Booking</Link></li>
        </DropdownMenu>
      </li>

      {/* Purchase with Airtime, Electricity, Betting, Utilities, Gift Cards */}
      <li>
        <a href="#purchase">Purchase</a>
        <DropdownMenu>
          <li><Link to="/airtime">Top up Airtime</Link></li>
          <li><Link to="/electricity">Buy Electricity</Link></li>
          <li><Link to="/betting">Sport Betting</Link></li>
          <li><Link to="/utilities">Utilities</Link></li>
          <li><Link to="/gift-cards">Gift Cards</Link></li>
        </DropdownMenu>
      </li>

      {/* Forex with Exchange & Buy Currencies */}
      <li>
        <a href="#forex">Forex</a>
        <DropdownMenu>
          <li><Link to="/exchange">Exchange</Link></li>
          <li><Link to="/buy-currencies">Buy Currencies</Link></li>
        </DropdownMenu>
      </li>

      <li><Link to="#profile">Profile</Link></li>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;

