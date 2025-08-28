import React from "react";
import { Link } from "react-router-dom";
import { Program } from '../types/program'; // Import the Program type

interface ProgramCardProps {
  program: Program; // Use the imported Program type
  disableLink?: boolean; // Nuova prop per disabilitare il link interno
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, disableLink }) => {
  const content = (
    <>
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-dyad-bg/80 to-transparent flex items-center justify-center">
          <img
            src={program.imageUrl} // Usa program.imageUrl
            alt={program.title} // Usa program.title per il testo alt
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
          />
        </div>
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

  if (disableLink) {
    return <div className="group block w-64 flex-shrink-0">{content}</div>;
  }

  return (
    <Link to={`/program/${program.id}`} className="group block w-64 flex-shrink-0">
      {content}
    </Link>
  );
};

export default ProgramCard;