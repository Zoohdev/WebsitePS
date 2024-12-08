import React from 'react';
import { motion } from 'framer-motion';

// Chatbot Component with a pop-up animation
const Chatbot = () => {
  return (
    <motion.div
      style={styles.chatbotContainer}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div style={styles.chatbotBubble}>
        <h3 style={styles.chatbotText}>How Can We Help You?</h3>
        <div style={styles.chatbotButtons}>
          <button style={styles.chatbotButton}>Chat to Us</button>
          <button style={styles.chatbotButton}>Send Email</button>
          <button style={styles.chatbotButton}>Ask to be Called Back</button>
        </div>
      </div>
    </motion.div>
  );
};

// Chatbot styles
const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    zIndex: 1000,
  },
  chatbotBubble: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chatbotText: {
    margin: '10px 0',
  },
  chatbotButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  chatbotButton: {
    padding: '8px 12px',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Chatbot;
