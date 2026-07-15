import { useState } from "react";
import { ArchiveCard } from "../components/archive/ArchiveCard";
import { ArchiveFilters } from "../components/archive/ArchiveFilters";
import {
  getArchiveColumns,
  type Category,
} from "../data/archiveItems";

export default function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState<Category | null>(null);
  const columns = getArchiveColumns(activeFilter);

  const toggleFilter = (category: Category) => {
    setActiveFilter((currentFilter) =>
      currentFilter === category ? null : category,
    );
  };

  return (
    <main className="bg-[#f5f3eb] min-h-screen relative overflow-x-hidden">
      <div
        className="mx-auto"
        style={{
          maxWidth: 1280,
          paddingTop: 100,
          paddingBottom: 80,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <h1
          className="font-['Clash_Display:Regular',sans-serif] font-normal not-italic text-black tracking-[1.12px] whitespace-nowrap"
          style={{ fontSize: 28, marginBottom: 28 }}
        >
          Explore my work archive
        </h1>

        <ArchiveFilters
          activeFilter={activeFilter}
          onToggleFilter={toggleFilter}
        />

        <div className="flex gap-[16px] items-start">
          {columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-[16px] flex-1 min-w-0"
            >
              {column.map((card) => (
                <ArchiveCard key={card.id} card={card} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
