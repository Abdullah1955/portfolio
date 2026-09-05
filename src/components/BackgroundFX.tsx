"use client";

import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const spotRef = useRef<HTMLDivElement>(null);
  const blobRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (spotRef.current) {
        spotRef.current.style.left = `${e.clientX}px`;
        spotRef.current.style.top = `${e.clientY}px`;
      }
      const mx = (e.clientX / window.innerWidth - 0.5) * 26;
      const my = (e.clientY / window.innerHeight - 0.5) * 26;
      blobRefs.current.forEach((el, i) => {
        if (!el) return;
        const dir = i % 2 === 0 ? 1 : -1;
        el.style.transform = `translate(${mx * dir}px, ${my * dir}px)`;
      });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 noise-grid" />
      <div className="grain" />
      <div
        ref={(el) => {
          blobRefs.current[0] = el;
        }}
        className="blob drift-1 bg-accent-1 w-[38rem] h-[38rem] -top-40 -left-40"
      />
      <div
        ref={(el) => {
          blobRefs.current[1] = el;
        }}
        className="blob drift-2 bg-accent-3 w-[30rem] h-[30rem] top-1/3 -right-32"
      />
      <div
        ref={(el) => {
          blobRefs.current[2] = el;
        }}
        className="blob drift-3 bg-accent-2 w-[26rem] h-[26rem] bottom-0 left-1/4"
      />
      <div className="vignette" />
      <div ref={spotRef} className="spotlight" />
    </div>
  );
}
