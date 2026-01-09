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

        <div
          className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] pointer-events-none"
        ></div>
        <div
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none"
        ></div>
        <div
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[80px] pointer-events-none"
        ></div>

        {particleCrowd.map((p, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-primary/60 rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.5)] animate-ball-float"
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
              <path d="M 40 0 L 0 0 0 40" fill="none" className="stroke-primary/30" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {hPos.map((top, i) => (
          <div
            key={`h-${i}`}
            onAnimationIteration={() => handleHIteration(i)}
            className="absolute left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent animate-move-right"
            style={{
              top: `${top}%`,
              animationDuration: i === 0 ? '8s' : '12s'
            }}
          ></div>
        ))}

        {vPos.map((left, i) => (
          <div
            key={`v-${i}`}
            onAnimationIteration={() => handleVIteration(i)}
            className="absolute top-0 h-full w-px bg-linear-to-b from-transparent via-primary/40 to-transparent animate-move-down"
            style={{
              left: `${left}%`,
              animationDuration: i === 0 ? '10s' : '15s'
            }}
          ></div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes ball-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }

        @keyframes move-right {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes move-down {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }

        .animate-ball-float {
          animation: ball-float 4s ease-in-out infinite;
        }

        .animate-move-right { animation: move-right linear infinite; }
        .animate-move-down { animation: move-down linear infinite; }
      `}</style>
    </>
  );
}