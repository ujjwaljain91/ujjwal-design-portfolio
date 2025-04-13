
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold">
          <span className="text-purple">Ujjwal</span>
          <span>Jain</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Button className="bg-purple hover:bg-purple/90 text-white">Resume</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed top-0 right-0 h-full w-full bg-white z-40 transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <a href="#about" className="nav-link text-xl" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" className="nav-link text-xl" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="nav-link text-xl" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <Button 
              className="bg-purple hover:bg-purple/90 text-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
