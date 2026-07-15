import svgPaths from "../../imports/Archive/svg-x2f1j61o2u";

export function ProjectIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]">
      <div className="absolute inset-[16.67%_8.34%_20.83%_12.5%]">
        <div className="absolute inset-[-5.33%_-4.21%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.4497 12.45"
          >
            <path
              d={svgPaths.p295dd380}
              stroke="#333333"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function CollectionIcon() {
  const dots = [
    "inset-[12.5%_52.78%_58.33%_18.06%]",
    "inset-[12.5%_12.5%_58.33%_58.33%]",
    "inset-[52.78%_12.5%_18.06%_58.33%]",
    "inset-[52.78%_52.78%_18.06%_18.06%]",
  ];

  return (
    <div className="overflow-clip relative shrink-0 size-[18px]">
      {dots.map((position, index) => (
        <div key={index} className={`absolute ${position}`}>
          <div className="absolute inset-[-11.43%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 6.45 6.45"
            >
              <path
                d={svgPaths.p17971080}
                stroke="#333333"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#archive-filter-clip)">
          <path
            d={svgPaths.p2d1bd480}
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.8"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="archive-filter-clip">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
