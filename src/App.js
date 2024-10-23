import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Services from './components/Services';
import UserProfile from './components/UserProfile';
import About from './components/About';

// Import the Landing Page component
import LandingPage from './components/LandingPage';

// Import the page components for each route
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

const App = () => (
  <Router>
    <Routes>
      {/* Landing Page route */}
      <Route path="/" element={<LandingPage />} />

      {/* Main App Routes */}
      <Route path="/main" element={
        <>
          <Navbar />
          <Banner />
          <Services />
          <UserProfile />
          <About />
        </>
      } />

      {/* Bank routes */}
      <Route path="/main/send" element={<Send />} />
      <Route path="/main/receive" element={<Receive />} />

      {/* Travel routes */}
      <Route path="/main/flight-booking" element={<FlightBooking />} />
      <Route path="/main/bus-booking" element={<BusBooking />} />
      <Route path="/main/train-booking" element={<TrainBooking />} />

      {/* Purchase routes */}
      <Route path="/main/airtime" element={<Airtime />} />
      <Route path="/main/electricity" element={<Electricity />} />
      <Route path="/main/betting" element={<Betting />} />
      <Route path="/main/utilities" element={<Utilities />} />
      <Route path="/main/gift-cards" element={<GiftCards />} />

      {/* Forex routes */}
      <Route path="/main/exchange" element={<Exchange />} />
      <Route path="/main/buy-currencies" element={<BuyCurrencies />} />

      {/* Profile */}
      <Route path="/main/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;


