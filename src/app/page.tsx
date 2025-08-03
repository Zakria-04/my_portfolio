"use client";
import Content from "@/components/Content";
import Header from "@/components/Header";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GreetingModal from "@/components/GreetingModal";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Resume from "@/components/Resume";

const page = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  return (
    <motion.div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <Content />
      <Skills />
      <About />
      <Resume />

      {showGreeting && (
        <GreetingModal onClick={() => setShowGreeting(false)} />
      )}
    </motion.div>
  );
};

export default page;
