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

export interface PortfolioCategory {
  slug: string;
  label: string;
  image?: string;
  description?: string;
  tags?: string[];
}

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "concerts", label: "Concerts", image: "/images/concerts-cover.jpg", description: "Capturing the energy of live performances.", tags: ["Photography"] },
  { slug: "full-set-recordings", label: "Full Set Recordings", description: "Complete performance recordings.", tags: ["Video"] },
  { slug: "recap-videos", label: "Aftermovies", description: "Highlight reels and event recaps.", tags: ["Video"] },
  { slug: "live-clips", label: "Live Clips", description: "Short form content for social media.", tags: ["Video", "Social"] },
  { slug: "backstage", label: "Backstage", description: "Behind the scenes access.", tags: ["Photography", "Video"] },
  { slug: "multi-cam", label: "Multi-cam", description: "Professional multi-camera productions.", tags: ["Video", "Production"] }
];

export interface ArtistProfile {
  slug: string;
  label: string;
  bio: string;
  image: string;
  tags?: string[];
  socials?: { label: string; url: string }[];
}

export const managementProfiles: ArtistProfile[] = [
  { 
    slug: "sheco", 
    label: "Sheco",
    bio: "Sergio Ballesteros better known as Sheco, was introduced in the electronic music industry, being identified by his unique sound and essence in the Progressive House & Techno.",
    image: "/images/artists/sheco.png",
    tags: ["Progressive House", "Techno"],
    socials: [
      { label: "Spotify", url: "https://open.spotify.com/artist/0HVhaviIJ5Kul6EwtWrbGm?si=fKxv5tqlTy-J1an3T4eP2w" },
      { label: "Soundcloud", url: "https://soundcloud.com/shecomusic" },
      { label: "Facebook", url: "https://www.facebook.com/ShecoOfficial/" },
      { label: "Instagram", url: "https://www.instagram.com/shecomusic/" }
    ]
  },
  { 
    slug: "nebasa", 
    label: "Nebasa",
    bio: "Nebasa is an artist and producer from Mexico City who has captivated the national and international emerging scene with his style that blends melodic electronic music genres with Hyperpop, Indie Rock, and R&B. Starting his project in 2020, Nebasa has performed at national venues such as Bajo Circuito and Hookah Condesa, as well as international events like 6th Saint Sense in Guatemala. He has also been featured as a special guest at festivals such as EDC Mexico (2023) and Mad House Pepsi Center (2022).",
    image: "/images/artists/nebasa.png",
    tags: ["Hyperpop", "Indie Rock", "R&B", "Melodic Electronic"],
    socials: [
      { label: "Spotify", url: "https://open.spotify.com/intl-es/artist/6C8sFdGAgfgSiInJ8eI3EE" },
      { label: "Soundcloud", url: "https://soundcloud.com/nebasa" },
      { label: "Facebook", url: "https://www.facebook.com/nebasa.music" },
      { label: "Youtube", url: "https://www.youtube.com/channel/UC2GjAJ9iuL5AMwRfKlRhUBw" },
      { label: "Instagram", url: "https://www.instagram.com/nebasa.music/" },
      { label: "Twitter", url: "https://twitter.com/nebasa_music" },
      { label: "TikTok", url: "https://www.tiktok.com/@nebasa.music" }
    ]
  },
  { 
    slug: "jonter", 
    label: "Jonter",
    bio: "Jonter is a 23-year-old DJ and producer from New York City, known for his innovative approach to the Dubstep and Riddim genres. Jonter started to gain recognition in the dubstep scene with support from notable acts like ATLIENS, Excision, JEANIE, Jessica Audiffred, Louiejaxx, Riot Ten and TRVCY.",
    image: "/images/artists/jonter.png",
    tags: ["Dubstep", "Riddim"],
    socials: [
      { label: "Spotify", url: "https://open.spotify.com/artist/7FdaG4SH0YSlPMKhp2UVZz?si=2BxkvyKCQtOPCjgVYJyTPA" },
      { label: "Soundcloud", url: "https://soundcloud.com/jonterwav" },
      { label: "Facebook", url: "https://www.facebook.com/JEFFSUAOFFICIAL" },
      { label: "Instagram", url: "https://www.instagram.com/jontermusic/" }
    ]
  },
  { 
    slug: "a-zar", 
    label: "A-ZAR",
    bio: "Aldo Sarabia better known as A-ZAR, is a rising producer, born in Toluca, state capital of the State of Mexico.",
    image: "/images/artists/a-zar.png",
    tags: ["Producer"],
    socials: [
      { label: "Spotify", url: "https://open.spotify.com/artist/15YaHwQxIC59q8Y4kHbI46?si=PM8NKneVSey-lF-6rtEx-Q" },
      { label: "Soundcloud", url: "https://soundcloud.com/a-zarmusic" },
      { label: "Facebook", url: "https://www.facebook.com/AzarMusic" },
      { label: "Instagram", url: "https://www.instagram.com/a.zarmusic/" },
      { label: "Twitter", url: "https://twitter.com/azarmusic_" }
    ]
  },
  { 
    slug: "alex-zapata", 
    label: "Alex Zapata",
    bio: "Alejandro Zapata, better known as Alex Zapata, is a DJ, Producer, Musician, Composer, and Pianist at just 22 years old who in over 2 years, has managed to establish himself as an emerging artist from Mexico City. Alex Zapata's sound is constantly evolving and versatile, characterized by his skillful use of vocals, latin sounds, synthesized elements, real instruments, all under an exquisite rhythmic base and bassline.",
    image: "/images/artists/alex-zapata.png",
    tags: ["DJ", "Producer", "Musician", "Composer"],
    socials: [
      { label: "Spotify", url: "https://open.spotify.com/artist/4843zV3Deug2mVtdNLLsyg?si=qgpolFZ3TXGKIlGdGl_S-g" },
      { label: "Soundcloud", url: "https://soundcloud.com/alex-zapata-24923260" },
      { label: "Instagram", url: "https://www.instagram.com/alexzapataaa/" },
      { label: "Twitter", url: "https://twitter.com/alexzapaaata" },
      { label: "TikTok", url: "https://www.tiktok.com/@alexzapatamusic" }
    ]
  }
];

export const contacts = [
  { name: "Daniel Montiel", email: "daniel@dne.media" },
  { name: "Enrique Ramirez", email: "enrique@dne.media" },
  { name: "Angel", email: "angel@dne.media", role: "System Administrator" }
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
