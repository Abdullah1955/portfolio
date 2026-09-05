import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-1 mb-3">
            Experience
          </p>
          <h2 className="section-heading mb-12">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="relative border-l border-white/10 ml-3 space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.12}>
              <div className="relative pl-8">
                <span className="absolute -left-[0.72rem] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background glass">
                  <Briefcase size={13} className="text-accent-2" />
                </span>
                <div className="glass rounded-2xl p-6 glass-hover">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent-2 font-medium mb-3">
                    {job.company} · {job.location}
                  </p>
                  <ul className="space-y-1.5">
                    {job.points.map((p) => (
                      <li key={p} className="text-sm text-muted flex gap-2">
                        <span className="text-accent-1 mt-1">›</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
