// src/components/DashboardPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleUploadResults = () => {
    navigate('/data-input');
  };

  const handleViewProfile = () => {
    navigate('/profile');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to the Agent Dashboard</h2>
      <p className={styles.description}>What would you like to do today?</p>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleUploadResults}>
          Upload Election Results
        </button>
        <button className={styles.button} onClick={handleViewProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
