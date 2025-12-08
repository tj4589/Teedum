import React from 'react';
import BackgroundDecoration from './BackgroundDecoration';
import '../App.css';

const LandingPage = ({ onStart }) => {
  return (
    <div className="step-container">
      <BackgroundDecoration />

      <div className="glass-card animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Let's Plan Our Date 💜
        </h1>

        <p style={{ fontSize: '1.4rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
          I've been waiting for this since forever... pick a date ma princesse💜🤞🏽
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.7)' }}>
          (Please use your iPad or laptop for the best experience or for streaking ha ha ha✨)
        </p>

        <button
          onClick={onStart}
          className="glass-btn"
        >
          Start Planning
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
