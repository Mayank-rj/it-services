"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoadScrolling({ children }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  //   useEffect(() => {
  //     setVisible(false);
  //     window.scrollTo({ top: 0, behavior: "smooth" });

  //     // Ensure animation runs after scroll reset
  //     setTimeout(() => setVisible(true), 100);
  //   }, [pathname]);
  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
