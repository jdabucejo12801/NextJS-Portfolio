// components/layout/NavBar.tsx (Simpler version)
"use client";

import { Button, Link } from "@heroui/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-default-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="font-bold text-xl bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            PORTFOLIO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-default-600 hover:text-primary-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button as={Link} href="#contact" color="primary" variant="flat" size="sm">
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-default-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-default-200">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-default-600 hover:text-primary-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                as={Link}
                href="#contact"
                color="primary"
                variant="flat"
                fullWidth
                onPress={() => setIsOpen(false)}
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}