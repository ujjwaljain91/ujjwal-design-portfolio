
import { FormEvent, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, CircuitBoard, Cpu } from 'lucide-react';

const ContactSection = () => {
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
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black text-white relative overflow-hidden">
      {/* Enhanced tech background with more visible elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Tech circuit lines */}
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple/30 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-turquoise/30 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-purple/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-turquoise/20 to-transparent"></div>
      </div>
      
      {/* Enhanced tech dots with better visibility */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={i}
          className="absolute bg-purple/40 rounded-full" 
          style={{
            width: `${Math.random() * 10 + 3}px`,
            height: `${Math.random() * 10 + 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)',
            animation: `pulse-slow ${Math.random() * 5 + 3}s infinite`,
            zIndex: 1
          }}
        />
      ))}
      
      {/* Decorative tech elements */}
      <div className="absolute left-0 top-40 w-32 border-t-2 border-dashed border-purple/40"></div>
      <div className="absolute right-0 bottom-40 w-32 border-t-2 border-dashed border-turquoise/40"></div>
      <div className="absolute right-10 top-10 w-20 h-20 border-2 border-purple/30 rounded-full opacity-30"></div>
      <div className="absolute left-10 bottom-10 w-16 h-16 border-2 border-turquoise/30 rounded-full opacity-30"></div>
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-start mb-12">
          <div className="w-full md:w-1/3 cyber-border p-6 bg-black/60 backdrop-blur-lg border-purple/30 shadow-[0_0_15px_rgba(147,51,234,0.2)]">
            <h2 className="text-3xl font-display font-bold flex items-center gap-2 mb-0">
              <CircuitBoard className="text-purple w-6 h-6" />
              Get In Touch
              <span className="w-2 h-6 bg-purple-light/80 ml-2 animate-pulse"></span>
            </h2>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-xl text-white/90 leading-relaxed backdrop-blur-sm p-4 rounded-lg bg-black/30">
              I'm currently available for freelance work, internships and junior design roles. If you have a project that needs help, let's connect.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div className="bg-black/60 backdrop-blur-lg p-8 rounded-lg border border-purple/30 shadow-[0_0_20px_rgba(147,51,234,0.15)]">
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              I'm currently available for freelance work, internships and junior design roles. If you have a project that you want to get started, think you need my help with something or just want to say hi, feel free to reach out.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="p-4 rounded-full bg-purple/30 group-hover:bg-purple/40 transition-all shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                  <Mail className="text-purple-light" size={26} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">Email</h4>
                  <a href="mailto:ujjwaljain.creates@gmail.com" className="text-white/80 hover:text-purple-light transition-colors">
                    ujjwaljain.creates@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="p-4 rounded-full bg-coral/30 group-hover:bg-coral/40 transition-all shadow-[0_0_10px_rgba(255,124,104,0.3)]">
                  <Phone className="text-coral" size={26} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">Phone</h4>
                  <a href="tel:+919389864804" className="text-white/80 hover:text-coral transition-colors">
                    +91 9389864804
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="p-4 rounded-full bg-turquoise/30 group-hover:bg-turquoise/40 transition-all shadow-[0_0_10px_rgba(45,212,191,0.3)]">
                  <MapPin className="text-turquoise" size={26} />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg mb-1">Location</h4>
                  <p className="text-white/80">
                    JSS Noida, Delhi NCR, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-black/80 rounded-xl border border-purple/20 shadow-[0_0_15px_rgba(147,51,234,0.1)] cyber-border">
              <h3 className="font-display font-semibold text-xl mb-4 text-white flex items-center gap-2">
                <Cpu className="text-purple-light w-5 h-5" />
                Let's Connect
              </h3>
              <p className="text-white/80 mb-6">
                Follow me on social media to see my latest work and updates.
              </p>
              <div className="flex gap-4">
                {/* Social media buttons with enhanced futuristic hover effects */}
                <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-purple/40 bg-black/60 hover:bg-purple/20 hover:border-purple hover:shadow-[0_0_10px_rgba(147,51,234,0.4)] text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </Button>
                <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-purple/40 bg-black/60 hover:bg-purple/20 hover:border-purple hover:shadow-[0_0_10px_rgba(147,51,234,0.4)] text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </Button>
                <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-purple/40 bg-black/60 hover:bg-purple/20 hover:border-purple hover:shadow-[0_0_10px_rgba(147,51,234,0.4)] text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
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
            </div>
          </div>
          
          <div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
