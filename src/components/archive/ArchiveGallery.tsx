import { useState } from "react";

import {
  getArchiveColumns,
  type ArchiveCardData,
  type Category,
} from "../../data/archiveItems";
import type { Lang } from "../../data/translations";
import { ArchiveCard } from "./ArchiveCard";
import { ArchiveFilters } from "./ArchiveFilters";
import { ArchiveLightbox } from "./ArchiveLightbox";

interface ArchiveGalleryProps {
  lang: Lang;
}

export function ArchiveGallery({ lang }: ArchiveGalleryProps) {
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
      <ArchiveFilters
        activeFilter={activeFilter}
        lang={lang}
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
                lang={lang}
                onOpen={() => setOpenCard(card)}
              />
            ))}
          </div>
        ))}
      </div>

      {openCard && (
        <ArchiveLightbox
          card={openCard}
          lang={lang}
          onClose={() => setOpenCard(null)}
        />
      )}
    </>
  );
}
