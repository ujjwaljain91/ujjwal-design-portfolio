
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Handle subtle mouse movement effect
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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-white"
    >
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="mb-6 inline-block bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full font-medium text-sm">
            UI/UX Designer
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight mb-6 max-w-4xl">
            Hello, I'm Ujjwal. <span className="text-purple">UI/UX designer</span> focused on creating digital experiences.
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl">
            I'm passionate about designing meaningful, human-centered interfaces 
            that bridge the gap between people and technology.
          </p>
          
          <a href="#projects" className="group inline-flex items-center gap-2 text-lg font-medium text-purple hover:text-purple/80 transition-colors">
            <span>See my work</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Subtle gradient blur in bg */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-turquoise/5 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
