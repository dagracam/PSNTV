import Layout from "@/components/Layout";
import React from "react";

const AboutUsPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-dyad-text mb-6 text-center">Chi siamo</h1>
        <div className="text-lg text-dyad-text/80 space-y-6 leading-relaxed">
          <p>
            PerSempreNews è una realtà giovane e indipendente.
          </p>
          <p>
            La nostra missione è quella di fornire contenuti di qualità che informano, ispirano e coinvolgono il pubblico promuovendo la cultura, la creatività e il pensiero critico.
          </p>
          <p>
            Il nostro impegno si incentra nel dare voce agli ultimi ponendo l’attenzione sulle vicende sociali.
          </p>
          <p>
            Aspiriamo a costruire una Community appassionata e curiosa che abbia la volontà di condividere idee e esperienze contribuendo a creare un’informazione consapevole e veritiera.
          </p>
        </div>
        <div className="text-center mt-10">
          <a href="/" className="text-dyad-link-blue hover:underline">
            Torna alla Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUsPage;