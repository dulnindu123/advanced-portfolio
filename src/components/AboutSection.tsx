"use client";

import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
            className="glass p-8 rounded-3xl border border-card-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] rounded-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
              <span className="w-2 h-6 bg-accent rounded-full"></span>
              Technical Arsenal
            </h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-black/50 border border-card-border/80 rounded-xl text-sm font-semibold hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional GitHub Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-primary text-center flex items-center justify-center gap-3">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 100 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
            Open Source <span className="text-accent">Activity</span>
          </h3>
          <div className="glass p-6 md:p-10 rounded-3xl border border-card-border/50 hover:border-accent/30 transition-colors w-full overflow-x-auto flex justify-center">
            <GitHubCalendar 
              username="dulnindu123" 
              colorScheme="dark" 
              theme={{
                light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                dark: ['#0A0A0A', '#1e3a8a', '#3b82f6', '#8b5cf6', '#a855f7'],
              }}
              fontSize={14}
              blockSize={14}
              blockMargin={6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
