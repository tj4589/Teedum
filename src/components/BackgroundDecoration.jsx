import React, { useEffect, useState } from 'react';
import '../App.css';

const BackgroundDecoration = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const symbols = ['❤️', '💖', '✨', '🌸', '🦋', '🟣', '💕'];
        const newElements = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 30 + 10,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 10,
            blur: Math.random() > 0.5 ? 'blur(2px)' : 'none'
        }));
        setElements(newElements);
    }, []);

    return (
        <div className="decorative-bg">
            {/* Glowing Orbs */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(169, 16, 121, 0.4) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(40px)',
                animation: 'pulse 8s infinite ease-in-out'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(248, 6, 204, 0.3) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(50px)',
                animation: 'pulse 10s infinite ease-in-out reverse'
            }} />

            {/* Floating Symbols */}
            {elements.map(el => (
                <div
                    key={el.id}
                    className="floating-element"
                    style={{
                        left: `${el.left}%`,
                        top: `${el.top}%`,
                        fontSize: `${el.size}px`,
                        animationDelay: `${el.delay}s`,
                        animationDuration: `${el.duration}s`,
                        opacity: 0.4,
                        filter: el.blur
                    }}
                >
                    {el.symbol}
                </div>
            ))}
        </div>
    );
};

export default BackgroundDecoration;
