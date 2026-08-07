import { ArchiveGallery } from "../components/archive/ArchiveGallery";
import { SiteFooter } from "../components/layout/SiteFooter";
import { ARCHIVE_UI_TEXT } from "../data/archiveTranslations";
import type { Lang } from "../data/translations";
import imgPaperOverlay from "../imports/paper-texture-web-fallback.jpg";

interface ArchivePageProps {
  lang: Lang;
}

export default function ArchivePage({ lang }: ArchivePageProps) {
  const archiveText = ARCHIVE_UI_TEXT[lang];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f5f3eb]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imgPaperOverlay})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          mixBlendMode: "multiply",
          opacity: 0.2,
        }}
      />

      <div
        className="relative z-10 mx-auto"
        style={{
          maxWidth: 1280,
          paddingTop: 100,
          paddingBottom: 80,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <h1
          className="whitespace-nowrap font-clash text-[28px] font-normal not-italic tracking-[1.12px] text-black"
          style={{ marginBottom: 28 }}
        >
          {archiveText.heading}
        </h1>

        <ArchiveGallery lang={lang} />
      </div>

      <SiteFooter />
    </main>
  );
}
