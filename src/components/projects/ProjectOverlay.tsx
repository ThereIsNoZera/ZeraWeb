import { useEffect, type ReactNode } from "react";
import { PROJECT_OVERLAY_WIDTH } from "../../config/portfolio";

interface ProjectOverlayProps {
  onClose: () => void;
  children: ReactNode;
}

export function ProjectOverlay({ onClose, children }: ProjectOverlayProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ zIndex: 2000, backgroundColor: "rgba(0,0,0,0.55)" }}
      onClick={onClose}
      role="presentation"
    >
      <section
        aria-modal="true"
        aria-label="Project details"
        role="dialog"
        className="relative overflow-y-auto overflow-x-hidden"
        style={{
          width: PROJECT_OVERLAY_WIDTH,
          maxWidth: "100vw",
          maxHeight: "90vh",
          borderRadius: 4,
          backgroundColor: "#2A2A2C",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          style={{
            position: "sticky",
            top: 16,
            float: "right",
            marginRight: 16,
            zIndex: 10,
            background: "rgba(255,255,255,0.85)",
            border: "2px solid black",
            borderRadius: "50%",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "-2px 2px 0 rgba(0,0,0,0.3)",
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {children}
      </section>
    </div>
  );
}
