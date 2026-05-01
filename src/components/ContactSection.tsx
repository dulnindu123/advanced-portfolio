"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, GitBranch, MessageCircle, Video } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="pt-24 pb-8 px-6 md:px-12 relative bg-black/50 border-t border-card-border">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6">Get In <span className="text-accent">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full mx-auto mb-8"></div>
          
          <p className="text-secondary text-lg mb-10 max-w-2xl mx-auto">
            I am always open to discussing new software development opportunities, freelance projects, or collaborations. Let&apos;s build something awesome together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:dulla2850@gmail.com" 
              className="flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-hover hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <Mail size={20} />
              dulla2850@gmail.com
            </a>
            
            <a 
              href="https://www.linkedin.com/in/wkdsar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass border border-card-border text-primary font-bold rounded-full hover:border-accent transition-all hover:scale-105"
            >
              <Briefcase size={20} className="text-accent" />
              LinkedIn Profile
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="max-w-6xl mx-auto border-t border-card-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-secondary text-sm font-medium">
          &copy; {new Date().getFullYear()} Dulnindu Saranga. All Rights Reserved.
        </p>
        
        <div className="flex items-center gap-5">
          <a href="https://github.com/dulnindu123" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white hover:-translate-y-1 transition-all">
            <GitBranch size={22} />
          </a>
          <a href="https://www.linkedin.com/in/wkdsar" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent hover:-translate-y-1 transition-all">
            <Briefcase size={22} />
          </a>
          <a href="https://web.facebook.com/dulnindu.saranga.7/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-blue-500 hover:-translate-y-1 transition-all">
            <MessageCircle size={22} />
          </a>
          <a href="https://www.youtube.com/@Dulla-i7b" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-red-500 hover:-translate-y-1 transition-all">
            <Video size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
