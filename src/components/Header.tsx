import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";

const navData = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-blue-400">Z</span>akaria
                <span className="text-blue-400">.</span>
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:block"
          >
            <ul className="flex items-center space-x-8">
              {navData.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <motion.a
                      className="relative text-slate-300 hover:text-white text-sm font-medium transition-colors"
                      whileHover={{ color: "#ffffff" }}
                    >
                      {item.name}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-px bg-blue-400"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </Link>
                </li>
              ))}
              <li>
                <motion.button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800"
                  whileTap={{ scale: 0.9 }}
                >
                  {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                </motion.button>
              </li>
            </ul>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4"
          >
            <ul className="flex flex-col space-y-4 pb-4">
              {navData.map((item) => (
                <motion.li
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={item.href}>
                    <motion.a
                      className="block py-2 text-slate-300 hover:text-white text-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="pt-2"
              >
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 py-2 text-slate-300 hover:text-white"
                >
                  {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
