import { MouseEvent, useEffect, useRef, useState } from 'react';
import { ArrowRight, CircuitBoard, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const [techLines, setTechLines] = useState<{ top: number; left: number; angle: number; delay: number }[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Generate random tech lines for the background
    const generateTechLines = () => {
      const lines = [];
      for (let i = 0; i < 8; i++) {
        lines.push({
          top: Math.random() * 100,
          left: Math.random() * 100,
          angle: Math.random() * 360,
          delay: Math.random() * 3
        });
      }
      setTechLines(lines);
    };

    generateTechLines();
    
    // Set loaded state with a delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-black"
    >
      {/* Background tech lines */}
      {techLines.map((line, index) => (
        <div 
          key={index} 
          className="tech-line absolute" 
          style={{ 
            top: `${line.top}%`, 
            left: `${line.left}%`, 
            transform: `rotate(${line.angle}deg)`,
            animationDelay: `${line.delay}s`
          }}
        />
      ))}
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />

      <div className="container px-4 max-w-5xl mx-auto relative z-10">
        <div 
          className={`flex flex-col items-start transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="mb-6 relative cyber-border inline-block bg-black bg-opacity-80 text-purple px-6 py-2 rounded-sm">
            <span className="font-mono text-sm tracking-wider flex items-center">
              <Zap className="w-4 h-4 mr-2 tech-pulse" /> UI/UX DESIGNER
              <span className="scanner-line"></span>
            </span>
          </div>
          
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight mb-6 max-w-4xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ 
              transform: `perspective(1000px) rotateX(${mousePosition.y * -2}deg) rotateY(${mousePosition.x * 2}deg)`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            Hello, I'm Ujjwal. <span className="text-purple relative">
              UI/UX designer
              <span className="absolute -right-4 -top-4">
                <CircuitBoard className="w-6 h-6 text-purple-light animate-pulse" />
              </span>
            </span> focused on creating digital experiences.
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-neutral-400 mb-8 max-w-2xl transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            I'm passionate about designing meaningful, human-centered interfaces 
            that bridge the gap between people and technology.
          </p>
          
          <a 
            href="#projects" 
            className={`group cyber-border inline-flex items-center gap-2 text-lg font-medium text-purple hover:text-purple-light hover:bg-purple/5 px-6 py-3 transition-all duration-300 relative transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span>See my work</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-purple/50 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>

      {/* Futuristic gradient blurs */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-purple/5 rounded-full blur-[100px] opacity-70 pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vh] bg-turquoise/5 rounded-full blur-[80px] opacity-50 pointer-events-none animate-floating"></div>
    </div>
  );
};

export default Hero;
