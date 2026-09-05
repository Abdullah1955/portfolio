import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "@/lib/data";

export default function Footer() {
  const name = profile.name.toUpperCase();
  return (
    <footer className="relative">
      <div className="marquee-wrap">
        <div className="marquee">
          <span>{name}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{name}&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
          <span>{name}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{name}&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
        </div>
      </div>
      <div className="border-t border-white/10 py-10 px-4 sm:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 glass glass-hover">
              <Mail size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" aria-label="LinkedIn" className="p-2 glass glass-hover">
              <LinkedinIcon size={16} />
            </a>
            <a href={profile.github} target="_blank" aria-label="GitHub" className="p-2 glass glass-hover">
              <GithubIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
