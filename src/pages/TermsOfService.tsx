import Layout from "@/components/Layout";
import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-dyad-text mb-4">Termini di Servizio</h1>
        <p className="text-lg text-dyad-text/80">
          Questa è la pagina dei Termini di Servizio. Si prega di leggere attentamente le condizioni d'uso.
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfService;