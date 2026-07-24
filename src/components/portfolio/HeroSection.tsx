import svgPaths from "../../imports/MacBookAir1/svg-nbyi5go133";
import { imgGroup204 } from "../../imports/MacBookAir1/svg-0egr1";

interface HeroSectionProps {
  hello: string;
  description: string;
}

export function HeroSection({ hello, description }: HeroSectionProps) {
  return (
    <>
      <p
        className="absolute not-italic m-0 whitespace-nowrap"
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 32,
          fontWeight: 400,
          color: "rgba(0,0,0,0.8)",
          letterSpacing: "10.24px",
          left: 47,
          top: 226,
          lineHeight: "normal",
          zIndex: 1,
        }}
      >
        {hello}
      </p>

      <div
        className="absolute overflow-clip"
        style={{
          height: 238,
          left: 44,
          top: 278,
          width: 662,
          zIndex: 3,
        }}
      >
        <div
          className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat"
          style={{
            maskImage: `url("${imgGroup204}")`,
            maskSize: "662.006px 238.001px",
          }}
        >
          <svg
            className="absolute inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 662.007 238.002"
          >
            <path d={svgPaths.p2f203280} fill="black" fillOpacity="0.86" />
            <path d={svgPaths.p3ef37a80} fill="black" fillOpacity="0.86" />
            <path d={svgPaths.p139d2c80} fill="black" fillOpacity="0.86" />
            <path d={svgPaths.p16950680} fill="black" fillOpacity="0.86" />
            <path d={svgPaths.p3297d680} fill="black" fillOpacity="0.86" />
            <path d={svgPaths.p391fc000} fill="black" fillOpacity="0.86" />
            <path d={svgPaths.p2bda0f00} fill="black" fillOpacity="0.86" />
          </svg>
        </div>
      </div>

      <p
        className="absolute not-italic m-0"
        style={{
          fontFamily: "'Clash Display', sans-serif",
          fontSize: 20,
          fontWeight: 400,
          color: "rgba(0,0,0,0.8)",
          letterSpacing: "1px",
          left: 47,
          top: 519,
          width: 586,
          whiteSpace: "pre-wrap",
          lineHeight: "normal",
          zIndex: 1,
        }}
      >
        {description}
      </p>
    </>
  );
}
