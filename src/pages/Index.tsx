import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ProgramCard from "@/components/ProgramCard";
import { Program } from "@/types/program";

const Index: React.FC = () => {
  // Dummy data for programs
  const newArrivalsPrograms: Program[] = [
    {
      id: "1",
      title: "Per Sempre Con Diego",
      description: "Un tributo al più grande di tutti i tempi.",
      imageUrl: "/images/premiodiego-low.jpg",
      category: "Documentario",
    },
    {
      id: "2",
      title: "La Storia del Calcio",
      description: "Un viaggio attraverso i momenti iconici del calcio mondiale.",
      imageUrl: "/images/calcio-storia.jpg",
      category: "Documentario",
    },
    {
      id: "3",
      title: "Campioni di Domani",
      description: "Le giovani promesse che stanno per esplodere.",
      imageUrl: "/images/giovani-promesse.jpg",
      category: "Serie TV",
    },
    {
      id: "4",
      title: "Dietro le Quinte",
      description: "Scopri i segreti degli allenamenti e delle partite.",
      imageUrl: "/images/dietro-le-quinte.jpg",
      category: "Documentario",
    },
    {
      id: "5",
      title: "Leggende dello Sport",
      description: "Le vite straordinarie degli atleti che hanno fatto la storia.",
      imageUrl: "/images/leggende-sport.jpg",
      category: "Documentario",
    },
    {
      id: "6",
      title: "Il Calcio Femminile",
      description: "L'ascesa e l'impatto del calcio femminile nel mondo.",
      imageUrl: "/images/calcio-femminile.jpg",
      category: "Documentario",
    },
    {
      id: "7",
      title: "Stadi Iconici",
      description: "Un tour dei templi del calcio mondiale.",
      imageUrl: "/images/stadi-iconici.jpg",
      category: "Documentario",
    },
    {
      id: "8",
      title: "Allenatori Leggendari",
      description: "Le menti tattiche che hanno cambiato il gioco.",
      imageUrl: "/images/allenatori-leggendari.jpg",
      category: "Serie TV",
    },
  ];

  // Create an array of 16 programs for the "Tutti i nostri programmi" section
  const allPrograms: Program[] = [];
  const numExistingPrograms = newArrivalsPrograms.length;
  for (let i = 0; i < 16; i++) {
    allPrograms.push({
      ...newArrivalsPrograms[i % numExistingPrograms],
      id: `all-${i + 1}`, // Ensure unique IDs for duplicated programs
      title: `${newArrivalsPrograms[i % numExistingPrograms].title} ${Math.floor(i / numExistingPrograms) > 0 ? `(${Math.floor(i / numExistingPrograms) + 1})` : ''}` // Make titles slightly different for duplicates
    });
  }


  const newArrivalsRef = useRef<HTMLDivElement>(null);
  const trendingRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = 300; // Adjust as needed
      if (direction === "left") {
        ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-dyad-bg text-dyad-text">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-5xl font-extrabold text-white mb-4 leading-tight">
            Il Calcio, La Tua Passione.
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Scopri documentari esclusivi, interviste e storie inedite dal mondo del calcio.
          </p>
          <Button asChild className="bg-dyad-primary hover:bg-dyad-primary/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300">
            <Link to="/programs">Esplora Ora <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-dyad-text">Nuovi Arrivi</h2>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll(newArrivalsRef, "left")}
              className="rounded-full bg-dyad-card text-dyad-text hover:bg-dyad-card/80"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll(newArrivalsRef, "right")}
              className="rounded-full bg-dyad-card text-dyad-text hover:bg-dyad-card/80"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div ref={newArrivalsRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {newArrivalsPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-dyad-text">Popolari</h2>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll(trendingRef, "left")}
              className="rounded-full bg-dyad-card text-dyad-text hover:bg-dyad-card/80"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll(trendingRef, "right")}
              className="rounded-full bg-dyad-card text-dyad-text hover:bg-dyad-card/80"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div ref={trendingRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {newArrivalsPrograms.map((program) => ( // Using newArrivalsPrograms for trending as well
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>

      {/* Tutti i nostri programmi Section - MODIFIED */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-dyad-text">Tutti i nostri programmi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;