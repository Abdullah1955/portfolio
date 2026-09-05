"use client";

import { useEffect, useRef, useState } from "react";

// Ambient "instrument panel" chrome: corner frame + ticks, a scroll rail,
// a live cursor/scroll HUD, a status ticker, and a short pull-quote card.
// Purely decorative — pointer-events are disabled throughout so nothing
// ever blocks a click on real content underneath.
export default function InstrumentChrome() {
  const railDotRef = useRef<HTMLDivElement>(null);
  const cxRef = useRef<HTMLSpanElement>(null);
  const cyRef = useRef<HTMLSpanElement>(null);
  const scRef = useRef<HTMLSpanElement>(null);
  const tmRef = useRef<HTMLSpanElement>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (cxRef.current) cxRef.current.textContent = String(e.clientX).padStart(3, "0");
      if (cyRef.current) cyRef.current.textContent = String(e.clientY).padStart(3, "0");
    }
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      if (scRef.current) scRef.current.textContent = pct.toFixed(3);
      if (railDotRef.current) railDotRef.current.style.top = `${pct * 100}%`;
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    }
    const t0 = performance.now();
    const id = setInterval(() => {
      if (tmRef.current) tmRef.current.textContent = `${((performance.now() - t0) / 1000).toFixed(1)}S`;
    }, 100);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      clearInterval(id);
    };
  }, []);

  return (
    <div aria-hidden>
      <div className="frame" />
      <div className="tick tl" />
      <div className="tick tr" />
      <div className="tick bl" />
      <div className="tick br" />
      <div className="rail">
        <div ref={railDotRef} className="rail-dot" />
      </div>

      <div className="quote-card" style={{ opacity: pastHero ? 0 : 1, transition: "opacity 0.3s ease" }}>
        <div className="mono">MA</div>
        <p>I turn vague requirements into interfaces that hold up in production.</p>
      </div>

      <div className="ticker" style={{ opacity: pastHero ? 0 : 1, transition: "opacity 0.3s ease" }}>
        <div className="pill">
          <span className="dot" style={{ background: "var(--good)" }} />
          BUILD <b>PASSING</b>
        </div>
        <div className="pill">
          STACK <b>REACT / NEXT</b>
        </div>
        <div className="pill">
          STATUS <b>AVAILABLE</b>
        </div>
      </div>

      <div className="hud" style={{ opacity: pastHero ? 0 : 1, transition: "opacity 0.3s ease" }}>
        CURSOR X: <b ref={cxRef}>000</b> &nbsp; CURSOR Y: <b ref={cyRef}>000</b>
        <br />
        SCROLL: <b ref={scRef}>0.000</b> &nbsp; TIME: <b ref={tmRef}>00.0S</b>
      </div>

      <div className="scrollcue" style={{ opacity: pastHero ? 0 : 1 }}>
        <span className="chev">&darr;</span> Scroll
      </div>
    </div>
  );
}
