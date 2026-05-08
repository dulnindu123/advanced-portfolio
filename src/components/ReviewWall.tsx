"use client";

import { motion } from "framer-motion";
import Giscus from "@giscus/react";
import { MessageSquareQuote, ShieldCheck } from "lucide-react";

export default function ReviewWall() {
  return (
    <section id="reviews" className="py-24 px-6 md:px-12 bg-background border-t border-card-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquareQuote className="text-accent" size={32} />
            <h2 className="text-3xl md:text-5xl font-black">Community <span className="text-accent">Feedback</span></h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Real feedback from real developers. Authenticity powered by GitHub Discussions. 
            Leave a review below to join the conversation!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-[2.5rem] border border-card-border bg-white/5"
        >
          <Giscus
            id="comments"
            repo="dulnindu123/advanced-portfolio"
            repoId="R_kgDON7uKxA" // Replace with your repo ID if different
            category="Announcements"
            categoryId="DIC_kwDON7uKxM4CnV-q" // Replace with your category ID if different
            mapping="pathname"
            term="Welcome to my Portfolio!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="transparent_dark"
            lang="en"
            loading="lazy"
          />
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-secondary/50">
          <ShieldCheck size={14} />
          <span>Verified via GitHub Authentication</span>
        </div>
      </div>
    </section>
  );
}
