import React from 'react';
import { Link } from 'react-router-dom';
import { Program } from '@/types/program';

interface ProgramCardProps {
  program: Program;
  disableLink?: boolean;
  cardWidthClass?: string; // Aggiunto per permettere larghezze diverse
  isGridItem?: boolean; // Nuovo prop per gestire lo stile in griglia
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, disableLink = false, cardWidthClass = 'w-64', isGridItem = false }) => {
  const content = (
    <div className={`group relative flex flex-col h-full bg-dyad-card-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${cardWidthClass} ${isGridItem ? 'w-full' : ''}`}>
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <img
          src={program.imageUrl}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-lg font-semibold">{program.title}</span>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-dyad-text mb-2">
          {program.title}
        </h3>
        <p className="text-sm text-dyad-text/70 mb-2">
          {program.description}
        </p>
        {program.tags && program.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {program.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-dyad-accent text-dyad-accent-foreground text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (disableLink) {
    return content;
  }

  // Determina il percorso corretto in base all'ID del programma
  let programPath = `/program/${program.id}`;
  if (program.id === 'premio-diego-special') {
    programPath = '/persemprecondiego';
  } else if (program.id === 'premio-per-sempre-original') {
    programPath = '/persempre-scugnizzo';
  } else if (program.id === 'doc-nelle-tue-mani') {
    programPath = '/daysofwar';
  } else if (program.id === 'psn-sport-club') {
    programPath = '/psnsportclub';
  } else if (program.id === 'tutto-rugby') {
    programPath = '/tuttorugby';
  } else if (program.id === 'urban-talk') {
    programPath = '/urbantalk';
  } else if (program.id === 'schole') { // New conditional for Schole
    programPath = '/schole';
  }

  return (
    <Link to={programPath} className="block h-full">
      {content}
    </Link>
  );
};

export default ProgramCard;