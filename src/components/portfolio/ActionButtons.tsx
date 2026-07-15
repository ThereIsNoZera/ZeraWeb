import { useState } from "react";
import Frame989 from "../../imports/Frame989/index";

export function CvButton() {
  const [pressed, setPressed] = useState(false);

  return (
    <div
      style={{
        display: "inline-block",
        cursor: "pointer",
        transform: pressed ? "translate(-3px, 3px)" : "translate(0, 0)",
        transition: "transform 0.1s ease",
      }}
      onMouseEnter={() => setPressed(true)}
      onMouseLeave={() => setPressed(false)}
    >
      <Frame989 property1={pressed ? "Variant2" : "Default"} />
    </div>
  );
}

interface ArchiveButtonProps {
  label: string;
  onClick: () => void;
}

export function ArchiveButton({ label, onClick }: ArchiveButtonProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "inline-block",
        cursor: "pointer",
        transform: pressed ? "translate(-3px, 3px)" : "translate(0, 0)",
        transition: "transform 0.1s ease",
        border: 0,
        padding: 0,
        background: "transparent",
      }}
      onMouseEnter={() => setPressed(true)}
      onMouseLeave={() => setPressed(false)}
    >
      <span
        className={`relative rounded-[5px] block ${pressed ? "bg-[#b2b1a9]/60" : "bg-[rgba(255,255,255,0.01)]"}`}
      >
        <span className="content-stretch flex items-end overflow-clip px-[22px] py-[8px] relative rounded-[inherit] size-full">
          <span className="[word-break:break-word] font-['Clash_Display:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black tracking-[0.8px] whitespace-nowrap">
            {label}
          </span>
        </span>
        <span
          aria-hidden
          className={`absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[5px] ${pressed ? "" : "shadow-[-3px_3px_0px_0px_rgba(0,0,0,0.4)]"}`}
        />
      </span>
    </button>
  );
}
