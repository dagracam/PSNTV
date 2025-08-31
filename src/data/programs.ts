export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string; // Optional video URL for specific program pages
}

export const programs: Program[] = [
  {
    id: "premio-diego-special",
    title: "Per Sempre con Diego",
    description: "II Premio 'Per Sempre con Diego' nasce nel 2021 con lo scopo di dedicare un riconoscimento a chi si è distinto nel mondo dello sport, della cultura e del sociale, portando avanti i valori di lealtà, passione e impegno che hanno contraddistinto la vita di Diego Armando Maradona.",
    imageUrl: "/images/per-sempre-con-diego.webp",
    videoUrl: "https://rst2.saiuzwebnetwork.it:2020/VideoPlayer/persemprenews?autoplay=1&mute=1",
  },
  {
    id: "premio-per-sempre-original",
    title: "Per Sempre Scugnizzo",
    description: "Un viaggio emozionante attraverso la vita e la carriera di Diego Armando Maradona, raccontato da chi lo ha conosciuto e amato. Un tributo al Pibe de Oro, simbolo di riscatto e speranza per milioni di persone.",
    imageUrl: "/images/per-sempre-scugnizzo.webp",
    videoUrl: "https://rst2.saiuzwebnetwork.it:2020/VideoPlayer/persemprenews?autoplay=1&mute=1",
  },
  {
    id: "doc-nelle-tue-mani",
    title: "Days of War",
    description: "Un documentario avvincente che esplora le storie di coraggio e resilienza durante i conflitti, offrendo uno sguardo profondo sulle esperienze umane in tempi di guerra.",
    imageUrl: "/images/days-of-war.webp",
    videoUrl: "https://web.psntv.eu/embed-playlist/persemprenews/daysofwar",
  },
  {
    id: "programma-4",
    title: "Programma 4",
    description: "Breve descrizione del Programma 4.",
    imageUrl: "/images/placeholder-program.webp",
  },
  {
    id: "programma-5",
    title: "Programma 5",
    description: "Breve descrizione del Programma 5.",
    imageUrl: "/images/placeholder-program.webp",
  },
  {
    id: "programma-6",
    title: "Programma 6",
    description: "Breve descrizione del Programma 6.",
    imageUrl: "/images/placeholder-program.webp",
  },
  {
    id: "programma-7",
    title: "Programma 7",
    description: "Breve descrizione del Programma 7.",
    imageUrl: "/images/placeholder-program.webp",
  },
  {
    id: "programma-8",
    title: "Programma 8",
    description: "Breve descrizione del Programma 8.",
    imageUrl: "/images/placeholder-program.webp",
  },
];