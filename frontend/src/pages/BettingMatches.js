// BettingMatches.js
import React from 'react';

const BettingMatches = ({ voucherAmount, provider }) => {
  // Mock data for betting matches
  const matches = [
    { id: 1, teams: 'Team A vs Team B', odds: 2.5 },
    { id: 2, teams: 'Team C vs Team D', odds: 3.0 },
    { id: 3, teams: 'Team E vs Team F', odds: 1.8 },
  ];

  return (
    <div style={styles.container}>
      <h1>Available Matches for {provider}</h1>
      <h2>Voucher Amount: ${voucherAmount}</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Match</th>
            <th>Odds</th>
          </tr>
        </thead>
        <tbody>
          {matches.map(match => (
            <tr key={match.id}>
              <td>{match.teams}</td>
              <td>{match.odds}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    background: 'linear-gradient(to bottom, #ffecd2, #fcb69f)',
    textAlign: 'center',
    minHeight: '100vh',
  },
  table: {
    margin: '20px auto',
    width: '80%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    backgroundColor: '#fcb69f',
  },
  td: {
    padding: '10px',
    border: '1px solid #ccc',
  },
};

export default BettingMatches;
