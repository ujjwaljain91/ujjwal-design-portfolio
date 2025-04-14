
import React from 'react';
import { CircuitBoard } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
      <div className="w-full md:w-1/3 cyber-border p-6 bg-black/60 backdrop-blur-lg border-purple/30 shadow-[0_0_15px_rgba(147,51,234,0.2)]">
        <h2 className="text-3xl font-display font-bold flex items-center gap-2 mb-0">
          <CircuitBoard className="text-purple w-6 h-6" />
          {title}
          <span className="w-2 h-6 bg-purple-light/80 ml-2 animate-pulse"></span>
        </h2>
      </div>
      
      <div className="w-full md:w-2/3">
        <p className="text-xl text-white/90 leading-relaxed backdrop-blur-sm p-4 rounded-lg bg-black/30">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
