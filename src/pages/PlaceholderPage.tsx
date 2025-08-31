import Layout from "@/components/Layout";
import React from "react";

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-dyad-text mb-4">{title}</h1>
        <p className="text-lg text-dyad-text/80">
          Questa è una pagina placeholder per "{title}". Il contenuto verrà aggiunto in seguito.
        </p>
        <a href="/" className="text-dyad-link-blue hover:underline mt-4 block">
          Torna alla Home
        </a>
      </div>
    </Layout>
  );
};

export default PlaceholderPage;