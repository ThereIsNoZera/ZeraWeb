import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(() => window.scrollY);

  useEffect(() => {
    const updateScrollPosition = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", updateScrollPosition, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return scrollY;
}
