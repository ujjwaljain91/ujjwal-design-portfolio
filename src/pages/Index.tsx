
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectCard from '@/components/ProjectCard';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouch();
    
    if (isTouch) return;

    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setCursorVisible(true);
    const handleMouseLeave = () => setCursorVisible(false);

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Setup event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => setIsHovering(true));
      element.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', () => setIsHovering(true));
        element.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, [isTouch]);

  return (
    <div className="min-h-screen bg-white">
      {/* Custom cursor (only on non-touch devices) */}
      {!isTouch && cursorVisible && (
        <>
          <div 
            className="custom-cursor hidden md:block"
            style={{ 
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
              opacity: isHovering ? 0.4 : 0.2,
            }}
          ></div>
          <div 
            className="cursor-dot hidden md:block"
            style={{ 
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          ></div>
        </>
      )}

      <Navbar />
      <Hero />
      <AboutSection />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-display font-bold">Projects</h2>
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-lg text-neutral-700">
                A selection of my recent design work — exploring user experiences, interfaces, and interactions.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <ProjectCard 
              title="Creovate – The Ultimate Designer's Companion"
              description="A productivity tool for designers that includes mentorship, a UX chatbot, and community features."
              imageUrl="/lovable-uploads/ec1941da-aa5f-48a8-895c-88792e43021d.png"
              link="https://www.behance.net/gallery/223406927/Creovate-The-Ultimate-Designers-Companion"
              color="purple"
              tools={["Figma", "UX Research", "Visual Design"]}
              index={0}
            />
            
            <ProjectCard 
              title="Medikit – Your Pocket Doctor"
              description="A health-tech app offering emergency assistance, prescriptions, and AI-powered medical help."
              imageUrl="/lovable-uploads/b3e6f1a3-f90a-48cd-ab6e-04f6534109d7.png"
              link="https://www.behance.net/gallery/215281867/Medikit-Your-Pocket-Doctor"
              color="turquoise"
              tools={["UI Design", "Prototyping", "User Testing"]}
              index={1}
            />
            
            <ProjectCard 
              title="E-Learning App"
              description="A student-friendly, personalized e-learning experience with a clean and intuitive interface."
              imageUrl="/lovable-uploads/548b645c-29c9-4604-97ba-ec7dc3115b2d.png"
              link="https://www.behance.net/gallery/213992255/E-Learning-App"
              color="coral"
              tools={["Wireframing", "Visual Design", "UI Components"]}
              index={2}
            />
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
