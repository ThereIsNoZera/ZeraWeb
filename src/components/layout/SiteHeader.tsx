import {
  CV_ACTIVE_SCROLL,
  CV_SCROLL,
  PROJECTS_SCROLL,
  VISIT_CARDS_ACTIVE_SCROLL,
  VISIT_CARDS_SCROLL,
} from "../../config/portfolio";
import { TRANSLATIONS, type Lang } from "../../data/translations";
import type { PageId } from "../../types/navigation";
import { YellowStar } from "../portfolio/YellowStar";

interface HeaderLinkProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function HeaderLink({ label, active, onClick }: HeaderLinkProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className="relative inline-flex h-[28px] cursor-pointer items-center justify-center whitespace-nowrap border-0 bg-transparent p-0 font-clash text-[20px] font-normal leading-none tracking-[0.4px] text-black"
    >
      <span
        className={`relative inline-flex h-full items-center justify-center px-[4px] ${
          active ? "header-link-active" : ""
        }`}
      >
        {active && (
          <span
            aria-hidden="true"
            className="absolute bottom-[3px] left-0 right-0 h-[8px] bg-[hsla(50,100%,44%,1)]"
          />
        )}

        <span className="relative z-10">{label}</span>
      </span>
    </button>
  );
}

interface SiteHeaderProps {
  scrollY: number;
  lang: Lang;
  page: PageId;
  onLanguageChange: (lang: Lang) => void;
  onToggleArchive: () => void;
  onNavigateToSection: (scrollPosition: number) => void;
}

export function SiteHeader({
  scrollY,
  lang,
  page,
  onLanguageChange,
  onToggleArchive,
  onNavigateToSection,
}: SiteHeaderProps) {
  const text = TRANSLATIONS[lang];

  const activeSection =
    page === "archive"
      ? "archive"
      : scrollY >= VISIT_CARDS_ACTIVE_SCROLL
        ? "visitCards"
        : scrollY >= CV_ACTIVE_SCROLL
          ? "cv"
          : scrollY >= PROJECTS_SCROLL
            ? "projects"
            : "none";

  return (
    <header
      style={{
        position: "fixed",
        top: 25,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(1000px, calc(100vw - 32px))",
        zIndex: 1000,
      }}
    >
      <div className="relative flex h-[56px] w-full items-center justify-between bg-[rgba(212,211,204,0.88)] px-[22px] py-[12px] backdrop-blur-[4px]">
        {/* Border and shadow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border-[2px] border-solid border-black shadow-[2px_4px_1px_rgba(0,0,0,0.25)]"
        />

        <button
          type="button"
          onClick={onToggleArchive}
          aria-label="Open portfolio home"
          className="relative z-10 flex size-[36px] items-center justify-center border-0 bg-transparent p-0 cursor-pointer"
        >
          <YellowStar color="hsla(50, 100%, 44%, 1)" />
        </button>

        {/* Center navigation */}
        <nav
          aria-label="Portfolio sections"
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[12px]"
        >
          <HeaderLink
            label={text.navProjects}
            active={activeSection === "projects"}
            onClick={() => onNavigateToSection(PROJECTS_SCROLL)}
          />

          <span className="font-clash text-[20px] font-normal text-black">
            |
          </span>

          <HeaderLink
            label={text.navCV}
            active={activeSection === "cv"}
            onClick={() => onNavigateToSection(CV_SCROLL)}
          />

          <span className="font-clash text-[20px] font-normal text-black">
            |
          </span>

          <HeaderLink
            label="Visit cards"
            active={activeSection === "visitCards"}
            onClick={() => onNavigateToSection(VISIT_CARDS_SCROLL)}
          />

          {/* <HeaderLink label={text.navVisit} active={false} onClick={() => {}} /> */}

          <span className="font-clash text-[20px] font-normal text-black">
            |
          </span>

          <HeaderLink
            label={text.navArchive}
            active={activeSection === "archive"}
            onClick={onToggleArchive}
          />
        </nav>

        {/* Language selector */}
        <div className="relative z-10 ml-auto flex items-center gap-[6px]">
          <button
            type="button"
            onClick={() => onLanguageChange("de")}
            className="border-0 bg-transparent p-0 font-clash text-[20px] font-normal leading-none text-black cursor-pointer"
          >
            DE
          </button>

          <button
            type="button"
            onClick={() => onLanguageChange(lang === "en" ? "de" : "en")}
            aria-label={`Switch language to ${
              lang === "en" ? "German" : "English"
            }`}
            className={`relative flex h-[24px] w-[52px] items-center rounded-full border-0 bg-[#383836] px-[3px] cursor-pointer ${
              lang === "en" ? "justify-end" : "justify-start"
            }`}
          >
            <span className="block size-[18px] rounded-full bg-white" />
          </button>

          <button
            type="button"
            onClick={() => onLanguageChange("en")}
            className="border-0 bg-transparent p-0 font-clash text-[20px] font-normal leading-none text-black cursor-pointer"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
