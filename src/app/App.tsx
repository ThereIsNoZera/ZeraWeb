import { useEffect, useRef, useState } from "react";
import svgPaths from "../imports/MacBookAir1/svg-nbyi5go133";
import { imgGroup204 } from "../imports/MacBookAir1/svg-0egr1";
import imgPaperTexture from "../imports/MacBookAir1/c00ecb2679bcc6c33f3a9171c611b7425a8e1f1d.png";
import imgPaperOverlay from "../imports/paper-texture-web-fallback.jpg";
import imgPickle from "../imports/MacBookAir1/036d3616ecf900c559670d9d8b6a85e9b1aaafd5.png";
import imgConference from "../imports/MacBookAir1/54a0e940378c6a1502721822cda0762796fa605b.png";
import imgOtavanBg from "../imports/MacBookAir1/9a4efb3abdb05623ffb309383a7913e0323741ed.png";
import imgCracry from "../imports/MacBookAir1/92b9d9aae01592a34a5598ccff385be5c3ab10c8.png";
import imgThank from "../imports/MacBookAir1/0c58cb068a6a418889fdaaa480eca136c0943d69.png";
import imgOtavanColo from "../imports/MacBookAir1/27d4ba0dabb856a331fcc74a2786591fe254c939.png";
import imgErgo from "../imports/MacBookAir1/6fe2772333318e1678d89a6b43cd2e2d6bcb9ce3.png";
import Cv from "../imports/Cv/index";
import Frame989 from "../imports/Frame989/index";
import Frame990 from "../imports/Frame990/index";
import ArchivePage from "./ArchivePage";
import ErgoOverlay from "./ErgoOverlay";
import PickleOverlay from "./PickleOverlay";
import OtavanOverlay from "./OtavanOverlay";
import ConferenceOverlay from "./ConferenceOverlay";

// ─── Path / layout constants ──────────────────────────────────────────────────
const DASHED_PATH =
  "M729.5 0V517H1.5V1205.5H567V1306H840.5V1768.5H773V2562H13V3113.5";

const PATH_ORIGIN_X = 186.5;
const PATH_ORIGIN_Y = 425.5;
const PATH_SVG_W = 839;
const PATH_VIEWBOX_W = 842;
const PATH_VIEWBOX_H = 3113.5;
const SX = PATH_SVG_W / PATH_VIEWBOX_W;

const PAGE_HEIGHT = 4200;

// ─── i18n ─────────────────────────────────────────────────────────────────────
type Lang = "en" | "de";

const TRANSLATIONS = {
  en: {
    hello: "Hello, This is",
    description:
      "Design Student \nUI/UX design  Illustration  communication",
    ergoTitle: "Ergo Raffle:",
    ergoSub: "Redesign of a digital platform",
    pickleTitle: "Pickle:",
    pickleSub: "Illustration and product concept",
    confTitle: "International Conference",
    confSub: "Identity design",
    otavanTitle: "Otavan:",
    otavanSub:
      "Learning game prototype for children on the autism spectrum",
    archiveBtn: "Check out Archive for more",
    navArchive: "Archive",
    navProjects: "Projects",
    navCV: "CV",
    navVisit: "Visit cards",
  },
  de: {
    hello: "Hallo, ich bin",
    description:
      "Designstudentin \nUI/UX Design  Illustration  Kommunikation",
    ergoTitle: "Ergo Raffle:",
    ergoSub: "Redesign einer digitalen Plattform",
    pickleTitle: "Pickle:",
    pickleSub: "Illustration und Produktidee",
    confTitle: "Internationale Konferenz",
    confSub: "Identitätsdesign",
    otavanTitle: "Otavan:",
    otavanSub:
      "Lernspiel-Prototyp für Kinder im Autismus-Spektrum",
    archiveBtn: "Mehr im Archiv entdecken",
    navArchive: "Archiv",
    navProjects: "Projekte",
    navCV: "Lebenslauf",
    navVisit: "Visitenkarten",
  },
} as const;

// ─── Header scroll thresholds ─────────────────────────────────────────────────
// "Projects" activates just before the first card (Ergo at top=800).
// "CV" activates when the CV section comes into view (top=3350).
const PROJECTS_SCROLL = 700;
const CV_SCROLL = 3300;

// ─── Star animation constants ─────────────────────────────────────────────────
const HERO_CX = 942;
const HERO_CY = 257;
const HERO_SIZE = 1000; // ~2/3 of the 1280px canvas width
const PATH_STAR_SIZE = 72;
const PATH_START_X = PATH_ORIGIN_X + 729.5 * SX;
const PATH_START_Y = PATH_ORIGIN_Y;
const GLIDE_END = 200; // scroll at which star reaches the path start
const SIZE_END = 480; // scroll at which star finishes shrinking

// ─── Horizontal speed remapping ───────────────────────────────────────────────
// Horizontal segments of the path are traversed H_SPEED times faster than
// vertical ones, so the star visibly accelerates when it turns a corner.
const H_SPEED = 1.5;

// Each entry describes one straight segment of the dashed path:
// { len: SVG-unit length, horiz: whether it's horizontal }
const RAW_SEGS = [
  { len: 517, horiz: false }, // V517
  { len: 728, horiz: true }, // H1.5
  { len: 688.5, horiz: false }, // V1205.5
  { len: 565.5, horiz: true }, // H567
  { len: 100.5, horiz: false }, // V1306
  { len: 273.5, horiz: true }, // H840.5
  { len: 462.5, horiz: false }, // V1768.5
  { len: 67.5, horiz: true }, // H773
  { len: 793.5, horiz: false }, // V2562
  { len: 760, horiz: true }, // H13
  { len: 551.5, horiz: false }, // V3113.5
] as const;

// Build cumulative tables at module load time
const SEGS = (() => {
  let pathAcc = 0;
  let scrollAcc = 0;
  return RAW_SEGS.map((s) => {
    const scrollLen = s.horiz ? s.len / H_SPEED : s.len;
    const seg = {
      pathStart: pathAcc,
      pathLen: s.len,
      scrollStart: scrollAcc,
      scrollLen,
    };
    pathAcc += s.len;
    scrollAcc += scrollLen;
    return seg;
  });
})();

const TOTAL_PATH_LEN = SEGS.reduce((a, s) => a + s.pathLen, 0); // ≈ 5508.5
const TOTAL_SCROLL_UNITS =
  SEGS[SEGS.length - 1].scrollStart +
  SEGS[SEGS.length - 1].scrollLen;

// Maps a normalised scroll progress [0,1] to a normalised path progress [0,1],
// honouring the horizontal speed multiplier.
function scrollToPathProgress(t: number): number {
  const scrollPos = t * TOTAL_SCROLL_UNITS;
  for (const seg of SEGS) {
    if (scrollPos <= seg.scrollStart + seg.scrollLen) {
      const segT =
        (scrollPos - seg.scrollStart) / seg.scrollLen;
      return (
        (seg.pathStart + segT * seg.pathLen) / TOTAL_PATH_LEN
      );
    }
  }
  return 1;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function clamp(v: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * clamp(t, 0, 1);
}
function lerpColor(a: string, b: string, t: number): string {
  const p = (h: string, o: number) =>
    parseInt(h.slice(o, o + 2), 16);
  const r = Math.round(lerp(p(a, 1), p(b, 1), t));
  const g = Math.round(lerp(p(a, 3), p(b, 3), t));
  const bl = Math.round(lerp(p(a, 5), p(b, 5), t));
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${bl.toString(16).padStart(2, "0")}`;
}

// Color stops keyed to path progress [0,1] — positions derived from the
// small indicator stars placed along the path in the layout.
const COLOR_TRANSITIONS = [
  {
    start: 0.07,
    end: 0.11,
    from: "#FFD300",
    to: "#D32B14",
  },
  {
    start: 0.40,
    end: 0.46,
    from: "#D32B14",
    to: "#36AA09",
  },
  {
    start: 0.61,
    end: 0.67,
    from: "#36AA09",
    to: "#1E6998",
  },
  {
    start: 0.72,
    end: 0.78,
    from: "#1E6998",
    to: "#ABFF4C",
  },
  {
    start: 0.89,
    end: 0.95,
    from: "#ABFF4C",
    to: "#FFD300",
  },
] as const;

// Width of the blend band (in path-progress units) centered on the midpoint
// between two adjacent color stops. Outside this band the star renders the
// solid color of the nearest stop. A small band keeps each indicator-star's
// color visible for most of its segment.

// Returns { from, to, t } describing the gradient endpoints for the star at a
// given path progress. The star is solid (from === to) when sitting on or
// near a stop, and only fades through a top→bottom gradient inside a narrow
// band around each midpoint between two stops.
function starGradientAtProgress(
  p: number
): { from: string; to: string; t: number } {
  let currentColor = COLOR_TRANSITIONS[0].from;

  for (const transition of COLOR_TRANSITIONS) {
    // Before this transition starts, hold the previous solid color
    if (p < transition.start) {
      return {
        from: currentColor,
        to: currentColor,
        t: 0,
      };
    }

    // While inside the transition range, blend between the colors
    if (p <= transition.end) {
      const transitionProgress =
        (p - transition.start) /
        (transition.end - transition.start);

      return {
        from: transition.from,
        to: transition.to,
        t: transitionProgress,
      };
    }

    // After this transition, hold its destination color
    currentColor = transition.to;
  }

  return {
    from: currentColor,
    to: currentColor,
    t: 1,
  };
}

// ─── Star shapes ──────────────────────────────────────────────────────────────
function SmallColorStar({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 90.4945 91.3477"
      fill="none"
      className="block size-full"
    >
      <path d={svgPaths.p232be3c0} fill={color} />
      <path d={svgPaths.p58682f2} fill={color} />
      <path d={svgPaths.p2c2f4200} fill={color} />
      <path d={svgPaths.p2dad6100} fill={color} />
      <path d={svgPaths.p33e3c000} fill={color} />
    </svg>
  );
}

function RedStar() {
  return (
    <svg
      viewBox="0 0 113.835 114.907"
      fill="none"
      className="block size-full"
    >
      <path d={svgPaths.p13abbf00} fill="#D32B14" />
      <path d={svgPaths.p24b414f0} fill="#D32B14" />
      <path d={svgPaths.p2bc69900} fill="#D32B14" />
      <path d={svgPaths.p2bd1be00} fill="#D32B14" />
      <path d={svgPaths.pc23e200} fill="#D32B14" />
    </svg>
  );
}

function YellowStarSvg({
  fromColor = "#FFD300",
  toColor = "#FFD300",
  t = 0,
}: {
  fromColor?: string;
  toColor?: string;
  t?: number;
}) {
  // Stable id so React doesn't churn the gradient node each render. Because
  // the star is rendered once on the page, a constant id is safe.
  const gradId = "yellow-star-grad";
  // Bias the middle stop with `t` so the dominant color shifts top→bottom as
  // the star approaches the next stop, instead of holding a static 50/50 blend.
  const midColor = lerpColor(fromColor, toColor, t);
  return (
    <svg
      viewBox="0 0 1164.03 1174.99"
      fill="none"
      className="block size-full"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="50%" stopColor={midColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>
      </defs>
      <path d={svgPaths.p3e9d2800} fill={`url(#${gradId})`} />
      <path d={svgPaths.p8c82200} fill={`url(#${gradId})`} />
      <path d={svgPaths.p39e26cf0} fill={`url(#${gradId})`} />
      <path d={svgPaths.p3ad4300} fill={`url(#${gradId})`} />
      <path d={svgPaths.p365a35f0} fill={`url(#${gradId})`} />
    </svg>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
// Replicates the HeaderPositions highlight pattern for all three nav labels.
function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`content-stretch flex h-[12px] items-center justify-center px-[4px] relative cursor-pointer select-none${active ? " bg-[rgba(226,187,0,0.8)] pb-[8px]" : ""}`}
    >
      <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

function SiteHeader({
  scrollY,
  lang,
  setLang,
  page,
  setPage,
}: {
  scrollY: number;
  lang: Lang;
  setLang: (l: Lang) => void;
  page: "home" | "archive";
  setPage: (p: "home" | "archive") => void;
}) {
  const t = TRANSLATIONS[lang];
  const activeSection =
    page === "archive"
      ? "archive"
      : scrollY >= CV_SCROLL
      ? "cv"
      : scrollY >= PROJECTS_SCROLL
      ? "projects"
      : "none";

  const scrollTo = (y: number) =>
    window.scrollTo({ top: y, behavior: "smooth" });

  return (
    <div
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
        {/* Archive — navigates to archive page */}
        <button
          className="h-[25px] relative shrink-0 w-[80px] bg-transparent border-0 p-0 cursor-pointer"
          onClick={() => setPage(page === "archive" ? "home" : "archive")}
        >
          <p
            className="[word-break:break-word] absolute font-['Clash_Display:Regular',sans-serif] leading-[normal] left-0 not-italic text-[20px] text-black top-0 tracking-[0.8px] whitespace-nowrap"
            style={activeSection === "archive" ? { borderBottom: "3px solid rgba(226,187,0,0.8)", paddingBottom: 4 } : undefined}
          >
            {t.navArchive}
          </p>
        </button>
        {/* Nav links */}
        <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
          <NavItem
            label={t.navProjects}
            active={activeSection === "projects"}
            onClick={() => scrollTo(PROJECTS_SCROLL)}
          />
          <p className="font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black tracking-[0.8px]">
            |
          </p>
          <NavItem
            label={t.navCV}
            active={activeSection === "cv"}
            onClick={() => scrollTo(CV_SCROLL)}
          />
          <p className="font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black tracking-[0.8px]">
            |
          </p>
          <NavItem
            label={t.navVisit}
            active={false}
            onClick={() => {}}
          />
        </div>
        {/* DE / EN language toggle — click side labels or the switch to flip */}
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <p
            onClick={() => setLang("de")}
            className={`font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black tracking-[0.8px] cursor-pointer select-none${lang === "de" ? " font-medium" : ""}`}
          >
            DE
          </p>
          <div
            onClick={() => setLang(lang === "en" ? "de" : "en")}
            className={`bg-[#383836] content-stretch flex h-[32px] items-center ${lang === "en" ? "justify-end" : "justify-start"} px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px] cursor-pointer`}
          >
            <div
              className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0"
              style={{ transition: "margin 0.2s ease" }}
            >
              <div className="relative rounded-[23px] shrink-0 size-[2px]" />
            </div>
          </div>
          <p
            onClick={() => setLang("en")}
            className={`font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic text-[20px] text-black tracking-[0.8px] cursor-pointer select-none${lang === "en" ? " font-medium" : ""}`}
          >
            EN
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Jump buttons ─────────────────────────────────────────────────────────────
// On mouse-enter the button translates -3px, 3px (pressing into its own shadow)
// and swaps to the "Variant2" visual (gray bg, no shadow). On leave it springs back.

function CvButton() {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      style={{
        display: "inline-block",
        cursor: "pointer",
        transform: pressed ? "translate(-3px, 3px)" : "translate(0, 0)",
        transition: "transform 0.1s ease",
      }}
      onMouseEnter={() => setPressed(true)}
      onMouseLeave={() => setPressed(false)}
    >
      <Frame989 property1={pressed ? "Variant2" : "Default"} />
    </div>
  );
}

function ArchiveButton({ label }: { label: string }) {
  const [pressed, setPressed] = useState(false);
  const isVariant2 = pressed;
  return (
    <div
      style={{
        display: "inline-block",
        cursor: "pointer",
        transform: pressed ? "translate(-3px, 3px)" : "translate(0, 0)",
        transition: "transform 0.1s ease",
      }}
      onMouseEnter={() => setPressed(true)}
      onMouseLeave={() => setPressed(false)}
    >
      <div
        className={`relative rounded-[5px] ${isVariant2 ? "bg-[#b2b1a9]/60" : "bg-[rgba(255,255,255,0.01)]"}`}
      >
        <div className="content-stretch flex items-end overflow-clip px-[22px] py-[8px] relative rounded-[inherit] size-full">
          <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">
            {label}
          </p>
        </div>
        <div
          aria-hidden
          className={`absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[5px] ${isVariant2 ? "" : "shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.4)]"}`}
        />
      </div>
    </div>
  );
}

// ─── Project overlay width constant (used by shell + all detail components) ──
const OVERLAY_WIDTH = 1100;

// ─── Project overlay shell ────────────────────────────────────────────────────
// Standard overlay used for all project detail pages.
// Rules: 1100px wide, centered, 90vh max-height, scrollable, close button
// sticky top-right, backdrop closes on click.
function ProjectOverlay({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 2000, backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
    >
      <div
        className="relative overflow-y-auto overflow-x-hidden"
        style={{
          width: OVERLAY_WIDTH,
          maxWidth: "100vw",
          maxHeight: "90vh",
          borderRadius: 4,
          backgroundColor: "#2A2A2C",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — sticky top-right */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "sticky",
            top: 16,
            float: "right",
            marginRight: 16,
            zIndex: 10,
            background: "rgba(255,255,255,0.85)",
            border: "2px solid black",
            borderRadius: "50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "-2px 2px 0 rgba(0,0,0,0.3)",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13" stroke="black" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

// ─── Project card with hover lift effect ──────────────────────────────────────
// Matches the Frame982 import: default = 647×552, hover = outer 660×564 with the
// inner card sitting at bottom-12 and a left-bottom shadow.
interface CardProps {
  left: number;
  top: number;
  title: string;
  subtitle: string;
  shadowSide?: "left" | "right";
  onClick?: () => void;
  children: React.ReactNode;
}

function ProjectCard({
  left,
  top,
  title,
  subtitle,
  shadowSide = "left",
  onClick,
  children,
}: CardProps) {
  const [hovered, setHovered] = useState(false);

  // Outer wrapper grows to give the shadow room without clipping.
  // For right-shadow cards the extra 13px goes on the right, so we shift
  // the wrapper left by 13px to keep the card visually anchored.
  const shadowPad = shadowSide === "right" ? 26 : 13;
  const outerW = hovered ? 647 + shadowPad : 647;
  const outerH = hovered ? 564 : 552;
  const outerLeft =
    shadowSide === "right" && hovered ? left - shadowPad : left;
  const shadowX = shadowSide === "right" ? 13 : -13;

  return (
    <div
      className="absolute overflow-visible cursor-pointer"
      style={{
        left: outerLeft,
        top,
        width: outerW,
        height: outerH,
        zIndex: 4,
        transition:
          "width 0.25s ease, height 0.25s ease, left 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Inner card — shifts up on hover with a directional shadow */}
      <div
        className="absolute bg-[#f0ebe8] flex flex-col overflow-clip rounded-[2px]"
        style={{
          left: 0,
          top: 0,
          width: 647,
          height: 552,
          padding: 32,
          gap: 10,
          transform: hovered
            ? `translate(${shadowSide === "right" ? "-13px" : "13px"}, -12px)`
            : "translate(0, 0)",
          boxShadow: hovered
            ? `${shadowX}px 11px 1px 1px rgba(0,0,0,0.25)`
            : "none",
          transition:
            "transform 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        <div
          className="relative overflow-hidden shrink-0"
          style={{ height: 431.06, width: 583 }}
        >
          {children}
        </div>
        <div
          style={{
            fontFamily: "'Clash Display', sans-serif",
            letterSpacing: "0.96px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: 28,
              fontWeight: 500,
              margin: 0,
              lineHeight: "normal",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              margin: 0,
              lineHeight: "normal",
              width: "100%",
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [lang, setLang] = useState<Lang>("en");
  const [page, setPage] = useState<"home" | "archive">("home");
  const [otavanOpen, setOtavanOpen] = useState(false);
  const [pickleOpen, setPickleOpen] = useState(false);
  const [ergoOpen, setErgoOpen] = useState(false);
  const [conferenceOpen, setConferenceOpen] = useState(false);
  const t = TRANSLATIONS[lang];
  const hiddenPathRef = useRef<SVGPathElement>(null);
  const pathLengthRef = useRef(0);

  useEffect(() => {
    if (hiddenPathRef.current) {
      pathLengthRef.current =
        hiddenPathRef.current.getTotalLength();
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ─── Animated star ──────────────────────────────────────────────────────────
  let starCX = PATH_START_X;
  let starCY = PATH_START_Y;
  let starSize = HERO_SIZE;
  let starRotation = 0;
  let traveledLength = 0;
  let pathProg = 0;

  // Size and rotation animate over the longer SIZE_END window
  const sizet = clamp(scrollY / SIZE_END, 0, 1);
  starSize = lerp(HERO_SIZE, PATH_STAR_SIZE, sizet);

  if (scrollY <= GLIDE_END) {
    // Phase 1 — glide from hero center to the path's start point
    const glidet = clamp(scrollY / GLIDE_END, 0, 1);
    starCX = lerp(HERO_CX, PATH_START_X, glidet);
    starCY = lerp(HERO_CY, PATH_START_Y, glidet);
    starRotation = lerp(0, 75, sizet);
  } else {
    // Phase 2 — follow the dashed path (starts while still shrinking)
    const maxScroll = PAGE_HEIGHT - 900;
    const rawProgress = clamp(
      (scrollY - GLIDE_END) / (maxScroll - GLIDE_END),
      0,
      1,
    );
    pathProg = scrollToPathProgress(rawProgress);

    if (pathLengthRef.current > 0 && hiddenPathRef.current) {
      const traveled = pathProg * pathLengthRef.current;
      const pt =
        hiddenPathRef.current.getPointAtLength(traveled);
      starCX = PATH_ORIGIN_X + pt.x * SX;
      starCY = PATH_ORIGIN_Y + pt.y;
      traveledLength = traveled;
    } else {
      starCX = PATH_START_X;
      starCY = PATH_START_Y;
    }
    // Continue rotating from where Phase 1 left off so there's no jump at
    // the boundary; sizet still grows past GLIDE_END until SIZE_END.
    starRotation = lerp(0, 75, sizet) + pathProg * 720;
  }

  const starGrad = starGradientAtProgress(pathProg);

  return (
    <div className="relative bg-[#f5f3eb]" style={{ overflowX: "hidden" }}>
      {/* Fixed header — sits above everything, tracks active section */}
      <SiteHeader scrollY={scrollY} lang={lang} setLang={setLang} page={page} setPage={setPage} />

      {/* Archive page — shown instead of main portfolio */}
      {page === "archive" && <ArchivePage />}

      {/* Main portfolio — hidden when on archive page */}
      <div style={{ display: page === "archive" ? "none" : "block", minHeight: PAGE_HEIGHT }}>

      {/* Paper texture — full viewport width */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: PAGE_HEIGHT,
          zIndex: 2,
          opacity: 0.2,
        }}
      >
        <div
          className="size-full"
          style={{
            backgroundImage: `url(${imgPaperOverlay})`,
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Fixed 1280px website layout */}
      <div
        className="relative mx-auto"
        style={{
          width: 1280,
          height: PAGE_HEIGHT,
        }}
      >
        {/* Hidden path for getPointAtLength calculations */}
        <svg
          aria-hidden
          className="absolute opacity-0 pointer-events-none"
          style={{
            left: PATH_ORIGIN_X,
            top: PATH_ORIGIN_Y,
            width: PATH_SVG_W,
            height: PATH_VIEWBOX_H,
          }}
          viewBox={`0 0 ${PATH_VIEWBOX_W} ${PATH_VIEWBOX_H}`}
        >
          <path ref={hiddenPathRef} d={DASHED_PATH} />
        </svg>

        {/* ═══ HERO ═══ */}

        <p
          className="absolute not-italic m-0 whitespace-nowrap"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: 32,
            fontWeight: 400,
            color: "rgba(0,0,0,0.8)",
            letterSpacing: "10.24px",
            left: 47,
            top: 226,
            lineHeight: "normal",
            zIndex: 1,
          }}
        >
          {t.hello}
        </p>

        {/* "Zera!" brush-stroke masked SVG */}
        <div
          className="absolute overflow-clip"
          style={{
            height: 238,
            left: 44,
            top: 278,
            width: 662,
            zIndex: 2,
          }}
        >
          <div
            className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat"
            style={{
              maskImage: `url("${imgGroup204}")`,
              maskSize: "662.006px 238.001px",
            }}
          >
            <svg
              className="absolute inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 662.007 238.002"
            >
              <path
                d={svgPaths.p2f203280}
                fill="black"
                fillOpacity="0.86"
              />
              <path
                d={svgPaths.p3ef37a80}
                fill="black"
                fillOpacity="0.86"
              />
              <path
                d={svgPaths.p139d2c80}
                fill="black"
                fillOpacity="0.86"
              />
              <path
                d={svgPaths.p16950680}
                fill="black"
                fillOpacity="0.86"
              />
              <path
                d={svgPaths.p3297d680}
                fill="black"
                fillOpacity="0.86"
              />
              <path
                d={svgPaths.p391fc000}
                fill="black"
                fillOpacity="0.86"
              />
              <path
                d={svgPaths.p2bda0f00}
                fill="black"
                fillOpacity="0.86"
              />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p
          className="absolute not-italic m-0"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            fontSize: 20,
            fontWeight: 400,
            color: "rgba(0,0,0,0.8)",
            letterSpacing: "1px",
            left: 47,
            top: 519,
            width: 586,
            whiteSpace: "pre-wrap",
            lineHeight: "normal",
            zIndex: 1,
          }}
        >
          {t.description}
        </p>

        {/* ═══ DASHED PATH ═══ */}
        <div
          className="absolute"
          style={{
            left: PATH_ORIGIN_X,
            top: PATH_ORIGIN_Y,
            width: PATH_SVG_W,
            height: PATH_VIEWBOX_H,
            zIndex: 1,
          }}
        >
          <svg
            className="block size-full bg-[#00000000]"
            fill="none"
            preserveAspectRatio="none"
            viewBox={`0 0 ${PATH_VIEWBOX_W} ${PATH_VIEWBOX_H}`}
          >
            <path
              d={DASHED_PATH}
              stroke="black"
              strokeDasharray="12 17"
              strokeLinejoin="bevel"
              strokeOpacity="0.3"
              strokeWidth="3"
            />
            {traveledLength > 0 && (
              <path
                d={DASHED_PATH}
                stroke="#565653"
                strokeDasharray={`${traveledLength} 999999`}
                strokeLinejoin="bevel"
                strokeOpacity="1.0"
                strokeWidth="3"
              />
            )}
          </svg>
        </div>

        {/* ═══ DECORATIVE STARS ═══ */}

        {/* Red — first bend */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: 109.36,
            top: 933.98,
            width: 161.743,
            height: 161.743,
            zIndex: 1,
          }}
        >
          <div
            style={{
              transform: "rotate(45deg)",
              width: 113.832,
              height: 114.908,
            }}
          >
            {/* <RedStar /> */}
          </div>
        </div>

        {/* Green / Blue / Light-green indicator stars — hidden, used for color timing only */}

        {/* ═══ PROJECT CARDS ═══ */}

        {/* Ergo Raffle — right column */}
        <ProjectCard
          left={564}
          top={800}
          title={t.ergoTitle}
          subtitle={t.ergoSub}
          shadowSide="right"
          onClick={() => setErgoOpen(true)}
        >
          <img
            alt="Ergo Raffle"
            className="absolute max-w-none"
            style={{
              left: "-6.56%",
              top: "-0.07%",
              width: "113.13%",
              height: "100.13%",
              objectFit: "cover",
            }}
            src={imgErgo}
          />
        </ProjectCard>

        {/* Pickle — left column */}
        <ProjectCard
          left={76}
          top={1424}
          title={t.pickleTitle}
          subtitle={t.pickleSub}
          onClick={() => setPickleOpen(true)}
        >
          <div className="absolute inset-0 bg-[#fad978]">
            <div
              className="absolute overflow-hidden"
              style={{
                height: "100%",
                left: 16,
                top: 0,
                width: "94.5%",
              }}
            >
              <img
                alt="Pickle"
                className="absolute max-w-none"
                style={{
                  left: "-0.35%",
                  top: "-1.06%",
                  width: "101.08%",
                  height: "102.12%",
                  objectFit: "cover",
                }}
                src={imgPickle}
              />
            </div>
          </div>
        </ProjectCard>

        {/* International Conference — left column */}
        <ProjectCard
          left={76}
          top={2048}
          title={t.confTitle}
          subtitle={t.confSub}
          onClick={() => setConferenceOpen(true)}
        >
          <img
            alt="International Conference"
            className="absolute max-w-none"
            style={{
              left: "-9.47%",
              top: "0",
              width: "113.8%",
              height: "102.62%",
              objectFit: "cover",
            }}
            src={imgConference}
          />
        </ProjectCard>

        {/* Otavan — right column */}
        <ProjectCard
          left={564}
          top={2672}
          title={t.otavanTitle}
          subtitle={t.otavanSub}
          shadowSide="right"
          onClick={() => setOtavanOpen(true)}
        >
          <div className="absolute inset-0 bg-white overflow-hidden">
            <img
              alt=""
              className="absolute max-w-none object-cover opacity-70"
              style={{
                left: -54,
                top: 0,
                width: 665,
                height: 444,
                filter: "blur(2px)",
              }}
              src={imgOtavanBg}
            />
            <div
              className="absolute flex items-center"
              style={{
                left: 358,
                top: 262,
                width: 219,
                height: 117,
              }}
            >
              <img
                alt=""
                style={{
                  height: 93,
                  width: 105,
                  objectFit: "cover",
                }}
                src={imgCracry}
              />
              <div style={{ paddingTop: 12 }}>
                <img
                  alt=""
                  style={{
                    width: 96,
                    height: 96,
                    objectFit: "cover",
                  }}
                  src={imgThank}
                />
              </div>
            </div>
            <div
              className="absolute overflow-hidden"
              style={{
                left: -37,
                top: 50,
                width: 356,
                height: 328,
              }}
            >
              <img
                alt=""
                className="absolute max-w-none"
                style={{
                  left: 0,
                  top: "-0.01%",
                  width: "132.21%",
                  height: "100.02%",
                }}
                src={imgOtavanColo}
              />
            </div>
          </div>
        </ProjectCard>

        {/* ═══ CV SECTION ═══ */}
        {/* Placed below the 4th card. The Cv import is 1364px wide — the wrapper
            clips the 84px overhang so the inner content (portrait at x=164,
            text at x=569) sits naturally within the 1280px canvas. */}
        <div
          className="absolute overflow-visible"
          style={{ left: 0, top: 3350, width: 1280, height: 558, zIndex: 2 }}
        >
          <Cv />
          {/* Interactive CvButton overlaid on top of the static Frame button inside
              the Cv import. Frame2 sits at left=569; the button is the last item
              in its flex column, which ends near the bottom of the content area. */}
          <div style={{ position: "absolute", left: 569, bottom: 55, zIndex: 1 }}>
            <CvButton />
          </div>
        </div>

        {/* ═══ ARCHIVE BUTTON ═══ */}
        <div
          className="absolute"
          style={{ left: 300, top: 3260, zIndex: 3 }}
        >
          <ArchiveButton label={t.archiveBtn} />
        </div>

        {/* ═══ ANIMATED YELLOW STAR ═══ */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: starCX - starSize / 2,
            top: starCY - starSize / 2,
            width: starSize,
            height: starSize,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              transform: `rotate(${starRotation}deg)`,
              transformOrigin: "center center",
            }}
          >
            <YellowStarSvg
              fromColor={starGrad.from}
              toColor={starGrad.to}
              t={starGrad.t}
            />
          </div>
        </div>
      </div>
      </div>{/* end main portfolio wrapper */}

      {/* ═══ ERGO DETAIL OVERLAY ═══ */}
      {ergoOpen && (
        <ProjectOverlay onClose={() => setErgoOpen(false)}>
          <div style={{ position: "relative", width: OVERLAY_WIDTH, minHeight: 7600 }}>
            <ErgoOverlay lang={lang} />
          </div>
        </ProjectOverlay>
      )}

      {/* ═══ PICKLE DETAIL OVERLAY ═══ */}
      {pickleOpen && (
        <ProjectOverlay onClose={() => setPickleOpen(false)}>
          <PickleOverlay lang={lang} />
        </ProjectOverlay>
      )}

      {/* ═══ CONFERENCE DETAIL OVERLAY ═══ */}
      {conferenceOpen && (
        <ProjectOverlay onClose={() => setConferenceOpen(false)}>
          <div style={{ position: "relative", width: OVERLAY_WIDTH, minHeight: 1800 }}>
            <ConferenceOverlay lang={lang} />
          </div>
        </ProjectOverlay>
      )}

      {/* ═══ OTAVAN DETAIL OVERLAY ═══ */}
      {otavanOpen && (
        <ProjectOverlay onClose={() => setOtavanOpen(false)}>
          <div style={{ position: "relative", width: OVERLAY_WIDTH, minHeight: 1400 }}>
            <OtavanOverlay lang={lang} />
          </div>
        </ProjectOverlay>
      )}
    </div>
  );
}