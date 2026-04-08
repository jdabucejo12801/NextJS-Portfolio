"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Link } from "@heroui/react";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

interface MobileNavProps {
  navItems: Array<{ name: string; href: string }>;
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  const getMenuStyles = () => {
    return resolvedTheme === "dark"
      ? "bg-gray-900/95 backdrop-blur-xl"
      : "bg-white/95 backdrop-blur-xl";
  };

  const getLinkStyles = () => {
    return resolvedTheme === "dark"
      ? "text-gray-300 hover:text-white"
      : "text-gray-600 hover:text-gray-900";
  };

  return (
    <>
      <Button
        isIconOnly
        variant="light"
        onPress={() => setIsOpen(true)}
      >
        <FiMenu className="text-2xl" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className={`fixed right-0 top-0 h-full w-64 ${getMenuStyles()} z-50 p-6 shadow-xl`}
            >
              <div className="flex justify-end">
                <Button
                  isIconOnly
                  variant="light"
                  onPress={() => setIsOpen(false)}
                >
                  <FiX className="text-2xl" />
                </Button>
              </div>

              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${getLinkStyles()} text-lg no-underline`}
                    onPress={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <Button
                    isIconOnly
                    variant="light"
                    as={Link}
                    href="https://github.com"
                    target="_blank"
                  >
                    <FiGithub className="text-xl" />
                  </Button>
                  <Button
                    isIconOnly
                    variant="light"
                    as={Link}
                    href="https://linkedin.com"
                    target="_blank"
                  >
                    <FiLinkedin className="text-xl" />
                  </Button>
                  <Button
                    isIconOnly
                    variant="light"
                    as={Link}
                    href="https://twitter.com"
                    target="_blank"
                  >
                    <FiTwitter className="text-xl" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
