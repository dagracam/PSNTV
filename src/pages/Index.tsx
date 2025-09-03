import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProgramCard from "@/components/ProgramCard";
import { Program } from '../types/program'; // Import the Program type

const Index: React.FC = () => {
  // Dati di esempio per i programmi
  const newArrivalsPrograms: Program[] = [
    {
      id: "1",
      title: "Per Sempre Con Diego",
      description: "Un viaggio emozionante nella vita e nella carriera del leggendario Diego Armando Maradona.",
      imageUrl: "/images/premiodiego-low.jpg",
      category: "Documentario",
      rating: 4.9,
      year: 2023,
      duration: "1h 45m",
      director: "Paolo Rossi",
      cast: ["Diego Maradona", "Interviste esclusive"],
      trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      fullVideoUrl: "/videos/maradona_full.mp4",
    },
    {
      id: "2",
      title: "Le Cronache di Aethelgard",
      description: "Un'epica avventura fantasy in un mondo di magia e mistero.",
      imageUrl: "https://via.placeholder.com/300x168/FF5733/ffffff?text=Aethelgard",
      category: "Fantasy",
      rating: 4.7,
      year: 2022,
      duration: "2h 10m",
      director: "Elena Bianchi",
      cast: ["Marco Gialli", "Sofia Neri"],
      trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      fullVideoUrl: "/videos/aethelgard_full.mp4",
    },
    {
      id: "3",
      title: "Il Mistero di Villa Scarlatta",
      description: "Un thriller avvincente che ti terrà col fiato sospeso fino all'ultima scena.",
      imageUrl: "https://via.placeholder.com/300x168/33FF57/ffffff?text=Villa+Scarlatta",
      category: "Thriller",
      rating: 4.5,
      year: 2023,
      duration: "1h 55m",
      director: "Luca Verdi",
      cast: ["Giulia Rossi", "Andrea Bruno"],
      trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      fullVideoUrl: "/videos/villa_scarlatta_full.mp4",
    },
    {
      id: "4",
      title: "Oltre l'Orizzonte",
      description: "Un dramma toccante sulla ricerca della speranza e del perdono.",
      imageUrl: "https://via.placeholder.com/300x168/3357FF/ffffff?text=Orizzonte",
      category: "Drammatico",
      rating: 4.8,
      year: 2021,
      duration: "2h 05m",
      director: "Sara Neri",
      cast: ["Roberto Bianchi", "Laura Gialli"],
      trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      fullVideoUrl: "/videos/orizzonte_full.mp4",
    },
    {
      id: "5",
      title: "La Città Silente",
      description: "Un film di fantascienza che esplora un futuro distopico.",
      imageUrl: "https://via.placeholder.com/300x168/FF33A1/ffffff?text=Citta+Silente",
      category: "Fantascienza",
      rating: 4.6,
      year: 2024,
      duration: "1h 50m",
      director: "Davide Rossi",
      cast: ["Martina Verdi", "Alessandro Neri"],
      trailerUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      fullVideoUrl: "/videos/citta_silente_full.mp4",
    },
  ];

  const newArrivalsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-cover bg-center rounded-lg overflow-hidden mb-12" style={{ backgroundImage: "url('https://via.placeholder.com/1200x500/000000/ffffff?text=Hero+Image')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-dyad-bg/90 to-transparent flex items-end p-8">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Titolo del Programma in Evidenza</h1>
            <p className="text-lg mb-6">
              Breve descrizione accattivante del programma in evidenza. Invita gli utenti a scoprire di più.
            </p>
            <Button size="lg" className="bg-dyad-primary hover:bg-dyad-primary/90 text-dyad-text-foreground">
              Guarda Ora
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-dyad-text">Tutti i nostri programmi</h2>
        <div className="relative">
          <div ref={newArrivalsRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {newArrivalsPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
          <button
            onClick={() => scrollLeft(newArrivalsRef)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-dyad-bg/70 hover:bg-dyad-bg rounded-full p-2 shadow-lg z-10"
            aria-label="Scroll left"
          >
            &lt;
          </button>
          <button
            onClick={() => scrollRight(newArrivalsRef)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-dyad-bg/70 hover:bg-dyad-bg rounded-full p-2 shadow-lg z-10"
            aria-label="Scroll right"
          >
            &gt;
          </button>
        </div>
      </section>

      {/* Categories Section (Example) */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6 text-dyad-text">Esplora per Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link to="/category/documentary" className="block p-6 bg-dyad-card rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center text-dyad-text font-semibold">
            Documentari
          </Link>
          <Link to="/category/fantasy" className="block p-6 bg-dyad-card rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center text-dyad-text font-semibold">
            Fantasy
          </Link>
          <Link to="/category/thriller" className="block p-6 bg-dyad-card rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center text-dyad-text font-semibold">
            Thriller
          </Link>
          <Link to="/category/drama" className="block p-6 bg-dyad-card rounded-lg shadow hover:shadow-md transition-shadow duration-200 text-center text-dyad-text font-semibold">
            Drammatico
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;