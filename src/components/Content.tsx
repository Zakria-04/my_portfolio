import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const Content = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/50 pointer-events-none" />

      <motion.div
        className="container mx-auto px-6 py-24 md:py-32 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="inline-block py-1.5 px-4 mb-6 text-xs font-semibold tracking-wider text-blue-400 bg-blue-500/10 rounded-full"
            variants={itemVariants}
          >
            FULL-STACK DEVELOPER
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Crafting Digital <span className="text-blue-400">Experiences</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            I'm Zakaria Abdelghani, a passionate developer specializing in
            modern web technologies. I build performant, accessible applications
            with clean, maintainable code.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={fadeInVariant}
          >
            <Link
              href="#projects"
              className="px-8 py-3.5 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3.5 text-sm font-medium text-white bg-transparent hover:bg-slate-800 border border-slate-600 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
          variants={fadeInVariant}
        >
          {[
            {
              icon: <FiCode className="w-6 h-6" />,
              title: "Frontend Expertise",
              description:
                "React, TypeScript, Next.js, and modern CSS frameworks",
            },
            {
              icon: <FiCpu className="w-6 h-6" />,
              title: "Backend Skills",
              description:
                "Node.js, Express, MongoDB, TypeScript, and REST APIs",
            },
            {
              icon: <FiTrendingUp className="w-6 h-6" />,
              title: "Growth Mindset",
              description:
                "Driven by curiosity—always exploring new technologies and ready to tackle any challenge that helps me grow as a developer.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-500/10 rounded-lg text-blue-400">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Content;
