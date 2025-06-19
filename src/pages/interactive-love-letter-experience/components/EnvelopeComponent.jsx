import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const EnvelopeComponent = ({ onEnvelopeClick, showHoverText, setShowHoverText }) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
      onHoverStart={() => setShowHoverText(true)}
      onHoverEnd={() => setShowHoverText(false)}
      onClick={onEnvelopeClick}
    >
      {/* Envelope Shadow */}
      <motion.div
        className="absolute inset-0 bg-black/20 rounded-lg transform translate-x-2 translate-y-2 blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />

      {/* Main Envelope */}
      <motion.div
        className="relative bg-[var(--color-surface)] border-2 border-[var(--color-primary)] rounded-lg p-8 w-80 h-56 flex items-center justify-center floating-shadow"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 12px 24px var(--shadow-warm)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Envelope Texture Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-transparent rounded-lg" />
        </div>

        {/* Envelope Flap */}
        <motion.div
          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-[var(--color-accent)] border-2 border-[var(--color-primary)] rounded-t-lg"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)"
          }}
          whileHover={{ y: -2 }}
        />

        {/* Wax Seal */}
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[var(--color-error)] rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          animate={{ 
            boxShadow: ["0 0 0 0 rgba(160, 82, 45, 0.4)", "0 0 0 10px rgba(160, 82, 45, 0)"]
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity }
          }}
        >
          <Icon name="Heart" size={20} color="white" />
        </motion.div>

        {/* Envelope Content Indicator */}
        <motion.div
          className="flex flex-col items-center text-[var(--color-text-primary)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Icon name="Mail" size={48} color="var(--color-primary)" className="mb-2" />
          <p className="text-sm opacity-70" style={{ fontFamily: 'Caveat, cursive' }}>
            A special message awaits...
          </p>
        </motion.div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--color-primary)] opacity-30" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[var(--color-primary)] opacity-30" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[var(--color-primary)] opacity-30" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--color-primary)] opacity-30" />
      </motion.div>

      {/* Hover Text */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: showHoverText ? 1 : 0,
          y: showHoverText ? 0 : -10
        }}
        transition={{ duration: 0.3 }}
      >
        <p 
          className="text-[var(--color-primary)] text-xl px-4 py-2 bg-[var(--color-background)] rounded-lg gentle-shadow"
          style={{ fontFamily: 'Caveat, cursive' }}
        >
          Tap to open...
        </p>
      </motion.div>

      {/* Floating Hearts Animation */}
      <motion.div
        className="absolute -top-8 -right-8"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Icon name="Heart" size={16} color="var(--color-error)" className="opacity-60" />
      </motion.div>

      <motion.div
        className="absolute -top-4 -left-6"
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Icon name="Heart" size={12} color="var(--color-accent)" className="opacity-50" />
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeComponent;