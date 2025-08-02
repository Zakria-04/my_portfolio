import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5, // Adjust the delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
} as const;

const Content = () => {
  return (
    <motion.div
      className="p-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{}}
    >
      <motion.h1
        className="text-4xl font-bold text-white"
        variants={itemVariants}
      >
        Hello! I'm Zakaria Abdelghani
      </motion.h1>
      <motion.p className="mt-4 text-lg text-slate-300" variants={itemVariants}>
        I'm a software developer with a passion for building web applications
        and exploring new technologies.
      </motion.p>
    </motion.div>
  );
};

export default Content;
