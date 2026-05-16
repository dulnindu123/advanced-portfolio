"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquareQuote, Heart } from "lucide-react";

export default function ReviewWall() {
  // Use your real Cusdis App ID here
  const APP_ID = "YOUR_CUSDIS_APP_ID_HERE";

  useEffect(() => {
    // Dynamically load Cusdis script for performance
    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
            <h2 className="text-3xl md:text-5xl font-black">Community <span className="text-accent">Wall</span></h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full mx-auto mb-6"></div>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            No login required. Just leave your thoughts and share the love! 
            Your feedback helps me grow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-[2.5rem] border border-card-border bg-white/5 min-h-[400px]"
        >
          {/* Cusdis Widget */}
          <div 
            id="cusdis_thread"
            data-host="https://cusdis.com"
            data-app-id={APP_ID}
            data-page-id="portfolio_main"
            data-page-url="https://dulnindu123.github.io/advanced-portfolio/"
            data-page-title="Dulnindu Saranga Portfolio"
            data-theme="dark"
            className="cusdis-container"
          />
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-secondary/50">
          <Heart size={14} className="text-red-500" />
          <span>Instant & Anonymous Feedback Enabled</span>
        </div>
      </div>

      {/* Global CSS to style Cusdis to match your theme */}
      <style jsx global>{`
        #cusdis_thread iframe {
          width: 100% !important;
          min-height: 400px !important;
        }
      `}</style>
    </section>
  );
}
