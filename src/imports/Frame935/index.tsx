import svgPaths from "./svg-fl4klqy326";
import imgRafflePage1111 from "./86ac63c3ab2863bf7235f8df9bf4628a4ea3d737.png";
import img1280ToCrop11 from "./ddad4d87c1736edc2bd41fed9ae51b9828a2f7ec.png";
import img211 from "./30a7bcdbe21691be6cdbd0d5a770f0cda32d413a.png";
import imgCreateRaffle12211 from "./f459ec430cfe02f960ba6e7bfb46d8cb68bebf2d.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[88px] h-full items-center min-w-px relative">
      <div className="aspect-[285/191] relative shrink-0 w-full" data-name="Raffle Page 1-1 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRafflePage1111} />
      </div>
      <div className="aspect-[285/234] relative shrink-0 w-full" data-name="1280toCrop 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1280ToCrop11} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[88px] h-full items-center min-w-px relative">
      <div className="aspect-[285/190] relative shrink-0 w-full" data-name="2 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img211} />
      </div>
      <div className="h-0 relative shrink-0 w-[32px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Line 33" />
        </svg>
      </div>
      <div className="aspect-[285/234] relative shrink-0 w-full" data-name="Create Raffle 1-2 (2) 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCreateRaffle12211} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[99px] left-[451px] top-[193.61px] w-0">
      <div className="absolute inset-[0_-6.26px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5187 99">
          <g id="Frame 934">
            <path d={svgPaths.p3c83ac80} fill="var(--stroke-0, white)" id="Arrow 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px relative w-full">
      <Frame />
      <Frame1 />
      <Frame3 />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full">
      <Frame2 />
    </div>
  );
}