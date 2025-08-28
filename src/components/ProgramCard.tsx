import React from "react";
import { Link } from "react-router-dom";
// Rimosso: import { Badge } from "./ui/badge"; // Non più necessario

interface ProgramCardProps {
  program: {
    id: string;
    title: string;
    image: string;
    category: string;
    description: string;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <Link to={`/program/${program.id}`} className="group block w-64 flex-shrink-0">
      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-dyad-bg/80 to-transparent flex items-center justify-center">
          <img
            src="/days-of-war.png"
            alt="Days of War"
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
        {/* Rimosso il div che conteneva il Badge */}
      </div>
    </Link>
  );
};

export default ProgramCard;