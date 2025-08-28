import React from "react";
import Layout from "../components/Layout";
import { dummyPlaylists } from "../data/playlists";
import PlaylistCard from "../components/PlaylistCard";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-8 text-dyad-text text-center">Le Nostre Playlist</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {dummyPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;