import { motion } from "framer-motion";
import React from "react";

const DetailsLogo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="relative w-full sm:h-[90px] bg-white flex items-center justify-between  sm:px-10 overflow-hidden"
    >
      {["dl1.png", "dl2.png", "dl3.png", "dl4.png", "dl5.png", "dl6.png"].map((src, index) => (
        <motion.img 
          key={index} 
          src={`./${src}`} 
          alt={`Logo ${index + 1}`} 
          className="h-[28px] sm:h-[70px] flex flex-wrap" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        />
      ))}
    </motion.div>
  );
};

export default DetailsLogo;
