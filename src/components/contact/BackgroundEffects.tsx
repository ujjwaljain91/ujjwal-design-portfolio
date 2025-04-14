
import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Removed specific circuit lines */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-purple/40 rounded-full" 
            style={{
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)',
              animation: `pulse-slow ${Math.random() * 5 + 3}s infinite`,
              zIndex: 1
            }}
          />
        ))}
        
        {/* Decorative tech elements */}
        <div className="absolute left-0 top-40 w-32 border-t-2 border-dashed border-purple/40"></div>
        <div className="absolute right-0 bottom-40 w-32 border-t-2 border-dashed border-purple/40"></div>
        <div className="absolute right-10 top-10 w-20 h-20 border-2 border-purple/30 rounded-full opacity-30"></div>
        <div className="absolute left-10 bottom-10 w-16 h-16 border-2 border-purple/30 rounded-full opacity-30"></div>
      </div>
    </>
  );
};

export default BackgroundEffects;
