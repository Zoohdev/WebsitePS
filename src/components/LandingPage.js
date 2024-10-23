

import React from 'react';
import './LandingPage.css'; // CSS file import

const LandingPage = () => {
    const handleJoinUs = () => {
        window.location.href = '/main'; 
    };

    return (
        <div>
            <header>
                <div className="logo">PaySignal</div>
                <nav>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <h1>Welcome to PaySignal</h1>
                <p>Your seamless payment solution.</p>
                <button className="join-button" onClick={handleJoinUs}>Join Us</button>
            </section>

            <section id="overview" className="overview">
                <h2>Overview</h2>
                <p>PaySignal is a leading fintech company providing innovative payment solutions for individuals and businesses. Our mission is to simplify financial transactions and enhance user experience.</p>
            </section>

            <section id="services" className="services">
                <h2>Services We Offer</h2>
                <ul>
                    <li>Prepaid Purchases</li>
                    <li>Sports Betting Payments</li>
                    <li>AI-Powered Financial Tools</li>
                    <li>Secure Transactions</li>
                </ul>
                <video controls>
                    <source src="banking-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            <section id="team" className="team">
                <h2>Meet Our Team</h2>
                <div className="team-member">
                    <h3>Divine Inyang</h3>
                    <p>Backend Developer</p>
                </div>
                <div className="team-member">
                    <h3>Ethan Sevenster</h3>
                    <p>Frontend Developer</p>
                </div>
                {/* Add more team members as needed */}
            </section>

            <section id="data" className="data">
                <h2>Fintech Data</h2>
                <p>We process millions of transactions daily, ensuring security and efficiency. Our data-driven approach allows us to offer tailored solutions to our users.</p>
            </section>

            <section id="payment" className="payment-info">
                <h2>Seamless Payment Information</h2>
                <p>Experience hassle-free payments with PaySignal. Our platform is designed for speed and reliability.</p>
            </section>

            <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <p>Email: admin@paysignal.com</p>
                <p>Phone: +1 (234) 567-8900</p>
            </section>

            <footer>
                <p>&copy; 2024 PaySignal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
