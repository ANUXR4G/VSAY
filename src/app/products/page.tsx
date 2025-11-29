"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductsPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full relative max-w-7xl px-4">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <motion.span
              className="text-white text-6xl md:text-8xl relative inline-flex justify-center space-x-1 font-black"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {"OUR PRODUCTS".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  animate={
                    isHovered
                      ? {
                          textShadow:
                            "0px 0px 20px rgba(142, 146, 156, 1)",
                          color: "#d9dbdf",
                        }
                      : {
                          textShadow:
                            "0px 0px 0px rgba(142, 146, 156, 0)",
                          color: "white",
                        }
                  }
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <p className="text-neutral-400 text-center mt-6 text-lg max-w-2xl mx-auto">
            Explore our suite of robotics, IoT and software solutions designed to help
            teams build, automate, and scale with confidence.
          </p>
        </div>
      </div>

      {/* Placeholder section for actual products */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto text-center text-neutral-400">
          <p className="text-base md:text-lg">
            Product cards and details will go here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
