"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-2.5 glass rounded-full text-secondary hover:text-accent transition-colors flex items-center justify-center relative overflow-hidden group"
      aria-label="Toggle Theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            y: theme === "dark" ? 0 : 30,
            opacity: theme === "dark" ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0"
        >
          <Moon size={20} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            y: theme === "light" ? 0 : -30,
            opacity: theme === "light" ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0"
        >
          <Sun size={20} />
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.button>
  );
}
