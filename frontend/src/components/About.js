import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 3rem;
  background-color: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  color: #333;
  margin: 2rem auto;
  width: 80%;
  max-width: 1200px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  h2 {
    font-size: 2.5rem;
    color: #ff6600;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-top: 1rem;
    color: #555;
  }
`;

const About = () => (
  <AboutSection>
    
    <section id="about" className="about-container">
    <h2>About PaySignal</h2>
    <p>
        Founded in 2023, PaySignal began with a bold vision: to create a unified platform that simplifies payments and financial 
        transactions for people across Africa. As the world increasingly shifts towards digital solutions, we recognized the 
        need for a secure, reliable, and comprehensive payment platform tailored to the unique needs of emerging markets.
    </p>
    <p>
        Our journey started with a small, passionate team of fintech enthusiasts and developers who shared a common goal: 
        to empower people and businesses by giving them easy access to financial services. Today, PaySignal has grown into 
        a leading fintech company, trusted by thousands of users to process payments, manage funds, and make informed 
        financial decisions.
    </p>
    <p>
        At the heart of PaySignal's success is our commitment to three core principles:
    </p>
    <ul>
        <li><strong>Innovation:</strong> We embrace emerging technologies and continuously push the boundaries of fintech.</li>
        <li><strong>Security:</strong> With state-of-the-art encryption and fraud prevention, we ensure that our platform is a safe place to manage money.</li>
        <li><strong>Customer Focus:</strong> Our user experience is designed to be simple, fast, and reliable for everyone, from individual users to large enterprises.</li>
    </ul>
    <p>
        We are proud to be at the forefront of fintech innovation, and our mission is to continue providing seamless payment 
        solutions that cater to the needs of our diverse users. Whether you're making a simple prepaid purchase or sending 
        funds internationally, PaySignal is here to help you connect, transact, and thrive in the digital economy.
    </p>
</section>

  </AboutSection>
);

export default About;
