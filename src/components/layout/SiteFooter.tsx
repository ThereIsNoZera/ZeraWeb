export function SiteFooter() {
  return (
    <footer
      aria-label="Website footer"
      className="relative z-10 h-[230px] w-full shrink-0 overflow-hidden bg-[rgba(223,185,0,0.4)]"
    >
      <div className="mx-auto flex h-[194px] w-full max-w-[936px] items-center justify-center px-[24px]">
        {/* Contact information */}
        <div className="w-[271px] shrink-0">
          <h2 className="m-0 font-clash text-[32px] font-medium not-italic leading-[24px] tracking-[2.56px] text-black">
            Contact me!!
          </h2>

          <div className="mt-[12px] flex flex-col">
            <a
              className="w-fit font-clash text-[16px] font-medium not-italic leading-[24px] tracking-[1.28px] text-[#1B1B1B] no-underline hover:underline"
              href="mailto:zera.rahmanie@gmail.com"
            >
              zera.rahmanie@gmail.com
            </a>

            <a
              className="w-fit font-clash text-[16px] font-medium not-italic leading-[24px] tracking-[1.28px] text-[#1B1B1B] no-underline hover:underline"
              href="https://linkedin.com/in/zera-rahmani"
              rel="noreferrer"
              target="_blank"
            >
              linkedin.com/in/zera-rahmani
            </a>
          </div>
        </div>

        {/* Vertical divider */}
        <div
          aria-hidden="true"
          className="mx-[26px] h-[140px] w-px shrink-0 bg-[#1B1B1B]"
        />

        {/* Website description */}
        <div className="w-[448px]">
          <p className="m-0 font-clash text-[14px] font-regular not-italic leading-[18px] tracking-[0.28px] text-[#1B1B1B]">
            This portfolio itself is also one of my projects. Figma Make
            generated the initial React codebase, which became the starting
            point for many rounds of testing, adjustment, and refinement.
            ChatGPT supported the technical implementation and helped translate
            those decisions into code.
            <br />
            The design and creative direction are by Zera.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <p className="absolute bottom-[7px] left-0 m-0 w-full px-[24px] text-center font-clash text-[12px] font-regular not-italic leading-[18px] tracking-[0.24px] text-[#1B1B1B]">
        All artworks and original content belong to Zera. Please do not
        reproduce or use them without permission. © 2026 Zera.
      </p>
    </footer>
  );
}
