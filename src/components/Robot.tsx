
import React, { useEffect, useRef } from 'react';

const Robot = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = 300;
    canvas.height = 400;

    // Colors that match the website theme
    const purpleMain = '#8B5CF6';
    const purpleLight = '#C4B5FD';
    const blackBg = '#000000';
    const purpleDark = '#7C3AED';

    // Draw the robot
    const drawRobot = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Head
      ctx.fillStyle = blackBg;
      ctx.fillRect(100, 50, 100, 80);
      
      // Purple glow around head
      ctx.shadowColor = purpleMain;
      ctx.shadowBlur = 15;
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(100, 50, 100, 80);
      
      // Reset shadow
      ctx.shadowBlur = 0;

      // Eyes
      ctx.fillStyle = purpleMain;
      ctx.beginPath();
      ctx.arc(130, 80, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(170, 80, 10, 0, Math.PI * 2);
      ctx.fill();

      // Eye glow
      ctx.shadowColor = purpleMain;
      ctx.shadowBlur = 8;
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
      ctx.fillStyle = blackBg;
      ctx.fillRect(135, 130, 30, 20);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(135, 130, 30, 20);

      // Body
      ctx.fillStyle = blackBg;
      ctx.fillRect(90, 150, 120, 120);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(90, 150, 120, 120);

      // Control panel
      ctx.fillStyle = '#111111';
      ctx.fillRect(115, 170, 70, 40);
      
      // Lights on control panel
      const lightColors = [purpleMain, purpleLight, purpleDark];
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = lightColors[i % 3];
        ctx.beginPath();
        ctx.arc(130 + i * 20, 190, 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Arms
      // Left arm
      ctx.fillStyle = blackBg;
      ctx.fillRect(60, 160, 30, 80);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(60, 160, 30, 80);
      
      // Right arm
      ctx.fillStyle = blackBg;
      ctx.fillRect(210, 160, 30, 80);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(210, 160, 30, 80);

      // Legs
      // Left leg
      ctx.fillStyle = blackBg;
      ctx.fillRect(110, 270, 30, 80);
      ctx.strokeStyle = purpleMain;
      ctx.lineWidth = 2;
      ctx.strokeRect(110, 270, 30, 80);
      
      // Right leg
      ctx.fillStyle = blackBg;
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

      // Circuit lines on body
      ctx.strokeStyle = purpleLight;
      ctx.lineWidth = 1;
      
      // Horizontal lines
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(90, 150 + i * 30);
        ctx.lineTo(210, 150 + i * 30);
        ctx.stroke();
      }
      
      // Vertical lines
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(90 + i * 30, 150);
        ctx.lineTo(90 + i * 30, 270);
        ctx.stroke();
      }

      // Add some tech dots
      ctx.fillStyle = purpleMain;
      for (let i = 0; i < 5; i++) {
        const x = 100 + Math.random() * 100;
        const y = 160 + Math.random() * 100;
        const size = 2 + Math.random() * 3;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    // Animation for the robot's lights
    let frame = 0;
    const animate = () => {
      frame++;
      
      if (frame % 30 === 0) {
        drawRobot();
      }
      
      requestAnimationFrame(animate);
    };

    drawRobot();
    animate();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="robot-container flex justify-center items-center my-12">
      <div className="relative">
        <canvas 
          ref={canvasRef} 
          className="robot-canvas z-10"
          style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))' }}
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
