import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import CursorShape from "./CursorShape";

type CursorMode = "default" | "Pointer";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "label",
  "[role='button']",
  "[data-cursor='pointer']",
].join(",");

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<CursorMode>("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const cursorSupported = window.matchMedia(
      "(any-hover: hover) and (any-pointer: fine)",
    ).matches;

    if (!cursorSupported) {
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add("custom-cursor-enabled");

    const handlePointerMove = (event: PointerEvent) => {
      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.transform = `translate3d(
          ${event.clientX - 22}px,
          ${event.clientY - 22}px,
          0
        )`;
      }

      const target = event.target;

      const isInteractive =
        target instanceof Element &&
        Boolean(target.closest(INTERACTIVE_SELECTOR));

      setMode(isInteractive ? "Pointer" : "default");
      setIsVisible(true);
    };

    const handlePointerDown = () => {
      setIsPressed(true);
    };

    const handlePointerUp = () => {
      setIsPressed(false);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const handlePointerEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.documentElement.addEventListener(
      "pointerleave",
      handlePointerLeave,
    );
    document.documentElement.addEventListener(
      "pointerenter",
      handlePointerEnter,
    );

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.removeEventListener(
        "pointerleave",
        handlePointerLeave,
      );
      document.documentElement.removeEventListener(
        "pointerenter",
        handlePointerEnter,
      );
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return createPortal(
    <div
      aria-hidden="true"
      className={`custom-cursor ${isVisible ? "custom-cursor--visible" : ""}`}
      ref={cursorRef}
    >
      <div
        className="custom-cursor__scale"
        style={{
          transform: isPressed ? "scale(0.86)" : "scale(1)",
        }}
      >
        <CursorShape property1={mode} />
      </div>
    </div>,
    document.body,
  );
}
