import React from 'react';
import { Link } from 'react-router-dom';
import { Playlist } from '../data/playlists';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  return (
    <Link to={`/playlist/${playlist.id}`} className="block">
      <Card className="w-[280px] h-full flex flex-col overflow-hidden transition-transform duration-200 hover:scale-105 bg-card border-dyad-border">
        <img
          src={playlist.imageUrl}
          alt={playlist.title}
          className="w-full h-40 object-cover"
        />
        <CardHeader className="flex-grow">
          <CardTitle className="text-lg font-semibold text-dyad-text">{playlist.title}</CardTitle>
          <CardDescription className="text-sm text-dyad-text/70 mt-1 line-clamp-2">
            {playlist.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          {/* Potresti aggiungere qui altri dettagli se necessario */}
        </CardContent>
      </Card>
    </Link>
  );
};

export default PlaylistCard;