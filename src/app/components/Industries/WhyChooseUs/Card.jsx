import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative w-1/4 bg-gray-900 text-white rounded-xl overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-4 font-semibold text-center">{title}</div>
      <motion.div
        className="bg-gray-800 p-4 text-sm overflow-hidden"
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{ maxHeight: isHovered ? 100 : 0, opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

export default Card;
