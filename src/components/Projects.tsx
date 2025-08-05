import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import Link from "next/link";
import Badge from "./Badge";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { smoothScroll } from "@/assets/utils";
import { Images } from "@/assets/images";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing my projects and skills",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: Images.portfolio_project,
    github_1: "https://github.com/Zakria-04/my_portfolio",
    github_2: "",
    live: "https://portfolio-topaz-alpha-a6rayz79j1.vercel.app/",
    category: "frontend",
  },
  {
    id: 2,
    title: "Jelofy.com",
    description:
      "SaaS platform for restaurants to create customizable digital menus with QR codes. Features include menu item management, design customization, authentication, and payment integration.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Redux",
      "Tailwind",
      "Paddle",
      "Resend",
      "Google Auth",
      "SaaS",
    ],
    image: Images.jelofy,
    github_1: "https://github.com/Zakria-04/jelofy_v1_demo",
    github_2: "https://github.com/Zakria-04/jelofy_v1_demo-server",
    live: "https://jelofy.com",
    category: "fullstack",
  },
  {
    id: 3,
    title: "Chat Simulator",
    description:
      "Chat application simulating real-time messaging for mobile devices using React Native and Socket.IO",
    tags: ["React Native", "Typescript", "Node.js", "Socket.io", "Express"],
    image: Images.chat_simulator,
    github_1: "https://github.com/Zakria-04/chat-simulator",
    github_2: "https://github.com/Zakria-04/chat-simulator_server",
    live: "",
    category: "fullstack",
  },
  {
    id: 4,
    title: "My Diary",
    description:
      "A personal diary application for jotting down thoughts and experiences.",
    tags: ["React", "Typescript", "Node.js", "Express", "MongoDB"],
    image: Images.diary_app,
    github_1: "https://github.com/Zakria-04/next-diary-app",
    github_2: "https://github.com/Zakria-04/diary_server",
    live: "",
    category: "fullstack",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge text="MY WORK" className="text-blue-500 py-1 px-3 mb-4" />

          <SectionHeader
            title="Featured"
            highlightedText="Projects"
            description="Here are some of my selected works. Each project represents unique challenges and solutions."
            TitleClassName="text-4xl md:text-5xl mb-4"
            descriptionClassName="text-lg text-slate-400 max-w-2xl mx-auto"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["all", "frontend", "backend", "fullstack"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              {filter === "all" ? "All Projects" : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/30 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  width={400}
                  height={300}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent lg:opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    {project.github_1 && (
                      <Link
                        href={project.github_1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                      </Link>
                    )}
                    {project.github_2 && (
                      <Link
                        href={project.github_2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.a
            onClick={() => smoothScroll("#contact")}
            className="inline-flex items-center px-6 py-3.5 text-sm font-medium bg-transparent text-white border border-slate-600 rounded-lg hover:bg-slate-800 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiCode className="mr-2 w-4 h-4" />
            Want to see more? Let&apos;s talk about your project
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
