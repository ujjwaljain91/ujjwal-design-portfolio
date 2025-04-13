
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface SkillProps {
  name: string;
}

const SkillTag = ({ name }: SkillProps) => {
  return (
    <div className="px-4 py-2 bg-neutral-100 text-neutral-800 rounded-full font-medium text-sm transition-all duration-300 hover:bg-neutral-200 cursor-default">
      {name}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-display font-bold mb-4">About</h2>
          </div>
          
          <div className="w-full md:w-2/3 space-y-8">
            <div className="flex justify-start mb-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-100">
                <img 
                  src="/lovable-uploads/b86b3540-2fdc-4732-9e1c-6e68b47a7c96.png" 
                  alt="Ujjwal Jain" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <p className="text-lg text-neutral-700">
              Hello! I'm <span className="font-medium">Ujjwal Jain</span>, a creatively driven UI/UX designer 
              from JSS Noida (ECE branch). I'm passionate about crafting intuitive, engaging digital experiences 
              that make technology more human.
            </p>
            
            <p className="text-lg text-neutral-700">
              With strengths in Figma, prototyping, user research, and wireframing, I bring ideas to life through 
              thoughtful design and attention to detail. Currently, I'm seeking internships and junior design roles 
              where I can contribute my skills and continue growing as a designer.
            </p>
            
            <div className="pt-4">
              <h3 className="font-display font-bold text-xl mb-4">Skills</h3>
              
              <div className="flex flex-wrap gap-3">
                <SkillTag name="Figma" />
                <SkillTag name="User Research" />
                <SkillTag name="Prototyping" />
                <SkillTag name="Wireframing" />
                <SkillTag name="UI Design" />
                <SkillTag name="UX Design" />
                <SkillTag name="Visual Design" />
                <SkillTag name="User Testing" />
                <SkillTag name="Interaction Design" />
                <SkillTag name="Design Systems" />
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#" 
                className="group inline-flex items-center gap-2 text-lg font-medium text-purple hover:text-purple/80 transition-colors"
              >
                <span>Download Resume</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
