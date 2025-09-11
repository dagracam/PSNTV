import React from 'react';
import Layout from '@/components/Layout';
import { programs } from '@/data/programs';

const UrbanTalk = () => {
  const program = programs.find(p => p.id === 'urban-talk');

  if (!program) {
    return (
      <Layout>
        <div className="container mx-auto p-4 text-dyad-text">
          <h1 className="text-4xl font-bold mb-8">Programma non trovato</h1>
          <p>Siamo spiacenti, il programma Urban Talk non è stato trovato.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-dyad-text">{program.title}</h1>
        <p className="mb-8 text-lg text-dyad-text/80">
          {program.description}
        </p>
        <div className="aspect-video w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden shadow-xl">
          <iframe
            width="100%"
            height="100%"
            src={program.videoUrl}
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

export default UrbanTalk;