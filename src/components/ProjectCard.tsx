
import { useState, useEffect } from 'react';
import { ArrowUpRight, Bot, CircuitBoard } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  color: 'purple' | 'turquoise' | 'coral' | 'yellow';
  tools: string[];
  index: number;
}

const ProjectCard = ({ title, description, imageUrl, link, tools, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));
    
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <div 
      className={`w-full project-card ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-32 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer" 
        className="block group relative"
      >
        <div className="aspect-[16/9] w-full overflow-hidden mb-6 rounded-lg relative cyber-border">
          {/* Scanner effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-purple/20 to-transparent z-10 opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-100 animate-scanner' : ''}`}></div>
          
          <div className="w-full h-full">
            <img 
              src={imageUrl} 
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              style={{
                objectPosition: 'center'
              }}
            />
          </div>
          
          {/* Tech overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Top-right corner tech element */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 border-l border-t border-purple/50 rounded-tl-[80px] transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
          </div>
          
          {/* Bottom-left tech icon */}
          <div className={`absolute bottom-4 left-4 transform ${isHovered ? 'scale-100' : 'scale-0'} transition-all duration-500`}>
            <CircuitBoard className="text-purple w-6 h-6" />
          </div>
          
          {/* Scanning line for tech effect */}
          <div className={`absolute inset-0 overflow-hidden opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-300`}>
            <div className="h-full w-1 bg-gradient-to-b from-transparent via-purple-light to-transparent absolute left-0 top-0 animate-scan-x"></div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-purple-light to-transparent absolute left-0 top-0 animate-scan-y"></div>
          </div>
        </div>
        
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-purple transition-colors flex items-center gap-2">
              {title}
              <Bot className={`w-5 h-5 text-purple-light transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
            </h3>
            <p className="text-neutral-600 mb-4 max-w-xl">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, idx) => (
                <span 
                  key={idx}
                  className={`text-xs px-3 py-1 rounded-sm bg-neutral-100 text-neutral-600 transition-all duration-300 relative overflow-hidden ${isHovered ? 'bg-purple/5 text-purple' : ''}`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  {tool}
                  <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-purple/30 transition-all duration-500 ${isHovered ? 'w-full' : ''}`} style={{ transitionDelay: `${idx * 50 + 100}ms` }}></span>
                </span>
              ))}
            </div>
          </div>
          
          <div className={`mt-2 transform transition-transform duration-300 ${isHovered ? 'translate-x-0 translate-y-0 opacity-100 rotate-0' : 'translate-x-2 -translate-y-2 opacity-0 rotate-45'}`}>
            <div className="cyber-border rounded-full p-2 tech-pulse">
              <ArrowUpRight className="text-purple w-5 h-5" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
