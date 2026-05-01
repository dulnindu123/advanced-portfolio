"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase } from "lucide-react";

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
          <a href="https://github.com/dulnindu123" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white hover:-translate-y-1 transition-all" aria-label="GitHub">
            <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 100 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/wkdsar" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent hover:-translate-y-1 transition-all" aria-label="LinkedIn">
            <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://web.facebook.com/dulnindu.saranga.7/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-blue-500 hover:-translate-y-1 transition-all" aria-label="Facebook">
            <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
          </a>
          <a href="https://www.youtube.com/@Dulla-i7b" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-red-500 hover:-translate-y-1 transition-all" aria-label="YouTube">
            <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
          </a>
        </div>

      </div>
    </section>
  );
}
