import Layout from "@/components/Layout";
import React from "react";
import { programs } from "@/data/programs";

const FlashNews: React.FC = () => {
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

        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl">
          <iframe
            width="100%"
            height="415"
            src="https://web.psntv.eu/embed-playlist/persemprenews/FlashNews"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default FlashNews;