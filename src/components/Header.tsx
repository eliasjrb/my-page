"use client";

import Image from "next/image";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import BtnTema from "@/components/BtnTema";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-button')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-2"
          : "py-4"
      }`}
    >
      <nav
        className="container max-w-6xl mx-auto px-4 flex justify-between items-center"
        id="top"
      >
        <div className="flex items-center">
          <a href="#home" className="relative group">
            <div
              className={`absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 blur-sm opacity-75 group-hover:opacity-100 transition duration-300 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
            ></div>
            <div className="relative bg-sky-600 dark:bg-sky-800 border border-sky-950 hover:bg-sky-700 dark:hover:bg-sky-700 rounded-full p-1 transition duration-300">
              <Image
                src="/img/eb-logo.svg"
                alt="Logo elias braga"
                className="rounded-lg object-cover"
                width={scrolled ? 40 : 48}
                height={scrolled ? 40 : 48}
                priority={true}
                quality={100}
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavItem href="#sobremim" label="Sobre mim" />
          <NavItem href="#projetos" label="Projetos" />
          <NavItem href="#habilidades" label="Habilidades" />
          <NavItem href="#falecomigo" label="Fale comigo" />
          
          <div className="ml-4">
            <BtnTema />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <div className="mr-2">
            <BtnTema />
          </div>
          <button
            id="menu-button"
            className="p-2 text-sky-950 dark:text-gray-200 hover:bg-sky-100 dark:hover:bg-sky-900/50 rounded-lg transition duration-300"
            onClick={menuToggle}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end mb-6">
                  <button
                    className="p-2 text-sky-950 dark:text-gray-200 hover:bg-sky-100 dark:hover:bg-sky-900/50 rounded-lg transition duration-300"
                    onClick={menuToggle}
                    aria-label="Close menu"
                  >
                    <FaXmark size={24} />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <MobileNavItem href="#sobremim" label="Sobre mim" onClick={menuToggle} />
                  <MobileNavItem href="#projetos" label="Projetos" onClick={menuToggle} />
                  <MobileNavItem href="#habilidades" label="Habilidades" onClick={menuToggle} />
                  <MobileNavItem href="#falecomigo" label="Fale comigo" onClick={menuToggle} />
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">© 2023 Elias Braga</span>
                    <div className="flex space-x-3">
                      <a 
                        href="https://linkedin.com/in/eliasbragaeb" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
                      >
                        <Image src="/img/linkedin.svg" width={20} height={20} alt="LinkedIn" />
                      </a>
                      <a 
                        href="https://github.com/eliasjrb" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-sky-600 dark:text-gray-400 dark:hover:text-sky-400"
                      >
                        <Image src="/img/github.svg" width={20} height={20} alt="GitHub" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Helper component for desktop navigation items
function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="px-4 py-2 text-sky-950 dark:text-gray-200 font-medium text-sm rounded-lg hover:bg-sky-600 hover:text-white transition duration-300"
    >
      {label}
    </a>
  );
}

// Helper component for mobile navigation items
function MobileNavItem({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <a
      href={href}
      className="block py-3 px-4 text-lg font-medium text-sky-950 dark:text-gray-200 hover:bg-sky-50 dark:hover:bg-gray-800 rounded-lg transition duration-200"
      onClick={onClick}
    >
      {label}
    </a>
  );
}
