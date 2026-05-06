"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    title: "BSc (Hons) in Computer Science",
    institution: "University of Westminster, UK / IIT",
    period: "2024 - Present",
    type: "degree",
    details: "Focusing on advanced software engineering, data structures, and modern web architectures."
  },
  {
    title: "Ananda College, Colombo 10",
    institution: "Primary & Secondary Education",
    period: "2010 - 2023",
    type: "school",
    details: "G.C.E. Advanced Level (2023) & Ordinary Level (2021)."
  }
];

const certifications = [
  {
    title: "Cyber Security & Networking",
    institution: "Informatics Institute of Technology (IIT)",
    status: "In Progress (2025 - 2026)",
  },
  {
    title: "Diploma in English",
    institution: "Aquinas College of Higher Studies",
    status: "Final Level (2023 - 2025)",
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Education & <span className="text-accent">Certifications</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <GraduationCap className="text-accent" /> Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-card-border"
                >
                  <div className="absolute left-[-4.5px] top-2 w-3 h-3 bg-accent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <div className="glass p-6 rounded-2xl">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h4 className="text-lg font-bold text-primary">{item.title}</h4>
                      <span className="text-xs font-mono px-3 py-1 bg-accent/10 text-accent rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm text-accent mb-3 font-medium">{item.institution}</p>
                    <p className="text-secondary text-sm leading-relaxed">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <Award className="text-accent" /> Professional Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl border-l-4 border-l-accent flex items-start gap-4 group hover:bg-card/40 transition-colors"
                >
                  <div className="p-3 bg-accent/10 rounded-xl text-accent mt-1 group-hover:scale-110 transition-transform">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-1">{cert.title}</h4>
                    <p className="text-secondary text-sm mb-2">{cert.institution}</p>
                    <span className="text-xs font-medium px-2 py-1 bg-card-border text-primary rounded">
                      {cert.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
