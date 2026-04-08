"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, Button, Link } from "@heroui/react";
import { Image } from "@heroui/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI Image Generator",
    description: "Revolutionary AI-powered image generation platform using stable diffusion and Next.js.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Tailwind"],
    image: "https://placehold.co/600x400/1e1e2e/cyan?text=Project+1",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with real-time inventory and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://placehold.co/600x400/1e1e2e/blue?text=Project+2",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Portfolio 2026",
    description: "Modern portfolio website with glassmorphism effects and smooth animations.",
    tech: ["Next.js", "Framer Motion", "HeroUI", "GSAP"],
    image: "https://placehold.co/600x400/1e1e2e/purple?text=Project+3",
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and creativity
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  removeWrapper
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      isIconOnly
                      variant="light"
                      as={Link}
                      href={project.github}
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
                      <FiGithub className="text-xl" />
                    </Button>
                    <Button
                      isIconOnly
                      variant="light"
                      as={Link}
                      href={project.live}
                      target="_blank"
                      className="text-gray-400 hover:text-white"
                    >
                      <FiExternalLink className="text-xl" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}   