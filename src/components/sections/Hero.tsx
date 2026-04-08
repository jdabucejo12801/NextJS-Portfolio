"use client";

import { motion } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { FiArrowRight, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>
     
      <div className="flex flex-wrap md:flex-nowrap items-center w-full max-w-7xl mx-auto px-4 md:px-9 lg:px-8 z-10 relative">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left" 
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 text-cyan-400 text-sm">
                PAPAKINGAN
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 mb-4"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                JOSE DANIEL ABUCEJO
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-400 text-base sm:text-lg md:text-xl mb-8"
            >
              OO NAMAN AKO NA TO
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4 flex-wrap"  
            >
              <Button
                as={Link}
                href="#projects"
                size="lg"
                variant="solid"
                color="primary"
                endContent={<FiArrowRight />}
              >
                View Projects
              </Button>
              <Button
                as={Link}
                href="/resume.pdf"
                size="lg"
                variant="bordered"
                endContent={<FiDownload />}
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Image */}
        <div className="w-full md:w-1/2 py-8 md:py-12 flex justify-center md:justify-end items-center">
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
            <img 
              src="/your-image-path.jpg" 
              alt="Jose Daniel Abucejo"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            {/* Optional: Add decorative elements around image */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}