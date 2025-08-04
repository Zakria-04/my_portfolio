import React from "react";
import { motion, Variants } from "framer-motion";

interface BadgeProps {
  text: string;
  variants?: Variants;
  className?: string;
}

const Badge = ({ text, variants, className = "" }: BadgeProps) => {
  return (
    <motion.span
      className={`inline-block text-xs font-semibold bg-blue-500/10 rounded-full ${className}`}
      variants={variants}
    >
      {text}
    </motion.span>
  );
};

export default Badge;
