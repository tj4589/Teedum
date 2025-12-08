import React from 'react';
import BackgroundDecoration from './BackgroundDecoration';
import '../App.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const DaySelection = ({ week, onSelect, onBack }) => {
    return (
        <div className="step-container">
            <BackgroundDecoration />
            <h2 className="animate-fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                Pick a day in {week} 📅
            </h2>

            <div className="animate-fade-in-up" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem',
                maxWidth: '800px',
                margin: '2rem auto'
            }}>
                {days.map((day, index) => (
                    <div
                        key={day}
                        className="glass-card"
                        onClick={() => onSelect(day)}
                        style={{
                            cursor: 'pointer',
                            padding: '1.5rem',
                            animationDelay: `${index * 0.1}s`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            fontSize: '1.1rem'
                        }}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <button
                onClick={onBack}
                className="glass-btn secondary"
                style={{ marginTop: '2rem', padding: '0.8rem 2rem', fontSize: '1rem' }}
            >
                Back
            </button>
        </div>
    );
};

export default DaySelection;
