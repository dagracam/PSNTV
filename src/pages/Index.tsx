import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProgramCard from "../components/ProgramCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

const dummyPrograms = [
  {
    id: "1",
    title: "Days of War",
    image: "/days-of-war.png",
    category: "Azione",
    description: "Un intenso sparatutto in prima persona ambientato durante la Seconda Guerra Mondiale.",
  },
  {
    id: "2",
    title: "Cyberpunk City",
    image: "/cyberpunk-city.png",
    category: "RPG",
    description: "Esplora una metropoli futuristica piena di pericoli e opportunità.",
  },
  {
    id: "3",
    title: "Fantasy Realms",
    image: "/fantasy-realms.png",
    category: "Strategia",
    description: "Costruisci il tuo impero e guida le tue armate alla vittoria in un mondo fantasy.",
  },
  {
    id: "4",
    title: "Space Odyssey",
    image: "/space-odyssey.png",
    category: "Avventura",
    description: "Un'epica avventura spaziale alla scoperta di nuovi mondi e civiltà.",
  },
  {
    id: "5",
    title: "Ancient Mysteries",
    image: "/ancient-mysteries.png",
    category: "Puzzle",
    description: "Risolvi enigmi ancestrali e scopri segreti dimenticati.",
  },
  {
    id: "6",
    title: "Racing Fever",
    image: "/racing-fever.png",
    category: "Sport",
    description: "Gareggia in emozionanti corse automobilistiche ad alta velocità.",
  },
];

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-10">
        {/* Sezione di ricerca */}
        <section className="relative">
          <Input
            type="text"
            placeholder="Cerca programmi, giochi, eventi..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-dyad-card border-dyad-border focus:ring-2 focus:ring-dyad-primary"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dyad-text/60" />
        </section>

        {/* Sezione In Evidenza */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">In Evidenza</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory touch-pan-x">
            {dummyPrograms.slice(0, 4).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>

        {/* Sezione Nuovi Arrivi */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Nuovi Arrivi</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide snap-x snap-mandatory touch-pan-x">
            {dummyPrograms.slice(4, 6).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>

        {/* Sezione Categorie Popolari */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Categorie Popolari</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* Dummy Categories */}
            <Link to="/category/azione" className="bg-dyad-card p-4 rounded-lg flex items-center justify-center text-lg font-semibold hover:bg-dyad-card/80 transition-colors">
              Azione
            </Link>
            <Link to="/category/rpg" className="bg-dyad-card p-4 rounded-lg flex items-center justify-center text-lg font-semibold hover:bg-dyad-card/80 transition-colors">
              RPG
            </Link>
            <Link to="/category/strategia" className="bg-dyad-card p-4 rounded-lg flex items-center justify-center text-lg font-semibold hover:bg-dyad-card/80 transition-colors">
              Strategia
            </Link>
            <Link to="/category/avventura" className="bg-dyad-card p-4 rounded-lg flex items-center justify-center text-lg font-semibold hover:bg-dyad-card/80 transition-colors">
              Avventura
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;