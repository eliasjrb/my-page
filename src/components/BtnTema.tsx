"use client";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BtnTema() {
  const [temas, setTemas] = useState("dark");

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    const tema = document.getElementById("tema");

    if (savedTheme === "dark") {
      tema?.classList.add("dark");
      setTemas("dark");
    } else {
      tema?.classList.remove("dark");
      setTemas("light");
    }
  }, []);

  const mudarTema = () => {
    const tema = document.getElementById("tema");
    const newTheme = tema?.classList.contains("dark") ? "light" : "dark";

    if (tema?.classList.contains("dark")) {
      tema?.classList.remove("dark");
      setTemas("light");
    } else {
      tema?.classList.add("dark");
      setTemas("dark");
    }

    // Save theme preference
    localStorage.setItem("theme", newTheme);
  };

  return (
    <motion.div
      onClick={mudarTema}
      className={`
        relative flex items-center cursor-pointer
        ${
          temas === "dark"
            ? "bg-gradient-to-r from-gray-700 to-gray-900"
            : "bg-gradient-to-r from-sky-400 to-blue-500"
        }
        w-14 h-7 rounded-full shadow-md hover:shadow-lg
        transition-all duration-300 ease-in-out
      `}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Track background with subtle glow */}
      <div
        className={`
        absolute inset-0 rounded-full
        ${
          temas === "dark"
            ? "bg-gradient-to-r from-gray-700/50 to-gray-900/50"
            : "bg-gradient-to-r from-sky-400/50 to-blue-500/50"
        }
        opacity-70 blur-[1px]
      `}
      ></div>

      {/* Toggle handle with animation */}
      <motion.div
        className={`
          z-10 flex items-center justify-center
          ${
            temas === "dark"
              ? "bg-gray-800 text-sky-400 ml-auto mr-3"
              : "bg-white text-amber-400 ml-0.5"
          }
          w-6 h-6 rounded-full shadow-md
          transition-colors duration-300
        `}
        animate={{
          x: temas === "dark" ? 7 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {temas === "dark" ? (
          <FaMoon size={14} className="text-sky-400" />
        ) : (
          <FaSun size={14} className="text-amber-400" />
        )}
      </motion.div>
    </motion.div>
  );
}
