import Layout from "@/components/Layout";
import React from "react";
import { programs } from "@/data/programs";
import { useParams } from "react-router-dom";

const InSicurezza: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Non usato direttamente, ma utile per coerenza
  const program = programs.find((p) => p.id === 'in-sicurezza');

  if (!program) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-10">
          <h1 className="text-4xl font-bold text-dyad-text mb-4">Programma non trovato</h1>
          <p className="text-lg text-dyad-text/80">Siamo spiacenti, il programma "In Sicurezza" non esiste.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 py-8">
        <h1 className="text-4xl font-bold text-dyad-text">{program.title}</h1>
        <p className="text-lg text-dyad-text/80">
          L'unico programma dedicato alla sicurezza sul lavoro, con consigli e approfondimenti con esperti del settore.
        </p>

        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl">
          <iframe
            width="100%"
            height="100%"
            src={program.videoUrl}
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

export default InSicurezza;