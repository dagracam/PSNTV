import Layout from "@/components/Layout";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistItem from "@/components/PlaylistItem";
import VideoPlayer from "@/components/VideoPlayer"; // Importa il nuovo componente VideoPlayer

// Dati fittizi della playlist, ordinati dal più recente al più vecchio
// Ho modificato i videoUrl per puntare a placeholder .mp4 per il player nativo
const dummyPlaylistItems = [
  {
    id: "ep4",
    title: "Amici Pelosi - Dietro le Quinte",
    thumbnailUrl: "https://via.placeholder.com/120x80/213058/d9d9d9?text=Bonus",
    duration: "15:45",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", // Esempio MP4
  },
  {
    id: "ep3",
    title: "Amici Pelosi - Episodio 3: Un Legame Speciale",
    thumbnailUrl: "https://via.placeholder.com/120x80/213058/d9d9d9?text=Ep3",
    duration: "22:00",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", // Esempio MP4
  },
  {
    id: "ep2",
    title: "Amici Pelosi - Episodio 2: Nuove Avventure",
    thumbnailUrl: "https://via.placeholder.com/120x80/213058/d9d9d9?text=Ep2",
    duration: "28:15",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", // Esempio MP4
  },
  {
    id: "ep1",
    title: "Amici Pelosi - Episodio 1: L'Incontro",
    thumbnailUrl: "https://via.placeholder.com/120x80/213058/d9d9d9?text=Ep1",
    duration: "25:30",
    videoUrl: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4", // Esempio MP4
  },
];

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Stato per l'URL del video attualmente selezionato nel player
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>(
    dummyPlaylistItems[0]?.videoUrl || ""
  );
  const [currentVideoTitle, setCurrentVideoTitle] = useState<string>(
    dummyPlaylistItems[0]?.title || "Nessun video selezionato"
  );

  // In un'applicazione reale, qui faresti un fetch dei dati del programma usando l'ID
  const program = {
    id: id,
    title: `Programma ${id}: Amici Pelosi`, // Esempio di titolo dinamico
    description: "Questa è la descrizione dettagliata del programma Amici Pelosi. Qui puoi trovare tutti gli episodi e le informazioni relative a questa serie affascinante sui nostri amici a quattro zampe.",
    // Altri dettagli del programma
  };

  const handlePlaylistItemClick = (videoUrl: string, videoTitle: string) => {
    setCurrentVideoUrl(videoUrl);
    setCurrentVideoTitle(videoTitle);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-dyad-text">{program.title}</h1>
        <p className="text-lg text-dyad-text/80">{program.description}</p>

        <VideoPlayer src={currentVideoUrl} title={currentVideoTitle} />

        <section>
          <h2 className="text-2xl font-bold text-dyad-text mb-4">Episodi e Contenuti Correlati</h2>
          <div className="grid grid-cols-1 gap-4">
            {dummyPlaylistItems.map((item) => (
              <PlaylistItem
                key={item.id}
                {...item}
                onClick={() => handlePlaylistItemClick(item.videoUrl, item.title)} // Passa il gestore di click con URL e titolo
              />
            ))}
          </div>
          <p className="text-sm text-dyad-text/60 mt-4">
            Nota: I video in questa playlist sono esempi. In un'applicazione reale, i `videoUrl` dovrebbero puntare a file video effettivi (es. `.mp4`) o a un servizio di streaming che permetta l'embedding diretto.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default ProgramDetail;