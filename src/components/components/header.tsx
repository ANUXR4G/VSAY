"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AlignJustify, Phone } from "lucide-react";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered2, setIsHovered2] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show/hide based on scroll direction
    if (latest > lastScrollY && latest > 150) {
      // Scrolling down
      setHidden(true);
    } else {
      // Scrolling up
      setHidden(false);
    }
    setLastScrollY(latest);

    // Width animation trigger
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const x = useTransform(scrollY, [0, 0], [0, 0]);

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      animate={{
        y: hidden ? -100 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="fixed inset-x-0 top-0 z-50 w-full flex items-center justify-center pt-4"
    >
      <motion.div
        style={{ x }}
        animate={{
          width: visible ? "60%" : "80%",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className="w-full bg-[#0D0E0F] backdrop-blur-md border rounded-xl border-[#252627]"
      >
        <div className="px-6 h-16 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl text-white whitespace-nowrap">
              <span className="font-black">VSAY</span>
            </Link>
          </motion.div>

          <NavigationMenu className="bp2:hidden flex mx-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:bg-transparent hover:bg-transparent data-[state=open]:text-white hover:text-white">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-6 bg-gradient-to-r from-[#090B0F] backdrop-blur-md to-[#171B24] grid-cols-2">
                    <li className="col-span-1">
                      <span className="text-lg font-medium text-[#5B698B]">Products</span>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/optimize" className="text-white hover:text-gray-300 block pb-1">
                              Optimize
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/content-analytics" className="text-white hover:text-gray-300 block pb-1">
                              Content Analytics
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/keyword-research" className="text-white hover:text-gray-300 block pb-1">
                              Keyword Research
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/keyword-tracking" className="text-white hover:text-gray-300 block pb-1">
                              Keyword Tracking
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/keyword-clustering" className="text-white hover:text-gray-300">
                              Keyword Clustering
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </li>
                    <li className="col-span-1">
                      <ul className="mt-12 space-y-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/competitor-research" className="text-white hover:text-gray-300 block pb-1">
                              Competitor Research
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/social-listening" className="text-white hover:text-gray-300 block pb-1">
                              Social Listening
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/autodetect" className="text-white hover:text-gray-300 block pb-1">
                              AutoDetect
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/site-audit" className="text-white hover:text-gray-300">
                              Site Audit
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:bg-transparent hover:bg-transparent data-[state=open]:text-white hover:text-white">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-6 bg-gradient-to-r from-[#090B0F] backdrop-blur-md to-[#171B24] grid-cols-2">
                    <li className="col-span-1">
                      <span className="text-lg font-medium text-[#5B698B]">Tools</span>
                      <ul className="mt-4 space-y-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/optimize" className="text-white hover:text-gray-300 block pb-1">
                              SEO Title Generator
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/content-analytics" className="text-white hover:text-gray-300 block pb-1">
                              Seo Keyword Generator
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/keyword-research" className="text-white hover:text-gray-300 block pb-1">
                              Meta Description Generator
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/keyword-tracking" className="text-white hover:text-gray-300 block pb-1">
                              Blog Idea generator
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/keyword-clustering" className="text-white hover:text-gray-300">
                              Website ranking checker
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </li>
                    <li className="col-span-1">
                      <ul className="mt-12 space-y-4">
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/competitor-research" className="text-white hover:text-gray-300 block pb-1">
                              Keyword rank checker
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a href="/social-listening" className="text-white hover:text-gray-300 block pb-1">
                              Backlink Chekcer
                              <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={cn("text-sm text-white")}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <AlignJustify className="w-6 h-6 text-white bp3:flex hidden cursor-pointer" />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bp3:hidden flex items-center gap-4"
          >
            <motion.button
              className="group relative bp1:hidden flex border-[2px] border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] px-8 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)] whitespace-nowrap"
              onMouseMove={handleMouseMove}
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => setIsHovered2(false)}
            >
              <span className="relative z-10">Schedule a Call</span>
              {isHovered2 && (
                <motion.div
                  className="absolute inset-0 z-0"
                  animate={{
                    background: [
                      `radial-gradient(40px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 50%)`,
                    ],
                  }}
                  transition={{ duration: 0.15 }}
                />
              )}
            </motion.button>
            <motion.button
              className="group relative bp1:flex hidden border-[2px] border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] px-8 py-2 text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)]"
              onMouseMove={handleMouseMove}
              onHoverStart={() => setIsHovered2(true)}
              onHoverEnd={() => setIsHovered2(false)}
            >
              <Phone className="relative z-10 w-6 h-6" />
              {isHovered2 && (
                <motion.div
                  className="absolute inset-0 z-0"
                  animate={{
                    background: [
                      `radial-gradient(40px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2), transparent 50%)`,
                    ],
                  }}
                  transition={{ duration: 0.15 }}
                />
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
