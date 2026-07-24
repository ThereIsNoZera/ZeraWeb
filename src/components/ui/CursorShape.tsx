type CursorShapeProps = {
  className?: string;
  property1?: "default" | "Pointer";
};

export default function CursorShape({
  className = "",
  property1 = "default",
}: CursorShapeProps) {
  const isPointer = property1 === "Pointer";

  return (
    <div className={`relative size-[44px] ${className}`}>
      <div
        className="absolute left-1/2 top-1/2 rounded-full bg-[#FFD300]"
        style={{
          width: isPointer ? 44 : 0,
          height: isPointer ? 44 : 0,
          opacity: isPointer ? 0.92 : 0,
          transform: "translate(-50%, -50%)",
          mixBlendMode: "plus-darker",
          transition:
            "width 240ms cubic-bezier(0.22, 1, 0.36, 1), height 240ms cubic-bezier(0.22, 1, 0.36, 1), opacity 160ms ease",
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 rounded-full bg-black/70"
        style={{
          width: isPointer ? 9 : 20,
          height: isPointer ? 9 : 20,
          transform: "translate(-50%, -50%)",
          transition:
            "width 240ms cubic-bezier(0.22, 1, 0.36, 1), height 240ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}
