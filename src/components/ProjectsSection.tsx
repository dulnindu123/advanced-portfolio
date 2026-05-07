"use client";

import { motion } from "framer-motion";
import { 
  GitBranch, 
  Cpu,
  Globe,
  Database,
  Smartphone
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured: boolean;
  type: "web" | "iot" | "ai" | "system";
}

const projects: Project[] = [
  {
    title: "Smart Campus REST API",
    description: "A high-performance Java RESTful Web Service managing Smart Campus metadata and telemetry.",
    tags: ["Java", "JAX-RS", "Grizzly", "REST"],
    github: "https://github.com/dulnindu123/smart-campus-api",
    featured: true,
    type: "system",
  },
  {
    title: "HelaDry IoT Dehydrator",
    description: "Led the hardware-software integration for an IoT-based solar agricultural dehydrator.",
    tags: ["IoT", "C/C++", "Firebase", "Dart"],
    github: "https://github.com/dulnindu123/SDGP-HelaDry-CS154",
    featured: true,
    type: "iot",
  },
  {
    title: "BodySync AI",
    description: "Engineered a comprehensive health tracking mobile app utilizing Gemini AI analysis.",
    tags: ["React Native", "AI", "Gemini", "Expo"],
    github: "https://github.com/dulnindu123/BodySyncAI",
    featured: false,
    type: "ai",
  },
  {
    title: "Task Manager System",
    description: "A multi-stage task manager evolving from CLI to a full Tkinter GUI with JSON storage.",
    tags: ["Python", "Tkinter", "JSON"],
    github: "https://github.com/dulnindu123/python-gui-task-manager",
    featured: false,
    type: "system",
  },
  {
    title: "Parking Lot Management",
    description: "A comprehensive management system built using pure JavaScript, HTML, and CSS.",
    tags: ["JavaScript", "Logic", "UI/UX"],
    github: "https://github.com/dulnindu123/Parking-lot-management-system",
    featured: false,
    type: "web",
  },
  {
    title: "Student Registry CLI",
    description: "A robust CLI application for student registry management with persistent storage.",
    tags: ["Python", "CLI", "File I/O"],
    github: "https://github.com/dulnindu123/Python-Student-Registry-cli",
    featured: false,
    type: "system",
  },
  {
    title: "Life on Land Awareness",
    description: "A responsive web project dedicated to UN Sustainable Development Goal 15.",
    tags: ["HTML", "CSS", "UI/UX"],
    github: "https://github.com/dulnindu123/life-on-land-website",
    featured: false,
    type: "web",
  },
  {
    title: "Legacy Portfolio (v2)",
    description: "A modern, responsive personal portfolio built with HTML5 and Tailwind CSS.",
    tags: ["HTML", "Tailwind", "Responsive"],
    github: "https://github.com/dulnindu123/personal-portfolio-website",
    featured: false,
    type: "web",
  }
];

export default function ProjectsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "iot": return <Cpu className="text-accent" />;
      case "web": return <Globe className="text-accent" />;
      case "ai": return <Smartphone className="text-accent" />;
      default: return <Database className="text-accent" />;
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 relative bg-black/50 border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Project <span className="text-accent">Ecosystem</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass p-8 rounded-3xl group hover:border-accent/50 transition-colors flex flex-col ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  {getIcon(project.type)}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 glass border border-card-border rounded-full text-secondary hover:text-white hover:border-accent transition-all">
                    <GitBranch size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-secondary mb-6 leading-relaxed flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
