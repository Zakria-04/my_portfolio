"use client";
import Content from "@/components/Content";
import Header from "@/components/Header";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GreetingModal from "@/components/GreetingModal";

const page = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  return (
    <motion.div className="bg-slate-900 min-h-screen text-white">
      <Header />
      <Content />

      {showGreeting && (
        <GreetingModal onClick={() => setShowGreeting(false)} />
      )}
    </motion.div>
  );
};

export default page;
