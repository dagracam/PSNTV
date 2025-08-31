import React from 'react';

const PerSempreScugnizzo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dyad-text">Per Sempre Scugnizzo</h1>
        <p className="text-lg text-dyad-text/80">
          Il Premio “Per Sempre Scugnizzo” è riservato a tutte quelle personalità nazionali ed internazionali della società che hanno contribuito alla crescita economica, lo sviluppo sociale e civile del nostro Paese.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Placeholder for award categories or past winners */}
        <div className="bg-dyad-bg/70 backdrop-blur-sm border border-dyad-border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-dyad-text mb-4">Edizione 2023</h2>
          <p className="text-dyad-text/70">
            Scopri i vincitori e le storie ispiratrici dell'edizione 2023 del premio.
          </p>
          <button className="mt-4 px-4 py-2 bg-dyad-link-blue text-white rounded-md hover:bg-dyad-link-blue/90 transition-colors">
            Dettagli
          </button>
        </div>

        <div className="bg-dyad-bg/70 backdrop-blur-sm border border-dyad-border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-dyad-text mb-4">Nomination</h2>
          <p className="text-dyad-text/70">
            Proponi una personalità che merita di essere riconosciuta per il suo contributo.
          </p>
          <button className="mt-4 px-4 py-2 bg-dyad-link-blue text-white rounded-md hover:bg-dyad-link-blue/90 transition-colors">
            Nomina ora
          </button>
        </div>

        <div className="bg-dyad-bg/70 backdrop-blur-sm border border-dyad-border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-dyad-text mb-4">Archivio</h2>
          <p className="text-dyad-text/70">
            Esplora le edizioni passate e i premiati che hanno fatto la storia.
          </p>
          <button className="mt-4 px-4 py-2 bg-dyad-link-blue text-white rounded-md hover:bg-dyad-link-blue/90 transition-colors">
            Vedi archivio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerSempreScugnizzo;