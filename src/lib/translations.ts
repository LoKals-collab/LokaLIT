import type { Experience, Destination } from "@/lib/data";
import scillaChianalea from "@/images/destinazioni/Chianalea_Image_1.png";
import geraceHome from "@/images/destinazioni/Gerace_Home.png";
import civitaHome from "@/images/destinazioni/Civita_Home.png";
import scillaWideImg from "@/images/destinazioni/Chianalea_Image_2.png";
import geraceWideImg from "@/images/destinazioni/Gerace_Destinazione.png";
import civitaWideImg from "@/images/destinazioni/Civita_Destinazione.png";
import pentedattiloWideImg from "@/images/destinazioni/Pentadattilo_Destinazione_1.png";
import badolatoWideImg from "@/images/destinazioni/Badolato_Destinazione.png";
import stiloWideImg from "@/images/destinazioni/Stilo_Destinazione.png";

/* -------------------------------------------------------------------------- */
/*  Lingue disponibili                                                         */
/* -------------------------------------------------------------------------- */

export type Locale = "it" | "en";

export const locales: Locale[] = ["it", "en"];

/** Lingua predefinita della webapp. */
export const defaultLocale: Locale = "it";

/** Nome completo di ogni lingua (mostrato nel menù di scelta). */
export const localeNames: Record<Locale, string> = {
  it: "Italiano",
  en: "English",
};

/**
 * Costruisce le alternative hreflang per una pagina, dato il suo sottopercorso
 * (es. "" per la home, "/mission", "/destinations"). Usato nei metadata SEO.
 */
export function altLanguages(subpath = "") {
  return {
    it: `/it${subpath}`,
    en: `/en${subpath}`,
    "x-default": `/it${subpath}`,
  };
}

/* -------------------------------------------------------------------------- */
/*  Asset immagini (uguali per tutte le lingue → definiti una volta sola)      */
/* -------------------------------------------------------------------------- */

const U = "https://images.unsplash.com/";
const opt = "?auto=format&fit=crop&q=80&w=1200";
const optWide = "?auto=format&fit=crop&q=80&w=1600";
const w1000 = "?auto=format&fit=crop&q=80&w=1000";

const img = {
  // host
  francesco: U + "photo-1505228395891-9a51e7e86bf6" + optWide,
  francescoPortrait: U + "photo-1500648767791-00dcc994a43e" + opt,
  federica: U + "photo-1441974231531-c6227db76b6e" + optWide,
  federicaPortrait: U + "photo-1438761681033-6461ffad8d80" + opt,
  maria: U + "photo-1556909114-f6e7ad7d3136" + optWide,
  mariaPortrait: U + "photo-1544005313-94ddf0286df2" + opt,
  // borghi (home)
  scilla: scillaChianalea,
  gerace: geraceHome,
  civita: civitaHome,
  // destinazioni (wide)
  scillaWide: scillaWideImg,
  geraceWide: geraceWideImg,
  civitaWide: civitaWideImg,
  pentedattiloWide: pentedattiloWideImg,
  badolatoWide: badolatoWideImg,
  stiloWide: stiloWideImg,
  // "perché la Calabria"
  whyCulture: U + "photo-1523906834658-6e24ef2386f9" + w1000,
  whyLandscape: U + "photo-1441974231531-c6227db76b6e" + w1000,
  whyCrafts: U + "photo-1556909114-f6e7ad7d3136" + w1000,
  whyFood: U + "photo-1498579150354-977475b7ea0b" + w1000,
};

/* -------------------------------------------------------------------------- */
/*  ITALIANO (lingua di default)                                              */
/* -------------------------------------------------------------------------- */

const it = {
  meta: {
    siteName: "Lokalit",
    homeTitle: "Lokalit | Scopri la Calabria con gli occhi di chi la vive",
    homeDescription:
      "Esplora borghi autentici, storie locali e destinazioni nascoste in tutta la Calabria con Lokalit.",
    missionTitle: "Un modo diverso di viaggiare",
    missionDescription:
      "La nostra missione: un turismo sostenibile che protegge l'identità locale, sostiene le comunità e mette le persone prima dei luoghi in tutta la Calabria.",
    destinationsTitle: "Esplora i borghi nascosti della Calabria",
    destinationsDescription:
      "Scopri Scilla, Gerace, Civita, Pentedattilo, Badolato e Stilo, sei borghi calabresi nascosti, ognuno con una storia diversa da raccontare.",
    contactTitle: "Contatti",
    contactDescription: "Scrivi al team di Lokalit: rispondiamo di persona, di solito entro 48 ore.",
    privacyTitle: "Privacy",
    privacyDescription: "Come Lokalit raccoglie, usa e protegge i tuoi dati.",
  },

  nav: {
    home: "Home",
    mission: "Missione",
    destinations: "Destinazioni",
    join: "Unisciti al viaggio",
    openMenu: "Apri il menù",
    closeMenu: "Chiudi il menù",
    homeAria: "Lokalit, home",
    theme: {
      label: "Cambia tema",
      toLight: "Attiva il tema chiaro",
      toDark: "Attiva il tema scuro",
    },
  },

  language: {
    label: "Lingua",
    choose: "Scegli la lingua",
  },

  cards: {
    experienceCta: "Scopri la storia",
    destinationCta: "Scopri di più",
  },

  wishlist: {
    save: "Salva questo local",
    remove: "Rimuovi dai salvati",
    navLabel: "Locals salvati",
  },

  home: {
    hero: {
      badge: "Le tue radici, in Calabria",
      titleLine1: "Torna nel borgo",
      titleLine2: "che i tuoi nonni non hanno mai smesso di raccontare",
      subtitle:
        "Se le tue radici affondano in Calabria, un local ti riporta nel borgo di famiglia: le strade, i cognomi, le storie che i tuoi avi si sono portati via. Non un tour: la porta di casa che stavi cercando.",
      exploreBtn: "Esplora le esperienze",
      joinBtn: "Unisciti al viaggio",
      hostHint: "Francesco, Federica, Maria e altri non vedono l'ora di ospitarti",
      scroll: "Scorri",
      imageAlt: "Un host calabrese nel suo borgo all'ora dorata",
    },
    experiencesSection: {
      eyebrow: "Incontra i tuoi host",
      title: "Si parte da una persona, non da un luogo",
      body: "Prima del borgo, c'è qualcuno che lo chiama casa. Ecco alcuni dei calabresi pronti a condividere con te il loro angolo di sud.",
    },
    whyLocalsSection: {
      eyebrow: "Perché Lokalit",
      title: "Un viaggio che ha un senso",
    },
    villagesSection: {
      eyebrow: "I borghi",
      title: "E i luoghi in cui ti porteranno",
      viewAll: "Vedi tutte le destinazioni",
    },
    spirit: {
      eyebrow: "Lo spirito locale",
      title: "Certi luoghi restano vivi grazie alla loro gente",
      imageAlt: "Persone del posto condividono un pasto a una lunga tavolata",
      paragraphs: [
        "In Calabria, le cose più importanti raramente sono scritte. Si tramandano attorno a una tavola, lungo un sentiero, cantate a una festa custodite nelle mani di chi non è mai partito.",
        "Qui una tradizione non è uno spettacolo; è semplicemente un martedì qualunque. Il pane, il dialetto, il modo in cui una nonna piega una forma di pasta che la sua famiglia prepara da duecento anni.",
        "Non la confezioniamo per te. Ti presentiamo semplicemente la persona che la vive e ci facciamo da parte mentre nasce una connessione vera.",
      ],
    },
    journeySection: {
      eyebrow: "Come funziona",
      title: "Vivi la Calabria in modo diverso",
    },
    testimonialsSection: {
      eyebrow: "Cosa potresti vivere",
      title: "Non è ancora una recensione. È quello che vogliamo rendere possibile.",
      body: "Nessuna prenotazione è ancora avvenuta. I locals sono reali: le prime giornate insieme a loro le scriverai tu.",
    },
  },

  mission: {
    hero: {
      eyebrow: "La nostra missione",
      headline: "Un modo diverso di viaggiare",
      subheadline:
        "Crediamo che ogni borgo, e ogni storia locale, meriti di essere scoperto.",
      imageAlt: "Un borgo calabrese aggrappato a una collina al tramonto",
    },
    vision: {
      eyebrow: "La nostra visione",
      title: "Un turismo che dà più di quanto prende",
      paragraphs: [
        "Il turismo di massa ha l'abitudine di arrivare rumoroso e lasciare poco dietro di sé. A noi interessa l'opposto: un viaggio che attraversa un luogo in silenzio e lo lascia più forte di come l'ha trovato.",
        "Significa visite sostenibili a misura di borgo, non di parcheggio per pullman. Significa proteggere l'identità che rende un borgo degno di essere visitato, la lingua, i riti, il ritmo della vita quotidiana.",
        "Soprattutto, significa lasciare il valore dove deve stare: con le famiglie che ospitano, cucinano, accompagnano e accolgono. Quando passi una giornata con un local, non stai solo vedendo la Calabria, stai aiutando una comunità a decidere il proprio futuro.",
        "Mettiamo le persone prima delle cartoline perché è l'incontro che conta. Un borgo è bello. Un'amicizia nata al suo interno è indimenticabile.",
      ],
    },
    whyCalabria: {
      eyebrow: "Perché la Calabria",
      title: "L'angolo più autentico d'Italia",
      body: "La punta dello stivale è la parte che la maggior parte dei viaggiatori salta. Ed è proprio per questo che ha conservato la sua anima.",
      items: [
        {
          title: "Una cultura tutta sua",
          body: "Fili greci, bizantini, normanni e albanesi attraversano ancora i borghi della Calabria, nei dialetti, nei riti, nelle feste che non se ne sono mai andate.",
          image: img.whyCulture,
        },
        {
          title: "Paesaggi che cambiano di ora in ora",
          body: "Due mari, tre catene montuose e antiche foreste nel mezzo. Poche regioni in Europa racchiudono tanta varietà in uno spazio così piccolo.",
          image: img.whyLandscape,
        },
        {
          title: "Tradizioni custodite a mano",
          body: "Pane, formaggio, seta, ceramica: qui i mestieri si fanno ancora con lentezza, da persone che hanno imparato dalla generazione precedente.",
          image: img.whyCrafts,
        },
        {
          title: "Una tavola che racconta una storia",
          body: "Dalla 'nduja al bergamotto, il cibo calabrese porta la sua storia nel piatto, deciso, sincero e radicato nella terra che l'ha creato.",
          image: img.whyFood,
        },
      ],
    },
    valuesSection: {
      eyebrow: "Ciò che ci guida",
      title: "I nostri valori",
    },
    lookingAhead: {
      eyebrow: "Lo sguardo avanti",
      title: "Questo è solo il primo borgo",
      cta: "Guarda da dove partiamo",
      imageAlt1: "Un borgo calabrese sul mare",
      imageAlt2: "Un host locale che sorride",
      paragraphs: [
        "Partiamo da dove il bisogno è più grande e l'accoglienza è più calorosa, una manciata di borghi calabresi e le persone che li conoscono meglio.",
        "Da qui, la mappa cresce una presentazione alla volta: più borghi, più host, più storie raccontate in prima persona. Col tempo, una rete di locali estesa a tutta la regione, ognuno pronto ad aprire una porta che nessuna guida potrebbe mai aprire.",
        "L'ambizione non è la crescita fine a sé stessa. È dimostrare che i piccoli luoghi, raccontati con sincerità da chi li abita, valgono il viaggio.",
      ],
    },
  },

  destinationsPage: {
    hero: {
      eyebrow: "Destinazioni",
      headline: "Esplora i borghi nascosti della Calabria",
      subheadline: "Ogni borgo racconta una storia diversa.",
      imageAlt: "Un borgo nascosto arroccato su una collina calabrese",
    },
    villageLabel: "Borgo",
    highlightsHeading: "In evidenza",
    cultureHeading: "Nota culturale",
    more: {
      eyebrow: "La mappa continua a crescere",
      title: "Altri borghi in arrivo",
      body: "La Calabria ha centinaia di storie che non abbiamo ancora raccontato. Nuovi borghi e nuovi host locali si aggiungono di continuo, fatti trovare quando si aprirà la prossima porta.",
      cta: "Unisciti al viaggio",
    },
  },

  contactPage: {
    hero: {
      eyebrow: "Contatti",
      headline: "Scrivici, ti rispondiamo noi",
      subheadline:
        "Una domanda, un dubbio, un'idea da proporre? Non c'è un centralino: c'è solo il team di Lokalit, che legge ogni messaggio.",
      imageAlt: "Un borgo calabrese affacciato sul mare",
    },
    emailHeading: "La via più diretta",
    emailBody:
      "Scrivici a questo indirizzo: leggiamo tutto personalmente e rispondiamo di solito entro 48 ore.",
    emailCta: "Scrivici via email",
    note: "Lokalit è un progetto in fase di validazione: niente numero verde, niente centralino automatico. Solo persone che rispondono.",
  },

  privacyPage: {
    hero: {
      eyebrow: "Privacy",
      title: "Come trattiamo i tuoi dati",
      subtitle:
        "Breve, onesta, senza legalese inutile, perché Lokalit è un progetto piccolo e vuole restare trasparente.",
    },
    updatedLabel: "Ultimo aggiornamento",
    updatedDate: "14 luglio 2026",
    sections: [
      {
        heading: "Chi siamo",
        body: "Lokalit è un progetto indipendente in fase di validazione: al momento non è costituito come società. Chi tratta i tuoi dati è il team che gestisce il sito, contattabile a lokalitlokals@gmail.com.",
      },
      {
        heading: "Quali dati raccogliamo",
        body: "Solo ciò che ci lasci volontariamente in un modulo del sito: nome, indirizzo email e, se scegli di specificarlo, il motivo del tuo interesse o l'esperienza a cui sei interessato/a. Non raccogliamo dati di pagamento: non esiste ancora nessun pagamento reale su questo sito.",
      },
      {
        heading: "Perché li raccogliamo",
        body: "Per risponderti se ci scrivi, per avvisarti quando ci sono novità se ti iscrivi, e per capire se vale la pena trasformare Lokalit in qualcosa di più grande: è, letteralmente, lo scopo di questo sito in questa fase.",
      },
      {
        heading: "Come li conserviamo",
        body: "I messaggi arrivano nella nostra casella email tramite un servizio di invio automatico (Gmail); non li inseriamo in nessun database o CRM. Restano lì finché non li cancelliamo o finché non ci chiedi di farlo.",
      },
      {
        heading: "Analytics",
        body: "Usiamo Vercel Analytics per capire, in forma aggregata, quante persone visitano il sito e quali pagine funzionano meglio. Non usa cookie e non traccia i singoli visitatori tra siti diversi.",
      },
      {
        heading: "I tuoi diritti",
        body: "Puoi chiederci in qualsiasi momento di vedere, correggere o cancellare i tuoi dati: basta scrivere a lokalitlokals@gmail.com. Rispondiamo sempre, di persona.",
      },
    ],
  },

  localPage: {
    eyebrow: "Scopri la storia",
    backLink: "Tutti i locals",
    storyHeading: "La sua storia",
    offeringsHeading: "Cosa vivrai insieme",
    villageHeading: "Il suo borgo",
    villageCta: "Esplora il borgo",
    ctaTitle: "Vuoi conoscere chi vive questi luoghi?",
    ctaBody:
      "Lasciaci la tua email: ti avviseremo quando potrai prenotare una giornata con un local della Calabria.",
    ctaButton: "Unisciti al viaggio",
  },

  cta: {
    eyebrow: "Unisciti alla community",
    title: "Sii il primo a varcare la porta",
    body: "Sii il primo a scoprire nuovi borghi, host locali e storie autentiche dalla Calabria. Niente rumore, solo la prossima porta a cui vale la pena bussare.",
    namePlaceholder: "Il tuo nome",
    emailPlaceholder: "La tua email",
    submit: "Tienimi aggiornato",
    errorName: "Dicci il tuo nome, così sappiamo a chi stiamo scrivendo.",
    errorEmail: "Questa email non sembra corretta, la ricontrolli?",
    successTitle: "Benvenuto, {name}.",
    successBody:
      "Sei nella lista. Ti contatteremo quando le prime storie saranno pronte.",
  },

  booking: {
    cardCta: "Prenota ora",
    badge: "da 49€ a persona",
    title: "Prenota una giornata con {name}",
    motivationLabel: "Cosa ti porta qui?",
    motivationOptions: [
      { value: "roots", label: "Ho radici calabresi" },
      { value: "authentic", label: "Cerco un viaggio autentico" },
      { value: "curious", label: "Sto pianificando, sono curioso/a" },
      { value: "other", label: "Altro" },
    ],
    namePlaceholder: "Il tuo nome",
    emailPlaceholder: "La tua email",
    submit: "Richiedi la prenotazione",
    disclaimer: "Nessun addebito: è un test per capire se questa esperienza vale la pena.",
    errorMotivation: "Dicci cosa ti porta qui, basta un tap.",
    errorName: "Dicci il tuo nome, così sappiamo a chi stiamo scrivendo.",
    errorEmail: "Questa email non sembra corretta, la ricontrolli?",
    errorGeneric: "Qualcosa è andato storto, riprova.",
    successTitle: "Grazie, {name}!",
    successBody:
      "La tua richiesta ci aiuta a capire se questa esperienza vale la pena di essere lanciata: quello che hai appena inviato non è stato un pagamento reale. Se c'è abbastanza interesse, ti contatteremo per organizzare la prenotazione vera.",
    close: "Chiudi",
    faqHeading: "Prima di chiedere",
    faq: [
      {
        question: "Chi sono davvero questi host?",
        answer:
          "Persone reali della Calabria che abbiamo conosciuto di persona: Francesco, Federica, Maria e gli altri che trovi sul sito.",
      },
      {
        question: "Cosa succede dopo l'invio?",
        answer:
          "Ti scriviamo noi entro 48 ore per organizzare i dettagli. Nessun addebito automatico, nessuna sorpresa.",
      },
      {
        question: "Posso cancellare?",
        answer:
          "Sì, in qualsiasi momento prima di confermare la giornata: basta rispondere alla nostra email.",
      },
    ],
    abandon: {
      title: "Cosa ti ha fermato?",
      options: [
        { value: "price", label: "Il prezzo" },
        { value: "unsure", label: "Non sono sicuro/a" },
        { value: "thinking", label: "Voglio pensarci" },
        { value: "other", label: "Altro" },
      ],
      skip: "Salta",
      thanks: "Grazie, ci aiuta a migliorare.",
    },
  },

  footer: {
    tagline:
      "Incontra la Calabria attraverso la sua gente. Incontri autentici, borghi nascosti e le storie che vivono tra di loro.",
    exploreHeading: "Esplora",
    stayHeading: "Resta in contatto",
    stayBody:
      "Nuovi borghi, nuovi host, nuove storie direttamente nella tua casella.",
    joinLink: "Unisciti al viaggio →",
    madeWith: "Fatto con cura in Calabria.",
    privacy: "Privacy",
    contact: "Contatti",
  },

  /* ----- collezioni di contenuti ----- */

  experiences: [
    {
      slug: "francesco",
      name: "Francesco",
      village: "Scilla",
      villageSlug: "scilla",
      role: "Figlio di pescatore · Guida del mare",
      title: "Spiagge nascoste e un aperitivo al tramonto sullo Stretto",
      description:
        "Figlio di un pescatore, conosce ogni cala sotto Chianalea. Francesco ti accompagna giù fino all'acqua dove la luce si fa d'oro, poi versa qualcosa di locale mentre i traghetti attraversano verso la Sicilia.",
      image: img.francesco,
      portrait: img.francescoPortrait,
      story: [
        "Francesco è nato a Chianalea, il quartiere di Scilla dove le case dei pescatori escono direttamente dal mare. Suo padre e suo nonno hanno passato la vita sullo Stretto, e lui ha imparato a leggere le correnti prima ancora di imparare a scrivere.",
        "Conosce ogni cala nascosta sotto il paese, quelle dove l'acqua resta trasparente anche a ferragosto e i traghetti per la Sicilia sembrano sfiorare l'orizzonte. Sono spiagge che non troverai su nessuna mappa, raggiungibili solo da chi è cresciuto qui.",
        "Quando il sole comincia a scendere, Francesco tira fuori qualcosa di locale, un vino della collina, un piatto di pesce appena pescato, e racconta lo Stretto come solo un figlio del mare sa fare: tra le leggende di Scilla e Cariddi e le storie dei pescatori veri.",
      ],
      offerings: [
        "Una discesa alle cale nascoste di Chianalea",
        "Un aperitivo al tramonto sullo Stretto di Messina",
        "Pesce spada fresco e racconti di pescatori",
        "Le leggende di Scilla e Cariddi raccontate sull'acqua",
      ],
      quote: "Il mare, qui, non si visita. Si ascolta.",
    },
    {
      slug: "federica",
      name: "Federica",
      village: "Sila",
      role: "Custode dei boschi · Guida di montagna",
      title: "Foreste antiche e le tradizioni custodite al loro interno",
      description:
        "Federica è cresciuta tra i pini dell'altopiano della Sila. Legge i boschi come un calendario funghi, resina, i vecchi sentieri di pascolo e condivide i riti che sua nonna non ha mai messo per iscritto.",
      image: img.federica,
      portrait: img.federicaPortrait,
      story: [
        "Federica è cresciuta tra i pini larici dell'altopiano della Sila, dove l'inverno porta la neve e l'estate un silenzio che si sente. La sua famiglia ha sempre vissuto del bosco: legna, funghi, resina, e i pascoli che cambiano colore a ogni stagione.",
        "Cammina tra gli alberi come si cammina in casa propria. Riconosce i sentieri dei pastori ormai dimenticati, sa dove crescono i porcini dopo la pioggia e quali erbe finiscono ancora nelle ricette di montagna.",
        "Più che una guida, Federica è una custode: dei riti che sua nonna non ha mai messo per iscritto, delle storie che il bosco conserva, di un modo di vivere lento che la Sila protegge da generazioni.",
      ],
      offerings: [
        "Una camminata lungo gli antichi sentieri di pascolo",
        "La raccolta dei funghi e delle erbe di montagna",
        "I riti e le tradizioni tramandati a voce",
        "Il silenzio di una delle foreste più antiche d'Europa",
      ],
      quote: "Il bosco ricorda tutto. Basta saperlo ascoltare.",
    },
    {
      slug: "maria",
      name: "Maria",
      village: "Gerace",
      villageSlug: "gerace",
      role: "Cuoca di famiglia · Custode di ricette",
      title: "Ricette di famiglia e le storie custodite in esse",
      description:
        "In una cucina che ha sfamato cinque generazioni, Maria insegna la pasta che la sua famiglia prepara per le feste e ti racconta perché esiste ogni forma, tra la farina e le risate.",
      image: img.maria,
      portrait: img.mariaPortrait,
      story: [
        "Maria cucina nella stessa cucina dove cinque generazioni della sua famiglia hanno impastato, litigato e riso. A Gerace, borgo medievale affacciato sullo Ionio, le ricette non si scrivono: si guardano, si imparano con le mani, si tramandano.",
        "Conosce la pasta delle feste, quella che richiede un giorno intero e tutta la famiglia attorno al tavolo. Ogni forma ha un nome, un'occasione, una storia, e Maria te le racconta mentre la farina vola e l'acqua bolle.",
        "Da lei non impari solo una ricetta. Impari perché esiste: il santo a cui è dedicata, la nonna che l'ha inventata per sbaglio, il motivo per cui in questa casa si fa così e non altrimenti.",
      ],
      offerings: [
        "Una lezione di pasta fatta a mano, forma per forma",
        "Le ricette delle feste tramandate da cinque generazioni",
        "Il pranzo condiviso alla tavola di famiglia",
        "Una passeggiata tra i vicoli in pietra di Gerace",
      ],
      quote: "Una ricetta è una storia che si può mangiare.",
    },
  ] as Experience[],

  villages: [
    {
      name: "Scilla",
      description:
        "Un borgo di pescatori arroccato sul mare, dove lo Stretto di Messina si accende al tramonto e l'antico quartiere di Chianalea sembra galleggiare sull'acqua.",
      image: img.scilla,
    },
    {
      name: "Gerace",
      description:
        "Un borgo medievale di vicoli in pietra e una cattedrale normanna, affacciato sulla costa ionica dai suoi spalti silenziosi e scaldati dal sole.",
      image: img.gerace,
    },
    {
      name: "Civita",
      description:
        "Un borgo arbëreshë aggrappato alla gola del Raganello, dove un'eredità albanese vive ancora nella lingua, nel costume e nei celebri comignoli Kodra.",
      image: img.civita,
    },
  ],

  whyLocals: [
    {
      title: "Connessioni autentiche",
      body: "Incontra persone che conoscono davvero la loro comunità non guide che recitano un copione, ma vicini che condividono il luogo che chiamano casa.",
    },
    {
      title: "Luoghi nascosti",
      body: "Scopri mete oltre le cartoline: la cala, la cucina, il sentiero che non finisce mai su una guida.",
    },
    {
      title: "Viaggi che lasciano il segno",
      body: "Trascorri il tuo tempo dentro la cultura vera le tradizioni, il dialetto, i piccoli riti quotidiani che rendono la Calabria ciò che è.",
    },
  ],

  journeySteps: [
    {
      label: "Scopri",
      body: "Sfoglia i borghi e le persone che li abitano. Scegli la persona e la storia che ti attira.",
    },
    {
      label: "Connetti",
      body: "Incontra il tuo host un vero calabrese che ti apre la sua porta, la sua tavola o il suo tratto di costa preferito.",
    },
    {
      label: "Esplora",
      body: "Cammina nei luoghi che solo i locali conoscono, al ritmo lento per cui il sud è fatto.",
    },
    {
      label: "Ricorda",
      body: "Riparti con un'amicizia, una ricetta, una storia, il tipo di ricordo che nessun itinerario può fabbricare.",
    },
  ],

  testimonials: [
    {
      name: "Maria",
      from: "Gerace",
      quote:
        "Farai la pasta nella sua cucina. Ti manderà a casa con la ricetta. Non sarà un tour: sarà un'amicizia.",
    },
    {
      name: "Francesco",
      from: "Scilla",
      quote:
        "Ti porterà su una spiaggia che da solo non troveresti mai, poi verserà qualcosa di locale mentre il sole tramonta sulla Sicilia. Sarà come essere ammessi a un segreto.",
    },
    {
      name: "Federica",
      from: "Sila",
      quote:
        "Camminerai nella Sila al suo fianco e capirai la Calabria per la prima volta. La foresta diventerà un luogo che ricorda le persone.",
    },
  ],

  values: [
    {
      title: "Autenticità",
      body: "Mostriamo la Calabria com'è, senza messe in scena, senza fretta e orgogliosa del proprio carattere.",
    },
    {
      title: "Rispetto",
      body: "Sono le comunità a dettare le regole. Viaggiamo come ospiti, mai come pubblico.",
    },
    {
      title: "Comunità",
      body: "Ogni incontro mantiene il valore dentro il borgo, con le persone che lo rendono degno di essere visitato.",
    },
    {
      title: "Scoperta",
      body: "Seguiamo la curiosità fuori dalla strada principale, verso i luoghi che raramente vengono raccontati.",
    },
  ],

  destinations: [
    {
      slug: "scilla",
      name: "Scilla",
      tagline: "Dove il borgo galleggia sul mare",
      story:
        "Omero collocò un mostro in queste acque; oggi Scilla offre qualcosa di più dolce. Le case dei pescatori si ergono direttamente dalle onde nel quartiere di Chianalea, e al tramonto tutto lo Stretto di Messina si tinge di rame mentre la Sicilia brilla all'orizzonte.",
      highlights: [
        "Le case sul mare di Chianalea",
        "Il tramonto sullo Stretto",
        "Pesce spada fresco al porto",
      ],
      culture:
        "L'identità di Scilla è legata al mare, alle spadare che ancora cacciano il pesce spada in primavera e a una comunità che vive tra roccia e acqua da secoli.",
      image: img.scillaWide,
    },
    {
      slug: "gerace",
      name: "Gerace",
      tagline: "Un balcone medievale sullo Ionio",
      story:
        "Arroccata su una rocca sopra la Locride, Gerace è un labirinto di vicoli in pietra, cortili nascosti e una delle più grandi cattedrali normanne del sud. Il tempo qui scorre lento, scandito dalle campane e dall'ombra degli antichi archi.",
      highlights: [
        "La cattedrale normanna",
        "Le botteghe di ceramica artigianale",
        "Panorami sullo Ionio",
      ],
      culture:
        "Un tempo roccaforte bizantina, Gerace mantiene vive le sue tradizioni artigianali, terracotta, tessitura e una cucina radicata nelle colline circostanti.",
      image: img.geraceWide,
    },
    {
      slug: "civita",
      name: "Civita",
      tagline: "Un cuore albanese nel Pollino",
      story:
        "Fondata da profughi albanesi nel XV secolo, Civita parla ancora arbëreshë e porta la sua eredità con orgoglio. Il borgo è sospeso sopra la gola del Raganello, con i tetti coronati dai curiosi comignoli antropomorfi Kodra.",
      highlights: [
        "La gola del Raganello e il Ponte del Diavolo",
        "I comignoli Kodra",
        "Lingua e costume arbëreshë",
      ],
      culture:
        "Civita è un museo vivente della cultura arbëreshë, rito bizantino, canti antichi e feste sopravvissute per cinque secoli lontano dalla loro origine balcanica.",
      image: img.civitaWide,
    },
    {
      slug: "pentedattilo",
      name: "Pentedattilo",
      tagline: "Il borgo fantasma dalle cinque dita",
      story:
        "Chiamato così per la roccia a cinque dita che lo culla, Pentedattilo fu quasi abbandonato nel secolo scorso. Oggi le sue case di pietra si risvegliano lentamente, attirando artisti e viaggiatori verso una delle silhouette più suggestive della Calabria.",
      highlights: [
        "Il Monte Calvario dalle cinque dita",
        "Le botteghe in pietra restaurate",
        "Le feste estive all'aperto",
      ],
      culture:
        "Un borgo che si è rifiutato di scomparire, Pentedattilo è diventato un simbolo del ritorno, di piccoli luoghi che trovano nuova vita attraverso l'artigianato e il racconto.",
      image: img.pentedattiloWide,
    },
    {
      slug: "badolato",
      name: "Badolato",
      tagline: "Un borgo collinare che ha aperto le sue porte",
      story:
        "Digradante lungo una collina ionica, Badolato è un labirinto di chiese, palazzi e vicoli con gradini bianchi. Un tempo in via di spopolamento, si è reinventato accogliendo nuovi residenti, un borgo che ha scelto l'ospitalità come futuro.",
      highlights: [
        "Tredici chiese storiche",
        "I vicoli medievali a gradini",
        "Una cultura dell'accoglienza",
      ],
      culture:
        "La storia di Badolato è fatta di apertura, una comunità che ha trasformato lo spopolamento in rinascita invitando il mondo a vivere tra le sue pietre.",
      image: img.badolatoWide,
    },
    {
      slug: "stilo",
      name: "Stilo",
      tagline: "Bisanzio scritta nel mattone",
      story:
        "Ai piedi del Monte Consolino sorge la Cattolica di Stilo, una chiesetta bizantina perfetta, di mattoni rossi e cinque cupole, che veglia su un borgo che fu un centro del cristianesimo orientale in Occidente.",
      highlights: [
        "La Cattolica di Stilo",
        "I sentieri del Monte Consolino",
        "Città natale di Tommaso Campanella",
      ],
      culture:
        "Stilo custodisce mille anni di devozione bizantina nelle sue pietre, e lo spirito filosofico di Campanella, il pensatore utopista nato tra le sue mura.",
      image: img.stiloWide,
    },
  ] as Destination[],
};

/* -------------------------------------------------------------------------- */
/*  ENGLISH                                                                    */
/* -------------------------------------------------------------------------- */

const en: typeof it = {
  meta: {
    siteName: "Lokalit",
    homeTitle: "Lokalit | Discover Calabria Through Local Eyes",
    homeDescription:
      "Explore authentic villages, local stories and hidden destinations across Calabria with Lokalit.",
    missionTitle: "A Different Way to Travel",
    missionDescription:
      "Our mission: sustainable tourism that protects local identity, supports communities and puts people before places across Calabria.",
    destinationsTitle: "Explore Calabria's Hidden Villages",
    destinationsDescription:
      "Discover Scilla, Gerace, Civita, Pentedattilo, Badolato and Stilo, six hidden Calabrian villages, each with a different story to tell.",
    contactTitle: "Contact",
    contactDescription: "Write to the Lokalit team: we reply in person, usually within 48 hours.",
    privacyTitle: "Privacy",
    privacyDescription: "How Lokalit collects, uses and protects your data.",
  },

  nav: {
    home: "Home",
    mission: "Mission",
    destinations: "Destinations",
    join: "Join the Journey",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAria: "Lokalit, home",
    theme: {
      label: "Toggle theme",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
    },
  },

  language: {
    label: "Language",
    choose: "Choose language",
  },

  cards: {
    experienceCta: "Discover the story",
    destinationCta: "Learn more",
  },

  wishlist: {
    save: "Save this local",
    remove: "Remove from saved",
    navLabel: "Saved locals",
  },

  home: {
    hero: {
      badge: "Your roots, in Calabria",
      titleLine1: "Come back to the village",
      titleLine2: "your grandparents never stopped talking about",
      subtitle:
        "If your roots run through Calabria, a local brings you back to your family's village — the streets, the surnames, the stories your ancestors carried with them. Not a tour: the door home you've been looking for.",
      exploreBtn: "Explore experiences",
      joinBtn: "Join the Journey",
      hostHint: "Francesco, Federica, Maria & more are waiting to host you",
      scroll: "Scroll",
      imageAlt: "A local Calabrian host standing in his village at golden hour",
    },
    experiencesSection: {
      eyebrow: "Meet your hosts",
      title: "It starts with a person, not a place",
      body: "Before the village, there's someone who calls it home. These are a few of the Calabrians ready to share their corner of the south with you.",
    },
    whyLocalsSection: {
      eyebrow: "Why Lokalit",
      title: "Travel that means something",
    },
    villagesSection: {
      eyebrow: "The villages",
      title: "And the places they'll take you",
      viewAll: "View all destinations",
    },
    spirit: {
      eyebrow: "The local spirit",
      title: "Some places are kept alive by their people",
      imageAlt: "Locals sharing a meal at a long table",
      paragraphs: [
        "In Calabria, the most important things are rarely written down. They're passed across a table, walked along a path, sung at a festival, held in the hands of the people who never left.",
        "A tradition isn't a performance here; it's just Tuesday. The bread, the dialect, the way a grandmother folds a pasta shape her family has made for two hundred years.",
        "We don't curate that for you. We simply introduce you to the person who lives it, and step back while a real connection takes its course.",
      ],
    },
    journeySection: {
      eyebrow: "How it works",
      title: "Experience Calabria differently",
    },
    testimonialsSection: {
      eyebrow: "What you could live",
      title: "Not a review yet. What we want to make real.",
      body: "No booking has happened yet. The locals are real — the first days with them are still waiting to be written, maybe by you.",
    },
  },

  mission: {
    hero: {
      eyebrow: "Our mission",
      headline: "A Different Way to Travel",
      subheadline:
        "We believe every village, and every local story, deserves to be discovered.",
      imageAlt: "A Calabrian village clinging to a hillside at sunset",
    },
    vision: {
      eyebrow: "Our vision",
      title: "Tourism that gives more than it takes",
      paragraphs: [
        "Mass tourism has a habit of arriving loudly and leaving little behind. We're interested in the opposite: travel that moves quietly through a place and leaves it stronger than it found it.",
        "That means sustainable visits sized to a village, not a coach park. It means protecting the identity that makes a borgo worth visiting in the first place, the language, the rituals, the rhythm of daily life.",
        "Most of all, it means keeping value where it belongs: with the families who host, cook, guide and welcome. When you spend a day with a local, you're not just seeing Calabria, you're helping a community decide its own future.",
        "We put people before postcards because the encounter is the point. A village is beautiful. A friendship made inside it is unforgettable.",
      ],
    },
    whyCalabria: {
      eyebrow: "Why Calabria",
      title: "The most authentic corner of Italy",
      body: "The toe of the boot is the part most travellers skip. That's exactly why it has kept its soul.",
      items: [
        {
          title: "A culture all its own",
          body: "Greek, Byzantine, Norman and Albanian threads still run through Calabria's villages, in the dialects, the rites, the festivals that never went away.",
          image: img.whyCulture,
        },
        {
          title: "Landscapes that change by the hour",
          body: "Two seas, three mountain ranges, and ancient forests in between. Few regions in Europe hold this much variety in so small a space.",
          image: img.whyLandscape,
        },
        {
          title: "Traditions kept by hand",
          body: "Bread, cheese, silk, ceramics: crafts here are still made the slow way, by people who learned from the generation before them.",
          image: img.whyCrafts,
        },
        {
          title: "A table that tells a story",
          body: "From 'nduja to bergamot, Calabrian food carries its history on the plate, bold, honest, and rooted in the land that made it.",
          image: img.whyFood,
        },
      ],
    },
    valuesSection: {
      eyebrow: "What guides us",
      title: "Our values",
    },
    lookingAhead: {
      eyebrow: "Looking ahead",
      title: "This is only the first village",
      cta: "See where we're starting",
      imageAlt1: "A seaside Calabrian village",
      imageAlt2: "A local host smiling",
      paragraphs: [
        "We're starting where the need is greatest and the welcome is warmest, a handful of Calabrian borghi and the people who know them best.",
        "From here, the map grows one introduction at a time: more villages, more hosts, more stories told in the first person. In time, a region-wide network of locals, each opening a door that no guidebook ever could.",
        "The ambition isn't scale for its own sake. It's to prove that small places, told honestly by the people who live in them, are worth travelling for.",
      ],
    },
  },

  destinationsPage: {
    hero: {
      eyebrow: "Destinations",
      headline: "Explore Calabria's Hidden Villages",
      subheadline: "Every village tells a different story.",
      imageAlt: "A hidden village perched on a Calabrian hillside",
    },
    villageLabel: "Village",
    highlightsHeading: "Highlights",
    cultureHeading: "Cultural note",
    more: {
      eyebrow: "The map keeps growing",
      title: "More villages coming soon",
      body: "Calabria has hundreds of stories we haven't told yet. New borghi and new local hosts are joining all the time, be there when the next door opens.",
      cta: "Join the Journey",
    },
  },

  contactPage: {
    hero: {
      eyebrow: "Contact",
      headline: "Write to us, we'll answer",
      subheadline:
        "A question, a doubt, an idea to share? There's no call center: just the Lokalit team, reading every message.",
      imageAlt: "A Calabrian village overlooking the sea",
    },
    emailHeading: "The most direct way",
    emailBody:
      "Write to us at this address: we read everything personally and usually reply within 48 hours.",
    emailCta: "Email us",
    note: "Lokalit is a project still in its validation phase: no call center, no automated switchboard. Just people who reply.",
  },

  privacyPage: {
    hero: {
      eyebrow: "Privacy",
      title: "How we handle your data",
      subtitle:
        "Short, honest, no unnecessary legalese, because Lokalit is a small project and wants to stay transparent.",
    },
    updatedLabel: "Last updated",
    updatedDate: "July 14, 2026",
    sections: [
      {
        heading: "Who we are",
        body: "Lokalit is an independent project still in its validation phase: at this stage it isn't registered as a company. Your data is handled by the team running the site, reachable at lokalitlokals@gmail.com.",
      },
      {
        heading: "What data we collect",
        body: "Only what you voluntarily leave in a form on the site: your name, email address and, if you choose to specify it, why you're interested or which experience caught your eye. We don't collect payment data: there is no real payment on this site yet.",
      },
      {
        heading: "Why we collect it",
        body: "To reply if you write to us, to update you if you sign up, and to understand whether Lokalit is worth turning into something bigger — that is, literally, the purpose of this site at this stage.",
      },
      {
        heading: "How we store it",
        body: "Messages arrive in our inbox through an automated sending service (Gmail); we don't store them in any database or CRM. They stay there until we delete them, or until you ask us to.",
      },
      {
        heading: "Analytics",
        body: "We use Vercel Analytics to understand, in aggregate form, how many people visit the site and which pages work best. It doesn't use cookies and doesn't track individual visitors across different sites.",
      },
      {
        heading: "Your rights",
        body: "You can ask us at any time to see, correct or delete your data: just write to lokalitlokals@gmail.com. We always reply, in person.",
      },
    ],
  },

  localPage: {
    eyebrow: "Discover the story",
    backLink: "All the locals",
    storyHeading: "Their story",
    offeringsHeading: "What you'll experience together",
    villageHeading: "Their village",
    villageCta: "Explore the village",
    ctaTitle: "Want to meet the people who live these places?",
    ctaBody:
      "Leave us your email and we'll let you know when you can book a day with a local in Calabria.",
    ctaButton: "Join the Journey",
  },

  cta: {
    eyebrow: "Join the community",
    title: "Be the first through the door",
    body: "Be the first to discover new villages, local hosts and authentic stories from Calabria. No noise, just the next door worth knocking on.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    submit: "Keep me updated",
    errorName: "Tell us your name so we know who we're writing to.",
    errorEmail: "That email doesn't look right, mind checking it?",
    successTitle: "Welcome, {name}.",
    successBody: "You're on the list. We'll be in touch when the first stories are ready.",
  },

  booking: {
    cardCta: "Book now",
    badge: "from €49 per person",
    title: "Book a day with {name}",
    motivationLabel: "What brings you here?",
    motivationOptions: [
      { value: "roots", label: "I have Calabrian roots" },
      { value: "authentic", label: "Looking for an authentic trip" },
      { value: "curious", label: "Just planning, curious" },
      { value: "other", label: "Other" },
    ],
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    submit: "Request booking",
    disclaimer: "No charge: this is a test to see if this experience",
    errorMotivation: "Tell us what brings you here, one tap is enough.",
    errorName: "Tell us your name so we know who we're writing to.",
    errorEmail: "That email doesn't look right, mind checking it?",
    errorGeneric: "Something went wrong, please try again.",
    successTitle: "Thank you, {name}!",
    successBody:
      "Your request helps us understand if this experience is worth launching: what you just sent wasn't a real payment. If there's enough interest, we'll reach out to arrange the actual booking.",
    close: "Close",
    faqHeading: "Before you ask",
    faq: [
      {
        question: "Who are these hosts, really?",
        answer:
          "Real people from Calabria we've met in person: Francesco, Federica, Maria and the others on the site.",
      },
      {
        question: "What happens after I submit?",
        answer:
          "We write back within 48 hours to arrange the details. No automatic charge, no surprises.",
      },
      {
        question: "Can I cancel?",
        answer: "Yes, any time before the day is confirmed — just reply to our email.",
      },
    ],
    abandon: {
      title: "What stopped you?",
      options: [
        { value: "price", label: "The price" },
        { value: "unsure", label: "Not sure yet" },
        { value: "thinking", label: "Want to think about it" },
        { value: "other", label: "Other" },
      ],
      skip: "Skip",
      thanks: "Thanks, that helps us improve.",
    },
  },

  footer: {
    tagline:
      "Meet Calabria through its people. Authentic encounters, hidden villages, and the stories that live between them.",
    exploreHeading: "Explore",
    stayHeading: "Stay close",
    stayBody: "New villages, new hosts, new stories, straight to your inbox.",
    joinLink: "Join the journey →",
    madeWith: "Made with care in Calabria.",
    privacy: "Privacy",
    contact: "Contact",
  },

  experiences: [
    {
      slug: "francesco",
      name: "Francesco",
      village: "Scilla",
      villageSlug: "scilla",
      role: "Fisherman's son · Sea guide",
      title: "Hidden beaches & a sunset aperitivo over the Strait",
      description:
        "A fisherman's son who knows every cove below Chianalea. Francesco walks you down to the water where the light turns gold, then pours something local as the ferries cross to Sicily.",
      image: img.francesco,
      portrait: img.francescoPortrait,
      story: [
        "Francesco was born in Chianalea, the quarter of Scilla where the fishermen's houses rise straight out of the sea. His father and grandfather spent their lives on the Strait, and he learned to read the currents before he learned to write.",
        "He knows every hidden cove below the village, the ones where the water stays clear even at the height of summer and the ferries to Sicily seem to brush the horizon. These are beaches you won't find on any map, reachable only by someone who grew up here.",
        "As the sun begins to drop, Francesco brings out something local, a wine from the hills, a plate of just-caught fish, and tells the story of the Strait the way only a son of the sea can: between the legends of Scylla and Charybdis and the tales of real fishermen.",
      ],
      offerings: [
        "A descent to Chianalea's hidden coves",
        "A sunset aperitivo over the Strait of Messina",
        "Fresh swordfish and fishermen's tales",
        "The legends of Scylla and Charybdis, told on the water",
      ],
      quote: "The sea here isn't something you visit. It's something you listen to.",
    },
    {
      slug: "federica",
      name: "Federica",
      village: "Sila",
      role: "Keeper of the woods · Mountain guide",
      title: "Ancient forests & the traditions kept inside them",
      description:
        "Federica grew up between the pines of the Sila plateau. She reads the woods like a calendar, mushrooms, resin, the old grazing paths, and shares the rituals her grandmother never wrote down.",
      image: img.federica,
      portrait: img.federicaPortrait,
      story: [
        "Federica grew up among the larch pines of the Sila plateau, where winter brings snow and summer a silence you can hear. Her family always lived off the forest: firewood, mushrooms, resin, and the pastures that change colour with every season.",
        "She walks among the trees the way you'd walk through your own home. She recognises shepherds' paths long forgotten, knows where the porcini grow after the rain, and which herbs still end up in the mountain recipes.",
        "More than a guide, Federica is a keeper: of the rituals her grandmother never wrote down, of the stories the forest holds, of a slow way of living the Sila has protected for generations.",
      ],
      offerings: [
        "A walk along the ancient grazing paths",
        "Foraging for mushrooms and mountain herbs",
        "Rituals and traditions passed down by voice",
        "The silence of one of Europe's oldest forests",
      ],
      quote: "The forest remembers everything. You just have to know how to listen.",
    },
    {
      slug: "maria",
      name: "Maria",
      village: "Gerace",
      villageSlug: "gerace",
      role: "Family cook · Recipe keeper",
      title: "Family recipes & the stories folded into them",
      description:
        "In a kitchen that has fed five generations, Maria teaches the pasta her family makes for feast days, and tells you why each shape exists, between the flour and the laughter.",
      image: img.maria,
      portrait: img.mariaPortrait,
      story: [
        "Maria cooks in the same kitchen where five generations of her family have kneaded, argued and laughed. In Gerace, a medieval town looking out over the Ionian, recipes aren't written down: they're watched, learned by hand, handed on.",
        "She knows the feast-day pasta, the kind that takes a whole day and the whole family around the table. Every shape has a name, an occasion, a story, and Maria tells them while the flour flies and the water boils.",
        "With her you don't just learn a recipe. You learn why it exists: the saint it honours, the grandmother who invented it by mistake, the reason this house does it this way and no other.",
      ],
      offerings: [
        "A hands-on pasta lesson, shape by shape",
        "Feast-day recipes passed down five generations",
        "A shared lunch at the family table",
        "A stroll through Gerace's stone alleys",
      ],
      quote: "A recipe is a story you can eat.",
    },
  ],

  villages: [
    {
      name: "Scilla",
      description:
        "A fishing village stacked above the sea, where the Strait of Messina glows at dusk and the old quarter of Chianalea floats on the water.",
      image: img.scilla,
    },
    {
      name: "Gerace",
      description:
        "A medieval hill town of stone alleys and a Norman cathedral, looking out over the Ionian coast from its quiet, sun-warmed ramparts.",
      image: img.gerace,
    },
    {
      name: "Civita",
      description:
        "An Arbëreshë village clinging to the Raganello gorge, where an Albanian heritage still lives in language, costume and the famous Kodra chimneys.",
      image: img.civita,
    },
  ],

  whyLocals: [
    {
      title: "Authentic connections",
      body: "Meet people who truly know their community, not guides reading a script, but neighbours sharing the place they call home.",
    },
    {
      title: "Hidden places",
      body: "Discover destinations beyond the postcards: the cove, the kitchen, the path that never makes it into a guidebook.",
    },
    {
      title: "Meaningful travel",
      body: "Spend your hours inside real culture, the traditions, the dialect, the small daily rituals that make Calabria itself.",
    },
  ],

  journeySteps: [
    {
      label: "Discover",
      body: "Browse villages and the locals who live there. Choose the person and the story that pulls at you.",
    },
    {
      label: "Connect",
      body: "Meet your host, a real Calabrian who opens their door, their table, or their favourite stretch of coast.",
    },
    {
      label: "Explore",
      body: "Walk the places only locals know, at the slow pace the south was made for.",
    },
    {
      label: "Remember",
      body: "Leave with a friendship, a recipe, a story, the kind of memory no itinerary can manufacture.",
    },
  ],

  testimonials: [
    {
      name: "Maria",
      from: "Gerace",
      quote:
        "You'll make pasta in her kitchen. She'll send you home with the recipe. Not a tour — a friendship.",
    },
    {
      name: "Francesco",
      from: "Scilla",
      quote:
        "He'll take you to a beach you'd never find alone, then pour something local as the sun sets over Sicily. It will feel like being let in on a secret.",
    },
    {
      name: "Federica",
      from: "Sila",
      quote:
        "You'll walk the Sila by her side and understand Calabria for the first time. The forest will become a place that remembers people.",
    },
  ],

  values: [
    {
      title: "Authenticity",
      body: "We show Calabria as it is, unstaged, unhurried, and proud of its own character.",
    },
    {
      title: "Respect",
      body: "Communities set the terms. We travel as guests, never as an audience.",
    },
    {
      title: "Community",
      body: "Every encounter keeps value inside the village, with the people who make it worth visiting.",
    },
    {
      title: "Discovery",
      body: "We follow curiosity off the main road, toward the places that rarely get told.",
    },
  ],

  destinations: [
    {
      slug: "scilla",
      name: "Scilla",
      tagline: "Where the village floats on the sea",
      story:
        "Homer placed a monster in these waters; today Scilla offers something gentler. Fishermen's houses rise straight from the waves in the Chianalea quarter, and at dusk the whole Strait of Messina turns to copper as Sicily glows on the horizon.",
      highlights: [
        "Chianalea's seafront houses",
        "Sunset over the Strait",
        "Fresh swordfish at the harbour",
      ],
      culture:
        "Scilla's identity is bound to the sea, to the spadara boats that still hunt swordfish in spring, and to a community that has lived between rock and water for centuries.",
      image: img.scillaWide,
    },
    {
      slug: "gerace",
      name: "Gerace",
      tagline: "A medieval balcony over the Ionian",
      story:
        "Perched on a rock above the Locride, Gerace is a maze of stone alleys, hidden courtyards and one of the largest Norman cathedrals in the south. Time moves slowly here, measured by church bells and the shade of old archways.",
      highlights: [
        "The Norman cathedral",
        "Artisan ceramics workshops",
        "Panoramic Ionian viewpoints",
      ],
      culture:
        "Once a Byzantine stronghold, Gerace keeps its craft traditions alive, terracotta, weaving and a cuisine rooted in the surrounding hills.",
      image: img.geraceWide,
    },
    {
      slug: "civita",
      name: "Civita",
      tagline: "An Albanian heart in the Pollino",
      story:
        "Founded by Albanian refugees in the 15th century, Civita still speaks Arbëreshë and wears its heritage with pride. The village hangs above the Raganello gorge, its rooftops crowned by the curious anthropomorphic Kodra chimneys.",
      highlights: [
        "The Raganello gorge & Devil's Bridge",
        "Kodra chimneys",
        "Arbëreshë language & costume",
      ],
      culture:
        "Civita is a living museum of Arbëreshë culture, Byzantine rite, ancient songs, and festivals that have survived five centuries far from their Balkan origin.",
      image: img.civitaWide,
    },
    {
      slug: "pentedattilo",
      name: "Pentedattilo",
      tagline: "The five-fingered ghost village",
      story:
        "Named for the five-fingered rock that cradles it, Pentedattilo was nearly abandoned in the last century. Today its stone houses are slowly waking again, drawing artists and wanderers to one of Calabria's most haunting silhouettes.",
      highlights: [
        "The five-fingered Monte Calvario",
        "Restored stone workshops",
        "Open-air summer festivals",
      ],
      culture:
        "A village that refused to disappear, Pentedattilo has become a symbol of return, of small places finding new life through craft and storytelling.",
      image: img.pentedattiloWide,
    },
    {
      slug: "badolato",
      name: "Badolato",
      tagline: "A hill town that opened its doors",
      story:
        "Cascading down an Ionian hillside, Badolato is a labyrinth of churches, palazzi and white-stepped lanes. Once emptying out, it reinvented itself by welcoming new residents, a village that chose hospitality as its future.",
      highlights: [
        "Thirteen historic churches",
        "Stepped medieval lanes",
        "A culture of welcome",
      ],
      culture:
        "Badolato's story is one of openness, a community that turned depopulation into renewal by inviting the world to live among its stones.",
      image: img.badolatoWide,
    },
    {
      slug: "stilo",
      name: "Stilo",
      tagline: "Byzantium written in brick",
      story:
        "At the foot of Monte Consolino stands the Cattolica di Stilo, a tiny, perfect Byzantine church of red brick and five cupolas, watching over a village that once was a centre of Eastern Christianity in the West.",
      highlights: [
        "The Cattolica di Stilo",
        "Monte Consolino trails",
        "Birthplace of Tommaso Campanella",
      ],
      culture:
        "Stilo carries a thousand years of Byzantine devotion in its stones, and the philosophical spirit of Campanella, the utopian thinker born within its walls.",
      image: img.stiloWide,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Export                                                                     */
/* -------------------------------------------------------------------------- */

export type Dictionary = typeof it;

export const translations: Record<Locale, Dictionary> = { it, en };
