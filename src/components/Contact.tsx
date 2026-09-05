"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-1 mb-3">
            Contact
          </p>
          <h2 className="section-heading mb-3">Let&apos;s work together</h2>
          <p className="text-muted max-w-xl mb-12">
            Have a project in mind or an opening on your team? I&apos;m open to freelance
            work and full-time remote roles — reach out any time.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8">
          <Reveal delay={0.05}>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 glass glass-hover rounded-xl px-4 py-4"
              >
                <Mail size={18} className="text-accent-1 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-muted">Email</p>
                  <p className="text-sm truncate">{profile.email}</p>
                </div>
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 glass glass-hover rounded-xl px-4 py-4"
              >
                <Phone size={18} className="text-accent-1 shrink-0" />
                <div>
                  <p className="text-xs text-muted">Phone</p>
                  <p className="text-sm">{profile.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-4">
                <MapPin size={18} className="text-accent-1 shrink-0" />
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="text-sm">{profile.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {/*
              This form has no backend wired up yet. Fastest options:
              1) Formspree / Web3Forms — drop-in POST endpoint, no server code needed.
              2) A Next.js Route Handler (src/app/api/contact/route.ts) that emails you.
              For now this just shows a confirmation state so the UI is complete.
            */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass rounded-2xl p-6 sm:p-7 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-accent-1/70 transition-colors"
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-accent-1/70 transition-colors"
                />
              </div>
              <input
                required
                placeholder="Subject"
                className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-accent-1/70 transition-colors"
              />
              <textarea
                required
                rows={5}
                placeholder="Message"
                className="w-full rounded-lg bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-accent-1/70 transition-colors resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-85 transition-opacity"
              >
                <Send size={15} />
                {sent ? "Message ready — connect a form service" : "Send message"}
              </button>
              {sent && (
                <p className="text-xs text-muted">
                  UI confirmed! Wire this up to Formspree/Web3Forms or an API route to actually deliver messages.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
