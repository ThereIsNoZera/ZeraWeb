import type { ArchiveCardData } from "./archiveItems";
import img81 from "../imports/Archive/details/81.webp";
import img82 from "../imports/Archive/details/82.webp";
import img83 from "../imports/Archive/details/83.webp";
import img84 from "../imports/Archive/details/84.webp";
import img85 from "../imports/Archive/details/85.webp";
import img86 from "../imports/Archive/details/86.webp";

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
  8: {
    images: [
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
