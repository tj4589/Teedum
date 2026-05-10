import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';

function Heart(props) {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh {...props}>
        <extrudeGeometry
          args={[
            new THREE.Shape([
              new THREE.Vector2(0, 0.5),
              new THREE.Vector2(0.5, 1),
              new THREE.Vector2(1, 0.5),
              new THREE.Vector2(0, -0.7),
              new THREE.Vector2(-1, 0.5),
              new THREE.Vector2(-0.5, 1),
              new THREE.Vector2(0, 0.5),
            ]),
            { depth: 0.4, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.1, bevelSegments: 5 }
          ]}
        />
        <meshStandardMaterial color={props.color || "#ff69b4"} emissive={props.color || "#ff69b4"} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
}

export default function ApologyLetter() {
  const content = "I am very sorry my dum for what I did yesterday I love you and I know you're going through it rn and I don't look like the most supportive and caring but I am, and I do love you my woman. ALWAYS AND FOREVER BABE, you mean the world to me my baby you are such an amazing woman my love and i know you will kill all these small small thing that's bothering you, I know you'll kill the lucheon, the tech fest abi is it CIMON o, or REDEFFFFF you'll do it and more my baby I LOVE YOU ALWAYS TILL THE END MY WOMAN, God love you too please pray o dum dum muah!";

  return (
    <div className="apology-wrapper">
      <style>{`
        .apology-wrapper {
          position: relative;
          width: 100%;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .three-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .apology-card {
          position: relative;
          z-index: 1;
          max-width: 650px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          padding: 3rem;
          color: #ffffff;
          line-height: 1.8;
          font-family: 'Playfair Display', serif;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          animation: cardPop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: center;
          border-radius: 32px;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        /* Cute Animated Border */
        .apology-card::before {
          content: '';
          position: absolute;
          inset: -8px;
          border: 2px dashed rgba(255, 105, 180, 0.6);
          border-radius: 40px;
          pointer-events: none;
          animation: rotateBorder 15s linear infinite;
        }

        @keyframes rotateBorder {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes cardPop {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .apology-header {
          font-size: 2.8rem;
          margin-bottom: 2rem;
          background: linear-gradient(to right, #ff69b4, #ffffff, #ffb6c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .apology-body {
          font-size: 1.2rem;
          color: #fce4ec;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          font-style: italic;
        }

        .apology-footer {
          margin-top: 3rem;
          font-size: 1.4rem;
          background: linear-gradient(to right, #ff69b4, #ff1493);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }
      `}</style>

      <div className="three-bg">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={10} size={2} speed={0.5} color="#ff69b4" />
            <Heart position={[-2, 1, 0]} scale={0.4} color="#ff1493" />
            <Heart position={[2, -1, -1]} scale={0.3} color="#ff69b4" />
            <Heart position={[-1.5, -2, 0.5]} scale={0.2} color="#f472b6" />
            <Heart position={[1.5, 2, -0.5]} scale={0.25} color="#ec4899" />
          </Suspense>
        </Canvas>
      </div>

      <div className="apology-card">
        <h2 className="apology-header">For My Dum Dum 💖</h2>
        <div className="apology-body">
          {content}
        </div>
        <div className="apology-footer">
          Forever Yours, T
        </div>
      </div>
    </div>
  );
}
