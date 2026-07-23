import type { ArchiveCardData } from "../../data/archiveItems";
import { CollectionIcon, ProjectIcon } from "./ArchiveIcons";

interface ArchiveCardProps {
  card: ArchiveCardData;
  onOpen: () => void;
}

export function ArchiveCard({ card, onOpen }: ArchiveCardProps) {
  const { images, aspectW, aspectH, rotated, stacked, caption, icon } = card;
  const ratio = aspectW / aspectH;

  return (
    <article
      aria-label={`Open ${caption}`}
      className="cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      role="button"
      style={{ breakInside: "avoid", marginBottom: 16 }}
      tabIndex={0}
    >
      {stacked ? (
        <div className="flex flex-col gap-[10px]">
          {images.map((source, index) => (
            <div
              className="relative w-full"
              key={source}
              style={{ aspectRatio: `${aspectW}/${aspectH}` }}
            >
              <img
                alt={`${caption} — image ${index + 1}`}
                className="pointer-events-none absolute inset-0 size-full object-cover"
                src={source}
              />
            </div>
          ))}
        </div>
      ) : rotated ? (
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: `${aspectH}/${aspectW}` }}
        >
          <div
            className="absolute"
            style={{
              width: `${(aspectH / aspectW) * 100}%`,
              height: `${(aspectW / aspectH) * 100}%`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(90deg)",
            }}
          >
            <img
              alt={caption}
              className="pointer-events-none absolute inset-0 size-full object-cover"
              src={images[0]}
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full" style={{ aspectRatio: `${ratio}` }}>
          <img
            alt={caption}
            className="pointer-events-none absolute inset-0 size-full object-cover"
            src={images[0]}
          />
        </div>
      )}

      <div className="mt-[6px] flex items-center gap-[6px]">
        {icon === "project" && <ProjectIcon />}
        {icon === "collection" && <CollectionIcon />}

        <p className="min-w-0 font-['Clash_Display:Regular',sans-serif] text-[13px] leading-normal text-[#333]">
          {caption}
        </p>
      </div>
    </article>
  );
}
