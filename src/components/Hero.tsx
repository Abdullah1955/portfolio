"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-8"
    >
      <div className="mx-auto max-w-3xl w-full text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-widest uppercase text-muted glass px-4 py-2 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          Available for freelance &amp; remote roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        <div className="h-10 sm:h-12 mt-3 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={profile.roles[i]}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl font-semibold text-muted"
            >
              {profile.roles[i]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 max-w-xl mx-auto text-base sm:text-lg text-muted"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <div className="tick-box">
            <div className="tick tl" /><div className="tick tr" /><div className="tick bl" /><div className="tick br" />
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-foreground text-background text-xs font-semibold tracking-widest uppercase hover:opacity-85 transition-opacity"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              View my work
            </a>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 glass glass-hover text-xs font-semibold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Get in touch
          </a>
          <div className="flex items-center gap-1 ml-1">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="p-2.5 glass glass-hover"
            >
              <Mail size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="p-2.5 glass glass-hover"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              aria-label="GitHub"
              className="p-2.5 glass glass-hover"
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-12 grid grid-cols-3 max-w-md mx-auto gap-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
