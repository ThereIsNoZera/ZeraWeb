function Button() {
  return (
    <div className="h-[25px] relative shrink-0 w-[80px]" data-name="Button 1">
      <p className="[word-break:break-word] absolute font-['Clash_Display:Regular',sans-serif] leading-[normal] left-0 not-italic text-[20px] text-black top-0 tracking-[0.8px] whitespace-nowrap">Archive</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
      <div className="content-stretch flex h-[12px] items-center justify-center px-[4px] relative shrink-0" data-name="Header positions">
        <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">Projects</p>
      </div>
      <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">|</p>
      <div className="content-stretch flex h-[12px] items-center justify-center px-[4px] relative shrink-0" data-name="Header positions">
        <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">CV</p>
      </div>
      <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">|</p>
      <div className="content-stretch flex h-[12px] items-center justify-center px-[4px] relative shrink-0" data-name="Component 2">
        <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">Visit cards</p>
      </div>
    </div>
  );
}

function HandleShape() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[11px] relative rounded-[24px] shrink-0" data-name="Handle shape">
      <div className="relative rounded-[23px] shrink-0 size-[2px]" data-name="Container" />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[100px] shrink-0" data-name="State-layer">
      <HandleShape />
    </div>
  );
}

function Target() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center p-[4px] right-[-12px] top-1/2" data-name="Target">
      <StateLayer />
    </div>
  );
}

function Handle() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Handle">
      <Target />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">DE</p>
      <div className="bg-[#383836] content-stretch flex h-[32px] items-center justify-end px-[4px] py-[2px] relative rounded-[100px] shrink-0 w-[52px]" data-name="Switch">
        <Handle />
      </div>
      <p className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">EN</p>
    </div>
  );
}

export default function Header() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(212,211,204,0.9)] content-stretch flex items-center justify-between px-[22px] py-[12px] relative size-full" data-name="Header">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none shadow-[2px_4px_1px_0px_rgba(0,0,0,0.25)]" />
      <Button />
      <Frame />
      <Frame1 />
    </div>
  );
}