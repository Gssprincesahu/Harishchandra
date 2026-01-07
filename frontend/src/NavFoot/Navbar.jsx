import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg" 
            : "bg-white shadow-md"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-2 sm:mr-3 ring-2 ring-[#1F7A8C] ring-offset-2"
            >
              <img
                src="/Dr_Harish_Chandra.jpg"
                alt="Dr. Harish Chandra"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <span className="text-base sm:text-xl font-semibold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent group-hover:from-[#1F7A8C] group-hover:to-[#022B3A] transition-all duration-300">
              Dr. Harish Chandra
            </span>
          </Link>

          {/* CENTER: Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      if (item.path.includes('#')) {
                        e.preventDefault();
                        const element = document.querySelector(item.path.split('#')[1] ? `#${item.path.split('#')[1]}` : 'body');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }
                    }}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                      isActive
                        ? "text-white bg-gradient-to-r from-[#1F7A8C] via-[#022B3A] to-[#1F7A8C] shadow-lg shadow-[#1F7A8C]/50"
                        : "text-[#022B3A] hover:bg-gradient-to-r hover:from-[#1F7A8C] hover:via-[#022B3A] hover:to-[#1F7A8C] hover:text-white hover:shadow-md"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#1F7A8C]/0 via-[#BFDBF7]/0 to-[#1F7A8C]/0 group-hover:from-[#1F7A8C]/10 group-hover:via-[#BFDBF7]/10 group-hover:to-[#1F7A8C]/10 transition-all duration-300"></span>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Mobile Button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#022B3A] hover:bg-gradient-to-r hover:from-[#1F7A8C] hover:to-[#022B3A] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
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
            className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[75%] max-w-xs bg-gradient-to-br from-white to-[#E1E5F2] shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
            <div className="p-4 sm:p-6">
              <div className="flex items-center mb-6 pb-4 border-b-2 border-[#BFDBF7]">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-[#1F7A8C]"
                >
                  <img
                    src="/Dr_Harish_Chandra.jpg"
                    alt="Dr. Harish Chandra"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent">Dr. Harish Chandra</span>
              </div>

              <nav className="space-y-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <Link
                        to={item.path}
                        onClick={(e) => {
                          setIsOpen(false);
                          if (item.path.includes('#')) {
                            e.preventDefault();
                            setTimeout(() => {
                              const element = document.querySelector(item.path.split('#')[1] ? `#${item.path.split('#')[1]}` : 'body');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }, 300);
                          }
                        }}
                        className={`block px-4 py-3 text-sm sm:text-base rounded-lg transition-all duration-300 relative overflow-hidden group ${
                          isActive
                            ? "bg-gradient-to-r from-[#1F7A8C] via-[#022B3A] to-[#1F7A8C] text-white font-semibold shadow-lg shadow-[#1F7A8C]/30"
                            : "text-[#022B3A] hover:bg-gradient-to-r hover:from-[#1F7A8C] hover:via-[#022B3A] hover:to-[#1F7A8C] hover:text-white hover:shadow-md"
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {!isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-[#1F7A8C]/0 via-[#BFDBF7]/0 to-[#1F7A8C]/0 group-hover:from-[#1F7A8C]/10 group-hover:via-[#BFDBF7]/10 group-hover:to-[#1F7A8C]/10 transition-all duration-300"></span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.aside>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
