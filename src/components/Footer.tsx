
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="font-display text-xl font-bold">
              <span className="text-purple">Ujjwal</span>
              <span>Jain</span>
            </a>
            <p className="text-muted-foreground mt-2">
              Designing the future, one pixel at a time
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-12">
            <div>
              <h4 className="font-semibold mb-2">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-purple transition-colors">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-purple transition-colors">About</a></li>
                <li><a href="#projects" className="text-muted-foreground hover:text-purple transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-purple transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-colors">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-colors">LinkedIn</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-colors">Behance</a></li>
                <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with 
            <Heart className="text-coral mx-1" size={16} fill="#FF6B6B" />
            by Ujjwal Jain &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
