import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ConfettiEffect = () => {
  const confettiPieces = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    icon: ['Heart', 'Star', 'Sparkles'][i % 3],
    color: ['var(--color-error)', 'var(--color-warning)', 'var(--color-accent)'][i % 3],
    initialX: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 800,
    initialY: -50,
    size: Math.random() * 16 + 12
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          initial={{
            x: piece.initialX,
            y: piece.initialY,
            rotate: 0,
            opacity: 1,
            scale: 1
          }}
          animate={{
            y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800,
            rotate: [0, 180, 360, 540, 720],
            x: piece.initialX + (Math.random() - 0.5) * 200,
            opacity: [1, 1, 0.8, 0.5, 0],
            scale: [1, 1.2, 1, 0.8, 0.6]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            ease: "easeOut",
            delay: Math.random() * 2
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{
              rotate: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <Icon 
              name={piece.icon} 
              size={piece.size} 
              color={piece.color}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Additional Sketch-style Confetti */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`sketch-${i}`}
          className="absolute"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 800,
            y: -30,
            rotate: 0,
            opacity: 0.8
          }}
          animate={{
            y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
            rotate: Math.random() * 720,
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 800,
            opacity: [0.8, 0.6, 0.4, 0]
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            ease: "easeOut",
            delay: Math.random() * 1.5
          }}
        >
          <svg 
            width={Math.random() * 20 + 10} 
            height={Math.random() * 20 + 10} 
            viewBox="0 0 20 20"
          >
            <motion.path
              d="M10,2 L12,8 L18,8 L14,12 L16,18 L10,14 L4,18 L6,12 L2,8 L8,8 Z"
              fill={['var(--color-error)', 'var(--color-warning)', 'var(--color-accent)'][i % 3]}
              opacity={0.7}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Heart Burst Effect */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`burst-${i}`}
          className="absolute top-1/2 left-1/2"
          initial={{
            x: 0,
            y: 0,
            scale: 0,
            opacity: 1
          }}
          animate={{
            x: Math.cos((i * Math.PI * 2) / 8) * 200,
            y: Math.sin((i * Math.PI * 2) / 8) * 200,
            scale: [0, 1.5, 0],
            opacity: [1, 0.8, 0]
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
        >
          <Icon name="Heart" size={24} color="var(--color-error)" />
        </motion.div>
      ))}
    </div>
  );
};

export default ConfettiEffect;