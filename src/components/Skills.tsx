import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { skillsData } from "@/assets/data/skillsData";

const Skills = () => {
  return (
    <motion.div
      className="p-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 className="text-2xl font-bold">My Skills</motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
              className="w-12 h-12 mb-2"
            />
            <h4 className="text-white font-semibold">{skill.name}</h4>
            <p className="text-slate-400 text-sm">
              ex. {skill.experience || "Experience not specified"}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
