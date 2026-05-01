"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart Campus REST API",
    description: "A high-performance Java RESTful Web Service built from scratch using JAX-RS and Grizzly. Manages Smart Campus metadata and telemetry.",
    tags: ["Java", "JAX-RS", "Grizzly", "REST"],
    github: "https://github.com/dulnindu123/smart-campus-api",
    featured: true,
  },
  {
    title: "HelaDry IoT Dehydrator",
    description: "Led the hardware-software integration for an IoT-based solar agricultural dehydrator. Real-time sensor telemetry and database synchronization.",
    tags: ["IoT", "React Native", "Firebase", "C/C++"],
    github: "https://github.com/dulnindu123/SDGP-HelaDry-CS154",
    featured: true,
  },
  {
    title: "BodySync AI",
    description: "Engineered a comprehensive health and fitness tracking mobile application utilizing Gemini AI analysis. Focused on user-centric design.",
    tags: ["React Native", "AI", "Mobile Dev", "Expo"],
    github: "https://github.com/dulnindu123/BodySyncAI",
    featured: false,
  },
  {
    title: "Task Manager System",
    description: "A multi-stage task manager evolving from a CLI application to a full Tkinter GUI with local JSON storage and priority sorting.",
    tags: ["Python", "Tkinter", "JSON"],
    github: "https://github.com/dulnindu123/python-gui-task-manager",
    featured: false,
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative bg-black/50 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Featured <span className="text-accent">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass p-8 rounded-3xl group hover:border-accent/50 transition-colors ${
                project.featured ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-8 items-center" : ""
              }`}
            >
              <div className={project.featured ? "mb-6 md:mb-0" : "mb-6"}>
                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm font-medium">Repository</span>
                  </a>
                  {project.featured && (
                    <a 
                      href="#" 
                      className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Optional: Add image placeholders for featured projects here later */}
              {project.featured && (
                <div className="w-full h-48 md:h-full min-h-[200px] rounded-2xl bg-gradient-to-br from-card-border to-transparent border border-card-border overflow-hidden relative">
                   <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors"></div>
                   <div className="absolute inset-0 flex items-center justify-center text-secondary/30 font-mono text-sm">
                      [Project Preview]
                   </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
