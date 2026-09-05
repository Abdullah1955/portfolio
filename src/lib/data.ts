// ---------------------------------------------------------------------------
// Central content file. Edit the values below to update the whole site.
// Anything marked TODO should be reviewed/replaced with your real details.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Muhammad Abdullah",
  roles: [
    "Full-Stack Developer",
    "React & Next.js Developer",
    "AI-Assisted Web Developer",
  ],
  location: "Karachi, Pakistan",
  email: "abdullah.y2119@gmail.com",
  phone: "0334-2811449",
  linkedin: "https://www.linkedin.com/in/muhammad-abdullah-7b572836b/",
  github: "#", // TODO: add your GitHub profile URL
  resumeUrl: "#", // TODO: link a hosted PDF resume if you want a "Download CV" button to work
  tagline:
    "I build fast, clean, AI-assisted web experiences — from sleek front-ends to solid back-end systems.",
  about: [
    "I'm a full-stack developer based in Karachi, focused on building responsive, performant web applications with React, Next.js, and modern back-end tooling.",
    "I pair hands-on engineering with AI-assisted workflows to ship production-ready features faster, without cutting corners on code quality or UX.",
    "I'm constantly learning — currently deepening my Software Engineering background while working full-time as a developer.",
  ],
};

export const stats = [
  { label: "Years Coding", value: "3+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Technologies", value: "15+" },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3", "Bootstrap"] },
  { group: "Backend", items: ["Node.js", "Express", "PHP", "REST APIs", "MySQL", "MongoDB"] },
  { group: "Tooling & Practice", items: ["Git & GitHub", "UI/UX Design", "AI-Assisted Development", "Responsive Design", "Agile / Scrum"] },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "A&Z Solar Energy",
    location: "Karachi, Pakistan",
    period: "May 2026 — Present",
    points: [
      "Building and maintaining full-stack web features end-to-end, from UI to data layer.",
      "Developing digital tools that support solar dealership operations and customer-facing pages.",
      "Implementing responsive, high-performance interfaces using modern front-end practices.",
    ],
  },
  {
    role: "ReactJS / Frontend Developer",
    company: "Logics Labs",
    location: "Karachi, Pakistan",
    period: "Jun 2025 — Oct 2025",
    points: [
      "Built and maintained responsive UI components using React.js.",
      "Collaborated with backend engineers on REST API integration.",
      "Improved page performance and code quality across existing modules.",
    ],
  },
];

export const education = [
  {
    title: "BSAI (BS Artificial Intelligence)",
    place: "Dawood University of Engineering and Technology",
    period: "2026 — 2030",
  },
  {
    title: "Software Engineering Program",
    place: "Aptech Metro Star Gate Center",
    period: "Current",
  },
  {
    title: "Computer Science — Higher Secondary Certificate",
    place: "Meritorious College, AKU-EB",
    period: "2024 — 2026",
  },
  {
    title: "Secondary School Certificate (Computer Science)",
    place: "Nasra Secondary School, Malir, Karachi",
    period: "2023",
  },
];

export const certifications = [
  "DigiSkills Certification — Freelancing & Digital Marketing (2024)",
];

// TODO: Replace/extend this list with your real, shippable projects.
// Keep only work you can actually speak to in an interview.
export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    title: "EPC/CAR Project",
    description:
      "TODO — add a 1-2 sentence description of what this project does, your role, and the stack used.",
    tags: ["TODO: stack"],
    placeholder: true,
  },
  {
    title: "Add your next project",
    description: "Swap this card out for a real project — title, short description, tech tags, and a link.",
    tags: ["Add tags"],
    placeholder: true,
  },
  {
    title: "Add another project",
    description: "A portfolio with 3-4 real, well-described projects converts far better than generic service cards.",
    tags: ["Add tags"],
    placeholder: true,
  },
];
