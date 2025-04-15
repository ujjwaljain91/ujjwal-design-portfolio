
import { CircuitBoard } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container px-4 max-w-5xl mx-auto relative">
        {/* Tech decorative line */}
        <div className="absolute -left-20 top-40 w-16 border-t border-dashed border-purple/30"></div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start mb-12 relative">
          <div className="w-full md:w-1/3 cyber-border p-4">
            <h2 className="text-3xl font-display font-bold flex items-center gap-2">
              <CircuitBoard className="text-purple w-6 h-6" />
              Projects
            </h2>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-lg text-neutral-400">
              A selection of my recent design work — exploring user experiences, interfaces, and interactions.
            </p>
          </div>
        </div>
        
        <div className="mt-12 space-y-16"> {/* Added consistent vertical spacing */}
          <ProjectCard 
            title="Creovate – The Ultimate Designer's Companion"
            description="A comprehensive design platform offering endless creative possibilities for designers and creative professionals."
            imageUrl="/lovable-uploads/157365a6-6efd-4832-baa8-f9fa1b4f9c31.png"
            link="https://www.behance.net/gallery/223406927/Creovate-The-Ultimate-Designers-Companion"
            color="purple"
            tools={["UX Research", "UI Design", "Design Tools"]}
            index={0}
          />
          
          <ProjectCard 
            title="Medikit – Comprehensive Healthcare Platform"
            description="An innovative healthcare platform designed to streamline medical services, patient care, and health monitoring."
            imageUrl="/lovable-uploads/2b4a89f4-5699-4922-9c9b-2591a96d266f.png"
            link="https://www.behance.net/gallery/215281867/Medikit-Your-Pocket-Doctor"
            color="turquoise"
            tools={["Healthcare UX", "Product Design", "Interaction Design"]}
            index={1}
          />
          
          <ProjectCard 
            title="Upskillio – Smart Learning for Engineers"
            description="An educational platform designed for engineers with interactive learning modules and career guidance."
            imageUrl="/lovable-uploads/1e673243-c83f-4f30-8eeb-9b18e65a40c4.png"
            link="https://www.behance.net/gallery/213992255/E-Learning-App"
            color="coral"
            tools={["Wireframing", "Visual Design", "UI Components"]}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
