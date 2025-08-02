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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    experience: calculateExperience("2025-02-01"),
  },
  {
    id: 2,
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    experience: calculateExperience("2022-02-01"),
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    experience: calculateExperience("2023-01-01"),
  },
  {
    id: 4,
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    experience: calculateExperience("2022-02-01"),
  },
  {
    id: 5,
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    experience: "Basics",
  },
  {
    id: 6,
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    experience: calculateExperience("2022-02-01"),
  },
  {
    id: 7,
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    experience: calculateExperience("2023-01-01"),
  },
  {
    id: 8,
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    experience: calculateExperience("2022-02-01"),
  },
];
