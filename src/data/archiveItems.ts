// ─── Image imports ────────────────────────────────────────────────────────────
import imgGoosh2 from "../imports/Archive/id1.webp";
import imgPushing1 from "../imports/Archive/id2.webp";
import img12Med2 from "../imports/Archive/id3.webp";
import imgImage39 from "../imports/Archive/id4.webp";
import img260714232545Image11 from "../imports/Archive/id5.webp";
import img34Med21 from "../imports/Archive/id6.webp";
import imgImage121 from "../imports/Archive/id7.webp";
import img24Medagain1 from "../imports/Archive/id8.webp";
import imgSlot1 from "../imports/Archive/id9.png";
import imgCsc06552 from "../imports/Archive/id10.webp";
import img32Med1 from "../imports/Archive/id11.webp";
import imgDsc06642 from "../imports/Archive/id12.webp";
import img13Med21 from "../imports/Archive/id13.webp";
import imgMaskGroup1 from "../imports/Archive/id14a.webp";
import imgMaskGroup11 from "../imports/Archive/id14b.webp";
import imgMaskGroup21 from "../imports/Archive/id14c.webp";
import imgGol2 from "../imports/Archive/id15.webp";
import imgDsc01562 from "../imports/Archive/id16.webp";
import imgMummypng2 from "../imports/Archive/id17.webp";
import img260714232624Image11 from "../imports/Archive/id18.webp";
import img28Med2 from "../imports/Archive/id19.webp";
import imgSlot11 from "../imports/Archive/id20.png";
import imgFrame9811 from "../imports/Archive/id21.webp";
import img30Med2 from "../imports/Archive/id22.webp";
import img27Med11 from "../imports/Archive/id23.webp";
import imgDsc00942 from "../imports/Archive/id24.webp";

// ─── Types ────────────────────────────────────────────────────────────────────
export type Category =
  | "Illustration"
  | "Grafikdesign"
  | "Fotography"
  | "Produktdesign"
  | "Freie Kunst";

export const ARCHIVE_CATEGORIES: Category[] = [
  "Illustration",
  "Grafikdesign",
  "Fotography",
  "Produktdesign",
  "Freie Kunst",
];

type IconType = "project" | "collection" | null;

export interface ArchiveCardData {
  id: number;
  images: string[];
  aspectW: number;
  aspectH: number;
  rotated?: boolean; // image displayed sideways (rotate 90°)
  stacked?: boolean; // multiple images stacked vertically
  caption: string;
  categories: Category[];
  icon: IconType;
}

// ─── Card data (ordered by original column, then row) ─────────────────────────
// Column 1 (leftmost): 1–6
// Column 2 (center-left): 7–13
// Column 3 (rightmost-right): 14–18
// Column 4 (center-right): 19–24
export const ARCHIVE_CARDS: ArchiveCardData[] = [
  // ── Column 1 ──
  {
    id: 1,
    images: [imgGoosh2],
    aspectW: 566,
    aspectH: 800,
    caption: "Posterillustration für eine Theateraufführung",
    categories: ["Grafikdesign", "Illustration"],
    icon: null,
  },
  {
    id: 2,
    images: [imgPushing1],
    aspectW: 800,
    aspectH: 566,
    caption: "Illustration eines Katzenballetts",
    categories: ["Illustration"],
    icon: null,
  },
  {
    id: 3,
    images: [img12Med2],
    aspectW: 608,
    aspectH: 800,
    caption: "Ein- und mehrfarbige Linoldrucke",
    categories: ["Freie Kunst", "Grafikdesign"],
    icon: "project",
  },
  {
    id: 4,
    images: [imgImage39],
    aspectW: 566,
    aspectH: 800,
    caption: "Short stop-motion animation",
    categories: ["Freie Kunst"],
    icon: "project",
  },
  {
    id: 5,
    images: [img260714232545Image11],
    aspectW: 240,
    aspectH: 389,
    caption: "Konzeptdesign für eine Tasche",
    categories: ["Produktdesign"],
    icon: "project",
  },
  {
    id: 6,
    images: [img34Med21],
    aspectW: 240,
    aspectH: 166,
    caption: "Industrial-Design Skizzen und Ideenentwicklung",
    categories: ["Produktdesign"],
    icon: "collection",
  },
  // ── Column 2 ──
  {
    id: 7,
    images: [imgImage121],
    aspectW: 300,
    aspectH: 240,
    caption: "Persönliches Branding für einen Deutschlehrer",
    categories: ["Grafikdesign"],
    icon: "project",
  },
  {
    id: 8,
    images: [img24Medagain1],
    aspectW: 662,
    aspectH: 800,
    caption: "Figurstudien",
    categories: ["Freie Kunst"],
    icon: "collection",
  },
  {
    id: 9,
    images: [imgSlot1],
    aspectW: 288,
    aspectH: 448,
    caption: "Social-Media-Kommunikation für die Fachschaft Industriedesign",
    categories: ["Grafikdesign"],
    icon: null,
  },
  {
    id: 10,
    images: [imgCsc06552],
    aspectW: 800,
    aspectH: 533,
    caption: "Katzen im Licht und Schatten",
    categories: ["Fotography"],
    icon: "collection",
  },
  {
    id: 11,
    images: [img32Med1],
    aspectW: 541,
    aspectH: 789,
    caption: "Illustration zu einer Liebesgeschichte von Nezami",
    categories: ["Illustration"],
    icon: "project",
  },
  {
    id: 12,
    images: [imgDsc06642],
    aspectW: 800,
    aspectH: 533,
    caption: "Posterillustration für einen naturinspirierten Ideenworkshop",
    categories: ["Fotography"],
    icon: null,
  },
  {
    id: 13,
    images: [img13Med21],
    aspectW: 594,
    aspectH: 800,
    caption: "Monoprints & Monotypes",
    categories: ["Freie Kunst"],
    icon: "collection",
  },
  // ── Column 3 ──
  {
    id: 14,
    images: [imgMaskGroup1, imgMaskGroup11, imgMaskGroup21],
    aspectW: 800,
    aspectH: 526,
    stacked: true,
    caption: "Illustrationsreihe zu einem Gedicht von Sohrab Sepehri",
    categories: ["Illustration"],
    icon: "project",
  },
  {
    id: 15,
    images: [imgGol2],
    aspectW: 566,
    aspectH: 800,
    caption: "Posterillustration für einen naturinspirierten Ideenworkshop",
    categories: ["Illustration", "Grafikdesign"],
    icon: null,
  },
  {
    id: 16,
    images: [imgDsc01562],
    aspectW: 533,
    aspectH: 800,
    caption: "Fotografie; eine Studie zu Weite und Stille",
    categories: ["Fotography"],
    icon: null,
  },
  {
    id: 17,
    images: [imgMummypng2],
    aspectW: 800,
    aspectH: 798,
    caption: "Illustration für eine Halloween-Serie",
    categories: ["Illustration"],
    icon: "project",
  },
  {
    id: 18,
    images: [img260714232624Image11],
    aspectW: 533,
    aspectH: 800,
    caption: "Ideenentwicklung und Produktdesign",
    categories: ["Produktdesign"],
    icon: "collection",
  },
  // ── Column 4 ──
  {
    id: 19,
    images: [img28Med2],
    aspectW: 591,
    aspectH: 800,
    caption: "Acrylmalerei; eine Studie zu Farbe und Licht",
    categories: ["Freie Kunst"],
    icon: "project",
  },
  {
    id: 20,
    images: [imgSlot11],
    aspectW: 264,
    aspectH: 415,
    caption: "Visuelle Identität für eine Filmreihe",
    categories: ["Grafikdesign"],
    icon: "collection",
  },
  {
    id: 21,
    images: [imgFrame9811],
    aspectW: 800,
    aspectH: 610,
    caption: "Logo-System für ein Web3-Protokoll",
    categories: ["Grafikdesign"],
    icon: "project",
  },
  {
    id: 22,
    images: [img30Med2],
    aspectW: 240,
    aspectH: 309,
    caption: "Acrylmalerei; eine Studie zu Komposition, Farbe und Licht",
    categories: ["Freie Kunst"],
    icon: null,
  },
  {
    id: 23,
    images: [img27Med11],
    aspectW: 800,
    aspectH: 600,
    caption: "Anatomische Studien",
    categories: ["Freie Kunst"],
    icon: "collection",
  },
  {
    id: 24,
    images: [imgDsc00942],
    aspectW: 533,
    aspectH: 800,
    caption: "Dokumentarfotografie: eine Studie zu Licht und Stadt",
    categories: ["Fotography"],
    icon: "collection",
  },
];

// Original column index assignments (indices into CARDS array)
const ORIGINAL_COLUMNS: number[][] = [
  [0, 1, 2, 3, 4, 5], // col 1: cards 1–6
  [6, 7, 8, 9, 10, 11, 12], // col 2: cards 7–13
  [13, 14, 15, 16, 17], // col 3: cards 14–18
  [18, 19, 20, 21, 22, 23], // col 4: cards 19–24
];

function distributeFiltered(cards: ArchiveCardData[]): ArchiveCardData[][] {
  const cols: ArchiveCardData[][] = [[], [], [], []];
  cards.forEach((c, i) => cols[i % 4].push(c));
  return cols;
}

export function getArchiveColumns(
  activeFilter: Category | null,
): ArchiveCardData[][] {
  if (activeFilter) {
    return distributeFiltered(
      ARCHIVE_CARDS.filter((card) => card.categories.includes(activeFilter)),
    );
  }

  return ORIGINAL_COLUMNS.map((indices) =>
    indices.map((index) => ARCHIVE_CARDS[index]),
  );
}
