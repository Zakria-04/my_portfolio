'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Content from "@/components/Content";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Links from "@/components/Links";
import GreetingModal from "@/components/GreetingModal";

const HomePage = () => {
  const [showGreeting, setShowGreeting] = useState(false);

  useEffect(() => {
    const openGreeting = setTimeout(() => {
      setShowGreeting(true);
    }, 4 * 1000);

    return () => clearTimeout(openGreeting);
  }, []);

  return (
    <motion.div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <Content />
      <Skills />
      <About />
      <Resume />
      <Projects />
      <Links />

      {showGreeting && <GreetingModal onClose={() => setShowGreeting(false)} />}
    </motion.div>
  );
};

export default HomePage;
