import React from 'react';
import BackgroundDecoration from './BackgroundDecoration';
import '../App.css';
import img1 from '../assets/photo_1_2025-12-08_17-53-11.jpg';
import img2 from '../assets/photo_2_2025-12-08_17-53-11.jpg';
import img3 from '../assets/photo_3_2025-12-08_17-53-11.jpg';
import img4 from '../assets/photo_4_2025-12-08_17-53-11.jpg';
import img5 from '../assets/photo_5_2025-12-08_17-53-11.jpg';
import img6 from '../assets/photo_2025-12-08_03-33-27.jpg';

const LandingPage = ({ onStart }) => {
  // Array of images to display
  const images = [
    { src: img1, alt: 'Romantic Moment 1', top: '18%', left: '10%', delay: '0s' },
    { src: img2, alt: 'Romantic Moment 2', top: '20%', right: '15%', delay: '2s' },
    { src: img3, alt: 'Romantic Moment 3', bottom: '25%', left: '10%', delay: '4s' },
    { src: img4, alt: 'Romantic Moment 4', bottom: '30%', right: '10%', delay: '1s' },
    { src: img5, alt: 'Romantic Moment 5', top: '45%', left: '5%', delay: '3s' },
    { src: img6, alt: 'Romantic Moment 6', top: '50%', right: '5%', delay: '5s' },
  ];

  return (
    <div className="step-container" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <BackgroundDecoration />

      {/* Floating Circular Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className="floating-picture"
          style={{
            position: 'absolute',
            top: img.top,
            left: img.left,
            right: img.right,
            bottom: img.bottom,
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            animation: `float 6s ease-in-out infinite`,
            animationDelay: img.delay,
            zIndex: 0
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}

      <div className="glass-card animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Notification Banner - Positioned at top center of card */}
        <div
          style={{
            position: 'absolute',
            top: '-25px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '0.8rem 2.5rem',
            borderRadius: '50px',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 15px rgba(248, 6, 204, 0.4)',
            zIndex: 10,
            whiteSpace: 'nowrap',
            border: '2px solid rgba(255, 255, 255, 1)'
          }}
        >
          <span style={{ fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '1px', color: '#570A57' }}>
            Always till the end ❤️
          </span>
        </div>

        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }}>
          Let's Plan Our Date 💜
        </h1>

        <p style={{ fontSize: '1.4rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
          I've been waiting for this since forever... pick a date ma princesse💜🤞🏽.
        </p>

        <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: 'rgba(255,255,255,0.7)' }}>
          (Please use your iPad or laptop for the best experience or streaking...✨)
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
