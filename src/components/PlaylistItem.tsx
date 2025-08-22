import React from "react";
import { PlayCircle } from "lucide-react";

interface PlaylistItemProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  videoUrl: string; // Aggiunto videoUrl per il player
  onClick: (videoUrl: string) => void; // Aggiunto gestore di click
}

const PlaylistItem: React.FC<PlaylistItemProps> = ({
  title,
  thumbnailUrl,
  duration,
  videoUrl,
  onClick,
}) => {
  return (
    <div
      className="flex items-center space-x-4 p-3 bg-dyad-bg border border-dyad-text/20 rounded-lg shadow-sm hover:bg-dyad-bg/80 transition-colors duration-200 cursor-pointer"
      onClick={() => onClick(videoUrl)} // Chiamata onClick con l'URL del video
    >
      <div className="relative w-24 h-16 flex-shrink-0 rounded-md overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-200">
          <PlayCircle className="text-white w-8 h-8" />
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-base font-semibold text-dyad-text line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-dyad-text/70 mt-1">{duration}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;