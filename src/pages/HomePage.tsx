import { PAGE_HEIGHT } from "../config/portfolio";
import { TRANSLATIONS, type Lang } from "../data/translations";
import { usePortfolioAnimation } from "../features/portfolio/usePortfolioAnimation";
import imgPaperOverlay from "../imports/paper-texture-web-fallback.jpg";
import type { ProjectId } from "../types/navigation";
import { ArchiveButton } from "../components/portfolio/ActionButtons";
import { CvSection } from "../components/portfolio/CvSection";
import { HeroSection } from "../components/portfolio/HeroSection";
import { PortfolioPath } from "../components/portfolio/PortfolioPath";
import { ProjectsSection } from "../components/portfolio/ProjectsSection";

interface HomePageProps {
  scrollY: number;
  lang: Lang;
  onOpenArchive: () => void;
  onOpenProject: (project: ProjectId) => void;
}

export default function HomePage({
  scrollY,
  lang,
  onOpenArchive,
  onOpenProject,
}: HomePageProps) {
  const text = TRANSLATIONS[lang];
  const { pathRef, animation } = usePortfolioAnimation(scrollY);

  return (
    <main style={{ minHeight: PAGE_HEIGHT }}>
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{ height: PAGE_HEIGHT, zIndex: 4, opacity: 0.2 }}
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
        style={{ width: 1280, height: PAGE_HEIGHT }}
      >
        <HeroSection hello={text.hello} description={text.description} />
        <PortfolioPath pathRef={pathRef} animation={animation} />
        <ProjectsSection text={text} onOpenProject={onOpenProject} />
        <CvSection />

        <div className="absolute" style={{ left: 569, top: 3265, zIndex: 3 }}>
          <ArchiveButton label={text.archiveBtn} onClick={onOpenArchive} />
        </div>
      </div>
    </main>
  );
}
