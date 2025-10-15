import { Program } from '../types/program'; // Import the Program type

export const programs: Program[] = [
  {
    id: 'in-sicurezza', // Nuovo ID per il programma "In Sicurezza"
    title: 'In Sicurezza',
    description: 'Francesca Corizza e Luigi Carfora parlano di sicurezza sul lavoro con imprenditori e professionisti del settore.
',
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
    imageUrl: '/images/PARLAMI D AMORE.jpg', // Immagine aggiornata come richiesto
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/parlamidamore', // URL video aggiornato come richiesto
    tags: ['amore', 'relazioni', 'sentimenti', 'storie', 'tiziana castaldo', 'tiziana', 'francesca corizza', 'parlami d '], // Tag per il nuovo programma
  },
  {
    id: 'per-sempre-chef', // Nuovo programma "Per Sempre Chef"
    title: 'Per Sempre Chef',
    description: 'Ricette, consigli e segreti per diventare un vero chef, con ospiti e degustazioni.',
    imageUrl: '/images/PER SEMPRE CHEF.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Per_Sempre_Chef', // URL iframe specificato
    tags: ['cucina', 'ricette', 'chef', 'gastronomia', 'food'],
  },
  {
    id: 'flash-news', // Nuovo programma Flash News
    title: 'Flash News',
    description: 'Le ultime notizie in tempo reale, aggiornamenti rapidi e approfondimenti sui fatti del giorno.',
    imageUrl: '/images/FLASH NEWS.png', // Immagine di copertina specificata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/FlashNews', // URL iframe corretto per Flash News
    tags: ['notizie', 'attualità', 'breaking news', 'informazione'],
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
    id: 'libridine', // Nuovo programma "Libridine"
    title: 'Libridine',
    description: 'Un viaggio affascinante nel mondo dei libri, tra recensioni, interviste agli autori e consigli di lettura.',
    imageUrl: '/images/LIBRIDINE.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Libridine', // URL iframe specificato
    tags: ['libri', 'lettura', 'cultura', 'recensioni', 'autori'],
  },
  {
    id: 'palazzo-civico', // Nuovo programma "Palazzo Civico"
    title: 'Palazzo Civico',
    description: 'Un programma che esplora le dinamiche della politica locale, le decisioni che influenzano la comunità e le voci dei cittadini.',
    imageUrl: '/images/palazzo civico.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Palazzo_Civico', // URL iframe specificato
    tags: ['politica', 'comunità', 'cittadini', 'attualità', 'locale'],
  },
  {
    id: 'daysofwar', // ID cambiato da 'doc-nelle-tue-mani'
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
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/psnsportclub',
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
    tags: ['notizie', 'attualità', 'informazione', 'online', 'giornale'],
  },
  {
    id: 'sport-selection', // Nuovo programma Sport Selection
    title: 'Sport Selection',
    description: 'Il meglio dello sport, con highlights, interviste e analisi approfondite.',
    imageUrl: '/images/sport selection ok.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/Sport_Selection', // URL iframe specificato
    tags: ['sport', 'highlights', 'interviste', 'analisi', 'calcio', 'basket', 'tennis'],
  },
  {
    id: 'turn-up-the-music', // Nuovo programma Turn up the Music
    title: 'Turn up the Music',
    description: 'Tutto il meglio della musica, con interviste, classifiche e speciali sui tuoi artisti preferiti.',
    imageUrl: '/images/TURN UP THE MUSIC.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/turnupthemusic', // URL iframe specificato
    tags: ['musica', 'interviste', 'classifiche', 'artisti', 'intrattenimento'],
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
    id: 'zoom-sul-campionato', // Nuovo programma Zoom sul Campionato
    title: 'Zoom sul Campionato',
    description: 'Analisi approfondite e commenti sulle partite e i protagonisti del campionato di calcio.',
    imageUrl: '/images/ZOOM SUL CAPIONATO.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/ZoomSulCampionato', // URL iframe specificato
    tags: ['calcio', 'campionato', 'sport', 'analisi', 'commenti'],
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
    id: 'intervistalo-tu', // Nuovo programma "Intervistalo Tu"
    title: 'Intervistalo Tu',
    description: 'Un programma ideato da Francesca Corizza.',
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
    description: 'Un programma che esplora il mondo, le sue culture e le sue storie, a portata di mano.',
    imageUrl: '/images/mondo in tasca.jpg', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/IlMondoinTasca', // URL iframe specificato
    tags: ['viaggi', 'cultura', 'mondo', 'storie', 'geografia'],
  },
  {
    id: 'in-the-paint', // Nuovo programma "In the Paint"
    title: 'In the Paint',
    description: 'Tutto il basket americano e non solo, con approfondimenti, analisi e interviste.',
    imageUrl: '/images/in the paint.png', // Immagine caricata
    videoUrl: 'https://web.psntv.eu/embed-playlist/persemprenews/In_The_Paint', // URL iframe specificato
    tags: ['basket', 'nba', 'sport', 'approfondimenti', 'pallacanestro'],
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
    tags: ['extra', 'generico', 'documentario'],
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