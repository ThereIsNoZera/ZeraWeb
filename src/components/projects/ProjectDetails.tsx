import { PROJECT_OVERLAY_WIDTH } from "../../config/portfolio";
import type { Lang } from "../../data/translations";
import type { ProjectId } from "../../types/navigation";
import ConferenceOverlay from "../../features/projects/overlays/ConferenceOverlay";
import ErgoOverlay from "../../features/projects/overlays/ErgoOverlay";
import OtavanOverlay from "../../features/projects/overlays/OtavanOverlay";
import PickleOverlay from "../../features/projects/overlays/PickleOverlay";
import { ProjectOverlay } from "./ProjectOverlay";

interface ProjectDetailsProps {
  project: ProjectId | null;
  lang: Lang;
  onClose: () => void;
}

export function ProjectDetails({ project, lang, onClose }: ProjectDetailsProps) {
  if (!project) return null;

  let content;

  switch (project) {
    case "ergo":
      content = (
        <div
          style={{
            position: "relative",
            width: PROJECT_OVERLAY_WIDTH,
            minHeight: 7600,
          }}
        >
          <ErgoOverlay lang={lang} />
        </div>
      );
      break;
    case "pickle":
      content = <PickleOverlay lang={lang} />;
      break;
    case "conference":
      content = (
        <div
          style={{
            position: "relative",
            width: PROJECT_OVERLAY_WIDTH,
            minHeight: 1800,
          }}
        >
          <ConferenceOverlay lang={lang} />
        </div>
      );
      break;
    case "otavan":
      content = (
        <div
          style={{
            position: "relative",
            width: PROJECT_OVERLAY_WIDTH,
            minHeight: 1400,
          }}
        >
          <OtavanOverlay lang={lang} />
        </div>
      );
      break;
  }

  return <ProjectOverlay onClose={onClose}>{content}</ProjectOverlay>;
}
