import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  highlightedText: string;
  description: string;
  TitleClassName?: string;
  highlightedTextClassName?: string;
  descriptionClassName?: string;
  variants?: Variants;
}

const SectionHeader = ({
  title,
  highlightedText,
  description,
  TitleClassName = "",
  highlightedTextClassName = "",
  descriptionClassName = "",
  variants,
}: SectionHeaderProps) => {
  return (
    <motion.div variants={variants}>
      <motion.h1 className={`font-bold text-white ${TitleClassName}`}>
        {title}{" "}
        <span className={`text-blue-400 ${highlightedTextClassName}`}>
          {highlightedText}
        </span>
      </motion.h1>
      <motion.p className={`${descriptionClassName}`}>
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader;
