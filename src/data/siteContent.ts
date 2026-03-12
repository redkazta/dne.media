export type SitePage = {
  slug: string;
  title: string;
  kind: "home" | "about" | "clients" | "artists" | "contact" | "category" | "profile";
};

export const pages: SitePage[] = [
  { slug: "", title: "DNE Media", kind: "home" },
  { slug: "artists", title: "Artists | DNE Media", kind: "artists" },
  { slug: "sheco", title: "Sheco | DNE Media", kind: "profile" },
  { slug: "clients", title: "Clients | DNE Media", kind: "clients" },
  { slug: "concerts", title: "Concerts | DNE Media", kind: "category" },
  { slug: "full-set-recordings", title: "Full set recordings | DNE Media", kind: "category" },
  { slug: "recap-videos", title: "Aftermovies | DNE Media", kind: "category" },
  { slug: "nebasa", title: "Nebasa | DNE Media", kind: "profile" },
  { slug: "contact", title: "Contact | DNE Media", kind: "contact" },
  { slug: "jonter", title: "Jonter | DNE Media", kind: "profile" },
  { slug: "a-zar", title: "A-ZAR | DNE Media", kind: "profile" },
  { slug: "live-clips", title: "Video | DNE Media", kind: "category" },
  { slug: "backstage", title: "Backstage | DNE Media", kind: "category" },
  { slug: "multi-cam", title: "Multi-cam | DNE Media", kind: "category" },
  { slug: "about", title: "About | DNE Media", kind: "about" },
  { slug: "alex-zapata", title: "Alex Zapata | DNE Media", kind: "profile" }
];

export const aboutCopy = [
  "DNE is a full-service production studio & talent management agency led by a young and passionate team of visionaries.",
  "Based in Mexico City, specializing in creating engaging & emotive content and strategies to help you reach your goals.",
  "We offer a wide range of solutions, including:",
  "We work with artists, brands, clients and events across the globe.",
  "Our experience and creative vision have opened the door to us being selected to cover many of the largest concerts and festivals.",
  "Let's tell our story together."
];

export const services = [
  "Advancing Delivery",
  "Artist Management",
  "Booking",
  "Editing",
  "Event Management",
  "Full on-site management",
  "Marketing",
  "Photo Coverage",
  "Touring Logistics",
  "Video Coverage"
];

export const roster = [
  "12TH PLANET",
  "ALFA ROMERO",
  "ANDREW RAYEL",
  "ARGY",
  "AUSTIN MILLZ",
  "AWAKEND",
  "AYYBO",
  "BAD BOOMBOX",
  "BARELY ALIVE",
  "BLEU CLAIR",
  "BLOND:ISH",
  "BOB MOSES",
  "BORN DIRTY",
  "CAMELPHAT",
  "CASSIAN",
  "CHRIS LAKE",
  "COONE",
  "COSMIC GATE",
  "CRYSTAL SKIES",
  "DA TWEEKAZ",
  "DENIS SULTA",
  "DJS FROM MARS",
  "DOMBRESKY",
  "ELI BROWN",
  "ELIZA ROSE",
  "ELLA ROMAND",
  "EMO NITE",
  "FEDDE LE GRAND",
  "FISHER",
  "FORESTER",
  "GABRY PONTE",
  "GALANTIS",
  "GIUSEPPE OTTAVIANI",
  "GOOM GUM",
  "GUDFELLA",
  "HABSTRAKT",
  "HAMDI",
  "HYPATON",
  "J. WORRA",
  "JAMES DE TORRES",
  "JANIS ZIELINSKI",
  "JEFFREY SUTORIUS",
  "JOE GROSSMAN",
  "KAIVON",
  "KASIA",
  "KILIMANJARO",
  "KITTY AMOR",
  "KOROLOVA",
  "KREWELLA",
  "KRYPTOGRAM",
  "LAMORN",
  "LF SYSTEM",
  "LP GIOBBI",
  "MAGNUS",
  "MAKÈZ",
  "MANDRAGORA",
  "MARNIK",
  "MARSH",
  "MASSANO",
  "MATRODA",
  "MAXIM LANY",
  "MHA IRI",
  "MISCHLUFT",
  "MIYUKI",
  "MUST DIE!",
  "NETSKY",
  "NIGHTFUNK",
  "NOSTALGIX",
  "ODD MOB",
  "ODDKIDOUT",
  "OLLIE LISHMAN",
  "PARALLELLE",
  "REBŪKE",
  "RINZEN",
  "RIOT TEN",
  "SAN PACHO",
  "SARA LANDRY",
  "SEVENN",
  "SG LEWIS",
  "SHALLOU",
  "SHERMANOLOGY",
  "SHIBA SAN",
  "SHOWTEK",
  "SILVER PANDA",
  "SINCA",
  "SMLE",
  "SOLARDO",
  "STAR SEED",
  "SURF MESA",
  "THE DRIVER ERA",
  "TOKiMONSTA",
  "TRANCE WAX",
  "TSU NAMI",
  "UGO BANCHI",
  "VINI VICI",
  "VIRTUAL RIOT",
  "W&W",
  "WHOMADEWHO",
  "Y DO I."
];

export const portfolioCategories = [
  { slug: "concerts", label: "Concerts" },
  { slug: "full-set-recordings", label: "Full Set Recordings" },
  { slug: "recap-videos", label: "Aftermovies" },
  { slug: "live-clips", label: "Live Clips" },
  { slug: "backstage", label: "Backstage" },
  { slug: "multi-cam", label: "Multi-cam" }
];

export const managementProfiles = [
  { slug: "sheco", label: "Sheco" },
  { slug: "nebasa", label: "Nebasa" },
  { slug: "jonter", label: "Jonter" },
  { slug: "a-zar", label: "A-ZAR" },
  { slug: "alex-zapata", label: "Alex Zapata" }
];

export const contacts = [
  { name: "Daniel Montiel", email: "daniel@dne.media" },
  { name: "Enrique Ramirez", email: "enrique@dne.media" }
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/dne.media" }
];

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Photo", href: "/concerts" },
  { label: "Video", href: "/live-clips" },
  { label: "About", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Artists", href: "/artists" },
  { label: "Contact", href: "/contact" },
  { label: "Management & Booking", href: "/artists" }
];
