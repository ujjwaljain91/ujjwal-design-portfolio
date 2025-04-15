
import React from 'react';
import { Brain, Palette, UsersRound, CircuitBoard } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';

const BeyondScreenSection = () => {
  const explorations = [
    {
      title: "Created NFTs",
      description: "Designed and launched experimental NFT art pieces, exploring the intersection of tech, digital art, and ownership.",
      icon: <Palette className="w-6 h-6 text-purple" />
    },
    {
      title: "Attended Design Samvaad",
      description: "A design dialogue and knowledge-sharing event that brought together creatives, educators, and thinkers across domains.",
      icon: <UsersRound className="w-6 h-6 text-purple" />
    },
    {
      title: "Build With AI – Roadshow",
      description: "Participated in a generative AI-focused roadshow that combined hands-on tech, product ideation, and future-focused design discussions.",
      icon: <Brain className="w-6 h-6 text-purple" />
    }
  ];

  return (
    <section id="beyond-screen" className="py-20 bg-black/40 backdrop-blur-xl">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
          <div className="w-full md:w-1/3 cyber-border p-4">
            <h2 className="text-3xl font-display font-bold flex items-center gap-2">
              <CircuitBoard className="text-purple w-6 h-6" />
              Beyond the Screen
            </h2>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="text-lg text-neutral-400">
              Design doesn't stop at the screen for me — I love exploring creative spaces, communities, and experiences that inspire my work beyond pixels and prototypes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {explorations.map((item, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="relative overflow-hidden group cursor-pointer bg-black/60 border-purple/20 hover:border-purple/40 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      {item.icon}
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-purple transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Tech decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 border-l border-t border-purple/50 rounded-tl-[80px] transform translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-black/90 border border-purple/20">
                <div className="text-neutral-300 text-sm text-center">
                  No additional images available.
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondScreenSection;
