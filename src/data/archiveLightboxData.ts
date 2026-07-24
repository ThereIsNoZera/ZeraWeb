import type { ArchiveCardData } from "./archiveItems";

import img10 from "../imports/Archive/details/10.webp";

import img20 from "../imports/Archive/details/20.webp";

import img30 from "../imports/Archive/details/30.webp";
import img31 from "../imports/Archive/details/31.webp";
import img32 from "../imports/Archive/details/32.webp";
import img33 from "../imports/Archive/details/33.webp";
import img34 from "../imports/Archive/details/34.webp";

import img50 from "../imports/Archive/details/50.webp";
import img51 from "../imports/Archive/details/51.webp";

import img60 from "../imports/Archive/details/60.webp";
import img61 from "../imports/Archive/details/61.webp";
import img62 from "../imports/Archive/details/62.webp";
import img63 from "../imports/Archive/details/63.webp";
import img64 from "../imports/Archive/details/64.webp";

import img70 from "../imports/Archive/details/70.webp";
import img71 from "../imports/Archive/details/71.webp";
import img72 from "../imports/Archive/details/72.webp";
import img73 from "../imports/Archive/details/73.webp";
import img74 from "../imports/Archive/details/74.webp";
import img75 from "../imports/Archive/details/75.webp";

import img80 from "../imports/Archive/details/80.webp";
import img81 from "../imports/Archive/details/81.webp";
import img82 from "../imports/Archive/details/82.webp";
import img83 from "../imports/Archive/details/83.webp";
import img84 from "../imports/Archive/details/84.webp";
import img85 from "../imports/Archive/details/85.webp";
import img86 from "../imports/Archive/details/86.webp";

import img90 from "../imports/Archive/details/90.webp";

import img100 from "../imports/Archive/details/100.webp";
import img101 from "../imports/Archive/details/101.webp";
import img102 from "../imports/Archive/details/102.webp";
import img103 from "../imports/Archive/details/103.webp";

import img110 from "../imports/Archive/details/110.webp";
import img111 from "../imports/Archive/details/111.webp";
import img112 from "../imports/Archive/details/112.webp";
import img113 from "../imports/Archive/details/113.webp";
import img114 from "../imports/Archive/details/114.webp";

import img120 from "../imports/Archive/details/120.webp";
import img121 from "../imports/Archive/details/121.webp";
import img122 from "../imports/Archive/details/122.webp";
import img123 from "../imports/Archive/details/123.webp";
import img124 from "../imports/Archive/details/124.webp";
import img125 from "../imports/Archive/details/125.webp";

import img130 from "../imports/Archive/details/130.webp";
import img131 from "../imports/Archive/details/131.webp";
import img132 from "../imports/Archive/details/132.webp";
import img133 from "../imports/Archive/details/133.webp";
import img134 from "../imports/Archive/details/134.webp";

import img140 from "../imports/Archive/details/140.webp";
import img141 from "../imports/Archive/details/141.webp";
import img142 from "../imports/Archive/details/142.webp";
import img143 from "../imports/Archive/details/143.webp";
import img144 from "../imports/Archive/details/144.webp";
import img145 from "../imports/Archive/details/145.webp";
import img146 from "../imports/Archive/details/146.webp";

import img150 from "../imports/Archive/details/150.webp";

import img160 from "../imports/Archive/details/160.webp";

import img170 from "../imports/Archive/details/170.webp";
import img171 from "../imports/Archive/details/171.webp";
import img172 from "../imports/Archive/details/172.webp";
import img173 from "../imports/Archive/details/173.webp";

import img180 from "../imports/Archive/details/170.webp";
// import img181 from "../imports/Archive/details/171.webp";
import img182 from "../imports/Archive/details/172.webp";
import img183 from "../imports/Archive/details/173.webp";

import img190 from "../imports/Archive/details/190.webp";
import img191 from "../imports/Archive/details/191.webp";

import img200 from "../imports/Archive/details/200.webp";
import img201 from "../imports/Archive/details/201.webp";
import img202 from "../imports/Archive/details/202.webp";
import img203 from "../imports/Archive/details/203.webp";

import img220 from "../imports/Archive/details/220.webp";

import img240 from "../imports/Archive/details/240.webp";
import img241 from "../imports/Archive/details/241.webp";
import img242 from "../imports/Archive/details/242.webp";
import img243 from "../imports/Archive/details/243.webp";

export type ArchiveImageFit = "contain" | "cover";

export interface ArchiveLightboxImage {
  src: string;
  caption?: string;
}

export interface ArchiveLightboxConfig {
  /**
   * Optional detail images for the overlay.
   * When omitted, the card's existing images are used automatically.
   */
  images?: ArchiveLightboxImage[];

  /** Optional overlay caption. Falls back to the card caption. */
  caption?: string;

  /** Use "contain" to show the complete image, or "cover" to crop and fill. */
  mainImageFit?: ArchiveImageFit;

  /** Controls how thumbnail images fit inside their 100px-high buttons. */
  thumbnailFit?: ArchiveImageFit;

  /**
   * Width of the 700px-high main-image frame.
   * It can be a pixel number or any valid CSS width string.
   */
  mainImageWidth?: number | string;

  /** Background behind images that do not fill the complete 700px frame. */
  mainImageBackground?: string;
}

const ARCHIVE_LIGHTBOX_CONFIG: Partial<
  Record<ArchiveCardData["id"], ArchiveLightboxConfig>
> = {
  /*
    This is a ready-to-customize example for archive card 8.
    Uncomment the image imports above, then uncomment `images` below.
    Change 8 to another card ID to customize another archive entry.
    */

  1: {
    images: [
      {
        src: img10,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  2: {
    images: [
      {
        src: img20,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  3: {
    images: [
      {
        src: img30,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img31,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img32,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img33,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img34,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  5: {
    images: [
      {
        src: img50,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img51,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  6: {
    images: [
      {
        src: img60,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img61,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img62,
        caption: "Detail study of the hands.",
      },
      {
        src: img63,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img64,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  7: {
    images: [
      {
        src: img70,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img71,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img72,
        caption: "Detail study of the hands.",
      },
      {
        src: img73,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img74,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img75,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  8: {
    images: [
      {
        src: img80,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img81,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img82,
        caption: "Detail study of the hands.",
      },
      {
        src: img83,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img84,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img85,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img86,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  9: {
    images: [
      {
        src: img90,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  10: {
    images: [
      {
        src: img100,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img101,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img102,
        caption: "Detail study of the hands.",
      },
      {
        src: img103,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  11: {
    images: [
      {
        src: img110,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img111,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img112,
        caption: "Detail study of the hands.",
      },
      {
        src: img113,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img114,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  12: {
    images: [
      {
        src: img120,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img121,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img122,
        caption: "Detail study of the hands.",
      },
      {
        src: img123,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img124,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img125,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  13: {
    images: [
      {
        src: img130,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img131,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img132,
        caption: "Detail study of the hands.",
      },
      {
        src: img133,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img134,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  14: {
    images: [
      {
        src: img140,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img141,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img142,
        caption: "Detail study of the hands.",
      },
      {
        src: img143,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img144,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img145,
        caption: "Second pose, color pencil on paper.",
      },
      {
        src: img146,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  15: {
    images: [
      {
        src: img150,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  16: {
    images: [
      {
        src: img160,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  17: {
    images: [
      {
        src: img170,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img171,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img172,
        caption: "Detail study of the hands.",
      },
      {
        src: img173,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  18: {
    images: [
      {
        src: img180,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      // {
      //   src: img181,
      //   caption: "Color pencil, live model sketching, 56 × 42 cm.",
      // },
      {
        src: img182,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img183,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  19: {
    images: [
      {
        src: img190,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img191,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  20: {
    images: [
      {
        src: img200,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img201,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img202,
        caption: "Detail study of the hands.",
      },
      {
        src: img203,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  22: {
    images: [
      {
        src: img220,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  24: {
    images: [
      {
        src: img240,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img241,
        caption: "Color pencil, live model sketching, 56 × 42 cm.",
      },
      {
        src: img242,
        caption: "Detail study of the hands.",
      },
      {
        src: img243,
        caption: "Second pose, color pencil on paper.",
      },
    ],
    caption: "Color pencil, Live model sketching, 56 × 42 cm.",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: "min(1100px, calc(100vw - 184px))",
    mainImageBackground: "transparent",
  },

  /*
  Add more entries like this:

  1: {
    images: [card1Main, card1Detail],
    caption: "Your custom caption",
    mainImageFit: "contain",
    thumbnailFit: "cover",
    mainImageWidth: 900,
    mainImageBackground: "#ffffff",
  },

  2: {
    images: [card2Main],
    caption: "One-image entry — no thumbnails or arrows will appear",
    mainImageFit: "contain",
    mainImageWidth: 700,
  },
  */
};

export interface ResolvedArchiveLightboxData {
  images: string[];
  caption: string;
  mainImageFit: ArchiveImageFit;
  thumbnailFit: ArchiveImageFit;
  mainImageWidth: number | string;
  mainImageBackground: string;
}

export function getArchiveLightboxData(
  card: ArchiveCardData,
): ResolvedArchiveLightboxData {
  const customConfig = ARCHIVE_LIGHTBOX_CONFIG[card.id];
  const customImages = customConfig?.images;

  return {
    images:
      customImages && customImages.length > 0 ? customImages : card.images,
    caption: customConfig?.caption ?? card.caption,
    mainImageFit: customConfig?.mainImageFit ?? "contain",
    thumbnailFit: customConfig?.thumbnailFit ?? "cover",
    mainImageWidth:
      customConfig?.mainImageWidth ?? "min(1100px, calc(100vw - 64px))",
    mainImageBackground: customConfig?.mainImageBackground ?? "transparent",
  };
}
