import { GraduationCap, MapPin, Briefcase, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { profile, education, certifications } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-1 mb-3">
            About
          </p>
          <h2 className="section-heading mb-10">Who I am</h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <Reveal delay={0.05}>
            <div className="space-y-4 text-base sm:text-lg text-muted leading-relaxed">
              {profile.about.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <MapPin size={18} className="text-accent-1 shrink-0" />
                <span className="text-sm">{profile.location}</span>
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <Mail size={18} className="text-accent-1 shrink-0" />
                <span className="text-sm truncate">{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <Briefcase size={18} className="text-accent-1 shrink-0" />
                <span className="text-sm">Freelance: Available</span>
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <GraduationCap size={18} className="text-accent-1 shrink-0" />
                <span className="text-sm">Software Engineering (current)</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <GraduationCap size={20} className="text-accent-2" />
                Education &amp; Certifications
              </h3>
              <ol className="relative border-l border-white/10 pl-6 space-y-6">
                {education.map((e) => (
                  <li key={e.title} className="relative">
                    <span className="absolute -left-[1.65rem] top-1 h-2.5 w-2.5 rounded-full bg-accent-2" />
                    <p className="font-medium">{e.title}</p>
                    <p className="text-sm text-muted">{e.place}</p>
                    <p className="text-xs text-muted mt-0.5">{e.period}</p>
                  </li>
                ))}
                {certifications.map((c) => (
                  <li key={c} className="relative">
                    <span className="absolute -left-[1.65rem] top-1 h-2.5 w-2.5 rounded-full bg-accent-3" />
                    <p className="font-medium">{c}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
