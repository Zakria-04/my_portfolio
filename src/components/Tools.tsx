import { toolsData } from "@/assets/data/tools";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Tools = () => {
  return (
    <motion.section
      className="p-10 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-3xl font-extrabold text-center text-slate-100 mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Tools & Technologies
      </motion.h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {toolsData.map((tool) => (
          <motion.div
            key={tool.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-800/60 backdrop-blur-md border border-slate-700 rounded-2xl p-4 shadow-md flex flex-col items-center transition-all duration-300 hover:bg-slate-700/60"
          >
            <Image
              src={tool.icon}
              alt={tool.name}
              width={50}
              height={50}
              className="mb-3"
            />
            <p className="text-slate-200 text-sm font-semibold text-center">
              {tool.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Tools;
