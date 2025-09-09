import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home"); // ✅ Home active by default

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.45, rootMargin: "-50px 0px -40% 0px" } // ✅ ensures #home triggers correctly
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="w-full flex items-center justify-between px-6 py-4 
        backdrop-blur-md bg-black/50 text-white"
      >
        {/* Logo */}
        <div
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-300 cursor-pointer"
          onClick={() => handleClick("#home")}
        >
          Creative Studio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`relative flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer ${
                active === item.href ? "text-pink-400" : "text-gray-100/90"
              }`}
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-400 transition-all"
                style={{ width: active === item.href ? "100%" : "0%" }}
              />
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md bg-white/10 hover:bg-white/20 cursor-pointer"
          >
            {open ? (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-gray-900/95 text-white"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md transition cursor-pointer ${
                    active === item.href ? "text-pink-400" : "text-gray-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
