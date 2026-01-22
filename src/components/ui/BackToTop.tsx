"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  return (
    <button
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-30 rounded-xl border border-sand/60 bg-white px-4 py-2 text-sm font-semibold text-olive shadow-soft transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-glass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={handleClick}
      type="button"
    >
      Back to top
    </button>
  );
}
