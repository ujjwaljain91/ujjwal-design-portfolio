import React from 'react';
import { Mail, Phone, MapPin, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  bgColor: string;
}

const ContactItem = ({ icon, title, content, bgColor }: ContactItemProps) => {
  return (
    <div className="flex items-center gap-5 group">
      <div className={`p-4 rounded-full ${bgColor} transition-all`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white text-lg mb-1">{title}</h4>
        {content}
      </div>
    </div>
  );
};

const SocialButtons = () => {
  return (
    <div className="flex gap-4">
      {/* Social media buttons with enhanced futuristic hover effects */}
      <Button 
        variant="outline" 
        className="rounded-full w-12 h-12 p-0 border-purple/40 bg-black/60 hover:bg-purple/20 hover:border-purple hover:shadow-[0_0_10px_rgba(147,51,234,0.4)] text-white transition-all duration-300"
        onClick={() => window.open('https://www.linkedin.com/in/ujjwalux', '_blank', 'noopener,noreferrer')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </svg>
      </Button>
      <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-purple/40 bg-black/60 hover:bg-purple/20 hover:border-purple hover:shadow-[0_0_10px_rgba(147,51,234,0.4)] text-white transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
        </svg>
      </Button>
      <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-purple/40 bg-black/60 hover:bg-purple/20 hover:border-purple hover:shadow-[0_0_10px_rgba(147,51,234,0.4)] text-white transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      </Button>
      <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-purple/40 bg-black/60 hover:bg-purple/20 hover:border-purple hover:shadow-[0_0_10px_rgba(147,51,234,0.4)] text-white transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg>
      </Button>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="bg-black/60 backdrop-blur-lg p-8 rounded-lg border border-purple/30 shadow-[0_0_20px_rgba(147,51,234,0.15)]">
      <p className="text-lg mb-8 text-white/90 leading-relaxed">
        I'm currently available for freelance work, internships and junior design roles. If you have a project that you want to get started, think you need my help with something or just want to say hi, feel free to reach out.
      </p>
      
      <div className="space-y-8">
        <ContactItem 
          icon={<Mail className="text-purple-light" size={26} />}
          title="Email"
          content={
            <a href="mailto:ujjwaljain.creates@gmail.com" className="text-white/80 hover:text-purple-light transition-colors">
              ujjwaljain.creates@gmail.com
            </a>
          }
          bgColor="bg-purple/30 group-hover:bg-purple/40 shadow-[0_0_10px_rgba(147,51,234,0.3)]"
        />
        
        <ContactItem 
          icon={<Phone className="text-coral" size={26} />}
          title="Phone"
          content={
            <a href="tel:+919389864804" className="text-white/80 hover:text-coral transition-colors">
              +91 9389864804
            </a>
          }
          bgColor="bg-coral/30 group-hover:bg-coral/40 shadow-[0_0_10px_rgba(255,124,104,0.3)]"
        />
        
        <ContactItem 
          icon={<MapPin className="text-turquoise" size={26} />}
          title="Location"
          content={
            <p className="text-white/80">
              JSS Noida, Delhi NCR, India
            </p>
          }
          bgColor="bg-turquoise/30 group-hover:bg-turquoise/40 shadow-[0_0_10px_rgba(45,212,191,0.3)]"
        />
      </div>
      
      <div className="mt-12 p-8 bg-black/80 rounded-xl border border-purple/20 shadow-[0_0_15px_rgba(147,51,234,0.1)] cyber-border">
        <h3 className="font-display font-semibold text-xl mb-4 text-white flex items-center gap-2">
          <Cpu className="text-purple-light w-5 h-5" />
          Let's Connect
        </h3>
        <p className="text-white/80 mb-6">
          Follow me on social media to see my latest work and updates.
        </p>
        <SocialButtons />
      </div>
    </div>
  );
};

export default ContactInfo;
