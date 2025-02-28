import { motion } from "framer-motion";
import React from "react";
import Menubar from "./Menubar";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full h-screen overflow-hidden flex flex-col"
    >
      {/* Background Video */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./Bg-video.mp4"
        autoPlay
        loop
        muted
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-start gap-5 py-4 px-6 sm:px-10 md:px-20 z-20">
        {/* Logo Section */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src="./Hlogo.png" alt="Logo" className="w-8 sm:w-10" />
          <span className="text-white sm:text-xl md:text-xl font-bold tracking-wider">
            HACKINDIA
          </span>
        </motion.div>

        {/*  Menubar */}
        <div>
          <Menubar />
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        className="relative flex flex-col items-center text-white text-center z-10 flex-grow pt-28 sm:pt-28 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        
        <motion.img
          src="./SignityLogo.png"
          alt="Centered Logo"
          className="w-40 sm:w-52 md:w-60"
          whileHover={{ scale: 1.1 }}
        />

        {/* Title */}
        <motion.div className="relative mt-5">
          <div
            className="absolute left-[-6px] top-[0%] sm:top-[0%] w-[50px] sm:w-[121px] h-[34px] sm:h-[67px] bg-[#F86720] -z-10 rounded-lg"
          ></div>

          <span className="relative text-3xl sm:text-6xl md:text-7xl font-bold tracking-wide md:tracking-widest z-10">
            HACKINDIA2025
          </span>
        </motion.div>

        {/*  Description */}
        <div className="text-lg sm:text-2xl md:text-2xl font-medium tracking-wide my-6">
          India's Biggest Web3 & AI Hackathon
        </div>

        {/* Date */}
        <motion.div
          className="text-sm sm:text-lg md:text-xl font-medium tracking-wide bg-gradient-to-r from-[#6A1799] to-[#230833] text-white p-2 sm:p-3 sm:px-10 rounded-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          February 28 - September 28
        </motion.div>

        {/* Info */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-8 text-sm sm:text-xl font-semibold pt-8 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            <span className="text-[#F86720]">$150+ </span>Prize Pool
          </p>
          <span className="hidden sm:inline">|</span>
          <p>
            <span className="text-[#F86720]">150+ </span>University
          </p>
          <span className="hidden sm:inline">|</span>
          <p>
            <span className="text-[#F86720]">25,000+ </span>Students
          </p>
        </motion.div>

        {/* Register Btn */}
        <motion.a
          href="https://www.dcodeblock.com/login"
          className="relative flex items-center justify-center w-40 md:w-48 h-12 md:h-[53px] text-gray-700 hover:text-purple-500 mt-15"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 150 53"
            fill="none"
          >
            <path
              d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z"
              fill="#D9D9D9"
              fillOpacity="0.05"
              stroke="#B026FF"
            ></path>
            <path
              d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
              stroke="#B026FF"
              strokeWidth="0.7"
            ></path>
          </svg>
         <span className="absolute inset-0 flex justify-center items-center font-semibold text-white text-sm md:text-base hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Register Now
         </span>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
