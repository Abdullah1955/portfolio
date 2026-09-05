import { ArrowUpRight, Plus, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.filter((p) => !p.placeholder);
  const placeholders = projects.filter((p) => p.placeholder);

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

        {featured.length > 0 && (
          <div className="flex flex-col gap-6 mb-6">
            {featured.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl p-7 sm:p-9 glass glass-hover"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold pr-4">{p.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-muted group-hover:text-accent-2 group-hover:border-accent-2/40 transition-colors shrink-0">
                      View Live Site
                      <ArrowUpRight
                        size={14}
                        className="group-hover:rotate-45 transition-transform"
                      />
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted max-w-3xl mb-5">{p.description}</p>
                  {p.highlight && (
                    <div className="flex gap-2.5 rounded-xl border border-accent-1/20 bg-accent-1/[0.04] px-4 py-3 mb-5">
                      <Sparkles size={16} className="text-accent-1 shrink-0 mt-0.5" />
                      <p className="text-sm text-muted">{p.highlight}</p>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}

        {placeholders.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-2xl p-6 glass glass-hover flex flex-col border-dashed">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <Plus size={18} className="text-muted shrink-0" />
                  </div>
                  <p className="text-sm text-muted flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
