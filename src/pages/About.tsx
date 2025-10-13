import Layout from "@/components/Layout";
import React from "react";

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-dyad-text mb-4">Chi Siamo</h1>
        <p className="text-lg text-dyad-text/80">
          Questa è la pagina "Chi Siamo". Qui puoi trovare informazioni sulla nostra missione e i nostri valori.
        </p>
      </div>
    </Layout>
  );
};

export default About;