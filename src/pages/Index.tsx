
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import TechBackground from '@/components/TechBackground';
import ProjectsSection from '@/components/ProjectsSection';
import BeyondScreenSection from '@/components/BeyondScreenSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <TechBackground />
      <CustomCursor />
      <Navbar />
      <div className="relative">
        <Hero />
      </div>
      <AboutSection />
      <ProjectsSection />
      <BeyondScreenSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
