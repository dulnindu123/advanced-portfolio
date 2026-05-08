"use client";

import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

interface Review {
  name: string;
  role: string;
  content: string;
  stars: number;
  image?: string;
}

const reviews: Review[] = [
  {
    name: "Dr. Aruna Perera",
    role: "Academic Supervisor",
    content: "Dulnindu's work on the HelaDry IoT system demonstrated exceptional technical leadership and an ability to solve complex hardware-software integration challenges with precision.",
    stars: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Product Lead at Microweb",
    content: "A remarkably talented developer who understands both the logic and the aesthetics. His contributions to our React ecosystem were nothing short of transformative.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Senior Software Engineer",
    content: "I've rarely seen a junior engineer with such a deep grasp of system architecture. His REST API designs are clean, performant, and perfectly documented.",
    stars: 5
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-6 md:px-12 bg-background border-t border-card-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-4">Professional <span className="text-accent">Endorsements</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2.5rem] border border-card-border hover:border-accent/30 transition-all group relative"
            >
              <Quote className="absolute top-8 right-8 text-accent/10 group-hover:text-accent/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-secondary leading-relaxed mb-8 italic">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-card-border">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary">{review.name}</h4>
                  <p className="text-xs text-secondary">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
