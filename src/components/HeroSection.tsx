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
      {/* Background ambient light and technical grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center md:text-left z-10"
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <motion.div variants={itemVariants} className="mb-6 flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md text-sm text-accent font-mono shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Terminal size={16} className="animate-pulse" />
                <span>System.out.println(&quot;Hello, World!&quot;);</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tighter mb-6 relative">
              <span className="relative z-10">I&apos;m Dulnindu</span> <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600 relative z-10">Saranga</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 blur opacity-20 -z-10"></div>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-secondary mb-10 max-w-2xl leading-relaxed border-l-4 border-accent pl-4">
              A proactive Software Engineering Undergraduate building scalable backend systems, intelligent IoT solutions, and modern web applications with cutting-edge technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="group relative flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="./Dulnindu Saranga.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-3.5 glass border border-card-border hover:border-accent text-primary font-bold rounded-lg transition-all hover:scale-105"
              >
                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="md:w-1/3 flex justify-center">
             <div className="relative w-64 h-64 md:w-80 md:h-80 group">
               <div className="absolute inset-0 bg-gradient-to-br from-accent to-purple-600 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
               <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-[spin_10s_linear_infinite]"></div>
               <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/50 animate-[spin_15s_linear_infinite_reverse]"></div>
               <img 
                 src="./images/profile.png" 
                 alt="Dulnindu Saranga" 
                 className="w-full h-full object-cover object-top rounded-full border-4 border-black relative z-10 shadow-2xl" 
               />
             </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
