"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Cpu, Terminal } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const skillCategories = [
  {
    title: "Core Development",
    icon: <Code2 className="text-accent" />,
    skills: [
      { name: "TypeScript", percentage: 92, color: "from-blue-500 to-cyan-400" },
      { name: "React / Next.js", percentage: 95, color: "from-cyan-500 to-blue-400" },
      { name: "Node.js", percentage: 85, color: "from-green-500 to-emerald-400" },
      { name: "Java", percentage: 88, color: "from-orange-500 to-red-400" }
    ]
  },
  {
    title: "Data & Security",
    icon: <Terminal className="text-accent" />,
    skills: [
      { name: "Python", percentage: 90, color: "from-yellow-400 to-orange-500" },
      { name: "SQL / PostgreSQL", percentage: 82, color: "from-indigo-500 to-purple-400" },
      { name: "Cybersecurity Auditing", percentage: 75, color: "from-red-500 to-rose-400" },
      { name: "REST API Design", percentage: 94, color: "from-emerald-500 to-teal-400" }
    ]
  },
  {
    title: "Tools & Infrastructure",
    icon: <Cpu className="text-accent" />,
    skills: [
      { name: "Git / GitHub", percentage: 96, color: "from-orange-500 to-red-500" },
      { name: "Docker", percentage: 70, color: "from-blue-600 to-blue-400" },
      { name: "Firebase", percentage: 85, color: "from-amber-400 to-orange-500" },
      { name: "Linux CLI", percentage: 88, color: "from-zinc-300 to-zinc-100" }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Technical <span className="text-accent">Arsenal</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Quantifying my expertise across the full software engineering stack, from low-level systems to high-performance web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2.5rem] border border-card-border"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-primary">{skill.name}</span>
                      <span className="text-xs font-mono text-accent">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary/10 rounded-full overflow-hidden border border-card-border/50">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + (sIdx * 0.1) }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 skew-x-[-20deg] blur-sm animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
