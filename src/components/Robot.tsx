
import React, { useEffect, useRef, useState } from 'react';

const Robot = () => {
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

    // Enhanced colors with gradients
    const purpleMain = '#8B5CF6';
    const purpleLight = '#C4B5FD';
    const purpleDark = '#7C3AED';
    const blackBg = '#000000';
    const glowColor = '#D6BCFA';

    // Draw the robot with enhanced visuals
    const drawRobot = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Head with gradient
      const headGradient = ctx.createLinearGradient(100, 50, 200, 130);
      headGradient.addColorStop(0, blackBg);
      headGradient.addColorStop(1, '#1A1F2C');
      
      ctx.fillStyle = headGradient;
      ctx.fillRect(100, 50, 100, 80);
      
      // Purple glow effect around head
      ctx.shadowColor = purpleMain;
      ctx.shadowBlur = 15;
      ctx.strokeStyle = purpleLight;
      ctx.lineWidth = 2;
      ctx.strokeRect(100, 50, 100, 80);
      
      // Reset shadow
      ctx.shadowBlur = 0;

      // Eyes with animated glow
      const pulseIntensity = Math.sin(Date.now() / 500) * 0.5 + 0.5;
      
      // Main eye circles
      ctx.fillStyle = purpleMain;
      ctx.beginPath();
      ctx.arc(130, 80, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(170, 80, 10, 0, Math.PI * 2);
      ctx.fill();

      // Eye glow with animation
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 8 + pulseIntensity * 5;
      ctx.fillStyle = purpleLight;
      ctx.beginPath();
      ctx.arc(130, 80, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(170, 80, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Reset shadow
      ctx.shadowBlur = 0;

      // Neck
      const neckGradient = ctx.createLinearGradient(135, 130, 165, 150);
      neckGradient.addColorStop(0, blackBg);
      neckGradient.addColorStop(1, '#1A1F2C');
      
      ctx.fillStyle = neckGradient;
      ctx.fillRect(135, 130, 30, 20);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(135, 130, 30, 20);

      // Body with gradient
      const bodyGradient = ctx.createLinearGradient(90, 150, 210, 270);
      bodyGradient.addColorStop(0, blackBg);
      bodyGradient.addColorStop(1, '#1A1F2C');
      
      ctx.fillStyle = bodyGradient;
      ctx.fillRect(90, 150, 120, 120);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(90, 150, 120, 120);

      // Control panel with metallic effect
      const panelGradient = ctx.createLinearGradient(115, 170, 115, 210);
      panelGradient.addColorStop(0, '#111111');
      panelGradient.addColorStop(0.5, '#2A2A2A');
      panelGradient.addColorStop(1, '#111111');
      
      ctx.fillStyle = panelGradient;
      ctx.fillRect(115, 170, 70, 40);
      
      // Animated lights on control panel
      const lightColors = [purpleDark, purpleMain, purpleLight];
      for (let i = 0; i < 3; i++) {
        const pulseOffset = Math.sin(Date.now() / 400 + i) * 0.5 + 0.5;
        
        ctx.shadowColor = lightColors[i % 3];
        ctx.shadowBlur = 5 + pulseOffset * 5;
        ctx.fillStyle = lightColors[i % 3];
        ctx.beginPath();
        ctx.arc(130 + i * 20, 190, 5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.shadowBlur = 0;

      // Arms with gradients
      // Left arm
      const leftArmGradient = ctx.createLinearGradient(60, 160, 90, 160);
      leftArmGradient.addColorStop(0, blackBg);
      leftArmGradient.addColorStop(1, '#1A1F2C');
      
      ctx.fillStyle = leftArmGradient;
      ctx.fillRect(60, 160, 30, 80);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(60, 160, 30, 80);
      
      // Right arm
      const rightArmGradient = ctx.createLinearGradient(210, 160, 240, 160);
      rightArmGradient.addColorStop(0, '#1A1F2C');
      rightArmGradient.addColorStop(1, blackBg);
      
      ctx.fillStyle = rightArmGradient;
      ctx.fillRect(210, 160, 30, 80);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(210, 160, 30, 80);

      // Legs with gradients
      // Left leg
      const leftLegGradient = ctx.createLinearGradient(110, 270, 140, 270);
      leftLegGradient.addColorStop(0, blackBg);
      leftLegGradient.addColorStop(1, '#1A1F2C');
      
      ctx.fillStyle = leftLegGradient;
      ctx.fillRect(110, 270, 30, 80);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(110, 270, 30, 80);
      
      // Right leg
      const rightLegGradient = ctx.createLinearGradient(160, 270, 190, 270);
      rightLegGradient.addColorStop(0, '#1A1F2C');
      rightLegGradient.addColorStop(1, blackBg);
      
      ctx.fillStyle = rightLegGradient;
      ctx.fillRect(160, 270, 30, 80);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(160, 270, 30, 80);

      // Feet
      ctx.fillStyle = blackBg;
      ctx.fillRect(100, 350, 40, 20);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(100, 350, 40, 20);
      
      ctx.fillStyle = blackBg;
      ctx.fillRect(160, 350, 40, 20);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(160, 350, 40, 20);

      // Enhanced circuit lines on body with glow effect
      ctx.shadowColor = purpleLight;
      ctx.shadowBlur = 3;
      ctx.strokeStyle = purpleLight;
      ctx.lineWidth = 1;
      
      // Horizontal circuit lines
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(90, 150 + i * 30);
        ctx.lineTo(210, 150 + i * 30);
        ctx.stroke();
      }
      
      // Vertical circuit lines
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(90 + i * 30, 150);
        ctx.lineTo(90 + i * 30, 270);
        ctx.stroke();
      }

      // Add more detailed tech effects - glowing dots
      ctx.shadowBlur = 5;
      ctx.fillStyle = purpleLight;
      
      // Create random tech dots that pulse
      for (let i = 0; i < 10; i++) {
        const x = 100 + Math.random() * 100;
        const y = 160 + Math.random() * 100;
        const pulseOffset = Math.sin(Date.now() / 300 + i) * 0.5 + 0.5;
        const size = (2 + Math.random() * 3) * (0.7 + pulseOffset * 0.5);
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation loop for the robot
    const animate = () => {
      drawRobot();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className="robot-container absolute right-0 top-1/2 -translate-y-1/2 transform transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="relative">
        <canvas 
          ref={canvasRef} 
          className="robot-canvas z-10"
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

export default Robot;
