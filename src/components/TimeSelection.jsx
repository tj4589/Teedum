import React from 'react';
import BackgroundDecoration from './BackgroundDecoration';
import '../App.css';

const times = [
    'Morning (10am - 12pm)',
    'Lunch (12pm - 2pm)',
    'Afternoon (2pm - 5pm)',
    'Dinner (6pm - 8pm)',
    'Late Night (8pm+)'
];

const TimeSelection = ({ day, onSelect, onBack }) => {
    return (
        <div className="step-container">
            <BackgroundDecoration />
            <h2 className="animate-fade-in-up" style={{ fontSize: '2.5rem', marginBottom: '1rem', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                What time on {day}? my babygirl⏰
            </h2>

            <div className="animate-fade-in-up" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '2rem',
                maxWidth: '500px',
                margin: '2rem auto'
            }}>
                {times.map((time, index) => (
                    <div
                        key={time}
                        className="glass-card"
                        onClick={() => onSelect(time)}
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
                        {time}
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

export default TimeSelection;
