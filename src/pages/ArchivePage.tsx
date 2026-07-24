import { useState } from "react";

import { ArchiveCard } from "../components/archive/ArchiveCard";
import { ArchiveFilters } from "../components/archive/ArchiveFilters";
import { ArchiveLightbox } from "../components/archive/ArchiveLightbox";
import imgPaperOverlay from "../imports/paper-texture-web-fallback.jpg";
import { SiteFooter } from "../components/layout/SiteFooter";
import {
  getArchiveColumns,
  type ArchiveCardData,
  type Category,
} from "../data/archiveItems";

export default function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState<Category | null>(null);
  const [openCard, setOpenCard] = useState<ArchiveCardData | null>(null);
  const columns = getArchiveColumns(activeFilter);

  const toggleFilter = (category: Category) => {
    setActiveFilter((currentFilter) =>
      currentFilter === category ? null : category,
    );
  };

  return (
    <>
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
            className="whitespace-nowrap font-['Clash_Display:Regular',sans-serif] font-normal not-italic tracking-[1.12px] text-black"
            style={{ fontSize: 28, marginBottom: 28 }}
          >
            Explore my work archive
          </h1>

          <ArchiveFilters
            activeFilter={activeFilter}
            onToggleFilter={toggleFilter}
          />

          <div className="flex items-start gap-[16px]">
            {columns.map((column, columnIndex) => (
              <div
                className="flex min-w-0 flex-1 flex-col gap-[16px]"
                key={columnIndex}
              >
                {column.map((card) => (
                  <ArchiveCard
                    card={card}
                    key={card.id}
                    onOpen={() => setOpenCard(card)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <SiteFooter />
      </main>

      {openCard && (
        <ArchiveLightbox card={openCard} onClose={() => setOpenCard(null)} />
      )}
    </>
  );
}
