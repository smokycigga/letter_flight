import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const LoveLetter = ({ message, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 75);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [currentIndex, message, onComplete, isComplete]);

  return (
    <div className="w-full py-4">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ 
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        {/* Letter Paper */}
        <motion.div
          className="relative bg-[var(--color-surface)] border-2 border-[var(--color-primary)] rounded-lg p-6 md:p-8 floating-shadow"
          initial={{ rotateX: -45 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 opacity-5 rounded-lg">
            <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] via-transparent to-[var(--color-accent)] rounded-lg" />
          </div>

          {/* Decorative Header */}
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Icon name="Heart" size={24} color="var(--color-error)" />
              </motion.div>
              <div className="w-16 h-0.5 bg-[var(--color-primary)] opacity-30" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
              >
                <Icon name="Sparkles" size={20} color="var(--color-accent)" />
              </motion.div>
              <div className="w-16 h-0.5 bg-[var(--color-primary)] opacity-30" />
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                <Icon name="Heart" size={24} color="var(--color-error)" />
              </motion.div>
            </div>
          </motion.div>

          {/* Letter Content */}
          <div className="relative">
            <motion.div
              className="text-[var(--color-text-primary)] leading-relaxed whitespace-pre-line"
              style={{ 
                fontFamily: 'Caveat, cursive',
                fontSize: '20px',
                lineHeight: '1.6'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {displayedText}
              {!isComplete && (
                <motion.span
                  className="inline-block w-0.5 h-6 bg-[var(--color-primary)] ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </motion.div>

            {/* Decorative Flourishes */}
            <motion.div
              className="absolute -left-4 top-8 opacity-20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2 }}
            >
              <svg width="30" height="60" viewBox="0 0 30 60">
                <motion.path
                  d="M5,10 Q15,5 25,10 Q15,15 5,20 Q15,25 25,30 Q15,35 5,40 Q15,45 25,50"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 3 }}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-8 opacity-20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 4 }}
            >
              <svg width="30" height="60" viewBox="0 0 30 60">
                <motion.path
                  d="M25,10 Q15,5 5,10 Q15,15 25,20 Q15,25 5,30 Q15,35 25,40 Q15,45 5,50"
                  stroke="var(--color-secondary)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: 4.5 }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Decorative Footer */}
          <motion.div
            className="flex items-center justify-center mt-6 pt-4 border-t border-[var(--color-primary)] border-opacity-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isComplete ? 1 : 0, y: isComplete ? 0 : 20 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <Icon name="Heart" size={16} color="var(--color-error)" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 1.5
                }}
              >
                <Icon name="Heart" size={14} color="var(--color-accent)" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.4, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 2
                }}
              >
                <Icon name="Heart" size={18} color="var(--color-error)" />
              </motion.div>
            </div>
          </motion.div>

          {/* Corner Decorations */}
          <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-[var(--color-primary)] opacity-20 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-[var(--color-primary)] opacity-20 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-[var(--color-primary)] opacity-20 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[var(--color-primary)] opacity-20 rounded-br-lg" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoveLetter;