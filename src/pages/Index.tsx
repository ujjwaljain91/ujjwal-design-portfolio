
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import TechBackground from '@/components/TechBackground';
import ProjectsSection from '@/components/ProjectsSection';
import Robot from '@/components/Robot';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Tech background elements */}
      <TechBackground />

      {/* Custom robotic cursor */}
      <CustomCursor />

      <Navbar />
      <div className="relative">
        <Hero />
        {/* Robot placed in Hero section with absolute positioning */}
        <Robot />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
