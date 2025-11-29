"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Fix hydration error by only rendering images on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Array of images
  const carouselImages = [
    {
      id: 1,
      src: "/images/image1.jpg",
      alt: "Robotics Solution 1",
      title: "Advanced Robotics"
    },
    {
      id: 2,
      src: "/images/image2.jpg",
      alt: "Robotics Solution 2",
      title: "IoT Integration"
    },
    {
      id: 3,
      src: "/images/image3.jpg",
      alt: "Robotics Solution 3",
      title: "AI & Machine Learning"
    },
    {
      id: 4,
      src: "/images/image4.jpg",
      alt: "Robotics Solution 4",
      title: "Automation Systems"
    },
    {
      id: 5,
      src: "/images/image5.jpg",
      alt: "Robotics Solution 5",
      title: "Smart Solutions"
    }
  ];

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-4 md:px-8 pt-20 pb-10 min-h-screen">
        <div className="w-full relative max-w-7xl">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-10 md:mb-16 mt-14"
          >
            <motion.span
              className="text-[#d0d2d8] text-6xl md:text-8xl  relative flex justify-center space-x-1 font-black"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {"WEB / APP-DEV.".split("").map((char, index) => (
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
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {carouselImages.map((image) => (
                <CarouselItem key={image.id} className="flex justify-center items-center">
                  <div className="p-2 md:p-4 w-full">
                    <Card className="border-gray-700 h-[400px] md:h-[500px] lg:h-[400px] w-full rounded-2xl overflow-hidden bg-gray-900">
                      <CardContent className="flex items-center justify-center p-0 h-full relative" suppressHydrationWarning>
                        {isMounted ? (
                          <>
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority={image.id === 1}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-10">
                              <h3 className="text-white text-2xl md:text-3xl font-bold">
                                {image.title}
                              </h3>
                            </div>
                          </>
                        ) : (
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <span className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">
                              {image.id}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </div>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
   Our web development services focus on creating dynamic, responsive, and user-friendly websites. With expertise across technologies, we deliver tailored solutions to meet your business needs and enhance user experiences.

✅ Custom website design and development.
✅ Responsive and mobile-friendly layouts.
✅ Integration of the latest web technologies.
✅ SEO-optimized for better visibility.
✅ Ongoing maintenance and support.
        </ScrollReveal>
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
                 <a href="/about" className="hover:text-[#8096D2] transition-colors">About Us</a>

<a href="/products" className="hover:text-[#8096D2] transition-colors">Products</a>
               
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
    </>
  );
}
