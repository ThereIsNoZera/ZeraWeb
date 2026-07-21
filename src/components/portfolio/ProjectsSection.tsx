import imgPickle from "../../imports/MacBookAir1/a_pickle.webp";
import imgConference from "../../imports/MacBookAir1/a_conf.webp";
import imgOtavanBackground from "../../imports/MacBookAir1/Otavan.webp";
import imgErgo from "../../imports/MacBookAir1/a_ergo.webp";
import type { Translation } from "../../data/translations";
import type { ProjectId } from "../../types/navigation";
import { ProjectCard } from "../projects/ProjectCard";

interface ProjectsSectionProps {
  text: Translation;
  onOpenProject: (project: ProjectId) => void;
}

export function ProjectsSection({ text, onOpenProject }: ProjectsSectionProps) {
  return (
    <>
      <ProjectCard
        left={564}
        top={800}
        title={text.ergoTitle}
        subtitle={text.ergoSub}
        shadowSide="right"
        onClick={() => onOpenProject("ergo")}
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

      <ProjectCard
        left={76}
        top={1424}
        title={text.pickleTitle}
        subtitle={text.pickleSub}
        onClick={() => onOpenProject("pickle")}
      >
        <span className="absolute inset-0 bg-[#fad978] block">
          <span
            className="absolute overflow-hidden block"
            style={{ height: "100%", left: 16, top: 0, width: "94.5%" }}
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
          </span>
        </span>
      </ProjectCard>

      <ProjectCard
        left={76}
        top={2048}
        title={text.confTitle}
        subtitle={text.confSub}
        onClick={() => onOpenProject("conference")}
      >
        <img
          alt="International Conference"
          className="absolute max-w-none"
          style={{
            left: "-9.47%",
            top: 0,
            width: "113.8%",
            height: "102.62%",
            objectFit: "cover",
          }}
          src={imgConference}
        />
      </ProjectCard>

      <ProjectCard
        left={564}
        top={2672}
        title={text.otavanTitle}
        subtitle={text.otavanSub}
        shadowSide="right"
        onClick={() => onOpenProject("otavan")}
      >
        <span className="absolute inset-0 bg-white overflow-hidden block">
          <img
            alt=""
            className="absolute max-w-none object-cover"
            style={{
              left: -5,
              top: -5,
              width: "105%",
              height: "105%",
            }}
            src={imgOtavanBackground}
          />
        </span>
      </ProjectCard>
    </>
  );
}
