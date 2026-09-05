"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
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
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wide uppercase text-muted glass px-3 py-1.5 rounded-full mb-6"
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

          <div className="h-10 sm:h-12 mt-3 overflow-hidden">
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
            className="mt-5 max-w-xl text-base sm:text-lg text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-85 transition-opacity"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full glass glass-hover text-sm font-semibold"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-1 ml-1">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full glass glass-hover"
              >
                <Mail size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full glass glass-hover"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                aria-label="GitHub"
                className="p-2.5 rounded-full glass glass-hover"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-12 grid grid-cols-3 max-w-md gap-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto md:mx-0 w-56 h-56 sm:w-72 sm:h-72"
        >
          <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-accent-1/40 via-accent-3/30 to-accent-2/40 blur-2xl" />
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass p-1.5">
            <Image
              src="/img/profile.jpg"
              alt={profile.name}
              fill
              sizes="288px"
              className="object-cover rounded-[1.6rem]"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center justify-center p-2 rounded-full glass"
        aria-label="Scroll to About"
      >
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
