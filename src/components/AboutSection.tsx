
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SkillProps {
  name: string;
}

const SkillTag = ({ name }: SkillProps) => {
  return (
    <div className="px-4 py-2 bg-purple/10 text-purple rounded-full font-medium text-sm transition-all duration-300 hover:bg-purple/20 hover:scale-105 cursor-default">
      {name}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div className="space-y-6">
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-yellow shadow-lg transition-transform duration-300 hover:scale-105">
                <img 
                  src="/lovable-uploads/b86b3540-2fdc-4732-9e1c-6e68b47a7c96.png" 
                  alt="Ujjwal Jain" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <p className="text-lg">
              Hello! I'm <span className="text-purple font-semibold">Ujjwal Jain</span>, a creatively driven UI/UX designer 
              from JSS Noida (ECE branch). I'm passionate about crafting intuitive, engaging digital experiences 
              that make technology more human.
            </p>
            
            <p className="text-lg">
              With strengths in Figma, prototyping, user research, and wireframing, I bring ideas to life through 
              thoughtful design and attention to detail. Currently, I'm seeking internships and junior design roles 
              where I can contribute my skills and continue growing as a designer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-purple hover:bg-purple/90 text-white transition-all duration-300 hover:scale-105">
                Download Resume
              </Button>
              <Button variant="outline" className="border-purple text-purple hover:bg-purple/5 transition-all duration-300 hover:scale-105">
                My Process
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Skills</h3>
            
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
