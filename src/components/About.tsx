import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiAward, FiCode, FiTrendingUp } from "react-icons/fi";

const aboutData = [
  {
    title: "About Me",
    content:
      "I'm a full-stack developer with hands-on experience in building web apps using React, TypeScript, and Node.js. I've worked on real-world SaaS projects, mentored students, and love creating clean, scalable code.",
    icon: <FiUser className="w-5 h-5" />,
    highlights: [
      "3+ years development experience",
      "Specialized in JavaScript ecosystem",
      "Production-level SaaS experience",
    ],
  },
  {
    title: "Why Choose Me?",
    content:
      "While I don't hold a formal computer science degree, I've built real production-level apps like jelofy.com, taught others, and continuously learn and improve. My code is clean, my workflow is collaborative, and I've already proven I can deliver real solutions.",
    icon: <FiAward className="w-5 h-5" />,
    highlights: [
      "Proven track record with real projects",
      "Strong problem-solving skills",
      "Continuous learner & adapter",
    ],
  },
];

const stats = [
  {
    value: "5+",
    label: "Projects Completed",
    icon: <FiCode className="w-5 h-5" />,
  },
  {
    value: "2+",
    label: "Years Experience",
    icon: <FiTrendingUp className="w-5 h-5" />,
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    icon: <FiAward className="w-5 h-5" />,
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-500 bg-blue-500/10 rounded-full">
            INTRODUCTION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-400">
              Get to know the developer behind the code - my journey, skills,
              and what drives me.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {aboutData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 mt-1 bg-blue-500/10 rounded-lg text-blue-400 flex-shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {section.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {section.content}
                  </p>
                  <ul className="space-y-2">
                    {section.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center text-slate-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:bg-slate-800 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  {stat.icon}
                </div>
                <span className="text-sm font-medium text-slate-400">
                  {stat.label}
                </span>
              </div>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
