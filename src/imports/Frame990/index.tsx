type FrameProps = {
  className?: string;
  property1?: "Default" | "Variant2";
};

export default function Frame({ className, property1 = "Default" }: FrameProps) {
  const isVariant2 = property1 === "Variant2";
  return (
    <div className={className || `relative rounded-[5px] ${isVariant2 ? "bg-[#b2b1a9]/60" : "bg-[rgba(255,255,255,0.01)]"}`}>
      <div className="content-stretch flex items-end overflow-clip px-[22px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">{`Check out Archive for more `}</p>
      </div>
      <div aria-hidden className={`absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[5px] ${isVariant2 ? "" : "shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.4)]"}`} />
    </div>
  );
}
