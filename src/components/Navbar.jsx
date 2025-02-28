import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 sm:px-10 py-4 bg-black shadow-md">
        
        {/* Logo */}
        <a href="/">
          <motion.img
            src="/Logo.png"
            alt="logo"
            className="h-10 sm:h-[40px] w-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </a>

        {/* Sign In Btn */}
        <motion.a
          href="https://www.dcodeblock.com/login"
          className="relative flex items-center justify-center w-40 md:w-48 h-12 md:h-[53px] text-gray-700 hover:text-purple-500"
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
            Sign In
          </span>
        </motion.a>
      </div>

      
      <motion.div
        className="bg-slate-800 css-0"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          // height="15"
          viewBox="0 0 1440 6"
          fill="none"
        >
          <path
            d="M0 6H75.5L88.5 4.5H198L210 6H331.5L337.5 3.5H667.5L673 6H1043.5L1050.5 3H1198H1440V0H0V6Z"
            fill="#B026FF"
            fillOpacity="0.5"
          ></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
