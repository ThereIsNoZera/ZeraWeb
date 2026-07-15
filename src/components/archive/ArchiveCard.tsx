import type { ArchiveCardData } from "../../data/archiveItems";
import { CollectionIcon, ProjectIcon } from "./ArchiveIcons";

interface ArchiveCardProps {
  card: ArchiveCardData;
}

export function ArchiveCard({ card }: ArchiveCardProps) {
  const { images, aspectW, aspectH, rotated, stacked, caption, icon } = card;
  const ratio = aspectW / aspectH;

  return (
    <article style={{ breakInside: "avoid", marginBottom: 16 }}>
      {stacked ? (
        <div className="flex flex-col gap-[10px]">
          {images.map((source, index) => (
            <div
              key={source}
              className="relative w-full"
              style={{ aspectRatio: `${aspectW}/${aspectH}` }}
            >
              <img
                alt={`${caption} — image ${index + 1}`}
                className="absolute inset-0 size-full object-cover pointer-events-none"
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
              className="absolute inset-0 size-full object-cover pointer-events-none"
              src={images[0]}
            />
          </div>
        </div>
      ) : (
        <div className="relative w-full" style={{ aspectRatio: `${ratio}` }}>
          <img
            alt={caption}
            className="absolute inset-0 size-full object-cover pointer-events-none"
            src={images[0]}
          />
        </div>
      )}

      <div className="flex gap-[6px] items-center mt-[6px]">
        {icon === "project" && <ProjectIcon />}
        {icon === "collection" && <CollectionIcon />}
        <p className="font-['Clash_Display:Regular',sans-serif] text-[#333] text-[13px] leading-normal min-w-0">
          {caption}
        </p>
      </div>
    </article>
  );
}
