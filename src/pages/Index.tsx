
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import TechBackground from '@/components/TechBackground';
import ProjectsSection from '@/components/ProjectsSection';
// Removed Boy import

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
        {/* Removed Boy component */}
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
