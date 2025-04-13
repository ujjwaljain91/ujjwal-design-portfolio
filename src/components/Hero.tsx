
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Star, Triangle, Circle, Square } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle parallax effect
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={heroRef}
      onMouseMove={handleMouseMove} 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-purple-50 bg-hero-pattern"
    >
      {/* Floating Shapes */}
      <div 
        className="absolute animate-float opacity-20"
        style={{ 
          left: '10%', 
          top: '20%',
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
        }}
      >
        <Star size={48} className="text-yellow" />
      </div>
      <div 
        className="absolute animate-spin-slow opacity-20"
        style={{ 
          right: '15%', 
          top: '15%',
          transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
        }}
      >
        <Triangle size={64} className="text-turquoise" />
      </div>
      <div 
        className="absolute animate-bounce-gentle opacity-20"
        style={{ 
          left: '15%', 
          bottom: '20%',
          transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`
        }}
      >
        <Circle size={56} className="text-coral" />
      </div>
      <div 
        className="absolute animate-float opacity-20"
        style={{ 
          right: '12%', 
          bottom: '25%',
          transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)` 
        }}
      >
        <Square size={42} className="text-purple" />
      </div>

      {/* Hero Content */}
      <div className="container text-center z-10 px-4 animate-fade-up">
        <div className="mb-4 inline-block bg-coral/20 text-coral px-4 py-2 rounded-full font-medium">
          UI/UX Designer
        </div>
        
        <h1 className="hero-heading text-4xl md:text-6xl lg:text-7xl mb-6">
          Designing the Future, <br />
          <span className="text-purple">One Pixel at a Time</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Passionate about creating human-centered, delightful experiences 
          that push the boundaries of design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-purple hover:bg-purple/90 text-white text-lg py-6 px-8">
            See My Work
          </Button>
          <Button variant="outline" className="border-purple text-purple hover:bg-purple/5 text-lg py-6 px-8">
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-muted-foreground hover:text-purple transition-colors"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ChevronDown size={20} />
      </a>
    </div>
  );
};

export default Hero;
