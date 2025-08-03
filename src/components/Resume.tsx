import React from "react";
import {
  FiDownload,
  FiExternalLink,
  FiAward,
  FiCode,
  FiLayers,
} from "react-icons/fi";

const Resume = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"],
    },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
  ];

  return (
    <section
      id="resume"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-500 bg-blue-500/10 rounded-full">
            PROFESSIONAL SUMMARY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Resume</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-slate-400">
              Self-taught full-stack developer with extensive project
              experience, specializing in modern web technologies and clean,
              scalable architecture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-blue-500/10 rounded-lg text-blue-400">
              <FiAward className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Experience</h3>
            <p className="text-slate-400">
              3+ years building production applications for startups and
              freelance clients.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-blue-500/10 rounded-lg text-blue-400">
              <FiCode className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Projects</h3>
            <p className="text-slate-400">
              20+ completed projects including SaaS platforms, e-commerce, and
              web apps.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/30 transition-all">
            <div className="inline-flex items-center justify-center w-14 h-14 mb-6 bg-blue-500/10 rounded-lg text-blue-400">
              <FiLayers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Technologies</h3>
            <p className="text-slate-400">
              Full-stack expertise with focus on JavaScript ecosystem and cloud
              infrastructure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block py-2 px-4 text-sm font-medium text-blue-400 bg-blue-500/10 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/Zakaria_Abdelghani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
            >
              <FiExternalLink className="w-4 h-4" />
              View Full Resume
            </a>
            <a
              href="/Zakaria_Abdelghani_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-transparent hover:bg-slate-800 border border-slate-600 rounded-lg transition-all"
            >
              <FiDownload className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
