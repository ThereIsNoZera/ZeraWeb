import { useState } from "react";

import { ArchiveButton } from "./ActionButtons";
import { createVisitCard } from "../../services/visitorCards";
import type { VisitCardFormData } from "../../types/visitorCards";
import { VisitCardOverlay } from "./VisitCardOverlay";

export function VisitCardsSection() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleCreateCard = async (data: VisitCardFormData) => {
    await createVisitCard(data);
  };

  return (
    <>
      <section
        aria-labelledby="visit-cards-heading"
        className="relative z-10 -mt-[180px] flex w-full flex-col items-center pb-[48px]"
      >
        <h2
          className="m-0 text-center font-clash text-[32px] font-medium not-italic leading-[24px] tracking-[2.56px] text-black"
          id="visit-cards-heading"
        >
          Visit cards
        </h2>

        <p className="mb-0 mt-[12px] text-center font-clash text-[20px] font-normal leading-normal tracking-[0.8px] text-black">
          A small trace of your visit.
          <br />
          Let people know I have awesome visitors by leaving your card.
        </p>

        <div
          aria-label="Visitor cards"
          className="mt-[32px] h-[220px] w-full overflow-x-auto overflow-y-hidden"
        >
          <div className="flex h-full min-w-max items-center gap-[30px] px-[40px]">
            {/* Generated visitor cards will be added here later. */}
          </div>
        </div>

        <div className="mt-[32px]">
          <ArchiveButton
            label="Leave a visit card"
            onClick={() => setIsOverlayOpen(true)}
          />
        </div>
      </section>

      {isOverlayOpen && (
        <VisitCardOverlay
          onClose={() => setIsOverlayOpen(false)}
          onCreate={handleCreateCard}
        />
      )}
    </>
  );
}
