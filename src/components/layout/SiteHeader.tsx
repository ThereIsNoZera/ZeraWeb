import { CV_SCROLL, PROJECTS_SCROLL } from "../../config/portfolio";
import { TRANSLATIONS, type Lang } from "../../data/translations";
import type { PageId } from "../../types/navigation";

interface NavItemProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavItem({ label, active, onClick }: NavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`content-stretch flex h-[12px] items-center justify-center px-[4px] relative cursor-pointer select-none border-0 text-black${active ? " bg-[rgba(226,187,0,0.8)] pb-[8px]" : " bg-transparent"}`}
    >
      <span
        className="[word-break:break-word] font-clash font-normal leading-[normal] not-italic relative shrink-0 text-[20px] tracking-[0.8px] whitespace-nowrap"
        style={{ fontWeight: 400 }}
      >
        {label}
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
      : scrollY >= CV_SCROLL
        ? "cv"
        : scrollY >= PROJECTS_SCROLL
          ? "projects"
          : "none";

  return (
    <header
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        width: 1280,
        zIndex: 1000,
      }}
    >
      <div className="backdrop-blur-[4px] bg-[rgba(212,211,204,0.9)] content-stretch flex items-center justify-between px-[22px] py-[12px] relative w-full">
        <div
          aria-hidden
          className="absolute border-2 border-black border-solid inset-0 pointer-events-none shadow-[2px_4px_1px_0px_rgba(0,0,0,0.25)]"
        />

        <button
          type="button"
          className="h-[25px] relative shrink-0 w-[80px] bg-transparent border-0 p-0 cursor-pointer"
          onClick={onToggleArchive}
        >
          <span
            className="[word-break:break-word] absolute font-clash font-normal leading-[normal] left-0 not-italic text-[20px] text-black top-0 tracking-[0.8px] whitespace-nowrap"
            style={{
              fontWeight: 400,
              ...(activeSection === "archive"
                ? {
                    borderBottom: "3px solid rgba(226,187,0,0.8)",
                    paddingBottom: 4,
                  }
                : {}),
            }}
          >
            {text.navArchive}
          </span>
        </button>

        <nav
          aria-label="Portfolio sections"
          className="content-stretch flex gap-[17px] items-center relative shrink-0"
        >
          <NavItem
            label={text.navProjects}
            active={activeSection === "projects"}
            onClick={() => onNavigateToSection(PROJECTS_SCROLL)}
          />
          <span
            className="font-clash font-normal leading-[normal] not-italic text-[20px] text-black tracking-[0.8px]"
            style={{ fontWeight: 400 }}
          >
            |
          </span>
          <NavItem
            label={text.navCV}
            active={activeSection === "cv"}
            onClick={() => onNavigateToSection(CV_SCROLL)}
          />
          <span
            className="font-clash font-normal leading-[normal] not-italic text-[20px] text-black tracking-[0.8px]"
            style={{ fontWeight: 400 }}
          >
            |
          </span>
          <NavItem label={text.navVisit} active={false} onClick={() => {}} />
        </nav>

        <div
          aria-label="Language selector"
          className="content-stretch flex gap-[10px] items-center relative shrink-0"
        >
          <button
            type="button"
            onClick={() => onLanguageChange("de")}
            className="font-clash font-normal leading-[normal] not-italic text-[20px] text-black tracking-[0.8px] cursor-pointer select-none border-0 bg-transparent p-0"
            style={{ fontWeight: 400 }}
          >
            DE
          </button>
          <button
            type="button"
            aria-label={`Switch language to ${lang === "en" ? "German" : "English"}`}
            onClick={() => onLanguageChange(lang === "en" ? "de" : "en")}
            className={`bg-[#383836] content-stretch flex h-[32px] items-center ${lang === "en" ? "justify-end" : "justify-start"} px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px] cursor-pointer border-0`}
          >
            <span className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0">
              <span className="relative rounded-[23px] shrink-0 size-[2px]" />
            </span>
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange("en")}
            className="font-clash font-normal leading-[normal] not-italic text-[20px] text-black tracking-[0.8px] cursor-pointer select-none border-0 bg-transparent p-0"
            style={{ fontWeight: 400 }}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
