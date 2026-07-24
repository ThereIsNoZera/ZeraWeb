import Cv from "../../imports/Cv/index";
import { CvButton } from "./ActionButtons";

export function CvSection() {
  return (
    <div
      className="absolute overflow-visible"
      style={{ left: 0, top: 3350, width: 1280, height: 558, zIndex: 1 }}
    >
      <Cv />
      <div style={{ position: "absolute", left: 569, bottom: 55, zIndex: 1 }}>
        <CvButton />
      </div>
    </div>
  );
}
