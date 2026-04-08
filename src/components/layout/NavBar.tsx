"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Button,
  Link
} from "@heroui/react";
import { useTheme } from "next-themes";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import MobileNav from "../MobileNav";
import ThemeSwitcher from "../theme-switcher";
import useMounted from "@/hooks/useMounted";

export default function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const getNavbarStyles = () => {
    const isDark = resolvedTheme === "dark";

    if (!mounted) return "bg-transparent";
    
    if (scrolled) {
      return isDark
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
        : "bg-white/80 backdrop-blur-xl border-b border-gray-200";
    }
    return "bg-transparent";
  };

  const getLinkStyles = () => {
    return resolvedTheme === "dark"
      ? "text-gray-300 hover:text-white"
      : "text-gray-600 hover:text-gray-900";
  };

  const getButtonStyles = () => {
    return resolvedTheme === "dark"
      ? "text-gray-300 hover:text-white"
      : "text-gray-600 hover:text-gray-900";
  };

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${getNavbarStyles()}`}
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio.
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex gap-8 justify-self-center">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                className={`${getLinkStyles()} transition-colors no-underline hover:underline decoration-cyan-400`}
              >
                {item.name}
              </Link>
            </div>
          ))}
          </div>

          <div className="hidden md:flex gap-4 justify-self-end">
            <ThemeSwitcher />
            <Button
              isIconOnly
              variant="light"
              as={Link}
              href="https://github.com"
              target="_blank"
              className={getButtonStyles()}
            >
              <FiGithub className="text-xl" />
            </Button>
            <Button
              isIconOnly
              variant="light"
              as={Link}
              href="https://linkedin.com"
              target="_blank"
              className={getButtonStyles()}
            >
              <FiLinkedin className="text-xl" />
            </Button>
            <Button
              isIconOnly
              variant="light"
              as={Link}
              href="https://twitter.com"
              target="_blank"
              className={getButtonStyles()}
            >
              <FiTwitter className="text-xl" />
            </Button>
          </div>

          <div className="md:hidden flex gap-2 justify-self-end">
            <ThemeSwitcher />
            <MobileNav navItems={navItems} />
          </div>
        </div>
      </header>
    </motion.div>
  );
}
