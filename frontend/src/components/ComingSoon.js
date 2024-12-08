import React from 'react';

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🚧 Coming Soon 🚧</h1>
        <p style={styles.subtitle}>
          This feature is under development. We're working hard to bring it to life for you!
        </p>
        <div style={styles.loaderContainer}>
          <div style={styles.loader}></div>
        </div>
        <p style={styles.footer}>Stay tuned for updates.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f7a733, #f57c00)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '0 20px',
  },
  card: {
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    maxWidth: '500px',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '0 0 30px',
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  loader: {
    width: '40px',
    height: '40px',
    border: '4px solid #fff',
    borderTop: '4px solid #f57c00',
    borderRadius: '50%',
    animation: 'spin 1.5s linear infinite',
  },
  footer: {
    fontSize: '1rem',
    opacity: 0.8,
  },
};

export default ComingSoon;
