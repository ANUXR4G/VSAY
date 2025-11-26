"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Github
} from "lucide-react";

export default function GlowingAdSenseCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  return (
    <div className="flex w-[98%] flex-row flex-wrap mb-20 items-center mt-16 gap-9 justify-center">
      {/* Instagram */}
      <div className="relative flex flex-col flex-wrap items-center">
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl" />
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Instagram className="w-16 h-16 text-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]" />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Instagram
        </motion.div>
      </div>
      {/* Twitter/X */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl" />
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered1 ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Twitter className="w-16 h-16 text-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]" />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Twitter
        </motion.div>
      </div>
      {/* Facebook */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl" />
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered2 ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Facebook className="w-16 h-16 text-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]" />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          Facebook
        </motion.div>
      </div>
      {/* LinkedIn */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl" />
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered3 ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Linkedin className="w-16 h-16 text-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]" />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          LinkedIn
        </motion.div>
      </div>
      {/* GitHub */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className="p-5 rounded-xl z-50 pointer-events-auto border-[2px] border-[#7485B3] bg-transparent relative group cursor-pointer"
          initial={{
            scale: 1,
            boxShadow: "0px 0px 5px rgba(156, 168, 199, 0.3)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 20px rgba(156, 168, 199, 0.8)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-800/20 rounded-xl" />
          <motion.div
            className="relative z-10 flex flex-col items-center gap-2"
            animate={isHovered4 ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Github className="w-16 h-16 text-[#9CA8C7] drop-shadow-[0_0_15px_#9CA8C7]" />
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute text-white -bottom-10 text-nowrap font-light mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={isHovered4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          GitHub
        </motion.div>
      </div>
    </div>
  );
}
