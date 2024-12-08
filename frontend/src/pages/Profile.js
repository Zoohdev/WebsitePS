import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileSection = styled.section`
  background-color: #f4f7fa;
  padding: 2rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const ProfileForm = styled.div`
  display: inline-block;
  text-align: left;
  input {
    display: block;
    margin-bottom: 1rem;
    padding: 0.75rem;
    width: 100%;
    max-width: 350px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #fff;
  }
`;

const AvatarUpload = styled.div`
  margin: 20px 0;
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;

const SaveButton = styled.button`
  background-color: #ff6600;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  &:hover {
    background-color: #ff8800;
  }
`;

const EditLink = styled.a`
  color: #3498db;
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;
`;

const WelcomeMessage = styled.h3`
  color: #2d3436;
  font-size: 24px;
  margin-bottom: 1rem;
`;

const WalletCode = styled.div`
  background-color: #ff6600;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin: 20px 0;
  font-family: 'Courier New', Courier, monospace;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const History = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const GenerateNicknameButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
`;

const UserProfile = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatar] = useState('');
  const [cryptoWalletCode] = useState('3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5');
  const [purchaseHistory] = useState([
    { id: 1, item: 'BTC Purchase', date: '2024-10-01', amount: '0.05 BTC' },
    { id: 2, item: 'Bank Transfer', date: '2024-09-20', amount: '$500' },
  ]);
  const [profileCreated, setProfileCreated] = useState(false);

  const handleSave = () => {
    setProfileCreated(true);
  };

  const generateNickname = () => {
    const randomNicknames = ['TechGuru', 'CryptoMaster', 'AIWizard', 'CodeNinja'];
    setNickname(randomNicknames[Math.floor(Math.random() * randomNicknames.length)]);
  };

  const handleAvatarUpload = (e) => {
    const file = URL.createObjectURL(e.target.files[0]);
    setAvatar(file);
  };

  const handleEdit = () => {
    setProfileCreated(false);
  };

  return (
    <ProfileSection>
      <h2>Edit Profile</h2>

      {/* Conditional rendering: show form if profile not created, else show profile details */}
      {!profileCreated ? (
        <>
          <AvatarUpload>
            {avatar && <img src={avatar} alt="avatar" />}
            <input type="file" id="avatar" onChange={handleAvatarUpload} />
          </AvatarUpload>

          <ProfileForm>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />

            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter your surname"
            />

            <label htmlFor="nickname">Nickname:</label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Enter your nickname"
            />
            <GenerateNicknameButton onClick={generateNickname}>Generate Nickname</GenerateNicknameButton>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
            />

            <SaveButton onClick={handleSave}>Save Profile</SaveButton>
          </ProfileForm>
        </>
      ) : (
        <>
          <WelcomeMessage>Welcome, {nickname}!</WelcomeMessage>

          <WalletCode>
            Your Crypto Wallet Code: {cryptoWalletCode}
          </WalletCode>

          <History>
            <h3>Purchase/Banking History</h3>
            {purchaseHistory.map((entry) => (
              <div key={entry.id}>
                <p>{entry.item} - {entry.date} - {entry.amount}</p>
              </div>
            ))}
          </History>

          {/* Edit link */}
          <EditLink onClick={handleEdit}>Edit Details</EditLink>

          {/* Avatar at the bottom */}
          <AvatarUpload>
            {avatar && <img src={avatar} alt="avatar" />}
          </AvatarUpload>
        </>
      )}
    </ProfileSection>
  );
};

export default UserProfile;




