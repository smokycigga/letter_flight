import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ResponseButtons = ({ onResponse, userResponse }) => {
  if (userResponse) {
    return (
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {userResponse === 'yes' ? (
          <motion.div
            className="space-y-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            {/* Heart Pulse Animation */}
            <motion.div
              className="flex justify-center"
              animate={{ 
                scale: [1, 1.3, 1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            >
              <Icon name="Heart" size={80} color="var(--color-error)" />
            </motion.div>

            <motion.h2
              className="text-4xl text-[var(--color-primary)] mb-4"
              style={{ fontFamily: 'Caveat, cursive' }}
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity
              }}
            >
              You said Yes! ❤️
            </motion.h2>

            <motion.p
              className="text-xl text-[var(--color-text-primary)] mb-8"
              style={{ fontFamily: 'Caveat, cursive' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              My heart is soaring like a paper airplane in the sky! 
              This is the beginning of our beautiful adventure together.
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-6"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            {/* Gentle Folding Animation */}
            <motion.div
              className="flex justify-center"
              animate={{ 
                rotateX: [0, 15, 0],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            >
              <Icon name="FileText" size={60} color="var(--color-text-secondary)" />
            </motion.div>

            <motion.h2
              className="text-3xl text-[var(--color-text-secondary)] mb-4"
              style={{ fontFamily: 'Caveat, cursive' }}
            >
              That's okay...
            </motion.h2>

            <motion.p
              className="text-lg text-[var(--color-text-secondary)] mb-8"
              style={{ fontFamily: 'Caveat, cursive' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Sometimes the heart needs more time to unfold. 
              I'll keep this letter close, hoping for another chance someday.
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="text-center max-w-md mx-auto space-y-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-3xl text-[var(--color-primary)] mb-6"
        style={{ fontFamily: 'Caveat, cursive' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        What does your heart say?
      </motion.h2>

      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* Yes Button */}
        <motion.button
          onClick={() => onResponse('yes')}
          className="w-full bg-[var(--color-success)] text-white px-8 py-4 rounded-lg hover:bg-[var(--color-primary)] transition-all duration-300 ink-swell gentle-shadow flex items-center justify-center gap-3"
          style={{ fontFamily: 'Caveat, cursive', fontSize: '20px' }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 8px 16px var(--shadow-warm)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity
            }}
          >
            <Icon name="Heart" size={24} color="white" />
          </motion.div>
          Yes, I'd love to!
        </motion.button>

        {/* No Button */}
        <motion.button
          onClick={() => onResponse('no')}
          className="w-full bg-[var(--color-text-secondary)] text-white px-8 py-4 rounded-lg hover:bg-[var(--color-primary)] transition-all duration-300 ink-swell gentle-shadow flex items-center justify-center gap-3"
          style={{ fontFamily: 'Caveat, cursive', fontSize: '20px' }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 4px 8px var(--shadow-soft)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <Icon name="Clock" size={20} color="white" />
          Not now...
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="flex justify-center items-center gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }}
        >
          <Icon name="Sparkles" size={16} color="var(--color-accent)" />
        </motion.div>
        
        <div className="w-12 h-0.5 bg-[var(--color-primary)] opacity-30" />
        
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            delay: 1
          }}
        >
          <Icon name="Heart" size={20} color="var(--color-error)" />
        </motion.div>
        
        <div className="w-12 h-0.5 bg-[var(--color-primary)] opacity-30" />
        
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 1.5
          }}
        >
          <Icon name="Sparkles" size={16} color="var(--color-secondary)" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ResponseButtons;