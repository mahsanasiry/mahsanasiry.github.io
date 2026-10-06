export const FORM_KEY_PLACEHOLDER = "YOUR_ACCESS_KEY_HERE";

export interface Project {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  live: string; 
  code: string; 
  image?: string;
  imageAlt?: string;
}

export const site = {
  name: "Mahsa",
  location: "sari, iran",
  email: "mahsanasiry0@gmail.com",
  linkedin: "https://www.linkedin.com/in/mahsa-nasiry",

  github: "https://github.com/mahsanasiry",
  role: "Front-End Developer",

  resume: "public/resume.pdf",

  web3formsKey: "5bf7454b-f43b-4cde-9893-4f0e40fe7e84",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  headline: "I build fast, accessible websites and web apps.",
  intro:
    "I'm a front-end developer working with React, Next.js, TypeScript and Tailwind CSS. I care about readable code, responsive layouts and interfaces that everyone can use.",
  availability: "Open to remote junior front-end roles and freelance projects.",
};

export const projects: Project[] = [
  {
    title: "Bean & Bloom",
    summary:
      "A landing page for a small coffee roaster. A sample business, built to show what I can deliver for a local company.",
    highlights: [
      "Responsive layout for phones, tablets and desktops",
      "Contact form with validation and a spam trap",
      "SEO basics: metadata, sitemap and structured data",
      "Accessible navigation: skip link, keyboard support, visible focus",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://mahsanasiry.github.io/bean-and-bloom/",
    code: "https://github.com/mahsanasiry/bean-and-bloom",
  },
  {
    title: "Taskboard",
    summary:
      "A Kanban board where tasks move between columns by drag and drop. Everything is saved in the browser.",
    highlights: [
      "Drag and drop built with the native browser API, no library",
      "State handled with useReducer",
      "Search, priority filter and overdue dates",
      "A move menu on every card for phones and keyboard users",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://mahsanasiry.github.io/taskboard/",
    code: "https://github.com/mahsanasiry/taskboard",
  },
  {
    title: "Weather Desk",
    summary:
      "A weather dashboard that loads live data from a public API: current conditions, an hourly chart and a 7-day forecast.",
    highlights: [
      "Search with live suggestions, debounced and keyboard accessible",
      "Hourly temperature chart drawn with plain SVG, no chart library",
      "Loading and error states, and cancelled outdated requests",
      "Celsius and Fahrenheit, plus saved favorite cities",
    ],
    stack: ["Next.js", "TypeScript", "Open-Meteo API"],
    live: "https://mahsanasiry.github.io/weather-desk/",
    code: "https://github.com/mahsanasiry/weather-desk",
  },
];

export const aboutParagraphs = [
  "I'm a front-end developer focused on building responsive, accessible and user-friendly web applications. I enjoy turning ideas into clean interfaces and paying attention to the details that make a website feel polished.",
  "I'm currently looking for my first professional front-end opportunity, where I can contribute to real projects, keep learning and grow as a developer. I work with React, Next.js, TypeScript and modern CSS tools, and I enjoy solving problems through practical projects.",
];

export const aboutFacts = [
  { term: "Based in", detail: site.location },
  { term: "Languages", detail: "Persian, English" },
  { term: "Focus", detail: "Front-end web development" },
  { term: "Availability", detail: "Remote" },
];

export const skillGroups = [
  { title: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
  { title: "Frameworks and libraries", items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"] },
  { title: "Tools", items: ["Git", "GitHub", "GitHub Actions", "VS Code", "npm"] },
  {
    title: "Practices",
    items: ["Responsive design", "Accessibility basics", "SEO basics", "Working with REST APIs"],
  },
];
