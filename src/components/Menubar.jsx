import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { div } from "framer-motion/client";

const Menubar = () => {
  // State for menubar sticky
  const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true); 
      } else {
        setIsSticky(false); 
      }
    };

   
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  // Menu Items 
const menuItems = [
  { href: "#overview", label: "Overview" },
  { href: "#create-team", label: "Create Team" },
  { href: "#prizes-sponsors", label: "Prize & Sponsor" },
  { href: "#faqs", label: "FAQs" },
  { href: "#judging-rules", label: "Judging & Rules" },
  { href: "#resources", label: "Resources" },
];

  return (
    <div
      className={`bg-[#28083A] lg:px-15 py-4 flex justify-center items-center h-[75px] lg:w-[67vw] rounded-xl transition-all duration-300 ${
        isSticky 
          ? "fixed top-0 left-[270px] transform shadow-lg z-50" 
          : "relative" 
      }`}>
     
      <button
              className="lg:hidden absolute w-full text-white left-10 md:left-10 top-4 "
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/*  menu items */}
      <div className="hidden lg:flex">
      {menuItems.map((item) => (
        <a key={item.href} href={item.href} className="relative block group">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="49"
            viewBox="-2 0 170 53"
            fill="none"
            className="absolute top-0 left-0 transition-all duration-300 group-hover:stroke-[#D026FF]"
          >
            <path
              d="M55.2183 5.79534L55.3456 5.88201H55.4997H149.5V45.0939L139.271 51.7824H8.93774V0.5H47.4392L55.2183 5.79534Z"
              fill="#D9D9D9"
              fillOpacity="0.05"
              stroke="#B026FF"
              className="transition-all duration-300 group-hover:stroke-[#D026FF]"
            ></path>
            <path
              d="M2.35937 47.8035H0.35V52.65H5.54843V0.349998H0.35V35.6037L2.61222 37.9673L2.70937 38.0688V38.2093V47.4535V47.8035H2.35937Z"
              stroke="#B026FF"
              strokeWidth="0.7"
              className="transition-all duration-300 group-hover:stroke-[#D026FF]"
            ></path>
          </svg>

          
          <span className="relative z-10 text-white text-sm flex justify-center items-center h-[53px] w-[150px] transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            {item.label}
          </span>
        </a>
      ))}
      </div>

       {/* Mobile Menu */}
 {isOpen && (
    <div className="absolute top-[65px] left-0 w-[40vw] bg-[#28083A] flex flex-col items-center gap-2 py-4 lg:hidden shadow-md z-50">
      {menuItems.map((item) => (
        <div key={item.href} className="bg-[#28083A]">
          <a
           href={item.href}
          className="text-white text-sm transition-all duration-300 hover:text-purple-400 "
          onClick={() => setIsOpen(false)}
        >
          {item.label}
        </a>
        </div>
        
      ))}
    </div>
  )}
   </div>
  );
};

// Menu Items 
const menuItems = [
  { href: "#overview", label: "Overview" },
  { href: "#create-team", label: "Create Team" },
  { href: "#prizes-sponsors", label: "Prize & Sponsor" },
  { href: "#faqs", label: "FAQs" },
  { href: "#judging-rules", label: "Judging & Rules" },
  { href: "#resources", label: "Resources" },
];

export default Menubar;
