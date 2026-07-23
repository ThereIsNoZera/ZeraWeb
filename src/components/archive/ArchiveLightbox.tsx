import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { ArchiveCardData } from "../../data/archiveItems";
import { getArchiveLightboxData } from "../../data/archiveLightboxData";

interface ArchiveLightboxProps {
  card: ArchiveCardData;
  onClose: () => void;
}

function PreviousIcon() {
  return (
    <svg
      aria-hidden="true"
      className="block"
      fill="none"
      height="38"
      viewBox="0 0 24 38"
      width="24"
    >
      <path
        d="M21 3L5 19L21 35"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg
      aria-hidden="true"
      className="block"
      fill="none"
      height="38"
      viewBox="0 0 24 38"
      width="24"
    >
      <path
        d="M3 3L19 19L3 35"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
    >
      <path
        d="M3 3L27 27M27 3L3 27"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function ArchiveLightbox({ card, onClose }: ArchiveLightboxProps) {
  const gallery = getArchiveLightboxData(card);
  const [activeIndex, setActiveIndex] = useState(0);

  const imageCount = gallery.images.length;
  const hasMultipleImages = imageCount > 1;
  const activeImage = gallery.images[activeIndex] ?? gallery.images[0];

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? imageCount - 1 : currentIndex - 1,
    );
  }, [imageCount]);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === imageCount - 1 ? 0 : currentIndex + 1,
    );
  }, [imageCount]);

  useEffect(() => {
    setActiveIndex(0);
  }, [card.id]);

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.paddingRight = previousBodyPaddingRight;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (!hasMultipleImages) {
        return;
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, onClose, showNext, showPrevious]);

  if (!activeImage) {
    return null;
  }

  return createPortal(
    <div
      aria-label={`${activeImage.caption ?? gallery.caption} image viewer`}
      aria-modal="true"
      className="fixed inset-0 z-[5000] overflow-auto overscroll-contain bg-[rgba(0,0,0,0.75)]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
    >
      <button
        aria-label="Close image viewer"
        className="fixed right-[32px] top-[32px] z-[5001] flex size-[44px] cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-white transition-opacity duration-150 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        onClick={onClose}
        type="button"
      >
        <CloseIcon />
      </button>

      <div
        className="mx-auto w-fit max-w-full py-[64px]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex w-fit flex-col items-center">
          {/* Thumbnails */}
          {hasMultipleImages && (
            <div className="mb-[24px] flex max-w-[calc(100vw-64px)] items-center justify-center gap-[12px] overflow-x-auto">
              {gallery.images.map((image, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    aria-label={`Show image ${index + 1}`}
                    aria-pressed={isActive}
                    className={`h-[100px] shrink-0 cursor-pointer overflow-hidden bg-transparent p-0 transition-opacity duration-150 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                      isActive
                        ? "border-2 border-solid border-white"
                        : "border border-solid border-white/30"
                    }`}
                    key={`${image.src}-${index}`}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  >
                    <img
                      alt=""
                      className="block h-full w-auto"
                      src={image.src}
                      style={{ objectFit: gallery.thumbnailFit }}
                    />
                  </button>
                );
              })}
            </div>
          )}

          {/* Arrows and main image */}
          <div className="flex w-fit items-center gap-[20px]">
            {hasMultipleImages && (
              <button
                aria-label="Previous image"
                className="flex size-[40px] shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-white transition-opacity duration-150 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onClick={showPrevious}
                type="button"
              >
                <PreviousIcon />
              </button>
            )}

            <div className="w-fit">
              <div
                className="flex w-fit items-center justify-center overflow-hidden"
                style={{ backgroundColor: gallery.mainImageBackground }}
              >
                <img
                  alt={`${activeImage.caption ?? gallery.caption} — image ${activeIndex + 1}`}
                  className="block h-[700px] w-auto max-w-none"
                  src={activeImage.src}
                />
              </div>

              <p className="mt-[12px] w-full text-center font-clash text-[22px] font-medium not-italic leading-normal text-white">
                {activeImage.caption ?? gallery.caption}
              </p>
            </div>

            {hasMultipleImages && (
              <button
                aria-label="Next image"
                className="flex size-[40px] shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 text-white transition-opacity duration-150 hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                onClick={showNext}
                type="button"
              >
                <NextIcon />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
