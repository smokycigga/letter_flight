import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import EnvelopeComponent from './components/EnvelopeComponent';
import PaperRocket from './components/PaperRocket';
import LoveLetter from './components/LoveLetter';
import ResponseButtons from './components/ResponseButtons';
import ConfettiEffect from './components/ConfettiEffect';

const InteractiveLoveLetterExperience = () => {
  const [currentStage, setCurrentStage] = useState('envelope'); // envelope, rocket, letter, response
  const [showHoverText, setShowHoverText] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  const loveMessage = `My Dearest Love,

Every morning when I wake up, you're the first thought that crosses my mind, and every night before I sleep, you're the last smile I carry into my dreams.

I've been wanting to tell you something that's been growing in my heart like a beautiful garden in spring. With each passing day, my feelings for you have deepened beyond what I thought was possible.

You make ordinary moments feel extraordinary. Your laugh is my favorite melody, your smile is my sunshine, and your presence is my peace.

Would you like to explore this beautiful journey together?

Forever yours,
With all my love ❤️`;

  // Background music management
  useEffect(() => {
    // Create audio element for background music - using a working piano track
    const audio = new Audio('https://www.bensound.com/bensound-music/bensound-tenderness.mp3');
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    // Start playing music when component mounts
    const playMusic = () => {
      audio.play().catch(error => {
        console.log('Audio autoplay was prevented:', error);
        // Try alternative approach for better browser compatibility
        document.addEventListener('click', () => {
          audio.play().catch(err => console.log('Could not play audio:', err));
        }, { once: true });
      });
    };

    // Try to play immediately, or wait for user interaction
    playMusic();

    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleEnvelopeClick = () => {
    // Ensure music is playing when user interacts
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(error => {
        console.log('Could not play audio:', error);
      });
    }
    
    setCurrentStage('rocket');
    setTimeout(() => {
      setCurrentStage('letter');
    }, 2000); // Reduced duration for simpler animation
  };

  const handleResponse = (response) => {
    setUserResponse(response);
    setCurrentStage('response');
    if (response === 'yes') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-[var(--color-background)] paper-texture relative overflow-hidden"
    >
      {/* Animated Background Brush Strokes */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 left-10 w-32 h-1 bg-[var(--color-primary)]"
          initial={{ scaleX: 0, rotate: -15 }}
          animate={{ scaleX: 1, rotate: -15 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-1 bg-[var(--color-accent)]"
          initial={{ scaleX: 0, rotate: 25 }}
          animate={{ scaleX: 1, rotate: 25 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-28 h-1 bg-[var(--color-secondary)]"
          initial={{ scaleX: 0, rotate: -45 }}
          animate={{ scaleX: 1, rotate: -45 }}
          transition={{ duration: 1.8, delay: 1.5 }}
        />
      </div>

      {/* Faint Background Sketch Artwork */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Icon name="Heart" size={120} color="var(--color-primary)" />
        </div>
        <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <Icon name="Sparkles" size={80} color="var(--color-accent)" />
        </div>
        <div className="absolute bottom-1/4 left-1/3">
          <Icon name="Flower" size={100} color="var(--color-secondary)" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {currentStage === 'envelope' && (
            <EnvelopeComponent
              key="envelope"
              onEnvelopeClick={handleEnvelopeClick}
              showHoverText={showHoverText}
              setShowHoverText={setShowHoverText}
            />
          )}

          {currentStage === 'rocket' && (
            <PaperRocket
              key="rocket"
              containerRef={containerRef}
            />
          )}

          {currentStage === 'letter' && (
            <LoveLetter
              key="letter"
              message={loveMessage}
              onComplete={() => {
                setTimeout(() => {
                  setCurrentStage('response');
                }, 500);
              }}
            />
          )}

          {currentStage === 'response' && (
            <ResponseButtons
              key="response"
              onResponse={handleResponse}
              userResponse={userResponse}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Confetti Effect */}
      <AnimatePresence>
        {showConfetti && (
          <ConfettiEffect key="confetti" />
        )}
      </AnimatePresence>

      {/* Decorative Pencil Doodles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-10 right-10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 2 }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            <motion.path
              d="M10,30 Q30,10 50,30 Q30,50 10,30"
              stroke="var(--color-primary)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 3 }}
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 4 }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40">
            <motion.path
              d="M5,20 L35,20 M20,5 L20,35"
              stroke="var(--color-accent)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 4.5 }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveLoveLetterExperience;