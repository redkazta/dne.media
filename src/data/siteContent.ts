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

const wixMedia = (asset: string) => `https://static.wixstatic.com/media/${asset}`;

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "concerts", label: "Concerts", image: wixMedia("99ddea_01ba5729eb9247d395f05914ef3034a7~mv2.jpg"), description: "Capturing the energy of live performances.", tags: ["Photography"] },
  { slug: "full-set-recordings", label: "Full Set Recordings", image: wixMedia("99ddea_561c006619824b009782310128741d9c~mv2.jpg"), description: "Complete performance recordings.", tags: ["Video"] },
  { slug: "recap-videos", label: "Aftermovies", image: wixMedia("99ddea_4570505321de4c5baff334b1bb20b25f~mv2.jpg"), description: "Highlight reels and event recaps.", tags: ["Video"] },
  { slug: "live-clips", label: "Live Clips", image: wixMedia("99ddea_197b874691fa4989a2e5e4a053aae83a~mv2.jpg"), description: "Short form content for social media.", tags: ["Video", "Social"] },
  { slug: "backstage", label: "Backstage", image: wixMedia("99ddea_0a26eb5d41f44fa9b3d0ebb7dbaaafdd~mv2.jpg"), description: "Behind the scenes access.", tags: ["Photography", "Video"] },
  { slug: "multi-cam", label: "Multi-cam", image: wixMedia("99ddea_13da76f76067473685d99cc7b692b669~mv2.jpg"), description: "Professional multi-camera productions.", tags: ["Video", "Production"] }
];

export const homeFeaturedMedia = [
  wixMedia("99ddea_0648b441b9424086bcd81414c9d94200~mv2.jpg"),
  wixMedia("99ddea_17880a67b9694f9aa11fc68cbe0dc06d~mv2.jpg"),
  wixMedia("99ddea_27d1c3adda624d4aa9116edf9f14b71d~mv2.jpg"),
  wixMedia("99ddea_2a89aa8dc65a44fc9a0f9c8bf687e20d~mv2.jpg"),
  wixMedia("99ddea_2aa12ddf851147ebb127db8e754205f9~mv2.jpg"),
  wixMedia("99ddea_2ed813a41e934fe8ae438fa70d063cf5~mv2.jpg"),
  wixMedia("99ddea_2f2026f54f3d4053b95a86c9170e6731~mv2.jpg"),
  wixMedia("99ddea_38b2ac68cfa74caebe2ecc1eb671b3d1~mv2.jpg"),
  wixMedia("99ddea_4df3a6659a334314b2a33f8b03902f9b~mv2.jpg"),
  wixMedia("99ddea_673f875c4ea94779929e418a4a032911~mv2.jpg"),
  wixMedia("99ddea_7e760e8ca8a8439a9b306dfaf34ff55e~mv2.jpg"),
  wixMedia("99ddea_8042a7b2923743498eb0a6f28e9494bf~mv2.jpg"),
  wixMedia("99ddea_84797bc743bc4ae0aadca2f57c7ba945~mv2.jpg"),
  wixMedia("99ddea_936862ec7ff6472b98376bee7895294f~mv2.jpg"),
  wixMedia("99ddea_950d05604009430f96d0511882b9e488~mv2.jpg"),
  wixMedia("99ddea_9b5723e57f214527a7839cb6b67f6582~mv2.jpg"),
  wixMedia("99ddea_9d6d24ce5408453abe3fc9cdf6706970~mv2.jpg"),
  wixMedia("99ddea_a7048c68d39d43c09bfb5fcfb0917325~mv2.jpg"),
  wixMedia("99ddea_ab9eb2e0a4a443ffa928d74be31176b4~mv2.jpg"),
  wixMedia("99ddea_aea5caaf1b9b4ecf9a569f409a081c3e~mv2.jpg"),
  wixMedia("99ddea_b4a55c31c9cc4f0194e2fb4a344ce71e~mv2.jpg"),
  wixMedia("99ddea_dcc96f50b6f34d82ba9909ea4c3ef426~mv2.jpg"),
  wixMedia("99ddea_e433ce6937f2407f89712fc9a96db2d2~mv2.jpg")
];

export const categoryMediaBySlug: Record<string, string[]> = {
  concerts: [
    wixMedia("99ddea_01ba5729eb9247d395f05914ef3034a7~mv2.jpg"),
    wixMedia("99ddea_05801d07fa97430296b5f2d3bff73251~mv2.jpg"),
    wixMedia("99ddea_0b2b155af85d40969fe16501a67e6715~mv2.jpg"),
    wixMedia("99ddea_142b6d013c104e8cae2a55af0830ecea~mv2.jpg"),
    wixMedia("99ddea_2520e1ec98c747cc82a2cc1ddcb6563e~mv2.jpg"),
    wixMedia("99ddea_2967142818a1495ab52f69b139ba998f~mv2.jpg"),
    wixMedia("99ddea_31423f6ebe104bb5bac296cdd23786fe~mv2.jpg"),
    wixMedia("99ddea_3528de9224e946adb9f3aae64fb8a06c~mv2.jpg"),
    wixMedia("99ddea_3c4c5bc6baea4cb38dac12ce532bffce~mv2.jpg"),
    wixMedia("99ddea_4dd430a5ec1d4958b89ce8b2bcbec2a6~mv2.jpg"),
    wixMedia("99ddea_6321b871f3aa472aa844c3df69c5af8e~mv2.jpg"),
    wixMedia("99ddea_69131071e11a4d829697f62a958fd760~mv2.jpg"),
    wixMedia("99ddea_79ce3f1cf6cd47ab9bd3b448d2177c08~mv2.jpg"),
    wixMedia("99ddea_8e1a8cea7e104fd0bfac3c214fbcb588~mv2.jpg"),
    wixMedia("99ddea_8eec21e795584d9bbbb30e7655a017dd~mv2.jpg"),
    wixMedia("99ddea_99c1732ec7bb481f84eb773560499281~mv2.jpg"),
    wixMedia("99ddea_9d88b02aafab46be90069ed983962422~mv2.jpg"),
    wixMedia("99ddea_a8e70d84426545deac74aee17cfd50a2~mv2.jpg"),
    wixMedia("99ddea_ba44a08fe20b40fd9eaa3c0cbf918bf3~mv2.jpg"),
    wixMedia("99ddea_ba619e58191b49d8ba48b702bc8c5221~mv2.jpg"),
    wixMedia("99ddea_c00939cf41bb490b99f93620924cfa23~mv2.jpg"),
    wixMedia("99ddea_d179fb3b8d644702a04b86efe3448ca9~mv2.jpg"),
    wixMedia("99ddea_d2c92a3cd5d7475993b6ea41c882fd54~mv2.jpg")
  ],
  "live-clips": [
    wixMedia("99ddea_197b874691fa4989a2e5e4a053aae83a~mv2.jpg"),
    wixMedia("99ddea_4574bd95503a4299a68aebb5bffd1c67~mv2.jpg"),
    wixMedia("99ddea_4b4401fd845544a792e526d801a63f0f~mv2.jpg"),
    wixMedia("99ddea_52ac2fbd17794a2a854fa4d5c9a2ae11~mv2.jpg"),
    wixMedia("99ddea_5702ac1cf5f74795a24520c21c1f81e1~mv2.jpg"),
    wixMedia("99ddea_627ae48c75bf467e86da214298dcfa60~mv2.jpg"),
    wixMedia("99ddea_80cc09f35d0c484e8356e04a7c0b8c7c~mv2.jpg"),
    wixMedia("99ddea_894fc3270dfd4051866cc773395ad502~mv2.jpg"),
    wixMedia("99ddea_8b5502a5650d4a61aba133fff0ff8950~mv2.jpg"),
    wixMedia("99ddea_8ce0e219a6b643d98a03a30ae5456d9d~mv2.jpg"),
    wixMedia("99ddea_93a6f564f4614e5493ab1faf5f8fe8ea~mv2.jpg"),
    wixMedia("99ddea_a06fad9295964140bcc161ad549c0052~mv2.jpg"),
    wixMedia("99ddea_a7c10552169b47e998c4b8c89290692c~mv2.jpg"),
    wixMedia("99ddea_af96a327d8064a698bc7ad8e0647a5e1~mv2.jpg"),
    wixMedia("99ddea_b1fe296defce4599a361fbe2fdab1697~mv2.jpg"),
    wixMedia("99ddea_bebb2f597e3445d9aa135b1b7dd06339~mv2.jpg"),
    wixMedia("99ddea_c32077ef3fe84a2cb963baa926525f9c~mv2.jpg"),
    wixMedia("99ddea_c4fb480bd0ae42d9a7980301c870a30a~mv2.jpg"),
    wixMedia("99ddea_cca81eaa147b4b289969122f4eb2dac6~mv2.jpg"),
    wixMedia("99ddea_cd475bcec92840ea9ee362e2e233b249~mv2.jpg"),
    wixMedia("99ddea_d5ead33c1ad24ad8af65a93531e8d18b~mv2.jpg"),
    wixMedia("99ddea_e10606a4fc564f8c8c41f7c65650d466~mv2.jpg"),
    wixMedia("99ddea_e383e3cc3695465cbec7cd12ef91822f~mv2.jpg")
  ],
  "full-set-recordings": [
    wixMedia("99ddea_561c006619824b009782310128741d9c~mv2.jpg"),
    wixMedia("99ddea_5b4e0510db9145458f5a42d08f0773c4~mv2.jpg"),
    wixMedia("99ddea_683f0646b71a4757a03b4119fad8320d~mv2.jpg"),
    wixMedia("99ddea_7637ecf9759e4b0492eed23a09ed7d66~mv2.jpg"),
    wixMedia("99ddea_9a1efa4363c54f3bad4fe56904015d30~mv2.jpg"),
    wixMedia("99ddea_9c933b65a2cf4a888b3a052b4cdb0785~mv2.jpg"),
    wixMedia("99ddea_ff9e67843f69499fa4223eb615bf8bdc~mv2.jpg")
  ],
  "recap-videos": [
    wixMedia("99ddea_4570505321de4c5baff334b1bb20b25f~mv2.jpg"),
    wixMedia("99ddea_4ccede183808430ea4bb2b69303f5502~mv2.jpg"),
    wixMedia("99ddea_4d4617bc540f4f62a7512c06a926cfae~mv2.jpg"),
    wixMedia("99ddea_5a221fd54ec34f4f9ab2e3581f0237a1~mv2.jpg"),
    wixMedia("99ddea_5ea1ea4e001f4fa0869b97ae30c8a660~mv2.jpg"),
    wixMedia("99ddea_5eaa893c7a0d4aee9c012936e39c4947~mv2.jpg"),
    wixMedia("99ddea_63543df01409490f872b4a3cecf2c72d~mv2.jpg"),
    wixMedia("99ddea_7292938058f7408fbfa98a8757802d6d~mv2.jpg"),
    wixMedia("99ddea_78ec128ebe52414a808d736c1c59ede7~mv2.jpg"),
    wixMedia("99ddea_790db49a048f4f538f38e05bd2c51571~mv2.jpg"),
    wixMedia("99ddea_9f46dbcdab5e46ffa38423f3aaaed721~mv2.jpg"),
    wixMedia("99ddea_a3f8251ba0624d649423b982eef92628~mv2.jpg"),
    wixMedia("99ddea_a49f242637bc41dc9b4a6c2010d18e7a~mv2.jpg"),
    wixMedia("99ddea_a9aaf00359624712b2d0fe9900926cdf~mv2.jpg"),
    wixMedia("99ddea_ba41ecc27e3c412ca3241200e91b3f49~mv2.jpg"),
    wixMedia("99ddea_e7765f28222e409bb7dce5c2d502a56e~mv2.jpg"),
    wixMedia("99ddea_f12e4340db6045b08ffa70520f6c1680~mv2.jpg"),
    wixMedia("99ddea_f326c6cd9de841df808227c0fc81f08f~mv2.jpg"),
    wixMedia("99ddea_f87bb1d0ba5c41f4b95272d5a2ef4dd9~mv2.jpg")
  ],
  backstage: [
    wixMedia("99ddea_0a26eb5d41f44fa9b3d0ebb7dbaaafdd~mv2.jpg"),
    wixMedia("99ddea_1061c7a1516a4549b12effffd7718a45~mv2.jpg"),
    wixMedia("99ddea_114f797dd19a4c15ab558487f6c05273~mv2.jpg"),
    wixMedia("99ddea_17622e0d24f24963aae3d7d75452b7a2~mv2.jpg"),
    wixMedia("99ddea_1938419ef428489292d35428bd5b8934~mv2.jpg"),
    wixMedia("99ddea_2adddf568dd24597b0e6fcab2d5cf633~mv2.jpg"),
    wixMedia("99ddea_2b6bbe426f5d4bfcb6101f7a71681347~mv2.jpg"),
    wixMedia("99ddea_2d807941242643f4acdbda449cc1322e~mv2.jpg"),
    wixMedia("99ddea_363c0125b2b648d8863c6e45b128165c~mv2.jpg"),
    wixMedia("99ddea_5a61719f7d6a4174a3053c08bb2dabbf~mv2.jpg"),
    wixMedia("99ddea_71648528a43247c0b0871efb12291c8b~mv2.jpg"),
    wixMedia("99ddea_73159f4246fe446a81d43cf5089fc37a~mv2.jpg"),
    wixMedia("99ddea_782e789ab4b347688b318be2af8244af~mv2.jpg"),
    wixMedia("99ddea_7c2f154abea240d4a695254d9a5ce027~mv2.jpg"),
    wixMedia("99ddea_7e9a8c06257e4ac1bc75d7dc39218986~mv2.jpg"),
    wixMedia("99ddea_8c0c64e10a9d4ceea8bd9601258ff179~mv2.jpg"),
    wixMedia("99ddea_926950d2109d4f088c893b928a9bbe4d~mv2.jpg"),
    wixMedia("99ddea_9dbf6c749bb747cfad13cbe8134f9e2d~mv2.jpg"),
    wixMedia("99ddea_a4cf6a62d13e40bd95b0e70c1ad610f9~mv2.jpg"),
    wixMedia("99ddea_b758c3fb5f514905957403ce608041ca~mv2.jpg"),
    wixMedia("99ddea_cd09206ca9f74060b13383e2de4656ae~mv2.jpg"),
    wixMedia("99ddea_d0429cecd4bf441d94c3973f9f65e597~mv2.jpg"),
    wixMedia("99ddea_d14c13dc2f1a4e478aef042dc76b3910~mv2.jpg")
  ],
  "multi-cam": [
    wixMedia("99ddea_13da76f76067473685d99cc7b692b669~mv2.jpg"),
    wixMedia("99ddea_1848c785cd1646d483530017a9b8e2fe~mv2.jpg"),
    wixMedia("99ddea_1dc4ea9ed9b740759c3bbf94b7ede464~mv2.jpg"),
    wixMedia("99ddea_20a4e3f3ca61495180a903fe49124725~mv2.jpg"),
    wixMedia("99ddea_23fb8564352f410891b54495c0c22e6c~mv2.jpg"),
    wixMedia("99ddea_2ca9c43bf8b649af80e95183b4407dd7~mv2.jpg"),
    wixMedia("99ddea_337058d12828420aa0a78c5262b143d0~mv2.jpg"),
    wixMedia("99ddea_395a1ed667d7497fb3e9f500242cbc44~mv2.jpg"),
    wixMedia("99ddea_3e7ac2524e9c4193a109b683c96b3b1b~mv2.jpg"),
    wixMedia("99ddea_3eb044831cc346efaef91820beda71c0~mv2.jpg"),
    wixMedia("99ddea_40463a2bd42f463b96e8cca1a2bdcc59~mv2.jpg"),
    wixMedia("99ddea_5a8cdbfc47ff4eb28dac62ce761aea3a~mv2.jpg"),
    wixMedia("99ddea_5b9bcb79b69942a0aaef1d05cd01b683~mv2.jpg"),
    wixMedia("99ddea_619f1e2b6c574d44b8fdd99afbe7d8cd~mv2.jpg"),
    wixMedia("99ddea_67704193442d44cfac2d2fefdd52c95a~mv2.jpg"),
    wixMedia("99ddea_800cf436166a4ffcae4746aff8da8f3a~mv2.jpg"),
    wixMedia("99ddea_81261b3c274a427a998bc9fecc09b4ce~mv2.jpg"),
    wixMedia("99ddea_946bfc10de3946c2a80b01c12389e5c7~mv2.jpg"),
    wixMedia("99ddea_9514da8f83514776909b0e230e07ddcf~mv2.jpg"),
    wixMedia("99ddea_a7726e64e0e6407bb73bcd14d8e0ec04~mv2.jpg"),
    wixMedia("99ddea_b15c565a0b1a4b2499fa047d1486bce3~mv2.jpg"),
    wixMedia("99ddea_b56233f1417246ec98c027b9fe01a63d~mv2.jpg"),
    wixMedia("99ddea_cb22effea60643cd96dac7f3583fd32e~mv2.jpg")
  ]
};

export const categoryVideoBySlug: Record<string, string[]> = {
  "live-clips": [
    "https://vimeo.com/1169180295?fl=pl&fe=sh",
    "https://vimeo.com/1169183261?fl=pl&fe=sh",
    "https://vimeo.com/1169184929?fl=pl&fe=sh",
    "https://vimeo.com/1169184968?fl=pl&fe=sh",
    "https://vimeo.com/1169190808?fl=pl&fe=sh",
    "https://vimeo.com/1169214573?fl=pl&fe=sh",
    "https://vimeo.com/1169214592?fl=pl&fe=sh",
    "https://vimeo.com/1169214866?fl=pl&fe=sh",
    "https://vimeo.com/1169216301?fl=pl&fe=sh",
    "https://vimeo.com/1169216458?fl=pl&fe=sh",
    "https://vimeo.com/1169350067?fl=pl&fe=sh",
    "https://vimeo.com/1169247409?fl=pl&fe=sh",
    "https://vimeo.com/1169248002?fl=pl&fe=sh",
    "https://vimeo.com/1169243917?fl=pl&fe=sh",
    "https://vimeo.com/1169243932?fl=pl&fe=sh",
    "https://vimeo.com/1169245688?fl=pl&fe=sh",
    "https://vimeo.com/1116930015?fl=pl&fe=sh",
    "https://vimeo.com/1101084111?p=0s",
    "https://vimeo.com/1099470017?p=0s",
    "https://vimeo.com/1101084245?p=0s",
    "https://vimeo.com/1099470678?p=0s",
    "https://vimeo.com/1089718106?share=copy#t=0",
    "https://vimeo.com/1064845255?share=copy",
    "https://vimeo.com/1064845298?share=copy",
    "https://vimeo.com/1042242810?share=copy"
  ]
};

export const artistsFeaturedMedia = [
  wixMedia("99ddea_3faa1003a75c40d5b9e680b57d84bd16~mv2.png"),
  wixMedia("99ddea_8c350286ab784f23bcd7469705548765~mv2.png"),
  wixMedia("99ddea_9e19e0aeef814b08a8f17efe0d7009a8~mv2.png"),
  wixMedia("99ddea_b6cef0cf02824520acd7b7f6ecb495de~mv2.png"),
  wixMedia("99ddea_ef41deae1703456298540d65d53879e6~mv2.png")
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

export interface ContactProfile {
  name: string;
  email: string;
  role?: string;
  bio: string;
  socials?: { label: string; href: string }[];
}

export const contacts: ContactProfile[] = [
  {
    name: "Daniel Montiel",
    email: "daniel@dne.media",
    role: "CO OWNER",
    bio: "Daniel leads creative strategy, direction and artist-facing production. He works across campaign design, live execution and long-term creative development for DNE Media projects.",
    socials: [
      { label: "Email", href: "mailto:daniel@dne.media" },
      { label: "Instagram", href: "https://www.instagram.com/dne.media" }
    ]
  },
  {
    name: "Enrique Ramirez",
    email: "enrique@dne.media",
    role: "OWNER",
    bio: "Enrique coordinates production workflows, schedules and delivery. He ensures every project runs on time and that communication between artists, clients and crew stays tight.",
    socials: [
      { label: "Email", href: "mailto:enrique@dne.media" },
      { label: "Instagram", href: "https://www.instagram.com/dne.media" }
    ]
  },
  {
    name: "Angel Castañeda",
    email: "angel@dne.media",
    role: "System Administrator",
    bio: "Angel manages the technical backbone of DNE Media, from infrastructure and automation to internal systems, helping keep the team stable, secure and always online.",
    socials: [
      { label: "Email", href: "mailto:angel@dne.media" },
      { label: "Instagram", href: "https://www.instagram.com/dne.media" }
    ]
  }
];

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/dne.media" },
  { label: "Email", href: "mailto:daniel@dne.media" }
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
