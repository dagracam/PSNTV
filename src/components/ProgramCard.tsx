import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

interface ProgramCardProps {
  program: {
    id: string;
    title: string;
    image: string; // Questo prop non sarà più usato direttamente per l'immagine, ma mantenuto per compatibilità
    category: string;
    description: string;
  };
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <Link to={`/program/${program.id}`} className="group block">
      <div className="relative w-full h-48 overflow-hidden rounded-lg"> {/* Modificato da rounded-t-lg a rounded-lg */}
        <div className="absolute inset-0 bg-gradient-to-t from-dyad-bg/80 to-transparent flex items-center justify-center">
          <img
            src="/days-of-war.png"
            alt="Days of War"
            className="w-full object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg" // Modificato da rounded-t-lg a rounded-lg
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
        <div className="flex justify-between items-center mt-auto">
          <Badge variant="secondary">{program.category}</Badge>
          {/* Qui potresti aggiungere altre informazioni o azioni */}
        </div>
      </div>
    </Link>
  );
};

export default ProgramCard;