import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Header.module.css";

const navData = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  return (
    <div className="bg-slate-900 p-4 flex flex-col justify-between items-center lg:flex-row gap-4">
      <h1 className="text-3xl font-bold text-slate-100 font-sans">
        My Portfolio
      </h1>

      <nav>
        <ul className="flex space-x-4">
          {navData.map((item) => (
            <li key={item.name}>
              <motion.a
                whileHover={{ color: "#314158" }}
                href={item.href}
                className={`text-slate-400 ${styles.underlineHover} text-lg`}
              >
                {item.name}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
