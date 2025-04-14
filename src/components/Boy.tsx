
import React, { useEffect, useRef, useState } from 'react';

const Boy = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Add scroll listener to control visibility
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // Gradually decrease opacity as user scrolls (0-300px)
      if (scrolled < 300) {
        setOpacity(1 - scrolled / 300);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 400;

    // Enhanced colors for the boy character using website's purple theme
    const purpleMain = '#8B5CF6';
    const purpleLight = '#C4B5FD';
    const purpleDark = '#7C3AED';
    const blackBg = '#000000';
    const skinTone = '#F8D8BD';
    const hairColor = '#1A1F2C';

    // Draw the boy character
    const drawBoy = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Floating animation using time
      const floatOffset = Math.sin(Date.now() / 1000) * 5;

      // Head with glow effects
      ctx.save();
      ctx.translate(0, floatOffset);
      
      // Head
      ctx.fillStyle = skinTone;
      ctx.beginPath();
      ctx.arc(150, 100, 50, 0, Math.PI * 2);
      ctx.fill();
      
      // Hair
      ctx.fillStyle = hairColor;
      ctx.beginPath();
      ctx.arc(150, 80, 50, Math.PI, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(100, 80);
      ctx.lineTo(100, 120);
      ctx.lineTo(120, 120);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(200, 80);
      ctx.lineTo(200, 120);
      ctx.lineTo(180, 120);
      ctx.fill();
      
      // Eyes with animated blink
      const blinkRate = Math.sin(Date.now() / 2000);
      const eyeHeight = blinkRate > 0.97 ? 1 : 6;
      
      ctx.fillStyle = blackBg;
      ctx.beginPath();
      ctx.ellipse(130, 100, 5, eyeHeight, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(170, 100, 5, eyeHeight, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Purple glow effect around eyes
      ctx.shadowColor = purpleMain;
      ctx.shadowBlur = 10;
      ctx.strokeStyle = purpleLight;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(130, 100, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(170, 100, 10, 0, Math.PI * 2);
      ctx.stroke();
      
      // Reset shadow
      ctx.shadowBlur = 0;
      
      // Smile with gradient
      const smileGradient = ctx.createLinearGradient(130, 125, 170, 125);
      smileGradient.addColorStop(0, purpleDark);
      smileGradient.addColorStop(1, purpleMain);
      
      ctx.strokeStyle = smileGradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(150, 120, 20, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();
      
      // Body with tech aesthetics
      ctx.fillStyle = blackBg;
      ctx.fillRect(125, 150, 50, 80);
      
      // Tech pattern on body
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 1;
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(125, 150 + i * 20);
        ctx.lineTo(175, 150 + i * 20);
        ctx.stroke();
      }
      
      // Glowing chest emblem
      const pulseIntensity = Math.sin(Date.now() / 500) * 0.5 + 0.5;
      ctx.shadowColor = purpleLight;
      ctx.shadowBlur = 10 + pulseIntensity * 5;
      ctx.fillStyle = purpleMain;
      ctx.beginPath();
      ctx.arc(150, 180, 10, 0, Math.PI * 2);
      ctx.fill();
      
      // Arms with slight sway animation
      const armSwayLeft = Math.sin(Date.now() / 1200) * 5;
      const armSwayRight = Math.cos(Date.now() / 1200) * 5;
      
      // Left arm
      ctx.shadowBlur = 0;
      ctx.fillStyle = skinTone;
      ctx.save();
      ctx.translate(115, 160);
      ctx.rotate(-0.1 + (armSwayLeft * 0.02));
      ctx.fillRect(-10, 0, 20, 70);
      // Tech bracelet
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(-10, 60, 20, 10);
      ctx.restore();
      
      // Right arm
      ctx.fillStyle = skinTone;
      ctx.save();
      ctx.translate(185, 160);
      ctx.rotate(0.1 + (armSwayRight * 0.02));
      ctx.fillRect(-10, 0, 20, 70);
      // Tech bracelet
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(-10, 60, 20, 10);
      ctx.restore();
      
      // Legs
      ctx.fillStyle = blackBg;
      ctx.fillRect(135, 230, 15, 80);
      ctx.fillRect(150, 230, 15, 80);
      
      // Tech highlights on legs
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 1;
      ctx.strokeRect(135, 230, 15, 80);
      ctx.strokeRect(150, 230, 15, 80);
      
      // Feet with tech aesthetic
      ctx.fillStyle = blackBg;
      ctx.fillRect(125, 310, 25, 10);
      ctx.fillRect(150, 310, 25, 10);
      
      // Tech light on shoes
      ctx.shadowColor = purpleLight;
      ctx.shadowBlur = 5;
      ctx.fillStyle = purpleMain;
      ctx.beginPath();
      ctx.arc(135, 315, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(165, 315, 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore(); // Restore for floating animation
    };

    // Animation loop for the boy
    const animate = () => {
      drawBoy();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="boy-container absolute right-10 top-1/2 -translate-y-1/2 transform transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="relative">
        <canvas 
          ref={canvasRef} 
          className="boy-canvas z-10"
          style={{ filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))' }}
        />
        
        {/* Tech background effects */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-purple/10 blur-3xl animate-pulse-slow"></div>
        </div>
        
        {/* Scanner line effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="w-full h-2 bg-gradient-to-r from-transparent via-purple/50 to-transparent absolute animate-scan-y"></div>
        </div>
      </div>
    </div>
  );
};

export default Boy;
