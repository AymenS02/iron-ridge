"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

let hasMounted = false;

export default function Template({ children }: { children: ReactNode }) {
  // Only animates client-side navigations, so the first paint is never held back.
  const [animate] = useState(() => hasMounted);
  useEffect(() => {
    hasMounted = true;
  }, []);

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
