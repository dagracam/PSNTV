import Layout from "@/components/Layout";
import React from "react";
import { programs } from "@/data/programs";
import { useParams } from "react-router-dom";

const FlashNews: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const program = programs.find((p) => p.id === 'flash-news');

  if (!program) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-10">
          <h1 className="text-4xl font-bold text-dyad-text mb-4">Programma non trovato</h1>
          <p className="text-lg text-dyad-text/80">Siamo spiacenti, il programma "Flash News" non esiste.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-8">
        <h1 className="text-4xl font-bold text-dyad-text">{program.title}</h1>
        <p className="text-lg text-dyad-text/80">
          {program.description}
        </p>

        {/* L'iframe è stato rimosso come richiesto */}
        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
        <iframe
            width="100%"
            height="545"
            src={'https://web.psntv.eu/embed-playlist/persemprenews/LaVitaquestoPalcoscenico'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
          <p className="text-dyad-text/70 text-xl">Contenuto video non disponibile.</p>
        </div>
      </div>
    </Layout>
  );
};

export default FlashNews;