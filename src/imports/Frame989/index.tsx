import svgPaths from "./svg-jsaou9f3ck";
type FrameProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame({ className, property1 = "Default" }: FrameProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[5px] ${isVariant2 ? "bg-[#b2b1a9]/60" : "bg-[rgba(255,255,255,0.01)]"}`}>
      <div className="content-stretch flex gap-[8px] items-end overflow-clip px-[22px] py-[8px] relative rounded-[inherit] size-full">
        <div className="h-[30px] relative shrink-0 w-[22px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 30">
            <g id="Group 207">
              <path d={svgPaths.p7c69600} fill="var(--fill-0, black)" id="Vector" />
              <path d={svgPaths.p3801df00} fill="var(--fill-0, black)" id="Vector_2" />
            </g>
          </svg>
        </div>
        <div className="h-[32px] relative shrink-0 w-[47px]" data-name="Vector_layer">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 32">
            <g clipPath="url(#clip0_2081_218)" id="Vector_layer">
              <path d={svgPaths.p379ee400} fill="var(--fill-0, black)" id="Vector" />
              <path d={svgPaths.p15661b00} fill="var(--fill-0, black)" id="Vector_2" />
              <path d={svgPaths.p110de180} fill="var(--fill-0, black)" id="Vector_3" />
            </g>
            <defs>
              <clipPath id="clip0_2081_218">
                <rect fill="white" height="32" width="47" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div aria-hidden className={`absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[5px] ${isVariant2 ? "" : "shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.4)]"}`} />
    </div>
  );
}