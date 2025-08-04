import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiFileText,
} from "react-icons/fi";
import { SiLeetcode, SiCodepen } from "react-icons/si";

const Links = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub className="w-5 h-5" />,
      url: "https://github.com/yourusername",
      color: "from-gray-900 to-gray-700",
      hover: "hover:shadow-[0_0_20px_rgba(110,118,129,0.4)]",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/yourprofile",
      color: "from-blue-700 to-blue-900",
      hover: "hover:shadow-[0_0_20px_rgba(10,102,194,0.4)]",
    },
    // {
    //   name: "LeetCode",
    //   icon: <SiLeetcode className="w-5 h-5" />,
    //   url: "https://leetcode.com/yourprofile",
    //   color: "from-amber-600 to-amber-800",
    //   hover: "hover:shadow-[0_0_20px_rgba(255,161,22,0.4)]",
    // },
    {
      name: "Email",
      icon: <FiMail className="w-5 h-5" />,
      url: "mailto:your.email@example.com",
      color: "from-rose-600 to-rose-800",
      hover: "hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]",
    },
    {
      name: "Resume",
      icon: <FiFileText className="w-5 h-5" />,
      url: "/your-resume.pdf",
      color: "from-emerald-600 to-emerald-800",
      hover: "hover:shadow-[0_0_20px_rgba(5,150,105,0.4)]",
      download: true,
    },
  ];

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-blue-500 bg-blue-500/10 rounded-full">
            CONNECT WITH ME
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-blue-400">Digital Presence</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Find me on these platforms or download my resume for more details.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download || false}
              className={`bg-gradient-to-br ${link.color} rounded-xl p-4 flex flex-col items-center justify-center aspect-square ${link.hover} transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm mb-3">
                {link.icon}
              </div>
              <h3 className="text-white font-medium text-center">
                {link.name}
              </h3>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">Prefer direct communication?</p>
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="mr-2 w-4 h-4" />
            Send me an email
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Links;
