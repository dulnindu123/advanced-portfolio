"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react";

const COMMANDS = {
  help: "Available commands: bio, skills, contact, clear, projects, resume",
  bio: "Dulnindu Saranga - Software Engineering Undergraduate. Passionate about AI, IoT, and Full-stack Web Development.",
  skills: "Languages: Java, Python, JS/TS, C/C++\nWeb: Next.js, React, WordPress, Elementor, Tailwind\nIoT: Arduino, Sensors, REST APIs",
  contact: "Email: dulla2850@gmail.com\nLinkedIn: linkedin.com/in/wkdsar\nGitHub: github.com/dulnindu123",
  projects: "1. HelaDry IoT Dehydrator\n2. Smart Campus REST API\n3. BodySync AI\n4. Task Manager System",
  resume: "Redirecting to CV download...",
  clear: "CLEAR",
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: "input" | "output"; content: string }[]>([
    { type: "output", content: "Welcome to Dulnindu's Portfolio Terminal v1.0.0" },
    { type: "output", content: "Type 'help' to see available commands." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    const newHistory = [...history, { type: "input" as const, content: cmd }];

    if (cmd === "clear") {
      setHistory([]);
    } else if (COMMANDS[cmd as keyof typeof COMMANDS]) {
      newHistory.push({ type: "output", content: COMMANDS[cmd as keyof typeof COMMANDS] });
      setHistory(newHistory);
      if (cmd === "resume") {
        window.open("./Dulnindu Saranga.pdf", "_blank");
      }
    } else {
      newHistory.push({ type: "output", content: `Command not found: ${cmd}. Type 'help' for assistance.` });
      setHistory(newHistory);
    }

    setInput("");
  };

  return (
    <section className="py-24 px-6 md:px-12 relative flex justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl glass rounded-xl border border-card-border overflow-hidden shadow-2xl"
      >
        {/* Terminal Header */}
        <div className="bg-black/40 px-4 py-3 border-b border-card-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TerminalIcon size={16} className="text-accent" />
            <span className="text-xs font-mono text-secondary">bash — dulnindu@portfolio — 80x24</span>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          ref={scrollRef}
          className="h-80 overflow-y-auto p-6 font-mono text-sm md:text-base bg-black/60 backdrop-blur-xl"
        >
          <div className="space-y-2">
            {history.map((line, i) => (
              <div key={i} className={line.type === "input" ? "text-primary flex items-center gap-2" : "text-secondary/80 whitespace-pre-wrap"}>
                {line.type === "input" && <ChevronRight size={14} className="text-accent" />}
                {line.content}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <ChevronRight size={14} className="text-accent" />
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                className="bg-transparent border-none outline-none text-primary w-full caret-accent"
                spellCheck="false"
              />
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
