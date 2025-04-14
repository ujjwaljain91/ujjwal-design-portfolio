
import { useState, useEffect, useRef } from 'react';
import { Bot, Zap } from 'lucide-react';

type CursorType = 'default' | 'link' | 'project';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<CursorType>('default');
  const cursorSpeedRef = useRef({ x: 0, y: 0 });
  const lastCursorPositionRef = useRef({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouch();
    
    if (isTouch) return;

    // Update cursor with easing effect
    let animationFrameId: number;
    
    const updateCursorWithEasing = () => {
      const currentX = lastCursorPositionRef.current.x;
      const currentY = lastCursorPositionRef.current.y;
      
      const targetX = cursorPosition.x;
      const targetY = cursorPosition.y;
      
      // Calculate distance and update speed
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      // Ease the movement (lower number = smoother/slower)
      cursorSpeedRef.current.x = dx * 0.2;
      cursorSpeedRef.current.y = dy * 0.2;
      
      // Update position with easing
      lastCursorPositionRef.current.x += cursorSpeedRef.current.x;
      lastCursorPositionRef.current.y += cursorSpeedRef.current.y;
      
      // Update cursor position
      const cursorElement = document.querySelector('.custom-cursor');
      const dotElement = document.querySelector('.cursor-dot');
      
      if (cursorElement) {
        cursorElement.setAttribute('style', `
          left: ${lastCursorPositionRef.current.x}px;
          top: ${lastCursorPositionRef.current.y}px;
          transform: translate(-50%, -50%) scale(${isHovering ? 1.5 : 1});
          opacity: ${isHovering ? 0.4 : 0.2};
        `);
      }
      
      if (dotElement) {
        dotElement.setAttribute('style', `
          left: ${targetX}px;
          top: ${targetY}px;
          transform: translate(-50%, -50%);
        `);
      }
      
      animationFrameId = requestAnimationFrame(updateCursorWithEasing);
    };
    
    animationFrameId = requestAnimationFrame(updateCursorWithEasing);

    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Setup event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    const projectElements = document.querySelectorAll('.project-card');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        setIsHovering(true);
        setCursorType('link');
      });
      element.addEventListener('mouseleave', () => {
        setIsHovering(false);
        setCursorType('default');
      });
    });
    
    projectElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        setCursorType('project');
      });
      element.addEventListener('mouseleave', () => {
        setCursorType('default');
      });
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', () => {
          setIsHovering(true);
          setCursorType('link');
        });
        element.removeEventListener('mouseleave', () => {
          setIsHovering(false);
          setCursorType('default');
        });
      });
      
      projectElements.forEach(element => {
        element.removeEventListener('mouseenter', () => {
          setCursorType('project');
        });
        element.removeEventListener('mouseleave', () => {
          setCursorType('default');
        });
      });
    };
  }, [isTouch, cursorPosition.x, cursorPosition.y, isHovering]);

  if (isTouch || !cursorVisible) return null;

  return (
    <>
      <div className="custom-cursor hidden md:block"></div>
      <div className="cursor-dot hidden md:block">
        {cursorType === 'link' && (
          <Zap className="text-purple w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.8 }} />
        )}
        {cursorType === 'project' && (
          <Bot className="text-purple w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.8 }} />
        )}
      </div>
    </>
  );
};

export default CustomCursor;
