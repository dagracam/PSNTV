import React from "react";
import { Link } from "react-router-dom";

interface ProgramCardProps {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ id, title, imageUrl, description }) => {
  return (
    <Link
      to={`/program/${id}`}
      className="flex flex-col w-64 bg-dyad-bg border border-dyad-text/20 rounded-lg overflow-hidden shadow-lg
                 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out group cursor-pointer"
    >
      <div className="relative w-full aspect-video overflow-hidden"> {/* Modificato qui per 16:9 */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dyad-bg/80 to-transparent"></div>
      </div>
      <div className="p-3 flex-grow flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-dyad-text group-hover:text-dyad-text/90 transition-colors duration-200 truncate">
          {title}
        </h3>
        <p className="text-sm text-dyad-text/70 mt-1 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProgramCard;