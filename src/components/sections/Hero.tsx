"use client";

import { Avatar, Button, Chip, Link } from "@heroui/react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-default-50 via-background to-default-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-warning-500/10 blur-3xl" />
      </div>

      

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <Avatar className="h-24 w-24 text-large" color="accent">
              <Avatar.Image src="" alt="Profile portrait" />
              <Avatar.Fallback color="accent">JD</Avatar.Fallback>
            </Avatar>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <Chip variant="soft" color="accent" className="px-4 py-2 text-sm font-medium">
              <span aria-hidden="true" className="mr-2">
                *
              </span>
              1 year Experience
            </Chip>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 text-xl text-default-600 md:text-2xl"
          >
            Hi, I&apos;m
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6 bg-gradient-to-r from-primary-500 via-secondary-500 to-warning-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl lg:text-8xl"
          >
            John Doe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-6 text-xl text-default-600 md:text-2xl lg:text-3xl"
          >
            Full Stack Developer & UI/UX Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mx-auto mb-12 max-w-2xl text-base text-default-500 md:text-lg"
          >
            I craft beautiful, responsive, and performant web applications with modern
            technologies. Let&apos;s bring your ideas to life!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-16 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link href="#projects" className="no-underline">
              <Button size="lg" variant="primary" className="font-semibold">
                View My Work
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              onPress={scrollToContact}
              className="font-semibold"
            >
              Get In Touch
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center gap-6"
          >
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-default-500 transition-colors hover:text-primary-500"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-default-500 transition-colors hover:text-primary-500"
            >
              <FaLinkedinIn className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="text-default-500 transition-colors hover:text-primary-500"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-default-500">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-5 w-5 text-default-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
