import {
  ARCHIVE_CATEGORIES,
  type Category,
} from "../../data/archiveItems";
import { FilterIcon } from "./ArchiveIcons";

interface ArchiveFiltersProps {
  activeFilter: Category | null;
  onToggleFilter: (category: Category) => void;
}

export function ArchiveFilters({
  activeFilter,
  onToggleFilter,
}: ArchiveFiltersProps) {
  return (
    <div className="flex gap-[12px] items-center" style={{ marginBottom: 32 }}>
      <FilterIcon />
      {ARCHIVE_CATEGORIES.map((category) => {
        const active = activeFilter === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onToggleFilter(category)}
            className="relative rounded-[12px] shrink-0 cursor-pointer border-0 p-0 bg-transparent"
            style={{ outline: "none" }}
            aria-pressed={active}
          >
            <span
              className="flex h-[42px] items-center justify-center px-[12px] rounded-[12px]"
              style={{
                backgroundColor: active ? "rgba(0,0,0,0.85)" : "transparent",
                transition: "background-color 0.15s ease",
              }}
            >
              <span
                aria-hidden
                className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[12px]"
                style={{ borderColor: "rgba(0,0,0,0.8)" }}
              />
              <span
                className="font-['Clash_Display:Regular',sans-serif] leading-normal not-italic shrink-0 text-[19px] tracking-[0.76px] whitespace-nowrap"
                style={{
                  color: active ? "#f5f3eb" : "rgba(0,0,0,0.8)",
                  transition: "color 0.15s ease",
                }}
              >
                {category}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
