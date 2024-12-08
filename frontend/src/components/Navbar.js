import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeIcon from './logo.png'; // Home icon import

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
    width: 30px;
    margin-right: 10px;
    cursor: pointer;
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
    {/* Small Icon linking to Landing Page */}
    <Logo>
      <Link to="/">
        <img src={homeIcon} alt="Landing Page" /> {/* Icon linking to landing page */}
      </Link>
    </Logo>
    
    {/* Navbar Links */}
    <NavLinks>
      {/* Home link */}
      <li>
        <Link to="/main">Home</Link> {/* Home routes to /main */}
      </li>

      {/* Bank with Send & Receive */}
      <li>
        <a href="#bank">Bank</a>
        <DropdownMenu>
          <li><Link to="/main/send">Send</Link></li>
          <li><Link to="/main/receive">Receive</Link></li>
        </DropdownMenu>
      </li>

      {/* Travel with Flight, Bus, Train Booking */}
      <li>
        <a href="#travel">Travel</a>
        <DropdownMenu>
          <li><Link to="/main/flight-booking">Flight Booking</Link></li>
          <li><Link to="/main/bus-booking">Bus Booking</Link></li>
          <li><Link to="/main/train-booking">Train Booking</Link></li>
        </DropdownMenu>
      </li>

      {/* Purchase - Redirects directly to Coming Soon */}
      <li>
        <Link to="/main/purchase">Purchase</Link>
      </li>

      {/* Currencies with Exchange & Buy Currencies */}
      <li>
        <a href="#currencies">Currencies</a>
        <DropdownMenu>
          <li><Link to="/main/exchange">Exchange</Link></li>
          <li><Link to="/main/buy-currencies">Buy Currencies</Link></li>
        </DropdownMenu>
      </li>

      {/* Profile */}
      <li><Link to="/main/profile">Profile</Link></li>
    </NavLinks>
  </NavbarContainer>
);

export default Navbar;


