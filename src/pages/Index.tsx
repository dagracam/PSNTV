import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import React from "react";

const dummyPrograms = [
  { id: '1', title: 'Amici Pelosi', image: '/placeholder.svg', description: 'Le avventure dei nostri amici a quattro zampe.', category: 'Animazione' },
  { id: '2', title: 'Notizie del Giorno', image: '/placeholder.svg', description: 'Tutti gli aggiornamenti in tempo reale.', category: 'Notizie' },
  { id: '3', title: 'Cucina Italiana', image: '/placeholder.svg', description: 'Ricette tradizionali e moderne.', category: 'Cucina' },
  { id: '4', title: 'Documentari Natura', image: '/placeholder.svg', description: 'Esplora la bellezza del mondo animale.', category: 'Documentari' },
  { id: '5', title: 'Serie TV Drammatiche', image: '/placeholder.svg', description: 'Storie avvincenti e personaggi complessi.', category: 'Serie TV' },
  { id: '6', title: 'Commedie Italiane', image: '/placeholder.svg', description: 'Per una serata all\'insegna del buon umore.', category: 'Commedia' },
  { id: '7', title: 'Sport Live', image: '/placeholder.svg', description: 'Le migliori partite e gli eventi sportivi.', category: 'Sport' },
  { id: '8', title: 'Musica e Concerti', image: '/placeholder.svg', description: 'Esibizioni dal vivo e speciali musicali.', category: 'Musica' },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">In Evidenza</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {dummyPrograms.slice(0, 4).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Nuovi Arrivi</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {dummyPrograms.slice(4, 8).map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Consigliati per Te</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {dummyPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;