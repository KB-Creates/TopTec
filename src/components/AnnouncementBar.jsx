import React from "react";
import { motion } from "framer-motion";

const AnnouncementBar = ({ isScrolled }) => {
  return (
    <motion.div 
      initial={{ height: 'auto', opacity: 1 }}
      animate={{ 
        height: isScrolled ? 0 : 'auto', 
        opacity: isScrolled ? 0 : 1,
        pointerEvents: isScrolled ? 'none' : 'auto'
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="w-full bg-[#121212] overflow-hidden relative z-50"
    >
      <div className="w-full flex justify-center items-center py-1 px-4 border-b border-white/5 text-[11px] sm:text-xs leading-4">
        {/* Mobile Marquee (hidden on sm up) */}
        <div className="flex sm:hidden overflow-hidden relative w-full">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
            className="flex items-center gap-8 whitespace-nowrap"
          >
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-3 leading-4">
                <span className="text-[11px] font-medium text-white/90 leading-4">
                  Serving pharmaceutical facilities in 14+ countries including UAE, Saudi Arabia, Qatar, Kenya, and Nigeria.
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Static (hidden on mobile) */}
        <div className="hidden sm:flex items-center justify-center gap-4 text-center leading-4">
          <span className="text-xs font-medium text-white/90 leading-4">
            Serving pharmaceutical facilities in 14+ countries including UAE, Saudi Arabia, Qatar, Kenya, and Nigeria.
            {/* <button className="text-[#4A93C4] hover:text-white transition-colors font-bold ml-2 underline underline-offset-4 decoration-[#4A93C4]/30 hover:decoration-[#4A93C4]">
              View projects
            </button> */}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
