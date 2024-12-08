import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/About';
import Chatbot from './components/Chatbot'; // Import Chatbot
import LandingPage from './components/LandingPage';
import ComingSoon from './components/ComingSoon'; // Import ComingSoon

// Import other pages
import Send from './pages/Send';
import Receive from './pages/Receive';
import FlightBooking from './pages/FlightBooking';
import BusBooking from './pages/BusBooking';
import TrainBooking from './pages/TrainBooking';
import Airtime from './pages/Airtime';
import Electricity from './pages/Electricity';
import Betting from './pages/Betting';
import Utilities from './pages/Utilities';
import GiftCards from './pages/GiftCards';
import Exchange from './pages/Exchange';
import BuyCurrencies from './pages/BuyCurrencies';
import Profile from './pages/Profile';
import Accounts from './pages/Accounts';
import Crypto from './pages/Crypto';

const AppContent = () => {
  const location = useLocation();
  const isMainOrLanding = location.pathname === '/' || location.pathname === '/main';

  return (
    <>
      {/* Show Navbar only if the path is not "/" */}
      {location.pathname !== '/' && <Navbar />}

      <Routes>
        {/* Landing Page route */}
        <Route path="/" element={<LandingPage />} />

        {/* Main App Routes */}
        <Route
          path="/main"
          element={
            <>
              <Banner />
              <Services />
              <About />
            </>
          }
        />

        {/* Bank routes */}
        <Route path="/main/accounts" element={<Accounts />} />
        <Route path="/main/send" element={<Send />} />
        <Route path="/main/receive" element={<Receive />} />

        {/* Crypto and Prepaid routes */}
        <Route path="/main/crypto" element={<Crypto />} />
        <Route path="/main/prepaid" element={<ComingSoon />} />

        {/* Travel routes */}
        <Route path="/main/flight-booking" element={<FlightBooking />} />
        <Route path="/main/bus-booking" element={<BusBooking />} />
        <Route path="/main/train-booking" element={<TrainBooking />} />

        {/* Purchases dropdown routes replaced with Coming Soon */}
        <Route path="/main/purchase" element={<ComingSoon />} />
        <Route path="/main/airtime" element={<ComingSoon />} />
        <Route path="/main/electricity" element={<ComingSoon />} />
        <Route path="/main/betting" element={<ComingSoon />} />
        <Route path="/main/utilities" element={<ComingSoon />} />
        <Route path="/main/gift-cards" element={<ComingSoon />} />

        {/* Forex routes */}
        <Route path="/main/exchange" element={<Exchange />} />
        <Route path="/main/buy-currencies" element={<BuyCurrencies />} />

        {/* Profile */}
        <Route path="/main/profile" element={<Profile />} />
      </Routes>

      {/* Conditionally render Chatbot */}
      {!isMainOrLanding && <Chatbot />}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;


