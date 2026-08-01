import { useCallback, useState } from "react";

import { CustomCursor } from "../components/ui/CustomCursor";
import { SiteHeader } from "../components/layout/SiteHeader";
import { ProjectDetails } from "../components/projects/ProjectDetails";
import type { Lang } from "../data/translations";
import { useScrollPosition } from "../hooks/useScrollPosition";
import ArchivePage from "../pages/ArchivePage";
import HomePage from "../pages/HomePage";
import type { PageId, ProjectId } from "../types/navigation";

export default function App() {
  const scrollY = useScrollPosition();
  const [lang, setLang] = useState<Lang>("en");
  const [page, setPage] = useState<PageId>("home");
  const [activeProject, setActiveProject] = useState<ProjectId | null>(null);

  const closeProject = useCallback(() => setActiveProject(null), []);

  const scrollToTop = useCallback(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);

  const toggleArchive = useCallback(() => {
    setPage((currentPage) => (currentPage === "archive" ? "home" : "archive"));
    scrollToTop();
  }, [scrollToTop]);

  const openArchive = useCallback(() => {
    setPage("archive");
    scrollToTop();
  }, [scrollToTop]);

  const navigateToHomeSection = useCallback((scrollPosition: number) => {
    setPage("home");

    // Wait for the homepage to mount before measuring and scrolling.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div className="relative bg-[#f5f3eb]" style={{ overflowX: "hidden" }}>
      <CustomCursor />

      <SiteHeader
        scrollY={scrollY}
        lang={lang}
        page={page}
        onLanguageChange={setLang}
        onToggleArchive={toggleArchive}
        onNavigateToSection={navigateToHomeSection}
      />

      {page === "archive" ? (
        <ArchivePage lang={lang} />
      ) : (
        <HomePage
          scrollY={scrollY}
          lang={lang}
          onOpenArchive={openArchive}
          onOpenProject={setActiveProject}
        />
      )}

      <ProjectDetails
        project={activeProject}
        lang={lang}
        onClose={closeProject}
      />
    </div>
  );
}
