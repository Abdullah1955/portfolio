import { ArrowUpRight, Plus } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-1 mb-3">
            Projects
          </p>
          <h2 className="section-heading mb-3">Selected work</h2>
          <p className="text-muted max-w-2xl mb-10">
            A few of the things I&apos;ve built — real projects with a short story.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div
                className={`group relative h-full rounded-2xl p-6 glass glass-hover flex flex-col ${
                  p.placeholder ? "border-dashed" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold pr-2">{p.title}</h3>
                  {p.placeholder && (
                    <Plus size={18} className="text-muted shrink-0" />
                  )}
                </div>
                <p className="text-sm text-muted flex-1 line-clamp-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5 mb-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium mt-4 pt-4 border-t border-white/10 text-muted group-hover:text-accent-2 transition-colors w-fit"
                  >
                    View Live Site
                    <ArrowUpRight
                      size={14}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
