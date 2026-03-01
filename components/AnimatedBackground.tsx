"use client"
import { useState } from 'react';

export default function AnimatedBackground() {
  const [hPos, setHPos] = useState([20, 60]);
  const [vPos, setVPos] = useState([30, 80]);

  const getRandomTrack = () => Math.floor(Math.random() * 20) * 5;

  const handleHIteration = (index: number) => {
    const newPos = [...hPos];
    newPos[index] = getRandomTrack();
    setHPos(newPos);
  };

  const handleVIteration = (index: number) => {
    const newPos = [...vPos];
    newPos[index] = getRandomTrack();
    setVPos(newPos);
  };

  const particleCrowd = [
    { left: '10%', top: '20%', delay: '0s' },
    { left: '25%', top: '60%', delay: '1s' },
    { left: '40%', top: '30%', delay: '2s' },
    { left: '55%', top: '70%', delay: '0.5s' },
    { left: '70%', top: '40%', delay: '1.5s' },
    { left: '85%', top: '15%', delay: '2.5s' },
    { left: '90%', top: '80%', delay: '1.2s' },
  ];

  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
        {particleCrowd.map((p, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary/30 rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.4)] animate-ball-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay
            }}
          ></div>
        ))}

        <svg className="absolute inset-0 h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" className="stroke-primary/10" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <style jsx global>{`
        @keyframes ball-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }

        .animate-ball-float {
          animation: ball-float 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}