import type { Category } from "./archiveItems";
import type { Lang } from "./translations";

export type LocalizedText = Record<Lang, string>;

export const ARCHIVE_UI_TEXT = {
  en: {
    heading: "Explore my work archive",
    imageViewer: "Image viewer",
    closeImageViewer: "Close image viewer",
    showImage: "Show image",
    previousImage: "Previous image",
    nextImage: "Next image",
    image: "image",
  },
  de: {
    heading: "Entdecke mein Werkarchiv",
    imageViewer: "Bildanzeige",
    closeImageViewer: "Bildanzeige schließen",
    showImage: "Bild anzeigen",
    previousImage: "Vorheriges Bild",
    nextImage: "Nächstes Bild",
    image: "Bild",
  },
} as const;

export const ARCHIVE_CATEGORY_LABELS: Record<Category, LocalizedText> = {
  Illustration: {
    en: "Illustration",
    de: "Illustration",
  },
  Grafikdesign: {
    en: "Graphic Design",
    de: "Grafikdesign",
  },
  Fotography: {
    en: "Photography",
    de: "Fotografie",
  },
  Produktdesign: {
    en: "Product Design",
    de: "Produktdesign",
  },
  "Freie Kunst": {
    en: "Fine Art",
    de: "Freie Kunst",
  },
};

export const ARCHIVE_CARD_CAPTIONS: Record<number, LocalizedText> = {
  1: {
    en: "Poster illustration for a theatre performance",
    de: "Posterillustration für eine Theateraufführung",
  },
  2: {
    en: "Illustration of a cat ballet",
    de: "Illustration eines Katzenballetts",
  },
  3: {
    en: "Single- and multicolour linocuts",
    de: "Ein- und mehrfarbige Linoldrucke",
  },
  4: {
    en: "Short stop-motion animation",
    de: "Kurze Stop-Motion-Animation",
  },
  5: {
    en: "Concept design for a bag",
    de: "Konzeptdesign für eine Tasche",
  },
  6: {
    en: "Industrial design sketches and concept development",
    de: "Industrial-Design-Skizzen und Ideenentwicklung",
  },
  7: {
    en: "Personal branding for a German teacher",
    de: "Persönliches Branding für einen Deutschlehrer",
  },
  8: {
    en: "Figure studies",
    de: "Figurstudien",
  },
  9: {
    en: "Social media communication for the Industrial Design student council",
    de: "Social-Media-Kommunikation für die Fachschaft Industriedesign",
  },
  10: {
    en: "Cats in light and shadow",
    de: "Katzen im Licht und Schatten",
  },
  11: {
    en: "Illustration for a love story by Nezami",
    de: "Illustration zu einer Liebesgeschichte von Nezami",
  },
  12: {
    en: "Poster illustration for a nature-inspired ideation workshop",
    de: "Posterillustration für einen naturinspirierten Ideenworkshop",
  },
  13: {
    en: "Monoprints and monotypes",
    de: "Monoprints und Monotypien",
  },
  14: {
    en: "Illustration series for a poem by Sohrab Sepehri",
    de: "Illustrationsreihe zu einem Gedicht von Sohrab Sepehri",
  },
  15: {
    en: "Poster illustration for a nature-inspired ideation workshop",
    de: "Posterillustration für einen naturinspirierten Ideenworkshop",
  },
  16: {
    en: "Photography: a study of vastness and silence",
    de: "Fotografie: eine Studie zu Weite und Stille",
  },
  17: {
    en: "Illustration for a Halloween series",
    de: "Illustration für eine Halloween-Serie",
  },
  18: {
    en: "Concept development and product design",
    de: "Ideenentwicklung und Produktdesign",
  },
  19: {
    en: "Acrylic painting: a study of colour and light",
    de: "Acrylmalerei: eine Studie zu Farbe und Licht",
  },
  20: {
    en: "Visual identity for a film series",
    de: "Visuelle Identität für eine Filmreihe",
  },
  21: {
    en: "Logo system for a Web3 protocol",
    de: "Logo-System für ein Web3-Protokoll",
  },
  22: {
    en: "Acrylic painting: a study of composition, colour and light",
    de: "Acrylmalerei: eine Studie zu Komposition, Farbe und Licht",
  },
  23: {
    en: "Anatomical studies",
    de: "Anatomische Studien",
  },
  24: {
    en: "Documentary photography: a study of light and the city",
    de: "Dokumentarfotografie: eine Studie zu Licht und Stadt",
  },
};

export const ARCHIVE_DETAIL_CAPTIONS = {
  liveModel: {
    en: "Coloured pencil, drawing from a live model, 56 × 42 cm.",
    de: "Farbstift, Zeichnung nach lebendem Modell, 56 × 42 cm.",
  },
  hands: {
    en: "Detail study of the hands.",
    de: "Detailstudie der Hände.",
  },
  secondPose: {
    en: "Second pose, coloured pencil on paper.",
    de: "Zweite Pose, Farbstift auf Papier.",
  },
} satisfies Record<string, LocalizedText>;

export function getArchiveCardCaption(
  cardId: number,
  lang: Lang,
  fallback: string,
): string {
  return ARCHIVE_CARD_CAPTIONS[cardId]?.[lang] ?? fallback;
}
