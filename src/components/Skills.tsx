import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { skillsData } from "@/assets/data/skillsData";
import { FiCode, FiLayers, FiDatabase } from "react-icons/fi";
import Badge from "./Badge";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  const getLevelWidth = (level: string) => {
    switch (level) {
      case "basics":
        return 10;
      case "beginner":
        return 40;
      case "intermediate":
        return 70;
      case "advanced":
        return 90;
      case "expert":
        return 100;
      default:
        return 50;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "basics":
        return "bg-blue-300";
      case "beginner":
        return "bg-blue-400";
      case "intermediate":
        return "bg-blue-500";
      case "advanced":
        return "bg-blue-600";
      case "expert":
        return "bg-blue-700";
      default:
        return "bg-blue-500";
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode className="w-5 h-5" />,
      skills: skillsData.filter((skill) => skill.category === "frontend"),
    },
    {
      title: "Backend",
      icon: <FiDatabase className="w-5 h-5" />,
      skills: skillsData.filter((skill) => skill.category === "backend"),
    },
    {
      title: "Other Technologies",
      icon: <FiLayers className="w-5 h-5" />,
      skills: skillsData.filter(
        (skill) =>
          !["frontend", "backend", "devops"].includes(skill.category || "")
      ),
    },
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge
            text="TECHNICAL SKILLS"
            className="text-blue-500 py-1 px-3 mb-4"
          />

          <SectionHeader
            title="My"
            highlightedText="Expertise"
            description="Technologies I've worked with and mastered through real-world projects"
            TitleClassName="text-4xl md:text-5xl mb-4"
            descriptionClassName="text-lg text-slate-400"
          />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    layout
                    className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center border border-slate-700/50 hover:border-blue-500/30 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative w-14 h-14 mb-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300 transform group-hover:scale-110"></div>
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="relative z-10 w-7 h-7 object-contain"
                      />
                    </div>
                    <h4 className="text-white font-medium text-center">
                      {skill.name}
                    </h4>
                    {skill.experience && (
                      <p className="text-xs text-slate-400 mt-1 text-center">
                        {skill.experience}
                      </p>
                    )}
                    {skill.level && (
                      <div className="w-full mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getLevelColor(
                            skill.level
                          )} transition-all duration-300 ease-in-out`}
                          style={{ width: `${getLevelWidth(skill.level)}%` }}
                        ></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
