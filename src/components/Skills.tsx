"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-1 mb-3">
            Skills
          </p>
          <h2 className="section-heading mb-10">What I work with</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.1}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-2 mb-5">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.35 }}
                      whileHover={{ y: -2 }}
                      className="text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-accent-1/60 hover:bg-white/[0.06] transition-colors cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
