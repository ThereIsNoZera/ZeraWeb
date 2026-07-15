// ─── Image imports ────────────────────────────────────────────────────────────
import imgGoosh2 from "../imports/Archive/d7fe8d0eb841a16e1d0ad14a8917d612bcbfd4eb.png";
import imgPushing1 from "../imports/Archive/1db1dad4ed9a3a76f9a139dc36e48f6750711f8d.png";
import img12Med2 from "../imports/Archive/e19c09542d9251e46b929b3d2a9ccc2725f92609.png";
import imgImage39 from "../imports/Archive/90a9d9e91f739e213f16e4d31004dec95daf9065.png";
import img260714232545Image11 from "../imports/Archive/05fe6245941107cd800a0e7fc3cac2fbc01ca7c0.png";
import img34Med21 from "../imports/Archive/f23eeb87731a403f7819a8387621b6b49bcb43c6.png";
import imgImage121 from "../imports/Archive/1bd8062d7efe55a9c1e67e24246b6796839496b1.png";
import img24Medagain1 from "../imports/Archive/254f2d0d3fde0404752d2b11f3f0902b5a0861c7.png";
import imgSlot1 from "../imports/Archive/200016f12c11f52bf9c0d6487b818e2f483fc413.png";
import imgCsc06552 from "../imports/Archive/6eed898d8119ad49b1648d50987f6425503e0290.png";
import img32Med1 from "../imports/Archive/79805ea57305fcad560cf8bbd858a37be670753d.png";
import imgDsc06642 from "../imports/Archive/b8b849ed7072f65f3277b6a3a9874e61b4b1a798.png";
import img13Med21 from "../imports/Archive/f63d8f61177e30016d7a7b2c7ce07542be4bf095.png";
import imgMaskGroup1 from "../imports/Archive/e2a94100885750e648fc3109b082f4d4efafcbbd.png";
import imgMaskGroup11 from "../imports/Archive/c0b232d48d87e6e1c660c50c42890e14a8895b18.png";
import imgMaskGroup21 from "../imports/Archive/bf3b1d9543c9880148bd5391f3726b03418a7bfa.png";
import imgGol2 from "../imports/Archive/042c871d39baed7067a2b498cbd52d7fbf3f8f30.png";
import imgDsc01562 from "../imports/Archive/ca0caa289a276c92c1ec042a1eeba3d269ee769d.png";
import imgMummypng2 from "../imports/Archive/ce3ce69faaf92275f67bc24e5051bae81476d38e.png";
import img260714232624Image11 from "../imports/Archive/6549f8e9bd3011946868026d08434043e511a814.png";
import img28Med2 from "../imports/Archive/ae6b19486a8e935d71ba5d2c9b659572837db599.png";
import imgSlot11 from "../imports/Archive/68a1f7713a34f90c9860ebfef5701fff33f35df5.png";
import imgFrame9811 from "../imports/Archive/ebdf33dc32a409614d249ab33e162e646879006b.png";
import img30Med2 from "../imports/Archive/a93c67edbaaf76e0dfa78c7ecadc6636dfd16e0c.png";
import img27Med11 from "../imports/Archive/a93c67edbaaf76e0dfa78c7ecadc6636dfd16e0c.png";
import imgDsc00942 from "../imports/Archive/0cd8d401d61c074d7352ef8a73de1804b2c9e35f.png";

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
  rotated?: boolean;    // image displayed sideways (rotate 90°)
  stacked?: boolean;    // multiple images stacked vertically
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
    id: 1, images: [imgGoosh2], aspectW: 566, aspectH: 800,
    caption: "Posterillustration für eine Theateraufführung",
    categories: ["Grafikdesign", "Illustration"], icon: null,
  },
  {
    id: 2, images: [imgPushing1], aspectW: 800, aspectH: 566,
    caption: "Illustration eines Katzenballetts",
    categories: ["Illustration"], icon: null,
  },
  {
    id: 3, images: [img12Med2], aspectW: 608, aspectH: 800,
    caption: "Ein- und mehrfarbige Linoldrucke",
    categories: ["Freie Kunst", "Grafikdesign"], icon: "project",
  },
  {
    id: 4, images: [imgImage39], aspectW: 566, aspectH: 800,
    caption: "Short stop-motion animation",
    categories: ["Freie Kunst"], icon: "project",
  },
  {
    id: 5, images: [img260714232545Image11], aspectW: 240, aspectH: 389,
    caption: "Konzeptdesign für eine Tasche",
    categories: ["Produktdesign"], icon: "project",
  },
  {
    id: 6, images: [img34Med21], aspectW: 240, aspectH: 166,
    caption: "Industrial-Design Skizzen und Ideenentwicklung",
    categories: ["Produktdesign"], icon: "collection",
  },
  // ── Column 2 ──
  {
    id: 7, images: [imgImage121], aspectW: 193, aspectH: 240, rotated: true,
    caption: "Persönliches Branding für einen Deutschlehrer",
    categories: ["Grafikdesign"], icon: "project",
  },
  {
    id: 8, images: [img24Medagain1], aspectW: 662, aspectH: 800,
    caption: "Figurstudien",
    categories: ["Freie Kunst"], icon: "collection",
  },
  {
    id: 9, images: [imgSlot1], aspectW: 288, aspectH: 448,
    caption: "Social-Media-Kommunikation für die Fachschaft Industriedesign",
    categories: ["Grafikdesign"], icon: null,
  },
  {
    id: 10, images: [imgCsc06552], aspectW: 800, aspectH: 533,
    caption: "Katzen im Licht und Schatten",
    categories: ["Fotography"], icon: "collection",
  },
  {
    id: 11, images: [img32Med1], aspectW: 541, aspectH: 789,
    caption: "Illustration zu einer Liebesgeschichte von Nezami",
    categories: ["Illustration"], icon: "project",
  },
  {
    id: 12, images: [imgDsc06642], aspectW: 800, aspectH: 533,
    caption: "Posterillustration für einen naturinspirierten Ideenworkshop",
    categories: ["Fotography"], icon: null,
  },
  {
    id: 13, images: [img13Med21], aspectW: 594, aspectH: 800,
    caption: "Monoprints & Monotypes",
    categories: ["Freie Kunst"], icon: "collection",
  },
  // ── Column 3 ──
  {
    id: 14, images: [imgMaskGroup1, imgMaskGroup11, imgMaskGroup21], aspectW: 800, aspectH: 526,
    stacked: true,
    caption: "Illustrationsreihe zu einem Gedicht von Sohrab Sepehri",
    categories: ["Illustration"], icon: "project",
  },
  {
    id: 15, images: [imgGol2], aspectW: 566, aspectH: 800,
    caption: "Posterillustration für einen naturinspirierten Ideenworkshop",
    categories: ["Illustration", "Grafikdesign"], icon: null,
  },
  {
    id: 16, images: [imgDsc01562], aspectW: 533, aspectH: 800,
    caption: "Fotografie; eine Studie zu Weite und Stille",
    categories: ["Fotography"], icon: null,
  },
  {
    id: 17, images: [imgMummypng2], aspectW: 800, aspectH: 798,
    caption: "Illustration für eine Halloween-Serie",
    categories: ["Illustration"], icon: "project",
  },
  {
    id: 18, images: [img260714232624Image11], aspectW: 533, aspectH: 800,
    caption: "Ideenentwicklung und Produktdesign",
    categories: ["Produktdesign"], icon: "collection",
  },
  // ── Column 4 ──
  {
    id: 19, images: [img28Med2], aspectW: 591, aspectH: 800,
    caption: "Acrylmalerei; eine Studie zu Farbe und Licht",
    categories: ["Freie Kunst"], icon: "project",
  },
  {
    id: 20, images: [imgSlot11], aspectW: 264, aspectH: 415,
    caption: "Visuelle Identität für eine Filmreihe",
    categories: ["Grafikdesign"], icon: "collection",
  },
  {
    id: 21, images: [imgFrame9811], aspectW: 800, aspectH: 610,
    caption: "Logo-System für ein Web3-Protokoll",
    categories: ["Grafikdesign"], icon: "project",
  },
  {
    id: 22, images: [img30Med2], aspectW: 240, aspectH: 309,
    caption: "Acrylmalerei; eine Studie zu Komposition, Farbe und Licht",
    categories: ["Freie Kunst"], icon: null,
  },
  {
    id: 23, images: [img27Med11], aspectW: 591, aspectH: 800, rotated: true,
    caption: "Anatomische Studien",
    categories: ["Freie Kunst"], icon: "collection",
  },
  {
    id: 24, images: [imgDsc00942], aspectW: 533, aspectH: 800,
    caption: "Dokumentarfotografie: eine Studie zu Licht und Stadt",
    categories: ["Fotography"], icon: "collection",
  },
];

// Original column index assignments (indices into CARDS array)
const ORIGINAL_COLUMNS: number[][] = [
  [0, 1, 2, 3, 4, 5],          // col 1: cards 1–6
  [6, 7, 8, 9, 10, 11, 12],    // col 2: cards 7–13
  [13, 14, 15, 16, 17],        // col 3: cards 14–18
  [18, 19, 20, 21, 22, 23],    // col 4: cards 19–24
];

function distributeFiltered(cards: ArchiveCardData[]): ArchiveCardData[][] {
  const cols: ArchiveCardData[][] = [[], [], [], []];
  cards.forEach((c, i) => cols[i % 4].push(c));
  return cols;
}

export function getArchiveColumns(activeFilter: Category | null): ArchiveCardData[][] {
  if (activeFilter) {
    return distributeFiltered(
      ARCHIVE_CARDS.filter((card) => card.categories.includes(activeFilter)),
    );
  }

  return ORIGINAL_COLUMNS.map((indices) =>
    indices.map((index) => ARCHIVE_CARDS[index]),
  );
}

