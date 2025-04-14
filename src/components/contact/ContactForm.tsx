
import React, { FormEvent, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send the form data to a backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-black/60 backdrop-blur-lg p-8 rounded-xl border border-purple/30 shadow-[0_0_20px_rgba(147,51,234,0.15)] cyber-border">
      <h3 className="font-display font-semibold text-xl mb-6 text-white flex items-center gap-2">
        <Send className="text-purple-light w-5 h-5" />
        Send Me a Message
        <span className="w-2 h-6 bg-purple-light/80 ml-2 animate-pulse"></span>
      </h3>
      
      <div className="space-y-5">
        <div>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-black/70 border-purple/40 text-white placeholder:text-white/60 focus-visible:ring-purple h-12"
            required
          />
        </div>
        
        <div>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-black/70 border-purple/40 text-white placeholder:text-white/60 focus-visible:ring-purple h-12"
            required
          />
        </div>
        
        <div>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="bg-black/70 border-purple/40 text-white placeholder:text-white/60 focus-visible:ring-purple h-12"
            required
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="min-h-[180px] bg-black/70 border-purple/40 text-white placeholder:text-white/60 focus-visible:ring-purple"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="bg-purple hover:bg-purple/90 text-white w-full group relative overflow-hidden h-12"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Send size={18} />
            Send Message
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple/0 via-purple-light/40 to-purple/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
