"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  date: string;
  link: string;
  logo: string;
}

const certifications: Certification[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    organization: "Google",
    date: "Issued Dec 2023",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_logo.svg"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "Issued Nov 2023",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    organization: "Meta",
    date: "Issued Oct 2023",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
  }
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-background border-t border-card-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-accent" size={32} />
            <h2 className="text-3xl md:text-5xl font-black">Certifications <span className="text-accent">& Licenses</span></h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-3xl border border-card-border hover:border-accent/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform bg-white/5">
                    <img src={cert.logo} alt={cert.organization} className="w-full h-full object-contain" />
                  </div>
                  <Award className="text-accent/30 group-hover:text-accent transition-colors" size={24} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-primary leading-tight group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-secondary mb-4">{cert.organization}</p>
                
                <div className="flex items-center gap-2 text-xs text-secondary/60 mb-6">
                  <Calendar size={14} />
                  {cert.date}
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-5 py-3 glass border border-card-border rounded-xl text-sm font-bold text-primary hover:bg-accent hover:text-white hover:border-accent transition-all group/btn"
              >
                <span>Verify Credential</span>
                <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
