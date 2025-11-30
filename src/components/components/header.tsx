"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from "framer-motion";
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
import { AlignJustify, Phone, X } from "lucide-react";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered2, setIsHovered2] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappUrl = "https://wa.me/919999973601?text=Hello%20team%20vsay%2C%20I%20would%20like%20to%20discuss%20about%20a%20meeting%20so%20can%20we%20schedule%20a%20call%20meeting%20?";

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
    setLastScrollY(latest);

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

  const serviceLinks = [
    { href: "/robotics", label: "Robotics" },
    { href: "/IoT", label: "IoT" },
    { href: "/ai-ml", label: "AI/ML" },
    { href: "/web-app-development", label: "Web/App Development" },
    { href: "/data-analysis", label: "Data Analysis" },
    { href: "/digital-marketing", label: "Digital Marketing" },
    { href: "/cyber-security", label: "Cyber Security" },
    { href: "/designing", label: "Designing" },
    { href: "/drones-technology", label: "Drones Technology" },
    { href: "/3d-printing", label: "3D Printing & Designing" },
  ];

  return (
    <>
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
        className="fixed inset-x-0 top-0 z-50 w-full flex items-center justify-center pt-4 px-4"
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
          className="w-full max-w-full bg-[#0D0E0F] backdrop-blur-md border rounded-xl border-[#252627]"
        >
          <div className="px-4 sm:px-6 h-16 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-xl sm:text-2xl text-white whitespace-nowrap">
                <span className="font-black">VSAY</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <NavigationMenu className="bp2:hidden flex mx-auto">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:bg-transparent hover:bg-transparent data-[state=open]:text-white hover:text-white">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-6 bg-gradient-to-r from-[#090B0F] backdrop-blur-md to-[#171B24] grid-cols-2">
                      <li className="col-span-1">
                        <span className="text-lg font-medium text-[#5B698B]">Explore All Services</span>
                        <ul className="mt-4 space-y-4">
                          {serviceLinks.slice(0, 5).map((service, idx) => (
                            <li key={idx}>
                              <NavigationMenuLink asChild>
                                <Link href={service.href} className="text-white hover:text-gray-300 block pb-1">
                                  {service.label}
                                  <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="col-span-1">
                        <ul className="mt-12 space-y-4">
                          {serviceLinks.slice(5).map((service, idx) => (
                            <li key={idx}>
                              <NavigationMenuLink asChild>
                                <Link href={service.href} className="text-white hover:text-gray-300 block pb-1">
                                  {service.label}
                                  {idx < 4 && <div className="w-[150px] h-[1px] mt-4 bg-gradient-to-r from-[#2E3A58] to-[#455783]" />}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={cn("text-sm text-white")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/products" legacyBehavior passHref>
                    <NavigationMenuLink className={cn("text-sm text-white")}>
                      Our Products
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bp3:flex hidden text-white z-50"
              aria-label="Toggle menu"
            >
              <AlignJustify className="w-6 h-6" />
            </button>

            {/* Desktop CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bp3:hidden flex items-center gap-4"
            >
              <Link 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="group relative bp1:hidden flex border-[2px] border-[#5B698B] overflow-hidden rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] px-6 lg:px-8 py-2 text-sm lg:text-base text-white backdrop-blur-sm transition-colors hover:bg-[rgba(255,255,255,0.2)] whitespace-nowrap"
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
              </Link>
              <Link 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
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
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile Navigation Drawer - Full Width */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 z-40 bp3:block hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Full Width Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full bg-[#0D0E0F] z-50 bp3:block hidden overflow-y-auto"
            >
              {/* Header with Close Button */}
              <div className="sticky top-0 bg-[#0D0E0F] border-b border-[#252627] px-6 py-5 flex items-center justify-between z-10">
                <span className="text-2xl font-black text-white">VSAY</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white p-2 hover:bg-[#252627] rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Menu Content */}
              <div className="p-6">
                {/* Services Section */}
                <div className="mb-8">
                  <button
                    onClick={() => setServicesExpanded(!servicesExpanded)}
                    className="w-full flex items-center justify-between text-white text-xl font-semibold mb-4 py-2"
                  >
                    Services
                    <motion.span
                      animate={{ rotate: servicesExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-2xl"
                    >
                      ▼
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {servicesExpanded && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4 pl-4 overflow-hidden"
                      >
                        {serviceLinks.map((service, idx) => (
                          <li key={idx}>
                            <Link
                              href={service.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-gray-300 hover:text-white block py-2 text-lg"
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Navigation Links */}
                <div className="space-y-6 mb-10">
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-xl font-semibold block py-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-xl font-semibold block py-2"
                  >
                    Our Products
                  </Link>
                </div>

                {/* Mobile CTA Button */}
                <Link 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <button className="w-full border-[2px] border-[#5B698B] rounded-full bg-gradient-to-b from-[rgb(91,105,139)] to-[#414040] px-8 py-4 text-white text-lg font-medium">
                    Schedule a Call
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
