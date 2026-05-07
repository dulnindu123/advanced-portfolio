"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootLogs = [
    "Initializing kernel...",
    "Loading assets/images/profile.png",
    "Fetching technical_arsenal.json",
    "Configuring twilight_mode_v3",
    "Connecting to neural_network_api",
    "Booting system_ui.sh",
    "Ready."
  ];

  useEffect(() => {
    // Sequence the logs
    bootLogs.forEach((log, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
      }, index * 250);
    });

    // Progress bar simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "circOut" }
          }}
          className="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center font-mono overflow-hidden"
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Top-Left Logs */}
          <div className="absolute top-10 left-10 hidden md:block">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] text-accent/60 mb-1"
              >
                <span className="text-secondary mr-2">[{new Date().toLocaleTimeString()}]</span>
                {log}
              </motion.div>
            ))}
          </div>

          {/* Center Logo/Name */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                DULNINDU <span className="text-accent">SARANGA</span>
              </h1>
              <div className="text-accent/50 text-xs tracking-[0.4em] uppercase mt-4">System Initializing</div>
            </motion.div>

            {/* Progress Container */}
            <div className="w-64 h-1 bg-white/5 rounded-full relative overflow-hidden mx-auto">
              <motion.div 
                className="absolute inset-0 bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 text-[10px] text-secondary tracking-widest">{progress}% COMPLETE</div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-10 text-white/20 text-[10px] tracking-widest">
            PORTFOLIO OS v3.0.0
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
