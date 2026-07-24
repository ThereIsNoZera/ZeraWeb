import { useEffect, useRef } from "react";
import {
  HERO_STAR_CENTER_X,
  HERO_STAR_CENTER_Y,
  HERO_STAR_SIZE,
  HORIZONTAL_PATH_SPEED,
  PAGE_HEIGHT,
  PATH_ORIGIN_X,
  PATH_ORIGIN_Y,
  PATH_SCALE_X,
  PATH_START_X,
  PATH_START_Y,
  PATH_STAR_SIZE,
  STAR_GLIDE_END,
  STAR_SIZE_END,
} from "../../config/portfolio";
import { clamp, lerp } from "../../utils/math";

const RAW_SEGMENTS = [
  { length: 517, horizontal: false },
  { length: 728, horizontal: true },
  { length: 688.5, horizontal: false },
  { length: 565.5, horizontal: true },
  { length: 100.5, horizontal: false },
  { length: 273.5, horizontal: true },
  { length: 462.5, horizontal: false },
  { length: 67.5, horizontal: true },
  { length: 793.5, horizontal: false },
  { length: 760, horizontal: true },
  { length: 551.5, horizontal: false },
] as const;

const SEGMENTS = (() => {
  let pathStart = 0;
  let scrollStart = 0;

  return RAW_SEGMENTS.map((segment) => {
    const scrollLength = segment.horizontal
      ? segment.length / HORIZONTAL_PATH_SPEED
      : segment.length;

    const result = {
      pathStart,
      pathLength: segment.length,
      scrollStart,
      scrollLength,
    };

    pathStart += segment.length;
    scrollStart += scrollLength;
    return result;
  });
})();

const TOTAL_PATH_LENGTH = SEGMENTS.reduce(
  (total, segment) => total + segment.pathLength,
  0,
);
const TOTAL_SCROLL_UNITS =
  SEGMENTS[SEGMENTS.length - 1].scrollStart +
  SEGMENTS[SEGMENTS.length - 1].scrollLength;

const COLOR_TRANSITIONS = [
  { start: 0.03, end: 0.08, from: "#FFD300", to: "#D32B14" },
  { start: 0.25, end: 0.35, from: "#D32B14", to: "#36AA09" },
  { start: 0.55, end: 0.61, from: "#36AA09", to: "#1E6998" },
  { start: 0.66, end: 0.78, from: "#1E6998", to: "#ABFF4C" },
  { start: 0.89, end: 0.95, from: "#ABFF4C", to: "#FFD300" },
] as const;

function scrollToPathProgress(progress: number) {
  const scrollPosition = progress * TOTAL_SCROLL_UNITS;

  for (const segment of SEGMENTS) {
    if (scrollPosition <= segment.scrollStart + segment.scrollLength) {
      const segmentProgress =
        (scrollPosition - segment.scrollStart) / segment.scrollLength;
      return (
        (segment.pathStart + segmentProgress * segment.pathLength) /
        TOTAL_PATH_LENGTH
      );
    }
  }

  return 1;
}

function getStarGradient(pathProgress: number) {
  let currentColor = COLOR_TRANSITIONS[0].from;

  for (const transition of COLOR_TRANSITIONS) {
    if (pathProgress < transition.start) {
      return { from: currentColor, to: currentColor, progress: 0 };
    }

    if (pathProgress <= transition.end) {
      return {
        from: transition.from,
        to: transition.to,
        progress:
          (pathProgress - transition.start) /
          (transition.end - transition.start),
      };
    }

    currentColor = transition.to;
  }

  return { from: currentColor, to: currentColor, progress: 1 };
}

export interface PortfolioAnimationState {
  centerX: number;
  centerY: number;
  size: number;
  rotation: number;
  traveledLength: number;
  gradientFrom: string;
  gradientTo: string;
  gradientProgress: number;
}

export function usePortfolioAnimation(scrollY: number) {
  const pathRef = useRef<SVGPathElement>(null);
  const measuredPathLength = useRef(0);

  useEffect(() => {
    if (pathRef.current) {
      measuredPathLength.current = pathRef.current.getTotalLength();
    }
  }, []);

  let centerX = PATH_START_X;
  let centerY = PATH_START_Y;
  let traveledLength = 0;
  let pathProgress = 0;

  const sizeProgress = clamp(scrollY / STAR_SIZE_END, 0, 1);
  const size = lerp(HERO_STAR_SIZE, PATH_STAR_SIZE, sizeProgress);
  let rotation = 0;

  if (scrollY <= STAR_GLIDE_END) {
    const glideProgress = clamp(scrollY / STAR_GLIDE_END, 0, 1);
    centerX = lerp(HERO_STAR_CENTER_X, PATH_START_X, glideProgress);
    centerY = lerp(HERO_STAR_CENTER_Y, PATH_START_Y, glideProgress);
    rotation = lerp(0, 75, sizeProgress);
  } else {
    const maximumScroll = 3050;
    const rawProgress = clamp(
      (scrollY - STAR_GLIDE_END) / (maximumScroll - STAR_GLIDE_END),
      0,
      1,
    );
    pathProgress = scrollToPathProgress(rawProgress);

    if (measuredPathLength.current > 0 && pathRef.current) {
      traveledLength = pathProgress * measuredPathLength.current;
      const point = pathRef.current.getPointAtLength(traveledLength);
      centerX = PATH_ORIGIN_X + point.x * PATH_SCALE_X;
      centerY = PATH_ORIGIN_Y + point.y;
    }

    rotation = lerp(0, 75, sizeProgress) + pathProgress * 720;
  }

  const gradient = getStarGradient(pathProgress);
  const animation: PortfolioAnimationState = {
    centerX,
    centerY,
    size,
    rotation,
    traveledLength,
    gradientFrom: gradient.from,
    gradientTo: gradient.to,
    gradientProgress: gradient.progress,
  };

  return { pathRef, animation };
}
