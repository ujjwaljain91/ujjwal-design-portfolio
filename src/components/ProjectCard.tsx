
import { useState } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  color: 'purple' | 'turquoise' | 'coral' | 'yellow';
  tools: string[];
}

const ProjectCard = ({ title, description, imageUrl, link, color, tools }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getBackgroundColor = () => {
    switch(color) {
      case 'purple': return 'bg-purple';
      case 'turquoise': return 'bg-turquoise';
      case 'coral': return 'bg-coral';
      case 'yellow': return 'bg-yellow';
      default: return 'bg-purple';
    }
  };
  
  const getOverlayColor = () => {
    switch(color) {
      case 'purple': return 'from-purple/95';
      case 'turquoise': return 'from-turquoise/95';
      case 'coral': return 'from-coral/95';
      case 'yellow': return 'from-yellow/95';
      default: return 'from-purple/95';
    }
  };

  return (
    <Card 
      className="project-card h-[380px] lg:h-[450px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div 
          className={`absolute inset-0 bg-gradient-to-t ${getOverlayColor()} to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end`}
        >
          <div className="transform translate-y-4 transition-transform duration-500 ease-out hover:translate-y-0">
            <h3 className="font-display text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/90 mb-4">{description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className={`text-xs px-3 py-1 rounded-full bg-white/20 text-white`}
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-white gap-2 hover:gap-3 transition-all"
            >
              <span>View on Behance</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        
        {/* Colored top border */}
        <div className={`h-1 w-full ${getBackgroundColor()}`}></div>
        
        {/* Project title when not hovered */}
        <div className="absolute bottom-0 left-0 p-6 w-full bg-white transition-opacity duration-300"
             style={{ opacity: isHovered ? 0 : 1 }}>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <ArrowRight size={16} className={`text-${color}`} />
            <span className="text-sm text-muted-foreground">View Project</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
