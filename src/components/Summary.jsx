import React, { useEffect } from 'react';
import BackgroundDecoration from './BackgroundDecoration';
import '../App.css';

const Summary = ({ selections, onReset }) => {

    // Trigger confetti or extra sparkles on mount
    useEffect(() => {
        // Could add a confetti library here if requested, but for now we rely on the background decoration
    }, []);

    return (
        <div className="step-container">
            <BackgroundDecoration />
            <h1 className="animate-fade-in-up" style={{ fontSize: '3rem', marginBottom: '2rem', textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}>
                It's a Date! 🥂
            </h1>

            <div className="glass-card animate-fade-in-up" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem' }}>
                <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <span style={{ color: 'var(--color-accent)', display: 'block', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>WEEK</span>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{selections.week}</span>
                </div>
                <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                    <span style={{ color: 'var(--color-accent)', display: 'block', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>DAY</span>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{selections.day}</span>
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <span style={{ color: 'var(--color-accent)', display: 'block', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>TIME</span>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{selections.time}</span>
                </div>
            </div>

            <p className="animate-fade-in-up" style={{ marginTop: '3rem', fontSize: '1.4rem', fontStyle: 'italic' }}>
                I can't wait to see you! ❤️
            </p>

            <button
                onClick={onReset}
                className="glass-btn secondary animate-fade-in-up"
                style={{ marginTop: '2rem', padding: '0.8rem 2rem', fontSize: '1rem' }}
            >
                Start Over
            </button>
        </div>
    );
};

export default Summary;
