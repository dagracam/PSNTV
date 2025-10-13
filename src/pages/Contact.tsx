import Layout from "@/components/Layout";
import React from "react";

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-dyad-text mb-4">Contatti</h1>
        <p className="text-lg text-dyad-text/80">
          Questa è la pagina "Contatti". Puoi raggiungerci tramite i seguenti canali.
        </p>
      </div>
    </Layout>
  );
};

export default Contact;