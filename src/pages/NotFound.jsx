import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[var(--color-background)] paper-texture flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <Icon name="FileX" size={80} color="var(--color-primary)" className="mx-auto mb-4" />
          <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-2" style={{ fontFamily: 'Caveat, cursive' }}>
            404
          </h1>
          <h2 className="text-2xl text-[var(--color-text-primary)] mb-4" style={{ fontFamily: 'Caveat, cursive' }}>
            Page Not Found
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            The page you're looking for seems to have drifted away like a paper airplane in the wind.
          </p>
        </div>
        
        <Link 
          to="/interactive-love-letter-experience"
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-accent)] transition-all duration-300 ink-swell gentle-shadow"
          style={{ fontFamily: 'Caveat, cursive', fontSize: '18px' }}
        >
          <Icon name="Home" size={20} />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;