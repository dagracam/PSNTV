import { Program } from '../types/program'; // Import the Program type

export const programs: Program[] = [
  {
    id: 'in-sicurezza', // Nuovo ID per il programma "In Sicurezza"
    title: 'In Sicurezza',
    description: 'Francesca Corizza e Luigi Carfora parlano di sicurezza sul lavoro con imprenditori e professionisti del settore.',
    imageUrl: '/images/IN SICUREZZA.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/insicurezza', // URL video specificato
    tags: ['sicurezza', 'prevenzione', 'consigli', 'attualità', 'luigi carfora', 'francesca corizza', 'lavoro'], // Tag per il nuovo programma
  },
  {
    id: 'premio-diego-special', // Aggiunto il programma "Premio per Sempre con Diego"
    title: 'Premio per Sempre con Diego',
    description: 'Il Premio internazionale "Per Sempre con Diego" nasce nel 2021 con lo scopo di dedicare un riconoscimento sportivo nella memoria del campione argentino Diego Armando Maradona. Viene assegnato a tutte le figure, che si impegnano nello sport e nel diffondere la cultura dello sport.',
    imageUrl: '/images/premio-per-sempre-con-diego.jpg',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Premio_per_Sempre_con_Diego',
    tags: ['maradona', 'calcio', 'napoli', 'premio', 'speciale', 'msc', 'msc world europa', 'malagò', 'abbagnale', 'zazzaroni', 'krol', 'silipo', 'massa', 'domenico sepe', 'sport'],
  },
  {
    id: 'premio-per-sempre-original',
    title: 'Per Sempre Scugnizzo',
    description: 'Il Premio “Per Sempre Scugnizzo” è riservato a tutte quelle personalità nazionali ed internazionali della società che hanno contribuito alla crescita economica, lo sviluppo sociale e civile del nostro Paese.', // Descrizione aggiornata
    imageUrl: '/images/premio-per-sempre-scugnizzo.jpg', // Aggiornato all'immagine ottimizzata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Premio_per_Sempre_Scugnizzi', // URL video aggiornato
    tags: ['premio', 'scugnizzo', 'società', 'cultura', 'napoli', 'domenico sepe'], // Aggiunti tag
  },
  {
    id: 'parlamidamore', // Nuovo ID per il programma
    title: 'Parlami d\'amore',
    description: 'Tiziana Castaldo esplora il mondo dell’amore tra emozioni, sfide e riflessioni sul sentimento più complesso di tutti.', // Descrizione per il nuovo programma
    imageUrl: '/images/PARLAMI D AMORE.jpg', // Immagine aggiornata come richiesto
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/parlamidamore', // URL video aggiornato come richiesto
    tags: ['amore', 'relazioni', 'sentimenti', 'storie', 'tiziana castaldo', 'tiziana', 'francesca corizza', 'parlami d '], // Tag per il nuovo programma
  },
  {
    id: 'per-sempre-chef', // Nuovo programma "Per Sempre Chef"
    title: 'Per Sempre Chef',
    description: "Ricette, consigli e segreti spiegati dagli chef dell'APCI.",
    imageUrl: '/images/PER SEMPRE CHEF.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Per_Sempre_Chef', // URL iframe specificato
    tags: ['cucina', 'ricette', 'chef', 'gastronomia', 'food', 'apci', 'antonio sorrentino'],
  },
  {
    id: 'flash-news', // Nuovo programma Flash News
    title: 'Flash News',
    description: 'Le ultime notizie in tempo reale, aggiornamenti rapidi e approfondimenti sui fatti del giorno.',
    imageUrl: '/images/FLASH NEWS.png', // Immagine di copertina specificata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/FlashNews', // URL iframe corretto per Flash News
    tags: ['notizie', 'attualità', 'breaking news', 'informazione', 'flash news', 'massimiliano de falco', 'max de falco'],
  },
  {
    id: 'la-salute-in-un-click', // Nuovo ID per il programma
    title: 'La Salute in un Click',
    description: 'Approfondimenti e consigli per il benessere, la salute, prevenzione e sanità con Rosario Lavorgna, il Dott. Saverio Annunziata e medici esperti ', // Descrizione per il nuovo programma
    imageUrl: '/images/LA SALUTE IN UN CLICK.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/LaSaluteinUnClick', // URL video aggiornato
    tags: ['salute', 'benessere', 'medicina', 'consigli', 'la salute in un click', 'rosario lavorgna', 'lavorgna', 'dottor saverio annunziata', 'saverio annunziata', 'annunziata', 'salute','medici',], // Tag per il nuovo programma
  },
  {
    id: 'la-vita-questo-palcoscenico', // Nuovo ID per il programma
    title: 'La Vita questo Palcoscenico',
    description: 'Mimmo Annunziata dà voce al teatro amatoriale con interviste alle compagnie del territorio.', // Descrizione per il nuovo programma
    imageUrl: '/images/LA VITA QUESTO PALCOSCENICO.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/LaVitaquestoPalcoscenico', // URL video aggiornato
    tags: ['vita', 'storie', 'palcoscenico', 'emozioni', 'federica avallone', 'mimmo annunziata', 'domenico annunziata', 'teatro', 'chicca avallone', 'federica avallone', 'maria aprile', 'compagnie teatrali amatoriali', 'teatro', ], // Tag per il nuovo programma
  },
  {
    id: 'libridine', // Nuovo programma "Libridine"
    title: 'Libridine',
    description: 'Marianna Scagliola dialoga con gli autori: racconti, libri e passioni in uno spazio dedicato alla lettura.',
    imageUrl: '/images/LIBRIDINE.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Libridine', // URL iframe specificato
    tags: ['libri', 'lettura', 'cultura', 'recensioni', 'autori', 'marianna scagliola', 'scrittori'],
  },
  {
    id: 'palazzo-civico', // Nuovo programma "Palazzo Civico"
    title: 'Palazzo Civico',
    description: 'Rosa Criscuolo incontra protagonisti della politica per raccontare idee, progetti e attualità istituzionale.',
    imageUrl: '/images/palazzo civico.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Palazzo_Civico', // URL iframe specificato
    tags: ['politica', 'comunità', 'cittadini', 'attualità', 'locale'],
  },
  {
    id: 'daysofwar', // ID cambiato da 'doc-nelle-tue-mani'
    title: 'Days of War',
    description: 'Con il Gen. (ris.) Giuseppe Esposito uno sguardo lucido sulle guerre in corso.', // Descrizione mantenuta
    imageUrl: '/images/days-of-war.png',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/daysofwar', // URL video aggiornato
    tags: ['geopolitica', 'guerra', 'attualità', 'analisi'], // Aggiunti tag
  },
  {
    id: 'psn-sport-club',
    title: 'PSN Sport Club',
    description: 'Tutte le ultime notizie e gli approfondimenti dal mondo dello sport con Vincenzo Torino e Claudia Veneziano raccontano lo sport.',
    imageUrl: '/images/psn-sport-club.png',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/psnsportclub',
    tags: ['sport', 'calcio', 'notizie', 'approfondimenti'],
  },
  {
    id: 'schole',
    title: 'Scholé',
    description: 'Vincenzo Cautiero e Laura Cascio parlano di scuola a 360°, tra innovazione didattica, educazione e attualità.',
    imageUrl: '/images/SCHOLé.png', // Aggiornato con l'immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/schole', // URL iframe corretto
    tags: ['cultura', 'approfondimento', 'società', 'filosofia', 'scuola', 'podcast', 'vincenzo cautiero', 'laura cascio', 'scuola'],
  },
  {
    id: 'psn-speciale', // Nuovo programma PSN Speciale
    title: 'PSN Speciale',
    description: 'Approfondimenti e speciali su eventi e tematiche di rilievo.',
    imageUrl: '/images/SPECIALE.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/psnspeciale', // URL iframe specificato
    tags: ['speciale', 'approfondimento', 'eventi', 'attualità'],
  },
  {
    id: 'webgiornale', // Nuovo programma Webgiornale
    title: 'Webgiornale',
    description: 'Il tuo notiziario quotidiano online, con le ultime notizie e approfondimenti dal mondo.',
    imageUrl: '/images/Webgiornale.png', // Immagine aggiornata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/webgiornale', // URL iframe specificato
    tags: ['notizie', 'attualità', 'informazione', 'online', 'giornale', 'rpsario lavorgna'],
  },
  {
    id: 'sport-selection', // Nuovo programma Sport Selection
    title: 'Sport Selection',
    description: 'L\'appuntamento quotidiano con lo sport.',
    imageUrl: '/images/sport selection ok.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Sport_Selection', // URL iframe specificato
    tags: ['sport', 'highlights', 'analisi', 'calcio', 'basket', 'tennis', 'notizie', 'filippo idone', 'pippo idone', 'calcio', 'basket', 'sinner', 'italia'],
  },
  {
    id: 'turn-up-the-music', // Nuovo programma Turn up the Music
    title: 'Turn up the Music',
    description: 'Tutto il meglio della musica, con interviste e speciali sui tuoi artisti preferiti.',
    imageUrl: '/images/TURN UP THE MUSIC.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/turnupthemusic', // URL iframe specificato
    tags: ['musica', 'interviste', 'classifiche', 'artisti', 'intrattenimento', 'enzo campagnoli'],
  },
  {
    id: 'tutto-rugby',
    title: 'Tutto Rugby',
    description: 'Massimiliano De Falco esplora il mondo del Rugby con notizie, approfondimenti e interviste esclusive.', // Descrizione aggiornata
    imageUrl: '/images/TUTTO RUGBY.jpg', // Nuova immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Tutto_Rugby', // URL dell'iframe
    tags: ['rugby', 'sport', 'notizie', 'approfondimenti', 'max de falco', 'massimiliano de falco', 'de falco', 'rugby', 'fir', 'italrugby', 'sei nazioni', 'six nations', 'campania ovale'],
  },
  {
    id: 'urban-talk',
    title: 'Urban Talk',
    description: 'Tiziana Castaldo gira Napoli ponendo ogni settimana una nuova domanda ai cittadini: voce alla città.',
    imageUrl: '/images/URBAN TALK.png',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/urbantalk',
    tags: ['cultura', 'urbana', 'interviste', 'società', 'tiziana castaldo', 'tiziana', 'urban talk', 'napoli'],
  },
  {
    id: 'zoom-sul-campionato', // Nuovo programma Zoom sul Campionato
    title: 'Zoom sul Campionato',
    description: 'Analisi approfondite e commenti sulle partite e i protagonisti del campionato di calcio con Sergio Curcio.',
    imageUrl: '/images/ZOOM SUL CAPIONATO.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/ZoomSulCampionato', // URL iframe specificato
    tags: ['calcio', 'campionato', 'sport', 'analisi', 'commenti', 'serie a', 'sergio curcio'],
  },
  {
    id: 'amici-pelosi',
    title: 'Amici Pelosi',
    description: 'Il Dott. Ubaldo Luciano racconta il mondo degli animali con storie, consigli e curiosità dedicate agli amici a quattro zampe',
    imageUrl: '/images/AMICI PELOSI.jpg',
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/amicipelosi', // Aggiornato con il nuovo URL
    tags: ['animali', 'veterinario', 'approfondimento', 'benessere', 'animali', 'ubaldo luciano', 'ubaldo luciano'],
  },
  {
    id: 'intervistalo-tu', // Nuovo programma "Intervistalo Tu"
    title: 'Intervistalo Tu',
    description: 'Tutte le interviste della redazione di Per Sempre News raccolte in un unico format diretto e coinvolgente.',
    imageUrl: '/images/intervistalo tu.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Intervistalo_Tu', // URL iframe specificato
    tags: ['interviste', 'francesca corizza', 'attualità', 'persone'],
  },
  {
    id: 'fresco-di-stampa', // Nuovo programma "Fresco di Stampa"
    title: 'Fresco di Stampa',
    description: 'Le ultime novità editoriali e approfondimenti sul mondo dei libri e della cultura, con Rosario Lavorgna.',
    imageUrl: '/images/FRESCO DI STAMPA.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/frescodistampa', // URL iframe specificato
    tags: ['libri', 'cultura', 'editoria', 'rosario lavorgna', 'stampa'],
  },
  {
    id: 'il-mondo-in-tasca', // Nuovo programma "Il mondo in Tasca"
    title: 'Il mondo in Tasca',
    description: 'Un programma che esplora i mestieri attraverso gli oggetti.',
    imageUrl: '/images/mondo in tasca.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/IlMondoinTasca', // URL iframe specificato
    tags: ['viaggi', 'cultura', 'mondo', 'storie', 'geografia', 'oggetti', 'laura cascio', 'lavoro'],
  },
  {
    id: 'in-the-paint', // Nuovo programma "In the Paint"
    title: 'In the Paint',
    description: 'Tutto il basket con approfondimenti, analisi e interviste.',
    imageUrl: '/images/in the paint.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/In_The_Paint', // URL iframe specificato
    tags: ['basket', 'nba', 'sport', 'approfondimenti', 'pallacanestro'],
  }
];