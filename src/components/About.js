import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem;
  background-color: white;
  text-align: center;
`;

const About = () => (
  <AboutSection>
    <h2>About PaySignal</h2>
    <p>
      PaySignal is your go-to solution for seamless financial transactions across Africa. 
      We offer services that include intercontinental payments, prepaid purchases, cryptocurrency exchanges, and more.
    </p>
  </AboutSection>
);

export default About;
