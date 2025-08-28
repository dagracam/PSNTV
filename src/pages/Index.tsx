import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProgramCard from "@/components/ProgramCard";
// Rimosso: import ArticleCard from "@/components/ArticleCard";
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

// Rimosso: Dati dummy per gli articoli
// const dummyArticles = [
//   {
//     id: "a1",
//     title: "Il Futuro dell'Intelligenza Artificiale",
//     description: "Un'analisi approfondita su come l'IA sta plasmando il nostro mondo.",
//     imageUrl: "/placeholder-article-1.jpg",
//     date: "15 Maggio 2024",
//     author: "Redazione PSN",
//   },
//   {
//     id: "a2",
//     title: "Dieci Destinazioni da Sogno per il 2025",
//     description: "Scopri i luoghi imperdibili per la tua prossima avventura.",
//     imageUrl: "/placeholder-article-2.jpg",
//     date: "10 Maggio 2024",
//     author: "Viaggiatore Curioso",
//   },
//   {
//     id: "a3",
//     title: "Benefici del Yoga per la Mente e il Corpo",
//     description: "Come la pratica dello yoga può migliorare la tua vita quotidiana.",
//     imageUrl: "/placeholder-article-3.jpg",
//     date: "08 Maggio 2024",
//     author: "Esperto di Benessere",
//   },
// ];

const Index: React.FC = () => {
  const featuredRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center rounded-lg overflow-hidden mb-12" style={{ backgroundImage: "url('/hero-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">Benvenuto su PSN</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">La tua fonte di informazione e intrattenimento. Esplora i nostri programmi e articoli esclusivi.</p>
            <div className="flex justify-center">
              <Input
                type="text"
                placeholder="Cerca programmi o articoli..."
                className="w-full max-w-md bg-white/90 text-dyad-text border-none focus:ring-2 focus:ring-dyad-primary-text"
              />
              <Button className="ml-2 bg-dyad-accent hover:bg-dyad-accent/90 text-white">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione In Evidenza */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-dyad-text">In Evidenza</h2>
        <div ref={featuredRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
          {dummyPrograms.slice(0, 4).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>

      {/* Rimosso: Sezione Ultimi Articoli */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-dyad-text">Ultimi Articoli</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section> */}

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