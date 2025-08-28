import React from 'react';
import { Link } from 'react-router-dom';
import { programs } from '../data/programs';
import ProgramCard from '../components/ProgramCard';

const Index: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Static banner */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-8">
        <img
          src="/images/premio-per-sempre-con-diego.jpg"
          alt="Premio Per Sempre con Diego"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dyad-bg/80 to-transparent flex items-center justify-center">
          <h2 className="text-3xl font-bold text-white">Premio Per Sempre con Diego</h2>
        </div>
      </div>

      {/* Program cards */}
      <h2 className="text-2xl font-bold text-dyad-text mb-6">Programmi in evidenza</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {programs.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
};

export default Index;