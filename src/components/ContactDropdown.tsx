"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, ExternalLink, Send } from "lucide-react";

interface ContactDropdownProps {
  email: string;
  className?: string;
  buttonText?: string;
  variant?: "primary" | "glass";
  direction?: "up" | "down";
}

export default function ContactDropdown({ 
  email, 
  className, 
  buttonText, 
  variant = "primary",
  direction = "down" 
}: ContactDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const options = [
    { 
      label: "Open Default App", 
      icon: <Mail size={16} />, 
      href: `mailto:${email}`,
      desc: "Use your local mail client"
    },
    { 
      label: "Gmail Web", 
      icon: <Send size={16} />, 
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      desc: "Open in Gmail web"
    },
    { 
      label: "Outlook Web", 
      icon: <ExternalLink size={16} />, 
      href: `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`,
      desc: "Open in Outlook web"
    },
  ];

  const buttonStyles = variant === "primary" 
    ? "bg-accent text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-accent-hover" 
    : "glass border border-card-border text-primary hover:border-accent";

  const dropdownPosition = direction === "up" 
    ? "bottom-full mb-4" 
    : "top-full mt-4";

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} ${buttonStyles} flex items-center justify-center gap-2 px-8 py-3.5 font-bold rounded-full transition-all hover:scale-105 active:scale-95`}
      >
        <Mail size={18} />
        {buttonText || email}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: direction === "up" ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: direction === "up" ? 10 : -10, scale: 0.95 }}
            className={`absolute ${dropdownPosition} left-1/2 -translate-x-1/2 w-64 glass p-2 rounded-2xl border border-card-border shadow-2xl z-[100]`}
          >
            <div className="flex flex-col gap-1">
              {options.map((opt, i) => (
                <a
                  key={i}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10 transition-colors group"
                >
                  <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    {opt.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-bold text-primary">{opt.label}</span>
                    <span className="text-[10px] text-secondary">{opt.desc}</span>
                  </div>
                </a>
              ))}
              
              <div className="h-px bg-card-border my-1 mx-2" />
              
              <button
                onClick={handleCopy}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10 transition-colors group w-full text-left"
              >
                <div className="p-2 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-primary">{copied ? "Copied!" : "Copy Address"}</span>
                  <span className="text-[10px] text-secondary">{email}</span>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
