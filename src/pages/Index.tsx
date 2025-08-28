import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProgramCard from "@/components/ProgramCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dati dummy per i programmi
const dummyPrograms = [
  {
    id: "1",
    title: "Amici Pelosi",
    description: "Un programma dedicato ai nostri amici a quattro zampe, con consigli, storie e adozioni.",
    imageUrl: "/placeholder-program-1.jpg",
    category: "Animali",
    progress: 75,
    status: "In Corso",
  },
  {
    id: "2",
    title: "Cucina con Stile",
    description: "Ricette innovative e tecniche culinarie per trasformare ogni pasto in un'esperienza gourmet.",
    imageUrl: "/placeholder-program-2.jpg",
    category: "Cucina",
    progress: 50,
    status: "Nuovo",
  },
  {
    id: "3",
    title: "Viaggi Esotici",
    description: "Esplora destinazioni mozzafiato e culture lontane con i nostri reportage di viaggio.",
    imageUrl: "/placeholder-program-3.jpg",
    category: "Viaggi",
    progress: 90,
    status: "Completato",
  },
  {
    id: "4",
    title: "Fitness & Benessere",
    description: "Mantieniti in forma con esercizi, diete equilibrate e consigli per una vita sana.",
    imageUrl: "/placeholder-program-4.jpg",
    category: "Salute",
    progress: 60,
    status: "In Corso",
  },
  {
    id: "5",
    title: "Tecnologia Futura",
    description: "Le ultime novità dal mondo della tecnologia, gadget e innovazioni che cambieranno il domani.",
    imageUrl: "/placeholder-program-5.jpg",
    category: "Tecnologia",
    progress: 40,
    status: "Nuovo",
  },
  {
    id: "6",
    title: "Arte e Cultura",
    description: "Un viaggio attraverso l'arte, la storia e le tradizioni culturali di tutto il mondo.",
    imageUrl: "/placeholder-program-6.jpg",
    category: "Cultura",
    progress: 80,
    status: "In Corso",
  },
  {
    id: "7",
    title: "Giardinaggio Creativo",
    description: "Trasforma il tuo spazio verde con idee originali e consigli per un pollice verde.",
    imageUrl: "/placeholder-program-7.jpg",
    category: "Hobby",
    progress: 70,
    status: "In Corso",
  },
  {
    id: "8",
    title: "Misteri Svelati",
    description: "Indagini su fenomeni inspiegabili, leggende e segreti nascosti della storia.",
    imageUrl: "/placeholder-program-8.jpg",
    category: "Mistero",
    progress: 25,
    status: "Nuovo",
  },
];

const Index: React.FC = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-8">
      {/* Rimosso: Hero Section */}

      {/* Sezione In Evidenza */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-dyad-text">In Evidenza</h2>
        <div ref={featuredRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {dummyPrograms.slice(0, 4).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>

      {/* Sezione Categorie */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-dyad-text">Esplora Categorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Card className="bg-dyad-card hover:bg-dyad-card/80 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-dyad-text">Animali</CardTitle>
            </CardHeader>
            <CardContent className="text-dyad-text/70">Storie e consigli per i tuoi amici.</CardContent>
          </Card>
          <Card className="bg-dyad-card hover:bg-dyad-card/80 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-dyad-text">Cucina</CardTitle>
            </CardHeader>
            <CardContent className="text-dyad-text/70">Ricette e segreti culinari.</CardContent>
          </Card>
          <Card className="bg-dyad-card hover:bg-dyad-card/80 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-dyad-text">Viaggi</CardTitle>
            </CardHeader>
            <CardContent className="text-dyad-text/70">Avventure in giro per il mondo.</CardContent>
          </Card>
          <Card className="bg-dyad-card hover:bg-dyad-card/80 transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-dyad-text">Salute</CardTitle>
            </CardHeader>
            <CardContent className="text-dyad-text/70">Benessere e fitness.</CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;