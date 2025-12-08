import React from 'react';
import BackgroundDecoration from './BackgroundDecoration';
import '../App.css';

const WeekSelection = ({ onSelect }) => {
    return (
        <div className="step-container">
            <BackgroundDecoration />
            <h2 className="animate-fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '3rem', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                Which week works best for my dum? 🗓️
            </h2>
            <div className="cards-container animate-fade-in-up" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div
                    className="glass-card"
                    onClick={() => onSelect('Week 1')}
                    style={{ cursor: 'pointer', minWidth: '250px', textAlign: 'left' }}
                >
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Week 1</h3>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>This coming week</p>
                </div>
                <div
                    className="glass-card"
                    onClick={() => onSelect('Week 2')}
                    style={{ cursor: 'pointer', minWidth: '250px', textAlign: 'left' }}
                >
                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>Week 2</h3>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>The week after</p>
                </div>
            </div>
        </div>
    );
};

export default WeekSelection;
