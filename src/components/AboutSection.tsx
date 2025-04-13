
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Lightbulb, Sparkles } from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: SkillProps) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-purple to-coral h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
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
              <Button className="bg-purple hover:bg-purple/90 text-white">
                Download Resume
              </Button>
              <Button variant="outline" className="border-purple text-purple hover:bg-purple/5">
                My Process
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Design Philosophy</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <Card className="p-4 hover:shadow-md transition-all bg-gradient-to-br from-purple-50 to-white border-purple/20">
                <Heart className="text-coral mb-2" size={28} />
                <h4 className="font-semibold text-lg">Empathy</h4>
                <p className="text-muted-foreground">Understanding user needs and pain points</p>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all bg-gradient-to-br from-yellow-50 to-white border-yellow/20">
                <Lightbulb className="text-yellow mb-2" size={28} />
                <h4 className="font-semibold text-lg">Experimentation</h4>
                <p className="text-muted-foreground">Exploring new ideas and approaches</p>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all bg-gradient-to-br from-turquoise-50 to-white border-turquoise/20">
                <Sparkles className="text-turquoise mb-2" size={28} />
                <h4 className="font-semibold text-lg">Innovation</h4>
                <p className="text-muted-foreground">Pushing boundaries with creative solutions</p>
              </Card>
            </div>
            
            <h3 className="font-display font-bold text-xl mb-6">Skills</h3>
            <div>
              <SkillBar name="Figma" level={95} />
              <SkillBar name="User Research" level={85} />
              <SkillBar name="Prototyping" level={90} />
              <SkillBar name="Wireframing" level={88} />
              <SkillBar name="UI Design" level={92} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
