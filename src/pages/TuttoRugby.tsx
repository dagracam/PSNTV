import React from 'react';
import Layout from '@/components/Layout';

const TuttoRugby = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-dyad-text">Tutto Rugby</h1>
        <p className="mb-8 text-lg text-dyad-text/80">
          Tutta l'informazione sulla palla ovale.
        </p>
        <div className="aspect-video w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-xl">
          <iframe
            width="100%"
            height="100%"
            src="https://web.psntv.eu/embed-playlist/persemprenews/Tutto_Rugby"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-none"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
};

export default TuttoRugby;