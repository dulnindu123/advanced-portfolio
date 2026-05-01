"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 glass border-b" : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
          DS<span className="text-accent">.</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="#about" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="text-sm font-medium text-secondary hover:text-primary transition-colors">
            Experience
          </Link>
        </nav>

        <a
          href="mailto:dulnindusaranga@example.com"
          className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-full transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          Let's Talk
        </a>
      </div>
    </motion.header>
  );
}
