import React from "react";
import { Link } from "react-router-dom";
import { Program } from '../types/program'; // Import the Program type
import { cn } from '@/lib/utils'; // Import cn utility for conditional classes

interface ProgramCardProps {
  program: Program; // Use the imported Program type
  disableLink?: boolean; // Nuova prop per disabilitare il link interno
  isGridItem?: boolean; // Nuova prop per indicare se è un elemento di una griglia
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, disableLink, isGridItem }) => {
  const content = (
    <>
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <img
          src={program.imageUrl} // Usa program.imageUrl
          alt={program.title} // Usa program.title per il testo alt
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
          draggable="false" // Aggiunto per prevenire il trascinamento nativo dell'immagine
        />
        {/* Overlay per il gradiente, posizionato sopra l'immagine */}
        <div className="absolute inset-0 bg-gradient-to-t from-dyad-bg/20 to-transparent pointer-events-none"></div>
      </div>
      <div className="p-3 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-dyad-text group-hover:text-dyad-text/90 transition-colors duration-200 truncate">
          {program.title}
        </h3>
        <p className="text-sm text-dyad-text/70 mb-2 line-clamp-2">
          {program.description}
        </p>
      </div>
    </>
  );

  const wrapperClasses = cn(
    "group block",
    !isGridItem && "w-64 flex-shrink-0" // Applica w-64 e flex-shrink-0 solo se non è un elemento di griglia
  );

  if (disableLink) {
    return <div className={wrapperClasses}>{content}</div>;
  }

  return (
    <Link to={`/program/${program.id}`} className={wrapperClasses}>
      {content}
    </Link>
  );
};

export default ProgramCard;