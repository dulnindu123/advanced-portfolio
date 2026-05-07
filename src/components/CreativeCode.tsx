"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CODE_SNIPPETS = [
  { lang: "Java", code: "System.out.println(\"Hello, World!\");", color: "text-blue-400" },
  { lang: "JavaScript", code: "console.log(\"Hello, World!\");", color: "text-yellow-400" },
  { lang: "Python", code: "print(\"Hello, World!\")", color: "text-green-400" },
  { lang: "C++", code: "printf(\"Hello, World!\\n\");", color: "text-purple-400" },
];

export default function CreativeCode() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const currentSnippet = CODE_SNIPPETS[index];

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout;
    const target = currentSnippet.code;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    interval = setInterval(() => {
      setDisplayText(
        target
          .split("")
          .map((char, i) => {
            if (i < iteration) return target[i];
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= target.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % CODE_SNIPPETS.length);
        }, 3000);
      }

      iteration += 1 / 2;
    }, 30);

    return () => clearInterval(interval);
  }, [index, currentSnippet.code]);

  return (
    <div className="flex items-center gap-3 font-mono text-sm md:text-base">
      <span className="text-accent font-black animate-pulse">&gt;_</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
          className={`${currentSnippet.color} drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] whitespace-nowrap`}
        >
          {displayText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-2 h-5 bg-accent inline-block ml-1"
      />
    </div>
  );
}
