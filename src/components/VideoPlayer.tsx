import React, { useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Ogni volta che la sorgente cambia, ricarica il video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
    }
  }, [src]);

  return (
    <div className="aspect-video w-full bg-black rounded-lg overflow-hidden shadow-xl flex items-center justify-center">
      {src ? (
        <video
          ref={videoRef}
          key={src} // Usa key per forzare il ricaricamento del video quando src cambia
          controls
          autoPlay
          className="w-full h-full object-contain"
          title={title}
        >
          <source src={src} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
      ) : (
        <div className="text-dyad-text/70">Seleziona un video dalla playlist.</div>
      )}
    </div>
  );
};

export default VideoPlayer;