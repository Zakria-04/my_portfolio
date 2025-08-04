import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { smoothScroll } from "@/assets/utils";

const navData = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
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
            <button id="home" onClick={() => smoothScroll("#home")} className="cursor-pointer">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-blue-400">Z</span>akaria
                <span className="text-blue-400">.</span>
              </h1>
            </button>
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
                  <button onClick={() => smoothScroll(item.href)}>
                    <motion.a
                      className="relative text-slate-300 hover:text-white text-sm font-medium transition-colors"
                      whileHover={{ color: "#ffffff" }}
                    >
                      {item.name}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-px bg-red-400"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* MOBILE NAVIGATION */}
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

        <AnimatePresence>
          {isOpen && (
            <MobileNav
              navData={navData}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
