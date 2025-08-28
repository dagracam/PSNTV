import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from "lucide-react";

// Componente per una singola scheda di programma
interface ProgramCardProps {
  program: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    isLive: boolean;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => (
  <Card className="w-[300px] flex-shrink-0 bg-dyad-card text-dyad-text border-dyad-border shadow-lg">
    <div className="relative">
      <img src={program.imageUrl} alt={program.title} className="w-full h-40 object-cover rounded-t-lg" />
      {program.isLive && (
        <Badge variant="destructive" className="absolute top-2 left-2 bg-red-600 text-white">LIVE</Badge>
      )}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-t-lg">
        <PlayCircle className="h-12 w-12 text-white" />
      </div>
    </div>
    <CardHeader>
      <CardTitle className="text-lg font-semibold">{program.title}</CardTitle>
      <Badge variant="secondary" className="self-start">{program.category}</Badge>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-dyad-text/80 line-clamp-2">{program.description}</p>
      <Button className="mt-4 w-full bg-dyad-primary text-dyad-primary-foreground hover:bg-dyad-primary/90">
        Guarda Ora
      </Button>
    </CardContent>
  </Card>
);

// Genera un array di 25 programmi fittizi
const generateDummyPrograms = (count: number) => {
  const programs = [];
  for (let i = 1; i <= count; i++) {
    programs.push({
      id: `program-${i}`,
      title: `Programma ${i}`,
      description: `Questa è una descrizione dettagliata per il Programma ${i}. Parla di argomenti interessanti e attuali.`,
      imageUrl: `https://picsum.photos/seed/${i}/300/200`, // Immagini diverse per ogni scheda
      category: i % 3 === 0 ? "Notizie" : i % 3 === 1 ? "Sport" : "Cultura",
      isLive: i % 5 === 0, // Alcuni saranno live
    });
  }
  return programs;
};

const dummyPrograms = generateDummyPrograms(25); // Genera 25 programmi

const IndexPage: React.FC = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold text-center mb-4 text-dyad-text">Benvenuto su PSN</h1>
        <p className="text-xl text-center text-dyad-text/80 max-w-2xl mx-auto">
          La tua fonte di informazione e intrattenimento. Scopri i nostri programmi in diretta e on-demand.
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <Button className="bg-dyad-primary text-dyad-primary-foreground hover:bg-dyad-primary/90 px-6 py-3 text-lg">
            Esplora i Programmi
          </Button>
          <Button variant="outline" className="border-dyad-border text-dyad-text hover:bg-dyad-muted px-6 py-3 text-lg">
            Registrati
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-dyad-text">In Evidenza</h2>
        <div ref={featuredRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {dummyPrograms.map((program) => ( // Ora mappa tutti i 25 programmi
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>

      {/* Altre sezioni della pagina possono essere aggiunte qui */}
    </div>
  );
};

export default IndexPage;