import Layout from "@/components/Layout";
import React from "react";
import { useParams } from "react-router-dom";

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In un'applicazione reale, qui faresti un fetch dei dati del programma usando l'ID
  const program = {
    id: id,
    title: `Programma ${id}: Amici Pelosi`, // Esempio di titolo dinamico
    description: "Questa è la descrizione dettagliata del programma Amici Pelosi. Qui puoi trovare tutti gli episodi e le informazioni relative a questa serie affascinante sui nostri amici a quattro zampe.",
    // Altri dettagli del programma
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-dyad-text">{program.title}</h1>
        <p className="text-lg text-dyad-text/80">{program.description}</p>

        <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://web.psntv.eu/embed-playlist/persemprenews/amicipelosi"
            title="Playlist Amici Pelosi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </div>

        {/* Qui potresti aggiungere altre sezioni come episodi correlati, cast, ecc. */}
        <section>
          <h2 className="text-2xl font-bold text-dyad-text mb-4">Altri Contenuti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dyad-bg border border-dyad-text/20 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dyad-text">Episodio 1</h3>
              <p className="text-dyad-text/70">Un'introduzione ai protagonisti.</p>
            </div>
            <div className="bg-dyad-bg border border-dyad-text/20 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-dyad-text">Dietro le Quinte</h3>
              <p className="text-dyad-text/70">Scopri come è stato realizzato il programma.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProgramDetail;