type HeaderPositionsProps = {
  className?: string;
  property1?: "HighLight" | "defult";
};

export default function HeaderPositions({ className, property1 = "defult" }: HeaderPositionsProps) {
  return (
    <div className={className || `content-stretch flex h-[12px] items-center justify-center px-[4px] relative ${property1 === "HighLight" ? "bg-[rgba(226,187,0,0.8)] pb-[8px]" : ""}`}>
      <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">Projects</p>
    </div>
  );
}