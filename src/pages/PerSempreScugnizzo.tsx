import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PerSempreScugnizzo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dyad-text">Per Sempre Scugnizzo</h1>
        <p className="text-lg text-dyad-text/80">
          Il Premio “Per Sempre Scugnizzo” è riservato a tutte quelle personalità nazionali ed internazionali della società che hanno contribuito alla crescita economica, lo sviluppo sociale e civile del nostro Paese.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        <div className="md:order-2">
          <img
            src="/images/persemprescugnizzo-hero.jpg"
            alt="Per Sempre Scugnizzo"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:order-1 text-dyad-text">
          <h2 className="text-3xl font-semibold mb-4">Un Riconoscimento al Merito</h2>
          <p className="mb-4">
            Il premio celebra individui che, con il loro impegno e la loro visione, hanno lasciato un'impronta significativa nella società, promuovendo valori di solidarietà, innovazione e progresso. È un omaggio a chi, con la propria storia, ispira le nuove generazioni.
          </p>
          <p className="mb-6">
            Attraverso questo riconoscimento, vogliamo mettere in luce esempi virtuosi e incoraggiare la cittadinanza attiva e responsabile.
          </p>
          <Button asChild className="bg-dyad-link-blue hover:bg-dyad-link-blue/90 text-white">
            <Link to="/nomination">
              Nomina un candidato <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-dyad-bg/70 backdrop-blur-sm border border-dyad-border rounded-lg p-8 shadow-lg text-dyad-text mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Le Categorie del Premio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-dyad-border rounded-md">
            <h3 className="text-xl font-medium mb-2">Innovazione e Ricerca</h3>
            <p className="text-dyad-text/80">Per chi ha contribuito con scoperte o soluzioni innovative.</p>
          </div>
          <div className="p-4 border border-dyad-border rounded-md">
            <h3 className="text-xl font-medium mb-2">Impegno Sociale</h3>
            <p className="text-dyad-text/80">Per chi si è distinto in attività di volontariato e solidarietà.</p>
          </div>
          <div className="p-4 border border-dyad-border rounded-md">
            <h3 className="text-xl font-medium mb-2">Cultura e Arte</h3>
            <p className="text-dyad-text/80">Per chi ha arricchito il panorama culturale e artistico.</p>
          </div>
        </div>
      </div>

      <div className="text-center text-dyad-text">
        <h2 className="text-3xl font-semibold mb-4">Edizioni Precedenti</h2>
        <p className="text-lg text-dyad-text/80 mb-6">
          Scopri i vincitori e le storie delle passate edizioni del Premio "Per Sempre Scugnizzo".
        </p>
        <Button asChild variant="outline" className="border-dyad-link-blue text-dyad-link-blue hover:bg-dyad-link-blue/10">
          <Link to="/archive">
            Esplora l'archivio <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PerSempreScugnizzo;