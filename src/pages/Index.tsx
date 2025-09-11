import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import React, { useRef } from "react";
import useDragScroll from "@/hooks/useDragScroll";
import { programs } from "@/data/programs";
import { Link } from "react-router-dom";
import { Program } from "@/types/program";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const featuredRef = useDragScroll<HTMLDivElement>();
  const newArrivalsRef = useDragScroll<HTMLDivElement>();

  // Definisci gli ID dei programmi speciali che devono apparire per primi in "In Evidenza"
  const specialProgramIds = ['premio-diego-special', 'premio-per-sempre-original', 'doc-nelle-tue-mani', 'psn-sport-club', 'tutto-rugby', 'urban-talk']; // Added 'urban-talk'

  // Recupera i programmi speciali e assicurati che siano validi
  const specialPrograms = specialProgramIds
    .map(id => programs.find(p => p.id === id))
    .filter(Boolean) as Program[];

  // Recupera tutti gli altri programmi, escludendo quelli speciali
  const otherPrograms = programs.filter(p => !specialProgramIds.includes(p.id));

  // Costruisci la lista dei programmi "In Evidenza": prima i programmi speciali, poi i successivi 8
  // per un totale di 12 programmi in questa sezione (6 speciali + 6 altri).
  const featuredPrograms = [
    ...specialPrograms,
    ...otherPrograms.slice(0, 6) 
  ];

  // Identifica gli ID dei programmi già inclusi in "In Evidenza"
  const featuredProgramIds = new Set(featuredPrograms.map(p => p.id));

  // I programmi "Tutti i nostri programmi" saranno tutti quelli non inclusi in "In Evidenza"
  const allOurPrograms = programs.filter(p => !featuredProgramIds.has(p.id));

  // Funzione per scorrere la sezione "In Evidenza"
  const scrollFeatured = (direction: 'left' | 'right') => {
    if (featuredRef.current) {
      // Calcola la larghezza di una card (w-48 = 192px) più lo spazio (space-x-6 = 24px)
      const cardWidthWithSpacing = 192 + 24; 
      const scrollAmount = cardWidthWithSpacing * 6; // Scorre di 6 schede alla volta

      if (direction === 'left') {
        featuredRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        featuredRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Funzione per scorrere la sezione "Tutti i nostri programmi"
  const scrollNewArrivals = (direction: 'left' | 'right') => {
    if (newArrivalsRef.current) {
      const cardWidthWithSpacing = 256 + 24; // Queste schede rimangono w-64
      const scrollAmount = cardWidthWithSpacing * 5; // Scorre di 5 schede alla volta
      if (direction === 'left') {
        newArrivalsRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        newArrivalsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
            className="w-full h-full border-none"
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
              className="absolute left-0 z-10 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 hover:text-dyad-link-blue rounded-full h-14 w-14 -ml-7 hidden md:flex items-center justify-center shadow-xl transition-all duration-200 border border-white/20"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <div ref={featuredRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide flex-grow px-5">
              {featuredPrograms.map((program) => (
                <React.Fragment key={program.id}>
                  {program.id === 'premio-diego-special' ? (
                    <Link to="/persemprecondiego" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'premio-per-sempre-original' ? (
                    <Link to="/persempre-scugnizzo" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'doc-nelle-tue-mani' ? (
                    <Link to="/daysofwar" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'psn-sport-club' ? (
                    <Link to="/psnsportclub" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'tutto-rugby' ? (
                    <Link to="/tuttorugby" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'urban-talk' ? ( // New conditional for Urban Talk
                    <Link to="/urbantalk" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : (
                    <ProgramCard program={program} cardWidthClass="w-48" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollFeatured('right')}
              className="absolute right-0 z-10 bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 hover:text-dyad-link-blue rounded-full h-14 w-14 -mr-7 hidden md:flex items-center justify-center shadow-xl transition-all duration-200 border border-white/20"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </section>

        
        {/* Nuova sezione "Altro" - Ora una griglia fissa */}
        <section>
           <h2 className="text-3xl font-bold mb-6 text-dyad-text">Tutti i nostri programmi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allOurPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} isGridItem={true} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;