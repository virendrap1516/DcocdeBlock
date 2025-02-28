import { motion } from "framer-motion";
import VideoSection from "./VideoSection";
import React from "react";

const Details = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-[90vh] w-full bg-black flex flex-col px-4 sm:px-8 lg:px-16 overflow-hidden">
     
     <motion.div
  className="absolute inset-0 bg-[url('/bg-2.png')] bg-cover bg-center bg-no-repeat opacity-30"
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.8 }}
  transition={{ duration: 1.5 }}>
     </motion.div>
     <motion.div
        className="absolute top-10 left-0 transform -translate-x-1/2"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        <img src="/effect.png" alt="Effect" className="w-[150px] sm:w-[200px] md:w-[450px]" />
      </motion.div>
      <div className="relative flex flex-col md:flex-row flex-grow w-full items-center justify-between py-10 text-white">
        
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-end space-y-8 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
         
          <div className="text-2xl sm:text-4xl flex flex-col relative z-10 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            <span className="font-bold text-2xl sm:text-5xl">150+</span> Universities Participating
          </div>

        {/* Info Section */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {/* Info */}
            {[
              { number: "72+", label: "Judges" },
              { number: "21", label: "Hackathons" },
              { number: "36+", label: "Great Speakers" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
               <span className="font-bold text-2xl sm:text-5xl">{stat.number}</span>
               <span className="text-2xl">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
       <motion.div
          className="w-full md:w-1/2 flex justify-center md:justify-start"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
           {/* youtube video */}
          <VideoSection
                videoUrl="https://www.youtube.com/embed/gi1kkMbfNAE"
                title="HackIndia 2024 Finals"/>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Details;
