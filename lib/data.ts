import { Project, SkillCategory, Experience } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A performant admin dashboard with real-time analytics, built with React and TypeScript. Features optimized rendering and state management.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/yourusername/ecommerce-dashboard",
    liveUrl: "https://demo.yourdomain.com",
    image: "/projects/project-1.jpg", // Add your project image here
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task manager with drag-and-drop functionality. Focused on clean architecture and accessibility standards.",
    tags: ["Next.js", "React DnD", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://tasks.yourdomain.com",
    image: "/projects/project-2.jpg", // Add your project image here
  },
  {
    id: "3",
    title: "Weather Forecast PWA",
    description: "Progressive Web App delivering real-time weather data with offline support. Optimized for performance and mobile experience.",
    tags: ["React", "PWA", "API Integration", "Service Workers"],
    githubUrl: "https://github.com/yourusername/weather-pwa",
    liveUrl: "https://weather.yourdomain.com",
    image: "/projects/project-3.jpg", // Add your project image here
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "Vue", level: 88 },
      { name: "React", level: 70 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5/CSS3", level: 95 },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "Responsive Design", level: 92 },
      { name: "Performance Optimization", level: 78 },
    ],
  },
  {
    category: "Currently Learning",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "GraphQL", level: 60 },
      { name: "Testing (Jest/Vitest)", level: 70 },
      { name: "Docker", level: 55 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "Your Company Name",
    location: "City, Country / Remote",
    period: "2024 - Present",
    startDate: "2024",
    endDate: "Present",
    type: "work",
    description: "Building scalable web applications with React and TypeScript, focusing on performance and user experience.",
    achievements: [
      "Developed responsive web applications using React and Next.js",
      "Implemented pixel-perfect UI designs with Tailwind CSS",
      "Collaborated with cross-functional teams using Git and Agile methodologies",
      "Optimized application performance, reducing load times by 40%",
    ],
  },
  {
    id: "2",
    title: "Frontend Development Studies",
    company: "Your University / Bootcamp",
    location: "City, Country",
    period: "2022 - 2024",
    startDate: "2022",
    endDate: "2024",
    type: "education",
    description: "Intensive study of modern web development technologies, computer science fundamentals, and software engineering best practices.",
    achievements: [
      "Mastered JavaScript, TypeScript, React, and Next.js",
      "Built 10+ portfolio projects demonstrating full-stack capabilities",
      "Learned data structures, algorithms, and design patterns",
      "Completed certifications in Web Development and UI/UX Design",
    ],
  },
];

export const aboutMe = {
  headline: "Junior Frontend Developer",
  tagline: "Building Fast, Accessible, and Beautiful Web Experiences",
  summary: "I'm a passionate frontend developer who believes great code is clean, performant, and user-centered. With a strong foundation in React and TypeScript, I focus on writing maintainable code that scales. I'm constantly learning, experimenting with new patterns, and refining my craft to deliver exceptional digital experiences.",
  cta: "View My Work",
};
