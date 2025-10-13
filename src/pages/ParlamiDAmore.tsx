import Layout from "@/components/Layout";
import React from "react";
import { programs } from "@/data/programs";

const ParlamiDAmore: React.FC = () => {
  const program = programs.find((p) => p.id === 'parlami-d-amore');

  if (!program) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto text-center py-10">
          <h1 className="text-4xl font-bold text-dyad-text mb-4">Programma non trovato</h1>
          <p className="text-lg text-dyad-text/80">Siamo spiacenti, il programma "Parlami d'amore" non esiste.</p>
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
      </div>
    </Layout>
  );
};

export default ParlamiDAmore;