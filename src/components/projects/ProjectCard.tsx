import { useState, type ReactNode } from "react";

interface ProjectCardProps {
  left: number;
  top: number;
  title: string;
  subtitle: string;
  shadowSide?: "left" | "right";
  onClick: () => void;
  children: ReactNode;
}

export function ProjectCard({
  left,
  top,
  title,
  subtitle,
  shadowSide = "left",
  onClick,
  children,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const shadowPadding = shadowSide === "right" ? 26 : 13;
  const outerWidth = hovered ? 647 + shadowPadding : 647;
  const outerHeight = hovered ? 564 : 552;
  const outerLeft = shadowSide === "right" && hovered ? left - shadowPadding : left;
  const shadowX = shadowSide === "right" ? 13 : -13;

  return (
    <button
      type="button"
      className="absolute overflow-visible cursor-pointer border-0 bg-transparent p-0 text-left"
      style={{
        left: outerLeft,
        top,
        width: outerWidth,
        height: outerHeight,
        zIndex: 4,
        transition: "width 0.25s ease, height 0.25s ease, left 0.25s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={onClick}
    >
      <span
        className="absolute bg-[#f0ebe8] flex flex-col overflow-clip rounded-[2px]"
        style={{
          left: 0,
          top: 0,
          width: 647,
          height: 552,
          padding: 32,
          gap: 10,
          transform: hovered
            ? `translate(${shadowSide === "right" ? "-13px" : "13px"}, -12px)`
            : "translate(0, 0)",
          boxShadow: hovered
            ? `${shadowX}px 11px 1px 1px rgba(0,0,0,0.25)`
            : "none",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
        }}
      >
        <span
          className="relative overflow-hidden shrink-0 block"
          style={{ height: 431.06, width: 583 }}
        >
          {children}
        </span>
        <span
          className="block"
          style={{
            fontFamily: "'Clash Display', sans-serif",
            letterSpacing: "0.96px",
            width: "100%",
          }}
        >
          <span
            className="block"
            style={{
              fontSize: 28,
              fontWeight: 500,
              margin: 0,
              lineHeight: "normal",
            }}
          >
            {title}
          </span>
          <span
            className="block"
            style={{
              fontSize: 20,
              fontWeight: 400,
              margin: 0,
              lineHeight: "normal",
              width: "100%",
            }}
          >
            {subtitle}
          </span>
        </span>
      </span>
    </button>
  );
}
