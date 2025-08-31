import Layout from "@/components/Layout";
import React, { useRef } from "react";
import { programs } from "@/data/programs";
import ProgramCard from "@/components/ProgramCard";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  const featuredPrograms = programs.filter((program) => program.isFeatured);
  const mostViewedPrograms = programs.filter((program) => program.mostViewed);

  const featuredRef = useRef<HTMLDivElement>(null);
  const mostViewedRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <div className="py-8">
        {/* Hero Section */}
        <section className="relative bg-dyad-bg text-dyad-text rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src="/hero-image.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10 p-8 md:p-16 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Benvenuto su PSN TV
            </h1>
            <p className="text-lg md:text-xl text-dyad-text/90 mb-8 max-w-2xl mx-auto">
              La tua finestra sul mondo dell'informazione e dell'intrattenimento.
            </p>
            <Link
              to="/about"
              className="inline-block bg-dyad-link-blue hover:bg-dyad-link-blue/90 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Scopri di più
            </Link>
          </div>
        </section>

        {/* Sezione In Evidenza */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">In Evidenza</h2>
          <div ref={featuredRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {featuredPrograms.map((program) => (
              <div key={program.id} className="flex-none w-64">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </section>

        {/* Sezione Più Visti */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-dyad-text">Più Visti</h2>
          <div ref={mostViewedRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {mostViewedPrograms.map((program) => (
              <div key={program.id} className="flex-none w-64">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;