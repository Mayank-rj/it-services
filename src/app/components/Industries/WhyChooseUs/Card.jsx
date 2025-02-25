import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = window.innerWidth <= 640;

  return (
    <motion.div
      className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-900 text-white rounded-xl overflow-hidden cursor-pointer m-2"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-4 font-semibold text-center">{title}</div>
      <motion.div
        className="bg-gray-800 p-4 text-sm overflow-hidden"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{
          maxHeight: isHovered || isMobile ? 100 : 0,
          opacity: isHovered || isMobile ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default Card;
