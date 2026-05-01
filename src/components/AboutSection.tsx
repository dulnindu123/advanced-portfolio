"use client";

import { motion } from "framer-motion";

const skills = [
  "Java", "Python", "JavaScript/TypeScript", "Next.js", "React Native", 
  "HTML/CSS", "Tailwind CSS", "REST APIs", "IoT", "C/C++", "Firebase", "Git"
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">About <span className="text-accent">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-secondary text-lg leading-relaxed"
          >
            <p>
              I am a driven Software Engineering Undergraduate with a passion for building robust backend architectures, 
              intelligent hardware integrations, and seamless user experiences. 
            </p>
            <p>
              My journey involves a mix of full-stack web development, mobile applications, and IoT solutions. 
              I thrive on taking complex problems and transforming them into elegant, scalable software.
            </p>
            <p>
              Currently exploring advanced AI integrations and modern React ecosystems like Next.js to push 
              the boundaries of what personal and commercial web platforms can achieve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Technical Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-card/40 border border-card-border rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
