import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative h-[30vh] w-full bg-black flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-white"
    >
      
      <motion.div
        className="absolute inset-0 bg-[url('/bg-2.png')] bg-cover bg-center bg-no-repeat opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      ></motion.div>

      
      <motion.div
        className="relative w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-3 md:space-y-0 py-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
       
        <motion.div
          className="text-sm md:text-xl font-medium"
          whileHover={{ scale: 1.05 }}
        >
         Copyright © 2024 DcodeBlock
        </motion.div>

        
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="cursor-pointer hover:text-gray-400 transition"
            whileHover={{ scale: 1.1 }}
          >
            Help Center
          </motion.p>
          <p className="hidden sm:block">|</p>
          <motion.p
            className="cursor-pointer hover:text-gray-400 transition"
            whileHover={{ scale: 1.1 }}
          >
            Terms & Conditions
          </motion.p>
          <p className="hidden sm:block">|</p>
          <motion.p
            className="cursor-pointer hover:text-gray-400 transition"
            whileHover={{ scale: 1.1 }}
          >
            Privacy Policy
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
