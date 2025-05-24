import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/" },
    { name: "Tentang Proyek", href: "/tentang" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo & Judul */}
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg">
          <GraduationCap size={24} />
          <span>Progress Proyek</span>
        </div>

        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu (desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-indigo-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Menu (mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-inner px-4 pb-4"
          >
            <div className="flex flex-col gap-2 text-sm text-gray-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 border-b hover:text-indigo-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
