
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

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
  
  return (
    <div 
      className={`w-full ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-32`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer" 
        className="block group"
      >
        <div className="aspect-[16/9] w-full overflow-hidden mb-6 rounded-lg">
          <img 
            src={imageUrl} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-purple transition-colors">
              {title}
            </h3>
            <p className="text-neutral-600 mb-4 max-w-xl">{description}</p>
            
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index}
                  className="text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div className={`mt-2 transform transition-transform duration-300 ${isHovered ? 'translate-x-0 translate-y-0 opacity-100' : 'translate-x-2 -translate-y-2 opacity-0'}`}>
            <ArrowUpRight className="text-purple w-5 h-5" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
