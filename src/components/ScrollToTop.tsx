"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Force scroll to top on mount
    window.scrollTo(0, 0);
    
    // Safety check for browsers that jump after a delay
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
