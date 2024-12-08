import React from 'react';
import './LandingPage.css'; // CSS file import
import { FaUserTie, FaUserSecret, FaUserNinja, FaUserAstronaut } from 'react-icons/fa'; // Added FaUserAstronaut icon

const LandingPage = () => {
    const handleJoinUs = () => {
        window.location.href = '/main'; 
    };

    const handleContactTechTeam = () => {
        window.location.href = 'mailto:techsupport@paysignal.com';
    };

    return (
        <div className="landing-page">
            <header>
                <div className="logo">PaySignal</div>
                <nav>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#team">Our Leaders</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <section className="hero">
                <h1>Welcome to PaySignal</h1>
                <p>Your seamless payment solution.</p>
                <button className="join-button" onClick={handleJoinUs}>Join Us</button>
            </section>

            <section id="overview" className="overview-container">
                <h2>Overview</h2>
                <p>
                    PaySignal is a cutting-edge fintech company revolutionizing the way payments are made across Africa and beyond. 
                    With a focus on security, speed, and innovation, PaySignal offers a seamless and integrated platform for financial 
                    transactions, empowering individuals and businesses alike to navigate the digital economy with ease.
                </p>
                <p>
                    Our platform allows users to send and receive money, make prepaid purchases, handle sports betting payments, and 
                    access AI-powered financial tools, all through a single, intuitive interface. We are committed to delivering solutions 
                    that are not only technologically advanced but also user-friendly, ensuring that anyone, anywhere, can participate 
                    in the financial ecosystem.
                </p>
                <p>
                    At PaySignal, we are constantly pushing the boundaries of what's possible in fintech, combining data-driven insights 
                    with emerging technologies like artificial intelligence, blockchain, and cloud infrastructure to stay ahead of the 
                    curve and offer our customers a truly innovative experience.
                </p>
            </section>

            <section id="services" className="services">
                <h2>Services We Offer</h2>
                <ul>
                    <li>Peer to Peer Money Transfers</li>
                    <li>Currency Exchange & Buying</li>
                    <li>Safe & Secure Travel Bookings</li>
                    <li>Secure Transactions</li>
                </ul>
                <video controls className="video-container">
                    <source src="/Payvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            <section id="team" className="team">
                <h2>Meet Our Leaders</h2>
                <div className="team-member">
                    <FaUserTie className="team-icon" />
                    <h3>Michael Ekoh</h3>
                    <p>CEO</p>
                    <p>Michael is the visionary behind PaySignal, with a passion for revolutionizing fintech. When he's not closing deals, you can find him reading sci-fi novels or trying to perfect his coffee brewing skills.</p>
                </div>
                <div className="team-member">
                    <FaUserSecret className="team-icon" />
                    <h3>Lubabalo Mzimba</h3>
                    <p>COO</p>
                    <p>Lubabalo, also known as the 'Fintech Ninja,' ensures PaySignal operates like a well-oiled machine. He is a master of efficiency and is rumored to solve puzzles faster than most people can open a spreadsheet.</p>
                </div>
                <div className="team-member">
                    <FaUserNinja className="team-icon" />
                    <h3>Zacharia Maetlane</h3>
                    <p>CMO</p>
                    <p>Zachary, our marketing maestro, is the creative mind behind PaySignal's brand. He turns ideas into campaigns faster than you can say 'viral.' He's also known for his quirky hat collection!</p>
                </div>
                <div className="team-member">
                    <FaUserAstronaut className="team-icon" /> {/* Feminine icon */}
                    <h3>Zuri Ngqwaru</h3>
                    <p>CTO</p>
                    <p>Zuri leads PaySignal's tech team with a blend of strategic insight and deep technical expertise. Known for her visionary approach, she ensures our technology remains cutting-edge and secure. In her free time, she mentors young women in tech and enjoys painting.</p>
                </div>
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
                
                <button className="contact-tech-button" onClick={handleContactTechTeam}>Contact Our Tech Team</button>
            </section>

            <footer>
                <p>&copy; 2024 PaySignal. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
