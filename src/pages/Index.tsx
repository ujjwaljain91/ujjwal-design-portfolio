
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

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouch]);

  return (
    <div className="min-h-screen">
      {/* Custom cursor (only on non-touch devices) */}
      {!isTouch && cursorVisible && (
        <div 
          className="custom-cursor hidden md:block"
          style={{ 
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        ></div>
      )}

      <Navbar />
      <Hero />
      <AboutSection />
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <ProjectCard 
              title="Creovate – The Ultimate Designer's Companion"
              description="A productivity tool for designers that includes mentorship, a UX chatbot, and community features."
              imageUrl="/lovable-uploads/ec1941da-aa5f-48a8-895c-88792e43021d.png"
              link="https://www.behance.net/gallery/223406927/Creovate-The-Ultimate-Designers-Companion"
              color="purple"
              tools={["Figma", "UX Research", "Visual Design"]}
            />
            
            <ProjectCard 
              title="Medikit – Your Pocket Doctor"
              description="A health-tech app offering emergency assistance, prescriptions, and AI-powered medical help."
              imageUrl="/lovable-uploads/b3e6f1a3-f90a-48cd-ab6e-04f6534109d7.png"
              link="https://www.behance.net/gallery/215281867/Medikit-Your-Pocket-Doctor"
              color="turquoise"
              tools={["UI Design", "Prototyping", "User Testing"]}
            />
            
            <ProjectCard 
              title="E-Learning App"
              description="A student-friendly, personalized e-learning experience with a clean and intuitive interface."
              imageUrl="/lovable-uploads/548b645c-29c9-4604-97ba-ec7dc3115b2d.png"
              link="https://www.behance.net/gallery/213992255/E-Learning-App"
              color="coral"
              tools={["Wireframing", "Visual Design", "UI Components"]}
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
