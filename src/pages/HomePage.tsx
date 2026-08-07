import { PAGE_HEIGHT } from "../config/portfolio";
import { TRANSLATIONS, type Lang } from "../data/translations";
import { usePortfolioAnimation } from "../features/portfolio/usePortfolioAnimation";
import imgPaperOverlay from "../imports/paper-texture-web-fallback.jpg";
import type { ProjectId } from "../types/navigation";
import { HomeArchiveSection } from "../components/portfolio/HomeArchiveSection";
import { CvSection } from "../components/portfolio/CvSection";
import { HeroSection } from "../components/portfolio/HeroSection";
import { PortfolioPath } from "../components/portfolio/PortfolioPath";
import { ProjectsSection } from "../components/portfolio/ProjectsSection";
import { SiteFooter } from "../components/layout/SiteFooter";
import { VisitCardsSection } from "../components/portfolio/VisitCardsSection";

const FOOTER_HEIGHT = 230;

interface HomePageProps {
  scrollY: number;
  lang: Lang;

  onOpenProject: (project: ProjectId) => void;
}

export default function HomePage({
  scrollY,
  lang,
  onOpenProject,
}: HomePageProps) {
  const text = TRANSLATIONS[lang];
  const { pathRef, animation } = usePortfolioAnimation(scrollY);

  return (
    <main
      className="relative"
      style={{ minHeight: PAGE_HEIGHT + FOOTER_HEIGHT }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 4,
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

      <div
        className="relative mx-auto"
        style={{
          width: 1280,
          height: PAGE_HEIGHT,
        }}
      >
        <HeroSection hello={text.hello} description={text.description} />

        <PortfolioPath pathRef={pathRef} animation={animation} />

        <ProjectsSection text={text} onOpenProject={onOpenProject} />

        <CvSection />
      </div>

      <div
        className="relative z-10 flex w-full flex-col items-center gap-[90px]"
        style={{
          marginTop: -202,
        }}
      >
        <HomeArchiveSection lang={lang} />

        <VisitCardsSection />
      </div>

      <SiteFooter />
    </main>
  );
}
