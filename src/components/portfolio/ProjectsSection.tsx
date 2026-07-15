import imgPickle from "../../imports/MacBookAir1/036d3616ecf900c559670d9d8b6a85e9b1aaafd5.png";
import imgConference from "../../imports/MacBookAir1/54a0e940378c6a1502721822cda0762796fa605b.png";
import imgOtavanBackground from "../../imports/MacBookAir1/9a4efb3abdb05623ffb309383a7913e0323741ed.png";
import imgCracry from "../../imports/MacBookAir1/92b9d9aae01592a34a5598ccff385be5c3ab10c8.png";
import imgThank from "../../imports/MacBookAir1/0c58cb068a6a418889fdaaa480eca136c0943d69.png";
import imgOtavanColor from "../../imports/MacBookAir1/27d4ba0dabb856a331fcc74a2786591fe254c939.png";
import imgErgo from "../../imports/MacBookAir1/6fe2772333318e1678d89a6b43cd2e2d6bcb9ce3.png";
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
            className="absolute max-w-none object-cover opacity-70"
            style={{
              left: -54,
              top: 0,
              width: 665,
              height: 444,
              filter: "blur(2px)",
            }}
            src={imgOtavanBackground}
          />
          <span
            className="absolute flex items-center"
            style={{ left: 358, top: 262, width: 219, height: 117 }}
          >
            <img
              alt=""
              style={{ height: 93, width: 105, objectFit: "cover" }}
              src={imgCracry}
            />
            <span style={{ paddingTop: 12 }}>
              <img
                alt=""
                style={{ width: 96, height: 96, objectFit: "cover" }}
                src={imgThank}
              />
            </span>
          </span>
          <span
            className="absolute overflow-hidden block"
            style={{ left: -37, top: 50, width: 356, height: 328 }}
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
              src={imgOtavanColor}
            />
          </span>
        </span>
      </ProjectCard>
    </>
  );
}
