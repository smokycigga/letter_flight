import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const PaperRocket = ({ containerRef }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ 
        x: containerRef.current ? containerRef.current.offsetWidth / 2 : 400,
        y: containerRef.current ? containerRef.current.offsetHeight / 2 : 300,
        rotate: 0,
        scale: 1
      }}
      animate={{
        x: [0, 100, 200, 150, 300, 250, 400],
        y: [0, -50, -100, -150, -200, -250, -300],
        rotate: [0, 45, 90, 135, 180, 225, 270],
        scale: [1, 1.1, 0.9, 1.2, 0.8, 1, 0.5]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut"
      }}
      exit={{ opacity: 0, scale: 0 }}
    >
      {/* Simple Rocket Trail */}
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
            animate={{
              x: -index * 20,
              y: index * 10,
              opacity: [0.8, 0.4, 0.1],
              scale: [1, 0.5, 0.2]
            }}
            transition={{
              duration: 2,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Paper Airplane/Rocket */}
      <motion.div
        className="relative w-16 h-16 flex items-center justify-center"
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          rotate: {
            duration: 2,
            ease: "linear"
          }
        }}
      >
        {/* Main Rocket Body */}
        <motion.div
          className="absolute w-12 h-12 bg-gradient-to-br from-white to-pink-50 border-2 border-[var(--color-primary)] rounded-lg transform rotate-45 shadow-lg"
          animate={{
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity
          }}
        />

        {/* Rocket Wings */}
        <motion.div
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-2 bg-[var(--color-accent)] rounded-l-full"
        />
        <motion.div
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-2 bg-[var(--color-accent)] rounded-r-full"
        />

        {/* Heart Symbol on Rocket */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity
            }}
          >
            <Icon name="Heart" size={16} color="var(--color-error)" />
          </motion.div>
        </div>

        {/* Simple Trailing Sparkles */}
        <motion.div
          className="absolute -left-8 top-1/2 transform -translate-y-1/2"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 1,
            repeat: Infinity
          }}
        >
          <Icon name="Sparkles" size={12} color="var(--color-warning)" />
        </motion.div>
      </motion.div>

      {/* Simple Flight Trail */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <svg width="200" height="200" className="absolute -top-24 -left-24">
          <motion.path
            d="M50,100 Q100,50 150,100 Q100,150 50,100"
            stroke="var(--color-primary)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default PaperRocket;