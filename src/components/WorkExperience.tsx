import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import Badge from "./Badge";
import SectionHeader from "./SectionHeader";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Jelofy.com",
      period: "Feb 2025 – Jun 2025",
      location: "Remote",
      description: [
        "Built and launched a SaaS platform enabling restaurants to create digital menus via QR codes",
        "Architected full-stack solution with React, Node.js, MongoDB, and Tailwind CSS",
        "Implemented core features: user auth, menu customization, payment processing (Paddle), and email systems",
        "Led product development, deployment, and ongoing optimization for security and UX",
      ],
      link: "https://jelofy.com",
    },
    {
      role: "Full-Stack Development Instructor",
      company: "Code Zone",
      period: "Jun 2024 – Present",
      location: "hybrid",
      description: [
        "Teach modern web development (React Native, Node.js, MongoDB, REST APIs)",
        "Mentor students through real-world projects and debugging challenges",
        "Develop curriculum focusing on industry best practices and maintainable code",
        "Simplify complex concepts for diverse learning levels (beginner to intermediate)",
      ],
      link: "",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Badge
            text="WORK EXPERIENCE"
            className="text-blue-500 py-1 px-3 mb-4"
          />
          <SectionHeader
            title="My"
            highlightedText="Journey"
            description="Professional experiences that shaped my development expertise"
            TitleClassName="text-4xl md:text-5xl mb-4"
            descriptionClassName="text-lg text-slate-400"
          />
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-xl text-blue-400 mb-2">{exp.company}</h4>
                  <div className="flex items-center gap-4 text-slate-400 mb-6">
                    <span>📍 {exp.location}</span>
                    <span>🗓️ {exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
