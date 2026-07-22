export type Lang = "en" | "de";

export const TRANSLATIONS = {
  en: {
    hello: "Hello, This is",
    description: "Design Student \nUI/UX design Illustration communication",

    ergoTitle: "Ergo Raffle:",
    ergoSub: "Redesign of a digital platform",

    pickleTitle: "Pickle:",
    pickleSub: "Illustration and product concept",

    confTitle: "International Conference",
    confSub: "Identity design",

    otavanTitle: "Otavan:",
    otavanSub: "Learning game prototype for children with autism",

    archiveBtn: "Check out Archive for more",

    navArchive: "Archive",
    navProjects: "Projects",
    navCV: "CV",
    navVisit: "Visit cards",
  },

  de: {
    hello: "Hallo, ich bin",
    description: "Designstudentin \nUI/UX Design Illustration Kommunikation",

    ergoTitle: "Ergo Raffle:",
    ergoSub: "Redesign einer digitalen Plattform",

    pickleTitle: "Pickle:",
    pickleSub: "Illustration und Produktidee",

    confTitle: "Internationale Konferenz",
    confSub: "Identitätsdesign",

    otavanTitle: "Otavan:",
    otavanSub: "Lernspiel-Prototyp für Kinder im Autismus-Spektrum",

    archiveBtn: "Mehr im Archiv entdecken",

    navArchive: "Archiv",
    navProjects: "Projekte",
    navCV: "Lebenslauf",
    navVisit: "Visitenkarten",
  },
} as const;

export type Translation = (typeof TRANSLATIONS)[Lang];
