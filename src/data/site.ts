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

  resume: "/Resume.pdf",

  web3formsKey: "5bf7454b-f43b-4cde-9893-4f0e40fe7e84",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  headline: "I build fast, accessible websites and web apps.",
  intro:
    "I'm a front-end developer working with React, Next.js, TypeScript and Tailwind CSS. I care about readable code, responsive layouts and interfaces that everyone can use.",
  availability: "Open to remote junior front-end roles and freelance projects.",
};

export const projects: Project[] = [
  {
    title: "SkillSwap",
    summary:
      "A peer-to-peer skill exchange platform where people can discover compatible users, compare skills and exchange knowledge without paying for lessons.",
    highlights: [
      "Search, filter, sort and paginate users by skill, level and availability",
      "Match scoring to identify compatible skill exchanges",
      "Profiles, favorites and validated skill-swap requests",
      "Dashboard and request management with responsive, accessible UI",
      "Automated tests with Vitest, React Testing Library and axe-core",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zod",
    ],
    live: "https://mahsanasiry.github.io/skillswap/",
    code: "https://github.com/mahsanasiry/skillswap",
    image: "/projects/skillswap-home.png",
    imageAlt: "SkillSwap home page showing skill discovery and matching features",
  },
  {
    title: "JobTrail",
    summary:
      "A job application tracker designed to keep applications organized, track weekly goals and make follow-ups easier.",
    highlights: [
      "Create, edit and manage applications with status, tags, dates and notes",
      "Weekly application goal with progress tracking and follow-up reminders",
      "Search, filtering, sorting and dark mode",
      "CSV export plus validated JSON backup and restore",
      "Accessible interactions with automated unit tests and data validation",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://mahsanasiry.github.io/jobtrail/",
    code: "https://github.com/mahsanasiry/jobtrail",
  },
  {
    title: "Taskboard",
    summary:
      "A Kanban board where tasks move between columns by drag and drop, with browser-based persistence.",
    highlights: [
      "Drag and drop built with the native browser API",
      "State handled with useReducer",
      "Search, priority filtering and overdue dates",
      "Keyboard-friendly move controls for individual tasks",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://mahsanasiry.github.io/taskboard/",
    code: "https://github.com/mahsanasiry/taskboard",
  },
  {
    title: "Weather Desk",
    summary:
      "A weather dashboard that loads live data from a public API with current conditions, hourly temperatures and a 7-day forecast.",
    highlights: [
      "Debounced search with live suggestions and keyboard support",
      "Hourly temperature chart built with plain SVG",
      "Loading and error states with cancelled outdated requests",
      "Celsius and Fahrenheit plus saved favorite cities",
    ],
    stack: ["Next.js", "TypeScript", "Open-Meteo API"],
    live: "https://mahsanasiry.github.io/weather-desk/",
    code: "https://github.com/mahsanasiry/weather-desk",
  },
  {
    title: "Bean & Bloom",
    summary:
      "A responsive landing page for a fictional coffee roaster, built to demonstrate a polished business website.",
    highlights: [
      "Responsive layout for phones, tablets and desktops",
      "Validated contact form with a spam trap",
      "SEO basics including metadata, sitemap and structured data",
      "Accessible navigation with keyboard support and visible focus",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://mahsanasiry.github.io/bean-and-bloom/",
    code: "https://github.com/mahsanasiry/bean-and-bloom",
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
