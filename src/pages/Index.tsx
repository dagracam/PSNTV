import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import React from "react";
import useDragScroll from "@/hooks/useDragScroll";
import { programs } from "@/data/programs"; // Import the actual programs data

const Index = () => {
  const featuredRef = useDragScroll<HTMLDivElement>();
  const newArrivalsRef = useDragScroll<HTMLDivElement>();
  const recommendedRef = useDragScroll<HTMLDivElement>();

  // Using the actual programs data for display
  // For demonstration, let's slice the programs array for different sections
  const featuredPrograms = programs.slice(0, 4);
  const newArrivalsPrograms = programs.slice(4, 8); // Adjust slice as needed
  const recommendedPrograms = programs; // Display all for recommended

  return (
    <Layout>
      <div className="space-y-10">
        {/* Player iframe */}
        <div className="w-full max-w-4xl mx-auto aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://rst2.saiuzwebnetwork.it:2020/VideoPlayer/persemprenews?autoplay=1&mute=1"
            title="Live Player"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            scrolling="no"
          ></iframe>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">In Evidenza</h2>
          <div ref={featuredRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Nuovi Arrivi</h2>
          <div ref={newArrivalsRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {newArrivalsPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Consigliati per Te</h2>
          <div ref={recommendedRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {recommendedPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;