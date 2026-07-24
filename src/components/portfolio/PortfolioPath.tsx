import type { RefObject } from "react";
import {
  DASHED_PATH,
  PATH_ORIGIN_X,
  PATH_ORIGIN_Y,
  PATH_SVG_W,
  PATH_VIEWBOX_H,
  PATH_VIEWBOX_W,
} from "../../config/portfolio";
import type { PortfolioAnimationState } from "../../features/portfolio/usePortfolioAnimation";
import { YellowStar } from "./YellowStar";

interface PortfolioPathProps {
  pathRef: RefObject<SVGPathElement | null>;
  animation: PortfolioAnimationState;
}

export function PortfolioPath({ pathRef, animation }: PortfolioPathProps) {
  return (
    <>
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
        <path ref={pathRef} d={DASHED_PATH} />
      </svg>

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
          {animation.traveledLength > 0 && (
            <path
              d={DASHED_PATH}
              stroke="#565653"
              strokeDasharray={`${animation.traveledLength} 999999`}
              strokeLinejoin="bevel"
              strokeOpacity="1"
              strokeWidth="3"
            />
          )}
        </svg>
      </div>

      <div
        className="absolute pointer-events-none"
        style={{
          left: animation.centerX - animation.size / 2,
          top: animation.centerY - animation.size / 2,
          width: animation.size,
          height: animation.size,
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: `rotate(${animation.rotation}deg)`,
            transformOrigin: "center center",
          }}
        >
          <YellowStar
            fromColor={animation.gradientFrom}
            toColor={animation.gradientTo}
            progress={animation.gradientProgress}
          />
        </div>
      </div>
    </>
  );
}
