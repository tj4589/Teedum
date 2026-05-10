import React from 'react';

export default function ApologyLetter() {
  return (
    <div className="apology-container">
      <style>{`
        .apology-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          color: #ffffff;
          line-height: 1.8;
          font-family: 'Playfair Display', serif;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          animation: fadeInUp 1s ease-out;
        }

        .apology-header {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          text-align: center;
          background: linear-gradient(to right, #fff, #ffccff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .apology-body {
          font-size: 1.1rem;
          white-space: pre-wrap;
          color: #e0c0e0;
        }

        .apology-footer {
          margin-top: 3rem;
          text-align: right;
          font-style: italic;
          opacity: 0.8;
        }
      `}</style>
      <h2 className="apology-header">My Deepest Apologies</h2>
      <div className="apology-body">
        {`Dearest,

I am writing this because I want to express how truly sorry I am. Sometimes words aren't enough, but I hope this small gesture shows you how much you mean to me.

I never intended to cause any hurt, and I've been reflecting on everything. You deserve the absolute best, and I promise to be better, to listen more, and to cherish every moment we have together.

Thank you for being so patient with me. You are the most important person in my life, and I'll do whatever it takes to make things right.

I love you.`}
      </div>
      <div className="apology-footer">
        Always yours,
        <br />
        T
      </div>
    </div>
  );
}
