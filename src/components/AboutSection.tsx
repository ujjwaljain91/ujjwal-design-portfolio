import { useState, useEffect } from 'react';
import { ArrowRight, Bot, Cpu, Database, Layers } from 'lucide-react';

interface SkillProps {
  name: string;
  icon?: React.ReactNode;
}

const SkillTag = ({ name, icon }: SkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="px-4 py-2 bg-neutral-900 text-neutral-300 rounded-sm font-medium text-sm transition-all duration-300 hover:bg-purple/10 hover:text-purple cursor-default flex items-center gap-2 relative cyber-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      {name}
      <span className={`absolute bottom-0 left-0 h-[1px] w-0 bg-purple/50 transition-all duration-300 ${isHovered ? 'w-full' : ''}`}></span>
    </div>
  );
};

const AboutSection = () => {
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
    
    const aboutSection = document.querySelector('#about');
    if (aboutSection) observer.observe(aboutSection);
    
    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);
  
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-display font-bold mb-4 flex items-center gap-2">
              <Bot className="text-purple w-6 h-6" />
              About
            </h2>
          </div>
          
          <div className="w-full md:w-2/3 space-y-8">
            <div className="flex justify-start mb-8">
              <div className={`relative w-32 h-32 rounded-full overflow-hidden border-2 border-purple/20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-purple/20 to-transparent"></div>
                <img 
                  src="/lovable-uploads/b86b3540-2fdc-4732-9e1c-6e68b47a7c96.png" 
                  alt="Ujjwal Jain" 
                  className="w-full h-full object-cover"
                />
                
                {/* Technical overlay elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-purple/50"></div>
                  <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-purple/50"></div>
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-purple/50"></div>
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-purple/50"></div>
                </div>
                
                {/* Scanner line effect */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-purple/20 to-transparent animate-data-stream"></div>
                </div>
              </div>
            </div>
            
            <p className={`text-lg text-neutral-300 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Hello! I'm <span className="font-medium text-purple">Ujjwal Jain</span>, a creatively driven UI/UX designer 
              from JSS Noida (ECE branch). I'm passionate about crafting intuitive, engaging digital experiences 
              that make technology more human.
            </p>
            
            <p className={`text-lg text-neutral-300 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              With strengths in Figma, prototyping, user research, and wireframing, I bring ideas to life through 
              thoughtful design and attention to detail. Currently, I'm seeking internships and junior design roles 
              where I can contribute my skills and continue growing as a designer.
            </p>
            
            <div className={`pt-4 transition-all duration-1000 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-2">
                <Cpu className="text-purple w-5 h-5" />
                Skills
              </h3>
              
              <div className="flex flex-wrap gap-3">
                <SkillTag name="Figma" icon={<Layers className="w-3 h-3 text-purple" />} />
                <SkillTag name="User Research" icon={<Database className="w-3 h-3 text-purple" />} />
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
            
            <div className={`pt-4 transition-all duration-1000 delay-800 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a 
                href="https://drive.google.com/drive/folders/1C1QLAj4ZAT6l24WQJpxDFn1ifZW_88KT?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-lg font-medium text-purple hover:text-purple-light transition-colors cyber-border px-6 py-3"
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
