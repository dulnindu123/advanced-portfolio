"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <div className="md:w-2/3">
            <motion.div variants={itemVariants} className="mb-6 flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card/50 backdrop-blur-sm text-sm text-secondary font-mono">
                <Terminal size={14} className="text-accent" />
                <span>Hello, World!</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              I&apos;m Dulnindu <span className="text-gradient">Saranga</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-secondary mb-10 max-w-2xl leading-relaxed">
              A proactive Software Engineering Undergraduate building scalable backend systems, intelligent IoT solutions, and modern web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-3.5 bg-primary text-background font-semibold rounded-full hover:scale-105 transition-all"
              >
                Explore Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/dulnindu123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 border border-card-border hover:bg-card/50 font-semibold rounded-full hover:scale-105 transition-all"
              >
                View GitHub
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="md:w-1/3 flex justify-center">
             <div className="relative w-64 h-64 md:w-80 md:h-80">
               <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
               <img src="/images/profile.png" alt="Dulnindu Saranga" className="w-full h-full object-cover rounded-full border-4 border-card-border relative z-10 shadow-2xl shadow-accent/20" />
             </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
