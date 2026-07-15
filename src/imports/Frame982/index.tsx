import imgProperty1IdMockupDone1 from "./54a0e940378c6a1502721822cda0762796fa605b.png";
import imgFrame10051 from "./036d3616ecf900c559670d9d8b6a85e9b1aaafd5.png";
import img511 from "./9a4efb3abdb05623ffb309383a7913e0323741ed.png";
import imgCracry1 from "./92b9d9aae01592a34a5598ccff385be5c3ab10c8.png";
import imgPngthank21 from "./0c58cb068a6a418889fdaaa480eca136c0943d69.png";
import imgColo51 from "./27d4ba0dabb856a331fcc74a2786591fe254c939.png";
import imgProperty1Raffle from "./6fe2772333318e1678d89a6b43cd2e2d6bcb9ce3.png";
type PicturesProps = {
  className?: string;
  property1?: "Pickle" | "Raffle" | "id mockup done 1" | "Otavan";
};

function Pictures({ className, property1 = "Raffle" }: PicturesProps) {
  const isOtavan = property1 === "Otavan";
  const isPickle = property1 === "Pickle";
  const isRaffle = property1 === "Raffle";
  return (
    <div className={className || `relative w-[583px] ${isRaffle ? "h-[431.06px]" : isOtavan ? "bg-white h-[430px] overflow-clip" : isPickle ? "bg-[#fad978] h-[431px] overflow-clip" : "h-[431px]"}`}>
      {["id mockup done 1", "Raffle"].includes(property1) && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className={`absolute max-w-none ${isRaffle ? "h-[100.13%] left-[-6.56%] top-[-0.07%] w-[113.13%]" : "h-[102.62%] left-[-9.47%] top-0 w-[113.8%]"}`} src={isRaffle ? imgProperty1Raffle : imgProperty1IdMockupDone1} />
        </div>
      )}
      {isPickle && (
        <div className="absolute h-[431.06px] left-[16px] top-0 w-[550.799px]" data-name="Frame 100 (5) 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[102.12%] left-[-0.35%] max-w-none top-[-1.06%] w-[101.08%]" src={imgFrame10051} />
          </div>
        </div>
      )}
      {isOtavan && (
        <>
          <div className="absolute blur-[2px] h-[444px] left-[-54px] top-0 w-[665px]" data-name="5 (1) 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover opacity-70 pointer-events-none size-full" src={img511} />
          </div>
          <div className="absolute content-stretch flex h-[117px] items-center left-[358px] top-[262px] w-[219px]">
            <div className="h-[93px] relative shrink-0 w-[105px]" data-name="cracry 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCracry1} />
            </div>
            <div className="content-stretch flex items-center pt-[12px] relative shrink-0">
              <div className="relative shrink-0 size-[96px]" data-name="pngthank2 1">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPngthank21} />
              </div>
            </div>
          </div>
          <div className="absolute h-[328px] left-[-37px] top-[50px] w-[356px]" data-name="colo5 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-[132.21%]" src={imgColo51} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
type FrameProps = {
  className?: string;
  property1?: "Default" | "Hover";
};

export default function Frame({ className, property1 = "Hover" }: FrameProps) {
  const isDefault = property1 === "Default";
  return (
    <div className={className || `overflow-clip relative ${isDefault ? "h-[552px] w-[647px]" : "h-[564px] w-[660px]"}`}>
      <div className={`absolute bg-[#f0ebe8] content-stretch flex flex-col gap-[10px] h-[552px] items-start overflow-clip p-[32px] right-0 rounded-[2px] w-[647px] ${isDefault ? "top-0" : "bottom-[12px] shadow-[-13px_11px_1px_1px_rgba(0,0,0,0.25)]"}`} data-name="Frame 980/hover">
        <Pictures className="h-[431.06px] relative shrink-0 w-[583px]" />
        <div className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[0.96px] w-[545px]">
          <p className="font-['Clash_Display:Medium',sans-serif] leading-[normal] mb-0 text-[28px]">Ergo Raffle:</p>
          <p className="leading-[normal] text-[20px]">Redesign einer digitalen Plattform</p>
        </div>
      </div>
    </div>
  );
}