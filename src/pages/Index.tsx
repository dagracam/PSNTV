import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import React, { useRef } from "react"; // Importa useRef
import useDragScroll from "@/hooks/useDragScroll";
import { programs } from "@/data/programs"; // Import the actual programs data
import { Link } from "react-router-dom"; // Importa Link
import { Program } from "@/types/program"; // Import Program type
import { Button } from "@/components/ui/button"; // Importa Button
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importa le icone

const Index = () => {
  const featuredRef = useDragScroll<HTMLDivElement>();
  const newArrivalsRef = useDragScroll<HTMLDivElement>();

  // Definisci gli ID dei programmi speciali che devono apparire per primi in "In Evidenza"
  const specialProgramIds = ['premio-diego-special', 'premio-per-sempre-original', 'doc-nelle-tue-mani'];

  // Recupera i programmi speciali e assicurati che siano validi
  const specialPrograms = specialProgramIds
    .map(id => programs.find(p => p.id === id))
    .filter(Boolean) as Program[];

  // Recupera tutti gli altri programmi, escludendo quelli speciali
  const otherPrograms = programs.filter(p => !specialProgramIds.includes(p.id));

  // Costruisci la lista dei programmi "In Evidenza": prima i programmi speciali, poi i successivi 7
  // per un totale di 10 programmi in questa sezione.
  const featuredPrograms = [
    ...specialPrograms,
    ...otherPrograms.slice(0, 7)
  ];

  // Identifica gli ID dei programmi già inclusi in "In Evidenza"
  const featuredProgramIds = new Set(featuredPrograms.map(p => p.id));

  // I programmi "Nuovi Arrivi" saranno tutti quelli non inclusi in "In Evidenza"
  const newArrivalsPrograms = programs.filter(p => !featuredProgramIds.has(p.id));

  // Funzione per scorrere la sezione "In Evidenza"
  const scrollFeatured = (direction: 'left' | 'right') => {
    if (featuredRef.current) {
      const scrollAmount = 280; // Larghezza approssimativa di una card + spazio
      if (direction === 'left') {
        featuredRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        featuredRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

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
          <div className="relative flex items-center"> {/* Contenitore per frecce e scroll */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollFeatured('left')}
              className="absolute left-0 z-10 bg-dyad-bg/70 hover:bg-dyad-bg/90 text-dyad-text hover:text-dyad-link-blue rounded-full h-10 w-10 -ml-5 hidden md:flex items-center justify-center shadow-md"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div ref={featuredRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide flex-grow px-5">
              {featuredPrograms.map((program) => (
                <React.Fragment key={program.id}>
                  {program.id === 'premio-diego-special' ? (
                    <Link to="/persemprecondiego" className="group block w-64 flex-shrink-0">
                      <ProgramCard program={program} disableLink={true} />
                    </Link>
                  ) : program.id === 'premio-per-sempre-original' ? (
                    <Link to="/persempre-scugnizzo" className="group block w-64 flex-shrink-0">
                      <ProgramCard program={program} disableLink={true} />
                    </Link>
                  ) : program.id === 'doc-nelle-tue-mani' ? (
                    <Link to="/daysofwar" className="group block w-64 flex-shrink-0">
                      <ProgramCard program={program} disableLink={true} />
                    </Link>
                  ) : (
                    <ProgramCard program={program} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollFeatured('right')}
              className="absolute right-0 z-10 bg-dyad-bg/70 hover:bg-dyad-bg/90 text-dyad-text hover:text-dyad-link-blue rounded-full h-10 w-10 -mr-5 hidden md:flex items-center justify-center shadow-md"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
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
      </div>
    </Layout>
  );
};

export default Index;