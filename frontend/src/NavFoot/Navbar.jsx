import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Education", path: "/education" },
    { name: "Research Area", path: "/research-area" },
    { name: "Publication", path: "/publication" },
    { name: "Awards and Honors", path: "/awards-and-honors" },
    { name: "Work Experience", path: "/work-experience" },
    // { name: "Curriculum Vitae", path: "/cv" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-40 bg-white shadow-md"
      >
        <div className="flex items-center justify-between h-16 px-6">
          {/* LEFT: Logo */}
          <div className="flex items-center shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img
                src="/Dr_Harish_Chandra.jpg"
                alt="Dr. Harish Chandra"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-gray-800 whitespace-nowrap">
              Dr. Harish Chandra
            </span>
          </div>

          {/* CENTER: Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-600 hover:text-white rounded transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-green-600 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-50 bg-white bg-opacity-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 w-[70%] bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
            <div className="p-6">
              <div className="flex items-center mb-8 pb-4 border-b">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img
                    src="/Dr_Harish_Chandra.jpg"
                    alt="Dr. Harish Chandra"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-lg font-semibold">Dr. Satvik Vats</span>
              </div>

              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-green-600 hover:text-white rounded"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.aside>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
