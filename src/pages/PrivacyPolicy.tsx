import Layout from "@/components/Layout";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-dyad-text mb-4">Informativa sulla Privacy</h1>
        <p className="text-lg text-dyad-text/80">
          Questa è la nostra Informativa sulla Privacy. Qui spieghiamo come raccogliamo, usiamo e proteggiamo i tuoi dati.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;