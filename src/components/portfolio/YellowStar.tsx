import svgPaths from "../../imports/MacBookAir1/svg-nbyi5go133";
import { lerpColor } from "../../utils/math";

interface YellowStarProps {
  fromColor?: string;
  toColor?: string;
  progress?: number;
}

export function YellowStar({
  fromColor = "#FFD300",
  toColor = "#FFD300",
  progress = 0,
}: YellowStarProps) {
  const gradientId = "portfolio-star-gradient";
  const middleColor = lerpColor(fromColor, toColor, progress);

  return (
    <svg viewBox="0 0 1164.03 1174.99" fill="none" className="block size-full">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="50%" stopColor={middleColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>
      </defs>
      <path d={svgPaths.p3e9d2800} fill={`url(#${gradientId})`} />
      <path d={svgPaths.p8c82200} fill={`url(#${gradientId})`} />
      <path d={svgPaths.p39e26cf0} fill={`url(#${gradientId})`} />
      <path d={svgPaths.p3ad4300} fill={`url(#${gradientId})`} />
      <path d={svgPaths.p365a35f0} fill={`url(#${gradientId})`} />
    </svg>
  );
}
