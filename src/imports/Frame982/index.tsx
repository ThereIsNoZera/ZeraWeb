import imgProperty1IdMockupDone1 from "./a_conf.webp";
import imgFrame10051 from "./a_pickle.webp";
import img511 from "./Otavan.webp";
import imgProperty1Raffle from "./a_ergo.webp";
type PicturesProps = {
  className?: string;
  property1?: "Pickle" | "Raffle" | "id mockup done 1" | "Otavan";
};

function Pictures({ className, property1 = "Raffle" }: PicturesProps) {
  const isOtavan = property1 === "Otavan";
  const isPickle = property1 === "Pickle";
  const isRaffle = property1 === "Raffle";
  return (
    <div
      className={
        className ||
        `relative w-[583px] ${isRaffle ? "h-[431.06px]" : isOtavan ? "bg-white h-[430px] overflow-clip" : isPickle ? "bg-[#fad978] h-[431px] overflow-clip" : "h-[431px]"}`
      }
    >
      {["id mockup done 1", "Raffle"].includes(property1) && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className={`absolute max-w-none ${isRaffle ? "h-[100.13%] left-[-6.56%] top-[-0.07%] w-[113.13%]" : "h-[102.62%] left-[-9.47%] top-0 w-[113.8%]"}`}
            src={isRaffle ? imgProperty1Raffle : imgProperty1IdMockupDone1}
          />
        </div>
      )}
      {isPickle && (
        <div
          className="absolute h-[431.06px] left-[16px] top-0 w-[550.799px]"
          data-name="Frame 100 (5) 1"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[102.12%] left-[-0.35%] max-w-none top-[-1.06%] w-[101.08%]"
              src={imgFrame10051}
            />
          </div>
        </div>
      )}
      {isOtavan && (
        <>
          <div
            className="absolute blur-[2px] h-[444px] left-[-54px] top-0 w-[665px]"
            data-name="5 (1) 1"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover opacity-70 pointer-events-none size-full"
              src={img511}
            />
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
    <div
      className={
        className ||
        `overflow-clip relative ${isDefault ? "h-[552px] w-[647px]" : "h-[564px] w-[660px]"}`
      }
    >
      <div
        className={`absolute bg-[#f0ebe8] content-stretch flex flex-col gap-[10px] h-[552px] items-start overflow-clip p-[32px] right-0 rounded-[2px] w-[647px] ${isDefault ? "top-0" : "bottom-[12px] shadow-[-13px_11px_1px_1px_rgba(0,0,0,0.25)]"}`}
        data-name="Frame 980/hover"
      >
        <Pictures className="h-[431.06px] relative shrink-0 w-[583px]" />
        <div className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[0px] text-black tracking-[0.96px] w-[545px]">
          <p className="font-['Clash_Display:Medium',sans-serif] leading-[normal] mb-0 text-[28px]">
            Ergo Raffle:
          </p>
          <p className="leading-[normal] text-[20px]">
            Redesign einer digitalen Plattform
          </p>
        </div>
      </div>
    </div>
  );
}
