"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 sm:px-9 py-5 transition-colors ${
        scrolled ? "bg-background/85 backdrop-blur-sm border-b border-white/5" : ""
      }`}
    >
      <a href="#hero" className="flex items-center gap-2.5 font-extrabold tracking-tight text-sm">
        <span className="flex gap-[2px]">
          <span className="w-[3px] h-3.5 bg-foreground inline-block" />
          <span className="w-[3px] h-[18px] bg-foreground inline-block" />
          <span className="w-[3px] h-3.5 bg-foreground inline-block" />
        </span>
        {`${profile.name.split(" ")[0].charAt(0).toUpperCase()}.${(profile.name.split(" ")[1] ?? "").toUpperCase()}`}
      </a>

      <nav className="hidden sm:flex items-center gap-7">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative text-[0.7rem] font-semibold tracking-widest uppercase text-muted hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="tick-box hidden sm:inline-flex">
        <div className="tick tl" />
        <div className="tick tr" />
        <div className="tick bl" />
        <div className="tick br" />
        <a
          href="#contact"
          className="px-5 py-2 text-xs font-semibold tracking-widest uppercase border border-white/20 hover:border-accent-1/50 hover:text-accent-1 transition-colors"
        >
          Hire me
        </a>
      </div>
    </motion.header>
  );
}
