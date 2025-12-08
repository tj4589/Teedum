import React from 'react';
import BackgroundDecoration from './BackgroundDecoration';
import '../App.css';

const AreYouReady = ({ onYes }) => {
    return (
        <div className="step-container">
            <BackgroundDecoration />

            <div className="glass-card animate-fade-in-up" style={{ maxWidth: '700px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
                    Are you ready? 💖
                </h1>
                <h1 style={{ fontSize: '1.5rem', marginBottom: '3rem' }}>
                    MY BEAUTIFUL BABY 💖🤞🏽
                </h1>

                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    <button
                        onClick={onYes}
                        className="glass-btn"
                        style={{ minWidth: '150px' }}
                    >
                        YES!
                    </button>

                    <button
                        className="glass-btn secondary shake-hover"
                        style={{ minWidth: '150px', cursor: 'not-allowed' }}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AreYouReady;
