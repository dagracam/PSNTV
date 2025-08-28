import React from 'react';
import { useParams } from 'react-router-dom';
import { dummyPlaylists } from '../data/playlists';
import Layout from '../components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PlaylistPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const playlist = dummyPlaylists.find(p => p.id === id);

  if (!playlist) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-dyad-text">
          <h1 className="text-3xl font-bold mb-4">Playlist non trovata</h1>
          <p className="text-lg mb-6">Siamo spiacenti, la playlist che cerchi non esiste.</p>
          <Button onClick={() => navigate('/')}>Torna alla Home</Button>
        </div>
      </Layout>
    );
  }

  const youtubeEmbedUrl = `https://www.youtube.com/embed/videoseries?list=${playlist.youtubePlaylistId}`;

  return (
    <Layout>
      <div className="py-8">
        <Button variant="ghost" onClick={() => navigate('/')} className="mb-6 text-dyad-text hover:text-dyad-text/80">
          <ArrowLeft className="mr-2 h-4 w-4" /> Torna indietro
        </Button>
        <Card className="bg-card border-dyad-border p-6">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-4xl font-bold text-dyad-text mb-4">{playlist.title}</CardTitle>
            <p className="text-dyad-text/80 text-lg mb-6">{playlist.description}</p>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={youtubeEmbedUrl}
                title={`YouTube video player - ${playlist.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PlaylistPage;