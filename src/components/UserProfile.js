import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileSection = styled.section`
  background-color: #f9f9f9;
  padding: 2rem;
  text-align: center;
`;

const ProfileForm = styled.div`
  display: inline-block;
  text-align: left;
  input {
    display: block;
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 100%;
    max-width: 300px;
  }
`;

const SaveButton = styled.button`
  background-color: #ff6600;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Save logic here
    console.log('Profile saved:', { username, email });
  };

  return (
    <ProfileSection>
      <h2>User Profile</h2>
      <ProfileForm>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <SaveButton onClick={handleSave}>Save Profile</SaveButton>
      </ProfileForm>
    </ProfileSection>
  );
};

export default UserProfile;
