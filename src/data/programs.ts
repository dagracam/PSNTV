import { Program } from '../types/program'; // Import the Program type

export const programs: Program[] = [
  {
    id: 'in-sicurezza', // Nuovo ID per il programma "In Sicurezza"
    title: 'In Sicurezza',
    description: 'Un programma dedicato alla sicurezza, con consigli pratici e approfondimenti su come proteggere se stessi e i propri cari.',
    imageUrl: '/images/IN SICUREZZA.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/insicurezza', // URL video specificato
    tags: ['sicurezza', 'prevenzione', 'consigli', 'attualità', 'luigi carfora', 'francesca corizza'], // Tag per il nuovo programma
  },
  {
    id: 'premio-diego-special', // Aggiunto il programma "Premio per Sempre con Diego"
    title: 'Premio per Sempre con Diego',
    description: 'Il Premio internazionale "Per Sempre con Diego" nasce nel 2021 con lo scopo di dedicare un riconoscimento sportivo nella memoria del campione argentino Diego Armando Maradona. Viene assegnato a tutte le figure, che si impegnano nello sport e nel diffondere la cultura dello sport.',
    imageUrl: '/images/premio-per-sempre-con-diego.jpg',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Premio_per_Sempre_con_Diego',
    tags: ['maradona', 'calcio', 'napoli', 'premio', 'speciale'],
  },
  {
    id: 'premio-per-sempre-original',
    title: 'Per Sempre Scugnizzo',
    description: 'Il Premio “Per Sempre Scugnizzo” è riservato a tutte quelle personalità nazionali ed internazionali della società che hanno contribuito alla crescita economica, lo sviluppo sociale e civile del nostro Paese.', // Descrizione aggiornata
    imageUrl: '/images/premio-per-sempre-scugnizzo.jpg', // Aggiornato all'immagine ottimizzata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Premio_per_Sempre_Scugnizzi', // URL video aggiornato
    tags: ['premio', 'scugnizzo', 'società', 'cultura', 'napoli'], // Aggiunti tag
  },
  {
    id: 'parlamidamore', // Nuovo ID per il programma
    title: 'Parlami d\'amore',
    description: 'Un programma dedicato alle storie d\'amore, alle relazioni e ai sentimenti che uniscono le persone.', // Descrizione per il nuovo programma
    imageUrl: '/images/PARLAMI D\'AMORE.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/parlamidamore', // URL video aggiornato
    tags: ['amore', 'relazioni', 'sentimenti', 'storie', 'tiziana castaldo', 'tiziana', 'francesca corizza', 'parlami d '], // Tag per il nuovo programma
  },
  {
    id: 'la-salute-in-un-click', // Nuovo ID per il programma
    title: 'La Salute in un Click',
    description: 'Approfondimenti e consigli per il benessere e la salute, a portata di click.', // Descrizione per il nuovo programma
    imageUrl: '/images/LA SALUTE IN UN CLICK.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/LaSaluteinUnClick', // URL video aggiornato
    tags: ['salute', 'benessere', 'medicina', 'consigli', 'la salute in un click', 'rosario lavorgna', 'lavorgna', 'dottor saverio annunziata', 'saverio annunziata', 'annunziata', 'salute','medici',], // Tag per il nuovo programma
  },
  {
    id: 'la-vita-questo-palcoscenico', // Nuovo ID per il programma
    title: 'La Vita questo Palcoscenico',
    description: 'Un viaggio attraverso le storie di vita, le sfide e i trionfi, come in un grande palcoscenico.', // Descrizione per il nuovo programma
    imageUrl: '/images/LA VITA QUESTO PALCOSCENICO.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/LaVitaquestoPalcoscenico', // URL video aggiornato
    tags: ['vita', 'storie', 'palcoscenico', 'emozioni', 'federica avallone', 'mimmo annunziata', 'domenico annunziata', 'teatro', 'chicca avallone'], // Tag per il nuovo programma
  },
  {
    id: 'doc-nelle-tue-mani',
    title: 'Days of War',
    description: 'Con il Gen. (ris.) Giuseppe Esposito tutti gli aggiornamenti sulla geopolitica.', // Descrizione mantenuta
    imageUrl: '/images/days-of-war.png',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/daysofwar', // URL video aggiornato
    tags: ['geopolitica', 'guerra', 'attualità', 'analisi'], // Aggiunti tag
  },
  {
    id: 'psn-sport-club',
    title: 'PSN Sport Club',
    description: 'Tutte le ultime notizie e gli approfondimenti dal mondo dello sport con PSN Sport Club.',
    imageUrl: '/images/psn-sport-club.png',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/psnsportclub', // URL video aggiornato
    tags: ['sport', 'calcio', 'notizie', 'approfondimenti'],
  },
  {
    id: 'schole',
    title: 'Scholé',
    description: 'L\'unico podcast che parla di scuola a 360°. Dalle aule alle relazioni, dall\'apprendimento alle difficoltà quotidiane fino ai temi della salute fisica e psicologica.',
    imageUrl: '/images/SCHOLé.png', // Aggiornato con l'immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/schole', // URL iframe corretto
    tags: ['cultura', 'approfondimento', 'società', 'filosofia', 'scuola', 'podcast', 'vincenzo cautiero', ],
  },
  {
    id: 'tutto-rugby',
    title: 'Tutto Rugby',
    description: 'Qui trovi tutti gli approfondimenti, le interviste e le analisi sul mondo del rugby.', // Descrizione aggiornata
    imageUrl: '/images/TUTTO RUGBY.jpg', // Nuova immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Tutto_Rugby', // URL dell'iframe
    tags: ['rugby', 'sport', 'notizie', 'approfondimenti', 'max de falco', 'massimiliano de falco', 'de falco', 'rugby', 'fir', 'italrugby', 'sei nazioni', 'six nations'],
  },
  {
    id: 'urban-talk',
    title: 'Urban Talk',
    description: 'Urban Talk è il programma che esplora le voci e le storie della strada, con interviste e approfondimenti che danno voce alla gente.',
    imageUrl: '/images/URBAN TALK.png',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/urbantalk',
    tags: ['cultura', 'urbana', 'interviste', 'società', 'tiziana castaldo', 'tiziana', 'urban talk',],
  },
  {
    id: 'amici-pelosi',
    title: 'Amici Pelosi',
    description: 'Con il dottor Luciano Ubaldo, la rubrica di approfondimento sui nostri amici a 4 zampe.',
    imageUrl: '/images/AMICI PELOSI.jpg',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/amicipelosi', // Aggiornato con il nuovo URL
    tags: ['animali', 'veterinario', 'approfondimento', 'benessere', 'animali', 'ubaldo luciano'],
  },
  {
    id: 'il-paradiso-delle-signore',
    title: 'Il Paradiso delle Signore',
    description: 'Le vicende del grande magazzino milanese e le vite delle persone che ci lavorano e lo frequentano.',
    imageUrl: 'https://www.raiplay.it/resizegd/320x180/dl/img/2024/05/23/1716409000000_16x9_1716409000000-il_paradiso_delle_signore.jpg',
    videoUrl: 'https://www.raiplay.it/video/2024/05/Il-Paradiso-delle-Signore---Puntata-del-23052024-e0211212-2211-4211-8211-221121221122.html',
    tags: ['fiction', 'rai', 'dramma', 'moda'], // Aggiunti tag
  },
  {
    id: 'un-posto-al-sole',
    title: 'Un Posto al Sole',
    description: 'Le storie degli abitanti di Palazzo Palladini a Napoli, tra amori, intrighi e colpi di scena.',
    imageUrl: 'https://www.raiplay.it/resizegd/320x180/dl/img/2024/05/23/1716409000000_16x9_1716409000000-un_posto_al_sole.jpg',
    videoUrl: 'https://www.raiplay.it/video/2024/05/Un-Posto-al-Sole---Puntata-del-23052024-e0211212-2211-4211-8211-221121221122.html',
    tags: ['soap opera', 'rai', 'napoli', 'dramma'], // Aggiunti tag
  },
  {
    id: 'che-dio-ci-aiuti',
    title: 'Che Dio ci aiuti',
    description: 'Suor Angela e le sue consorelle aiutano chi è in difficoltà, tra misteri e risate.',
    imageUrl: 'https://www.raiplay.it/resizegd/320x180/dl/img/2024/05/23/1716409000000_16x9_1716409000000-che_dio_ci_aiuti.jpg',
    videoUrl: 'https://www.raiplay.it/video/2024/05/Che-Dio-ci-aiuti---Puntata-del-23052024-e0211212-2211-4211-8211-221121221122.html',
    tags: ['fiction', 'rai', 'commedia', 'mistero'], // Aggiunti tag
  },
  {
    id: 'don-matteo',
    title: 'Don Matteo',
    description: 'Don Matteo, un parroco con un talento speciale per risolvere i crimini, aiuta i Carabinieri di Spoleto.',
    imageUrl: 'https://www.raiplay.it/resizegd/320x180/dl/img/2024/05/23/1716409000000_16x9_1716409000000-don_matteo.jpg',
    videoUrl: 'https://www.raiplay.it/video/2024/05/Don-Matteo---Puntata-del-23052024-e0211212-2211-4211-8211-221121221122.html',
    tags: ['fiction', 'rai', 'mistero', 'religione'], // Aggiunti tag
  },
  {
    id: 'programma-extra-10',
    title: 'Programma Extra 10',
    description: 'Una descrizione generica per il programma extra numero 10.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+10',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-11',
    title: 'Programma Extra 11',
    description: 'Una descrizione generica per il programma extra numero 11.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+11',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-12',
    title: 'Programma Extra 12',
    description: 'Una descrizione generica per il programma extra numero 12.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+12',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-13',
    title: 'Programma Extra 13',
    description: 'Una descrizione generica per il programma extra numero 13.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+13',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-14',
    title: 'Programma Extra 14',
    description: 'Una descrizione generica per il programma extra numero 14.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+14',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-15',
    title: 'Programma Extra 15',
    description: 'Una descrizione generica per il programma extra numero 15.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+15',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-16',
    title: 'Programma Extra 16',
    description: 'Una descrizione generica per il programma extra numero 16.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+16',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-17',
    title: 'Programma Extra 17',
    description: 'Una descrizione generica per il programma extra numero 17.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+17',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-18',
    title: 'Programma Extra 18',
    description: 'Una descrizione generica per il programma extra numero 18.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+18',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-19',
    title: 'Programma Extra 19',
    description: 'Una descrizione generica per il programma extra numero 19.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+19',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-20',
    title: 'Programma Extra 20',
    description: 'Una descrizione generica per il programma extra numero 20.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+20',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-21',
    title: 'Programma Extra 21',
    description: 'Una descrizione generica per il programma extra numero 21.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+21',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-22',
    title: 'Programma Extra 22',
    description: 'Una descrizione generica per il programma extra numero 22.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+22',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-23',
    title: 'Programma Extra 23',
    description: 'Una descrizione generica per il programma extra numero 23.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+23',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-24',
    title: 'Programma Extra 24',
    description: 'Una descrizione generica per il programma extra numero 24.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+24',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
  {
    id: 'programma-extra-25',
    title: 'Programma Extra 25',
    description: 'Una descrizione generica per il programma extra numero 25.',
    imageUrl: 'https://via.placeholder.com/320x180?text=Programma+25',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    tags: ['extra', 'generico'],
  },
];