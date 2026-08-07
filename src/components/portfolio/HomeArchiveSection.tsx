import { useState } from "react";

import type { Lang } from "../../data/translations";
import { ArchiveGallery } from "../archive/ArchiveGallery";

interface HomeArchiveSectionProps {
  lang: Lang;
}

export function HomeArchiveSection({ lang }: HomeArchiveSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const label =
    lang === "de" ? "Mehr im Archiv entdecken" : "Explore archive for more";

  return (
    <section
      aria-label={label}
      className="relative z-10 mx-auto w-[1100px]"
      id="home-archive"
    >
      <div className="overflow-hidden rounded-[5px] border-2 border-solid border-black/80 bg-white/10 shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.4)]">
        <button
          aria-controls="home-archive-content"
          aria-expanded={isOpen}
          className="flex min-h-[64px] w-full cursor-pointer items-center justify-between border-0 bg-transparent p-[18px] text-left"
          data-cursor="pointer"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          type="button"
        >
          <span className="font-clash text-[20px] font-normal leading-normal tracking-[0.8px] text-[#1B1B1B]">
            {label}
          </span>

          <svg
            aria-hidden="true"
            className="size-[24px] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            fill="none"
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            }}
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5.5L15.5 12L9 18.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
          </svg>
        </button>

        <div
          aria-hidden={!isOpen}
          id="home-archive-content"
          style={{
            display: "grid",
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
            transition:
              "grid-template-rows 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 350ms ease",
          }}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="px-[18px] pb-[18px] pt-[14px]">
              <ArchiveGallery lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
