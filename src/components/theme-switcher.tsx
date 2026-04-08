"use client";

import { useTheme } from "next-themes";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import useMounted from "@/hooks/useMounted";

export default function ThemeSwitcher() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        isIconOnly
        variant="light"
        onPress={() => setTheme(isDark ? "light" : "dark")}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        className="relative overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <FiMoon className="text-xl" />
          ) : (
            <FiSun className="text-xl text-yellow-500" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
}
