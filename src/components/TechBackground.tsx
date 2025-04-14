
import { useState, useEffect } from 'react';

interface TechBackgroundProps {
  count?: number;
}

const TechBackground = ({ count = 15 }: TechBackgroundProps) => {
  const [techElements, setTechElements] = useState<{ top: number; left: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate tech elements
    const elements = [];
    for (let i = 0; i < count; i++) {
      elements.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 5 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10
      });
    }
    setTechElements(elements);
  }, [count]);

  return (
    <>
      {techElements.map((element, index) => (
        <div 
          key={index}
          className="fixed bg-purple/20 rounded-full pointer-events-none z-0"
          style={{
            top: `${element.top}%`,
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            opacity: 0.3,
            animation: `pulse-slow ${element.duration}s infinite`,
            animationDelay: `${element.delay}s`
          }}
        />
      ))}
    </>
  );
};

export default TechBackground;
