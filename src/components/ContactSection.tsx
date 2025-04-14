
import React from 'react';
import BackgroundEffects from './contact/BackgroundEffects';
import SectionHeader from './contact/SectionHeader';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <BackgroundEffects />
      
      <div className="container px-4 relative z-10">
        {/* Section header */}
        <SectionHeader 
          title="Get In Touch" 
          description="I'm currently available for freelance work, internships and junior design roles. If you have a project that needs help, let's connect."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Contact information and social links */}
          <ContactInfo />
          
          {/* Contact form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
