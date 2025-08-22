import Layout from "@/components/Layout";
import ProgramCard from "@/components/ProgramCard";
import React from "react";

const dummyPrograms = [
  { id: '1', title: 'Amici Pelosi', imageUrl: 'https://via.placeholder.com/300x180/213058/d9d9d9?text=Amici+Pelosi', description: 'Le avventure dei nostri amici a quattro zampe.' },
  { id: '2', title: 'Notizie del Giorno', imageUrl: 'https://via.placeholder.com/300x180/213058/d9d9d9?text=Notizie+del+Giorno', description: 'Tutti gli aggiornamenti in tempo reale.' },
  { id: '3', title: 'Cucina Italiana', imageUrl: 'https://via.placeholder.com/300x180/213058/d9d9d9?text=Cucina+Italiana', description: 'Ricette tradizionali e moderne.' },
  { id: '4', title: 'Documentari Natura', imageUrl: 'https://via.placeholder.com/300x180/213058/d9d9d9?text=Documentari+Natura', description: 'Esplora la bellezza del mondo animale.' },
  { id: '5', title: 'Serie TV Drammatiche', imageUrl: 'https://via.placeholder.com/300x180/213058/d9d9d9?text=Serie+TV+Drammatiche', description: 'Storie avvincenti e personaggi complessi.' },
  { id: '6', title: 'Commedie Italiane', imageUrl: 'https://via.placeholder.com/300x180/213058/d9d9d9?text=Commedie+Italiane', description: 'Per una serata all\'insegna del buon umore.' },
  { id: '7', title: 'Sport Live', imageUrl: 'https://via.placeholder.com/300x180/213058/d9d9d9?text=Sport+Live', description: 'Le migliori partite e gli eventi sportivi.' },
  { id: '8', title: 'Musica e Concerti', imageUrl: 'https://via.placeholder.com/300x180/213058/d9d9d9?text=Musica+e+Concerti', description: 'Esibizioni dal vivo e speciali musicali.' },
];

const Index = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">In Evidenza</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {dummyPrograms.slice(0, 4).map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Nuovi Arrivi</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {dummyPrograms.slice(4, 8).map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Consigliati per Te</h2>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {dummyPrograms.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;