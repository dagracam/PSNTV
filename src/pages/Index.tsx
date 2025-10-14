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
  const newArrivalsRef = useDragScroll<HTMLDivElement>(); // Questo ref non è più usato per lo scroll dei "nuovi arrivi" ma lo lascio per coerenza se volessi riutilizzarlo

  // Definisci gli ID dei programmi speciali che devono apparire per primi in "In Evidenza"
  const specialProgramIds = ['premio-diego-special', 'premio-per-sempre-original', 'daysofwar', 'psn-sport-club', 'tutto-rugby', 'urban-talk', 'schole', 'amici-pelosi', 'parlamidamore', 'la-salute-in-un-click', 'la-vita-questo-palcoscenico', 'in-sicurezza'];

  // Recupera i programmi speciali e assicurati che siano validi
  const specialPrograms = specialProgramIds
    .map(id => programs.find(p => p.id === id))
    .filter(Boolean) as Program[];

  // I programmi "In Evidenza" saranno ora solo i programmi speciali esplicitamente definiti.
  const featuredPrograms = specialPrograms;

  // Identifica gli ID dei programmi già inclusi in "In Evidenza"
  const featuredProgramIds = new Set(featuredPrograms.map(p => p.id));

  // Trova i programmi specifici per la sezione "Tutti i nostri programmi"
  const amiciPelosiProgram = programs.find(p => p.id === 'amici-pelosi');
  const flashNewsProgram = programs.find(p => p.id === 'flash-news');
  const inSicurezzaProgram = programs.find(p => p.id === 'in-sicurezza');
  const ilMondoInTascaProgram = programs.find(p => p.id === 'il-mondo-in-tasca');
  const daysOfWarProgram = programs.find(p => p.id === 'daysofwar');
  const inThePaintProgram = programs.find(p => p.id === 'in-the-paint');
  const frescoDiStampaProgram = programs.find(p => p.id === 'fresco-di-stampa');
  const laSaluteInUnClickProgram = programs.find(p => p.id === 'la-salute-in-un-click');
  const intervistaloTuProgram = programs.find(p => p.id === 'intervistalo-tu');
  const laVitaQuestoPalcoscenicoProgram = programs.find(p => p.id === 'la-vita-questo-palcoscenico');
  const libridineProgram = programs.find(p => p.id === 'libridine');
  const palazzoCivicoProgram = programs.find(p => p.id === 'palazzo-civico');
  const parlamiDAmoreProgram = programs.find(p => p.id === 'parlamidamore');
  const perSempreChefProgram = programs.find(p => p.id === 'per-sempre-chef');
  const premioDiegoSpecialProgram = programs.find(p => p.id === 'premio-diego-special');
  const premioPerSempreOriginalProgram = programs.find(p => p.id === 'premio-per-sempre-original'); // Trova Premio per Sempre Scugnizzo

  // Inizializza la lista per "Tutti i nostri programmi"
  let allOurPrograms: Program[] = [];
  const addedProgramIds = new Set<string>(); // Per tenere traccia dei programmi già aggiunti

  // Aggiungi Amici Pelosi per primo, se esiste
  if (amiciPelosiProgram) {
    allOurPrograms.push(amiciPelosiProgram);
    addedProgramIds.add(amiciPelosiProgram.id);
  }

  // Aggiungi Flash News subito dopo, se esiste e non è già nella lista
  if (flashNewsProgram && !addedProgramIds.has(flashNewsProgram.id)) {
    allOurPrograms.push(flashNewsProgram);
    addedProgramIds.add(flashNewsProgram.id);
  }

  // Aggiungi In Sicurezza subito dopo, se esiste e non è già nella lista
  if (inSicurezzaProgram && !addedProgramIds.has(inSicurezzaProgram.id)) {
    allOurPrograms.push(inSicurezzaProgram);
    addedProgramIds.add(inSicurezzaProgram.id);
  }

  // Aggiungi Il mondo in Tasca subito dopo, se esiste e non è già nella lista
  if (ilMondoInTascaProgram && !addedProgramIds.has(ilMondoInTascaProgram.id)) {
    allOurPrograms.push(ilMondoInTascaProgram);
    addedProgramIds.add(ilMondoInTascaProgram.id);
  }

  // Aggiungi Days of War subito dopo Il mondo in Tasca, se esiste e non è già nella lista
  if (daysOfWarProgram && !addedProgramIds.has(daysOfWarProgram.id)) {
    allOurPrograms.push(daysOfWarProgram);
    addedProgramIds.add(daysOfWarProgram.id);
  }

  // Aggiungi In the Paint subito dopo Days of War, se esiste e non è già nella lista
  if (inThePaintProgram && !addedProgramIds.has(inThePaintProgram.id)) {
    allOurPrograms.push(inThePaintProgram);
    addedProgramIds.add(inThePaintProgram.id);
  }

  // Aggiungi Fresco di Stampa dopo In the Paint, se esiste e non è già nella lista
  if (frescoDiStampaProgram && !addedProgramIds.has(frescoDiStampaProgram.id)) {
    allOurPrograms.push(frescoDiStampaProgram);
    addedProgramIds.add(frescoDiStampaProgram.id);
  }

  // Aggiungi La Salute in un Click dopo Fresco di Stampa, se esiste e non è già nella lista
  if (laSaluteInUnClickProgram && !addedProgramIds.has(laSaluteInUnClickProgram.id)) {
    allOurPrograms.push(laSaluteInUnClickProgram);
    addedProgramIds.add(laSaluteInUnClickProgram.id);
  }

  // Aggiungi Intervistalo Tu dopo La Salute in un Click, se esiste e non è già nella lista
  if (intervistaloTuProgram && !addedProgramIds.has(intervistaloTuProgram.id)) {
    allOurPrograms.push(intervistaloTuProgram);
    addedProgramIds.add(intervistaloTuProgram.id);
  }

  // Aggiungi La Vita questo Palcoscenico dopo Intervistalo Tu, se esiste e non è già nella lista
  if (laVitaQuestoPalcoscenicoProgram && !addedProgramIds.has(laVitaQuestoPalcoscenicoProgram.id)) {
    allOurPrograms.push(laVitaQuestoPalcoscenicoProgram);
    addedProgramIds.add(laVitaQuestoPalcoscenicoProgram.id);
  }

  // Aggiungi Libridine dopo La Vita questo Palcoscenico, se esiste e non è già nella lista
  if (libridineProgram && !addedProgramIds.has(libridineProgram.id)) {
    allOurPrograms.push(libridineProgram);
    addedProgramIds.add(libridineProgram.id);
  }

  // Aggiungi Palazzo Civico dopo Libridine, se esiste e non è già nella lista
  if (palazzoCivicoProgram && !addedProgramIds.has(palazzoCivicoProgram.id)) {
    allOurPrograms.push(palazzoCivicoProgram);
    addedProgramIds.add(palazzoCivicoProgram.id);
  }

  // Aggiungi Parlami d'amore dopo Palazzo Civico, se esiste e non è già nella lista
  if (parlamiDAmoreProgram && !addedProgramIds.has(parlamiDAmoreProgram.id)) {
    allOurPrograms.push(parlamiDAmoreProgram);
    addedProgramIds.add(parlamiDAmoreProgram.id);
  }

  // Aggiungi Per Sempre Chef dopo Parlami d'amore, se esiste e non è già nella lista
  if (perSempreChefProgram && !addedProgramIds.has(perSempreChefProgram.id)) {
    allOurPrograms.push(perSempreChefProgram);
    addedProgramIds.add(perSempreChefProgram.id);
  }

  // Aggiungi Premio per Sempre con Diego dopo Per Sempre Chef, se esiste e non è già nella lista
  if (premioDiegoSpecialProgram && !addedProgramIds.has(premioDiegoSpecialProgram.id)) {
    allOurPrograms.push(premioDiegoSpecialProgram);
    addedProgramIds.add(premioDiegoSpecialProgram.id);
  }

  // Aggiungi Premio per Sempre Scugnizzo dopo Premio per Sempre con Diego, se esiste e non è già nella lista
  if (premioPerSempreOriginalProgram && !addedProgramIds.has(premioPerSempreOriginalProgram.id)) {
    allOurPrograms.push(premioPerSempreOriginalProgram);
    addedProgramIds.add(premioPerSempreOriginalProgram.id);
  }

  // Aggiungi tutti gli altri programmi che NON sono in "In Evidenza" e NON sono già stati aggiunti esplicitamente
  const otherNonFeaturedPrograms = programs.filter(p => 
    !featuredProgramIds.has(p.id) && !addedProgramIds.has(p.id)
  );

  allOurPrograms = [...allOurPrograms, ...otherNonFeaturedPrograms];


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
                  ) : program.id === 'daysofwar' ? (
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
                  ) : program.id === 'urban-talk' ? (
                    <Link to="/urbantalk" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'schole' ? (
                    <Link to="/schole" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'amici-pelosi' ? (
                    <Link to="/amicipelosi" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'parlamidamore' ? (
                    <Link to="/parlamidamore" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'la-salute-in-un-click' ? (
                    <Link to="/lasaluteinunclick" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'la-vita-questo-palcoscenico' ? (
                    <Link to="/lavitaquestopalcoscenico" className="group block flex-shrink-0 w-48">
                      <ProgramCard program={program} disableLink={true} cardWidthClass="w-48" />
                    </Link>
                  ) : program.id === 'in-sicurezza' ? (
                    <Link to="/insicurezza" className="group block flex-shrink-0 w-48">
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

        
        {/* Nuova sezione "Tutti i nostri programmi" */}
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