import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

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
  const yellowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const lastPointerPosition = useRef({ x: 0, y: 0 });

  const [isPointer, setIsPointer] = useState(false);
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

    const updatePointerMode = (x: number, y: number) => {
      const topElement = document.elementFromPoint(x, y);

      const isInteractive =
        topElement instanceof Element &&
        Boolean(topElement.closest(INTERACTIVE_SELECTOR));

      setIsPointer(isInteractive);
    };

    const handlePointerMove = (event: PointerEvent) => {
      lastPointerPosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
      const left = `${event.clientX}px`;
      const top = `${event.clientY}px`;

      if (yellowRef.current) {
        yellowRef.current.style.left = left;
        yellowRef.current.style.top = top;
      }

      if (dotRef.current) {
        dotRef.current.style.left = left;
        dotRef.current.style.top = top;
      }

      updatePointerMode(event.clientX, event.clientY);
      setIsVisible(true);
    };

    const handlePointerOver = (event: PointerEvent) => {
      updatePointerMode(event.clientX, event.clientY);
    };

    const handleScroll = () => {
      const { x, y } = lastPointerPosition.current;

      window.requestAnimationFrame(() => {
        updatePointerMode(x, y);
      });
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
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("scroll", handleScroll, true);

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
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("scroll", handleScroll, true);

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
    <>
      <div
        aria-hidden="true"
        className={[
          "custom-cursor-yellow",
          isPointer ? "custom-cursor-yellow--pointer" : "",
          isVisible ? "custom-cursor--visible" : "",
          isPressed ? "custom-cursor--pressed" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        ref={yellowRef}
      />

      <div
        aria-hidden="true"
        className={[
          "custom-cursor-dot",
          isPointer ? "custom-cursor-dot--pointer" : "",
          isVisible ? "custom-cursor--visible" : "",
          isPressed ? "custom-cursor--pressed" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        ref={dotRef}
      />
    </>,
    document.body,
  );
}
