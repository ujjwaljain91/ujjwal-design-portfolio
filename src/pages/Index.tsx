import { useEffect, useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectCard from '@/components/ProjectCard';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Bot, Zap, CircuitBoard } from 'lucide-react';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'link' | 'project'>('default');
  const cursorSpeedRef = useRef({ x: 0, y: 0 });
  const lastCursorPositionRef = useRef({ x: 0, y: 0 });

  // Generate random tech lines for decoration
  const [techElements, setTechElements] = useState<{ top: number; left: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate tech elements
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 5 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10
      });
    }
    setTechElements(elements);

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Tech background elements */}
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

      {/* Custom robotic cursor (only on non-touch devices) */}
      {!isTouch && cursorVisible && (
        <>
          <div 
            className={`custom-cursor hidden md:block`}
          ></div>
          <div className="cursor-dot hidden md:block">
            {cursorType === 'link' && (
              <Zap className="text-purple w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.8 }} />
            )}
            {cursorType === 'project' && (
              <Bot className="text-purple w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.8 }} />
            )}
          </div>
        </>
      )}

      <Navbar />
      <Hero />
      <AboutSection />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="container px-4 max-w-5xl mx-auto relative">
          {/* Tech decorative line */}
          <div className="absolute -left-20 top-40 w-16 border-t border-dashed border-purple/30"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-start mb-12 relative">
            <div className="w-full md:w-1/3 cyber-border p-4">
              <h2 className="text-3xl font-display font-bold flex items-center gap-2">
                <CircuitBoard className="text-purple w-6 h-6" />
                Projects
              </h2>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg text-neutral-400">
                A selection of my recent design work — exploring user experiences, interfaces, and interactions.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <ProjectCard 
              title="Creovate – The Ultimate Designer's Companion"
              description="A productivity tool for designers that includes mentorship, a UX chatbot, and community features."
              imageUrl="/lovable-uploads/ec1941da-aa5f-48a8-895c-88792e43021d.png"
              link="https://www.behance.net/gallery/223406927/Creovate-The-Ultimate-Designers-Companion"
              color="purple"
              tools={["Figma", "UX Research", "Visual Design"]}
              index={0}
            />
            
            <ProjectCard 
              title="Medikit – Your Pocket Doctor"
              description="A health-tech app offering emergency assistance, prescriptions, and AI-powered medical help."
              imageUrl="/lovable-uploads/b3e6f1a3-f90a-48cd-ab6e-04f6534109d7.png"
              link="https://www.behance.net/gallery/215281867/Medikit-Your-Pocket-Doctor"
              color="turquoise"
              tools={["UI Design", "Prototyping", "User Testing"]}
              index={1}
            />
            
            <ProjectCard 
              title="E-Learning App"
              description="A student-friendly, personalized e-learning experience with a clean and intuitive interface."
              imageUrl="/lovable-uploads/548b645c-29c9-4604-97ba-ec7dc3115b2d.png"
              link="https://www.behance.net/gallery/213992255/E-Learning-App"
              color="coral"
              tools={["Wireframing", "Visual Design", "UI Components"]}
              index={2}
            />
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
