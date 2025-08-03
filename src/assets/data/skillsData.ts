const calculateExperience = (startDate: string) => {
  const start = new Date(startDate);
  const now = new Date();
  const diffInMs = now.getTime() - start.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  return diffInYears < 1
    ? `${Math.round(diffInYears * 12)} months`
    : `${diffInYears.toFixed(1)} years`;
};

export const skillsData = [
  {
    id: 1,
    name: "HTML",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    experience: new Date().getFullYear() - 2022 + " years",
    level: "expert",
  },
  {
    id: 2,
    name: "CSS",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    experience: new Date().getFullYear() - 2022 + " years",
    level: "advanced",
  },
  {
    id: 3,
    name: "JavaScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    experience: calculateExperience("2023-10-07"),
  },
  {
    id: 3,
    name: "JavaScript",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    experience: calculateExperience("2024-06-07"),
  },
  {
    id: 4,
    name: "TypeScript",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    experience: calculateExperience("2024-08-01"),
  },
  {
    id: 4,
    name: "TypeScript",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    experience: calculateExperience("2024-09-01"),
  },
  {
    id: 5,
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    experience: "Basics",
  },
  {
    name: "Java",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    experience: "Basics",
  },
  {
    id: 6,
    name: "React",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    experience: calculateExperience("2024-07-01"),
  },
  {
    id: 7,
    name: "React Native",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    experience: calculateExperience("2024-01-01"),
  },
  {
    id: 8,
    name: "Node.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    experience: calculateExperience("2024-06-01"),
  },
  {
    id: 1,
    name: "MongoDB",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    experience: calculateExperience("2024-06-01"),
  },
  {
    id: 2,
    name: "Express.js",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    experience: calculateExperience("2024-06-01"),
  },
  {
    id: 3,
    name: "Next.js",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 5,
    name: "Bootstrap",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: 6,
    name: "PostgreSQL",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 7,
    name: "Git",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 8,
    name: "GitHub",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    id: 9,
    name: "Redux",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 10,
    name: "Zustand",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg",
  },
  {
    id: 11,
    name: "useContext",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 12,
    name: "Figma",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    id: 13,
    name: "Socket.IO && WebSockets",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  },
  {
    id: 14,
    name: "Sass",
    category: "other",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
];
