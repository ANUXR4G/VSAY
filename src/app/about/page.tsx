"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import { Mail, MapPin } from "lucide-react";
import ProfileCardDemo from "@/components/ui/ProfileCardDemo";


const AboutPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const data = [
  {
    title: "Our Mission",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold mb-4">
          Delivering Excellence in products or services for Lasting Impact.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          To deliver comprehensive technical services and solutions across
          robotics, IoT, cybersecurity, software development, and beyond,
          ensuring affordable and high-quality support for all. We aim to
          empower every vendor with customized software and advanced technical
          resources to foster growth and innovation across India.
        </p>
      </div>
    ),
  },
  {
    title: "Our Vision",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold mb-4">
          Leading Innovation in the world for a Brighter Tomorrow.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          To build a technically empowered nation by providing top-tier
          training, lab management, and software solutions. Our goal is to
          enable every organization, small or large, with the tools and
          expertise needed to thrive in a digital-first world. We envision a
          future where every enterprise in India leverages cutting-edge
          technology with seamless, integrated support from VSAY.
        </p>
      </div>
    ),
  },
  {
    title: "About The Company",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-semibold mb-4">
          Leading Innovation in the world for a Brighter Tomorrow.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          VSAY is a technology-driven company committed to transforming the way
          organizations in India access and utilize advanced digital solutions.
          We specialize in providing high-quality, affordable services across
          fields like robotics, IoT, cybersecurity, and software development,
          tailored to support businesses of all sizes.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-4">
          We believe in building a technically empowered nation, enabling
          enterprises to leverage innovative tools that foster growth,
          efficiency, and competitiveness. Through comprehensive training, lab
          management, and customized solutions, VSAY equips businesses with the
          knowledge and resources needed to succeed in an increasingly digital
          world.
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
          At VSAY, we're dedicated to creating impactful, long-term
          partnerships by delivering excellence in every project, fostering a
          future where every organization can thrive with the power of
          cutting-edge technology.
        </p>
      </div>
    ),
  },
];


  return (
    <div className="w-full">
      {/* Hero Section with Glowing Text */}
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full relative max-w-7xl">
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
              {"ABOUT US".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  animate={
                    isHovered
                      ? {
                          textShadow: "0px 0px 20px rgba(142, 146, 156, 1)",
                          color: "#d9dbdf",
                        }
                      : {
                          textShadow: "0px 0px 0px rgba(142, 146, 156, 0)",
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
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>


        {/* Footer */}
      <div className="border-t-[#333B4F] w-[90%] border-[1px] mt-10 mx-auto"></div>
      <footer className="w-full flex flex-row justify-center items-center py-10 bg-gradient-to-b from-transparent to-black/50">
        <div className="flex flex-row w-[90%] justify-evenly bp2:flex-col-reverse bp2:items-center bp2:gap-8">
          {/* Brand and Contact Info */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[#C5CDE3] bp3:text-5xl text-7xl font-light">
              <span className="font-bold">VSAY</span>
            </h2>
            <div className="flex flex-row gap-3 items-end">
              <Mail className="w-4 h-4 text-[#8096D2]" />
              <a
                href="mailto:contact@adtask.ai"
                className="font-light text-[#C5CDE3] hover:text-[#8096D2] transition-colors underline text-sm"
              >
                contact@adtask.ai
              </a>
            </div>
            <div className="flex flex-row gap-3 items-end">
              <MapPin className="w-4 h-4 text-[#8096D2]" />
              <p className="font-light text-[#C5CDE3] text-sm">
                San Francisco bay area
              </p>
            </div>
          </div>

          {/* Utilities and Socials Container */}
          <div className="flex flex-row gap-16 bp3:flex-col bp3:gap-8">
            {/* Utilities Section */}
            <div>
              <h3 className="text-[#C5CDE3] text-2xl font-bold mb-4">
                Utilities
              </h3>
              <nav className="flex flex-col text-gray-400 gap-1 items-center">
                <a href="/" className="hover:text-[#8096D2] transition-colors">Home</a>
                <a href="/product" className="hover:text-[#8096D2] transition-colors">Product</a>
                <a href="/tools" className="hover:text-[#8096D2] transition-colors">Tools</a>
                <a href="/contact" className="hover:text-[#8096D2] transition-colors">Contact Us</a>
              </nav>
            </div>

            {/* Socials Section */}
            <div>
              <h3 className="text-[#C5CDE3] text-2xl font-bold mb-4">Socials</h3>
              <nav className="flex flex-col text-gray-400 gap-1 items-center">
                <a href="#" className="hover:text-[#8096D2] transition-colors">X</a>
                <a href="#" className="hover:text-[#8096D2] transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-[#8096D2] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#8096D2] transition-colors">Facebook</a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
