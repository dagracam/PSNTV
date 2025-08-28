export interface Playlist {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  youtubePlaylistId: string;
}

export const dummyPlaylists: Playlist[] = [
  {
    id: "amici-pelosi",
    title: "Amici Pelosi",
    description: "Tutto sul mondo degli animali domestici, consigli e storie commoventi.",
    imageUrl: "https://via.placeholder.com/300x200/FFD700/FFFFFF?text=Amici+Pelosi",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_0" // Sostituisci con un ID playlist YouTube reale
  },
  {
    id: "notizie-dal-mondo",
    title: "Notizie dal Mondo",
    description: "Aggiornamenti quotidiani sulle principali notizie internazionali.",
    imageUrl: "https://via.placeholder.com/300x200/87CEEB/FFFFFF?text=Notizie+Mondo",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_1"
  },
  {
    id: "sport-e-passione",
    title: "Sport e Passione",
    description: "Highlights, interviste e analisi dal mondo dello sport.",
    imageUrl: "https://via.placeholder.com/300x200/FF6347/FFFFFF?text=Sport+Passione",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_2"
  },
  {
    id: "cultura-e-arte",
    title: "Cultura e Arte",
    description: "Esplorazioni nel patrimonio culturale e artistico.",
    imageUrl: "https://via.placeholder.com/300x200/9370DB/FFFFFF?text=Cultura+Arte",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_3"
  },
  {
    id: "scienza-e-tecnologia",
    title: "Scienza e Tecnologia",
    description: "Le ultime scoperte e innovazioni tecnologiche.",
    imageUrl: "https://via.placeholder.com/300x200/3CB371/FFFFFF?text=Scienza+Tech",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_4"
  },
  {
    id: "cucina-italiana",
    title: "Cucina Italiana",
    description: "Ricette tradizionali e moderne della gastronomia italiana.",
    imageUrl: "https://via.placeholder.com/300x200/FFA07A/FFFFFF?text=Cucina+Italiana",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_5"
  },
  {
    id: "viaggi-e-avventura",
    title: "Viaggi e Avventura",
    description: "Destinazioni esotiche e consigli per i tuoi prossimi viaggi.",
    imageUrl: "https://via.placeholder.com/300x200/ADD8E6/FFFFFF?text=Viaggi+Avventura",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_6"
  },
  {
    id: "musica-e-spettacolo",
    title: "Musica e Spettacolo",
    description: "Novità dal mondo della musica, cinema e teatro.",
    imageUrl: "https://via.placeholder.com/300x200/FFC0CB/FFFFFF?text=Musica+Spettacolo",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_7"
  },
  {
    id: "salute-e-benessere",
    title: "Salute e Benessere",
    description: "Consigli per uno stile di vita sano e equilibrato.",
    imageUrl: "https://via.placeholder.com/300x200/90EE90/FFFFFF?text=Salute+Benessere",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_8"
  },
  {
    id: "economia-e-finanza",
    title: "Economia e Finanza",
    description: "Analisi di mercato e consigli per gli investimenti.",
    imageUrl: "https://via.placeholder.com/300x200/DDA0DD/FFFFFF?text=Economia+Finanza",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_9"
  },
  {
    id: "storia-e-misteri",
    title: "Storia e Misteri",
    description: "Approfondimenti su eventi storici e enigmi irrisolti.",
    imageUrl: "https://via.placeholder.com/300x200/CD853F/FFFFFF?text=Storia+Misteri",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_10"
  },
  {
    id: "moda-e-design",
    title: "Moda e Design",
    description: "Le ultime tendenze e ispirazioni dal mondo della moda e del design.",
    imageUrl: "https://via.placeholder.com/300x200/F08080/FFFFFF?text=Moda+Design",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_11"
  },
  {
    id: "videogiochi-e-gaming",
    title: "Videogiochi e Gaming",
    description: "Recensioni, gameplay e notizie dal mondo dei videogiochi.",
    imageUrl: "https://via.placeholder.com/300x200/6A5ACD/FFFFFF?text=Gaming",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_12"
  },
  {
    id: "libri-e-lettura",
    title: "Libri e Lettura",
    description: "Consigli di lettura, recensioni e interviste con autori.",
    imageUrl: "https://via.placeholder.com/300x200/DEB887/FFFFFF?text=Libri+Lettura",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_13"
  },
  {
    id: "ambiente-e-natura",
    title: "Ambiente e Natura",
    description: "Documentari e notizie sulla protezione dell'ambiente.",
    imageUrl: "https://via.placeholder.com/300x200/20B2AA/FFFFFF?text=Ambiente+Natura",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_14"
  },
  {
    id: "politica-e-attualita",
    title: "Politica e Attualità",
    description: "Dibattiti e analisi sugli eventi politici nazionali e internazionali.",
    imageUrl: "https://via.placeholder.com/300x200/B0C4DE/FFFFFF?text=Politica+Attualita",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_15"
  },
  {
    id: "motori-e-velocita",
    title: "Motori e Velocità",
    description: "Novità dal mondo delle auto, moto e corse.",
    imageUrl: "https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Motori+Velocita",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_16"
  },
  {
    id: "teatro-e-cinema",
    title: "Teatro e Cinema",
    description: "Recensioni, trailer e interviste dal grande schermo e dal palcoscenico.",
    imageUrl: "https://via.placeholder.com/300x200/BA55D3/FFFFFF?text=Teatro+Cinema",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_17"
  },
  {
    id: "fotografia-e-video",
    title: "Fotografia e Video",
    description: "Tutorial, tecniche e ispirazioni per fotografi e videomaker.",
    imageUrl: "https://via.placeholder.com/300x200/FFDAB9/FFFFFF?text=Fotografia+Video",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_18"
  },
  {
    id: "educazione-e-formazione",
    title: "Educazione e Formazione",
    description: "Corsi, lezioni e risorse per l'apprendimento continuo.",
    imageUrl: "https://via.placeholder.com/300x200/87CEFA/FFFFFF?text=Educazione",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_19"
  },
  {
    id: "fai-da-te-e-hobby",
    title: "Fai da Te e Hobby",
    description: "Progetti creativi e guide per i tuoi hobby preferiti.",
    imageUrl: "https://via.placeholder.com/300x200/DAA520/FFFFFF?text=Fai+da+Te",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_20"
  },
  {
    id: "psicologia-e-mente",
    title: "Psicologia e Mente",
    description: "Approfondimenti sulla mente umana e il benessere psicologico.",
    imageUrl: "https://via.placeholder.com/300x200/E6E6FA/FFFFFF?text=Psicologia",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_21"
  },
  {
    id: "giardinaggio-e-orto",
    title: "Giardinaggio e Orto",
    description: "Consigli per la cura del giardino e la coltivazione dell'orto.",
    imageUrl: "https://via.placeholder.com/300x200/98FB98/FFFFFF?text=Giardinaggio",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_22"
  },
  {
    id: "tecnologia-futura",
    title: "Tecnologia Futura",
    description: "Uno sguardo alle innovazioni che plasmeranno il nostro domani.",
    imageUrl: "https://via.placeholder.com/300x200/4682B4/FFFFFF?text=Tech+Futura",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_23"
  },
  {
    id: "interviste-esclusive",
    title: "Interviste Esclusive",
    description: "Conversazioni approfondite con personaggi di spicco.",
    imageUrl: "https://via.placeholder.com/300x200/D2B48C/FFFFFF?text=Interviste",
    youtubePlaylistId: "PL_R_x0_0_0_0_0_0_0_0_0_0_24"
  }
];