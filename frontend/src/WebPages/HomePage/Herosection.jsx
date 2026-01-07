import profPhoto from '../../assets/prof_photo.jpg';
import linkedinLogo from '../../assets/linkedin.PNG';
import googleScholarLogo from '../../assets/google-scholar.png';
import researchGateLogo from '../../assets/research_gate.png';
import vidwanLogo from '../../assets/vidwan.webp';
import orcidLogo from '../../assets/orcid.png';
import scopusLogo from '../../assets/scopusid.png';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Herosection() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    { href: "https://www.linkedin.com/in/harish-chandra-1335086a/?originalSubdomain=in", logo: linkedinLogo, label: "LinkedIn" },
    { href: "https://scholar.google.com/citations?user=VeAyaAgAAAAJ&hl=en", logo: googleScholarLogo, label: "Google Scholar" },
    { href: "https://www.researchgate.net/profile/Harish-Chandra-4", logo: researchGateLogo, label: "Research Gate" },
    { href: "https://vidwan.inflibnet.ac.in/profile/142799", logo: vidwanLogo, label: "Vidwan" },
    { href: "https://orcid.org/0000-0001-5232-6043", logo: orcidLogo, label: "ORCID" },
    { href: "https://www.scopus.com/authid/detail.uri?authorId=57224648437", logo: scopusLogo, label: "Scopus" },
  ];

  // Mouse tracking effect with debouncing for performance
  useEffect(() => {
    let rafId;
    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // 3D card tilt handler
  const handleCardMouseMove = (e) => {
    if (!isCardHovered) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setCardRotation({ x: rotateX, y: rotateY });
  };

  return (
    <section className="min-h-screen sm:min-h-screen lg:h-screen bg-gradient-to-br from-[#1F7A8C] via-[#022B3A] to-[#1F7A8C] relative overflow-hidden selection:bg-white/30 selection:text-white py-safe">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/90 via-[#022B3A]/80 to-[#1F7A8C]/90"></div>
          <motion.div 
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(191,219,247,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(31,122,140,0.2) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(2,43,58,0.15) 0%, transparent 50%)'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        {/* Multi-layered animated gradients for depth */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-[#1F7A8C]/20 via-transparent to-[#BFDBF7]/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.03, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Professional floating orbs - optimized for mobile */}
        {[...Array(isMobile ? 8 : 15)].map((_, i) => {
          const size = isMobile ? Math.random() * 80 + 30 : Math.random() * 120 + 40;
          const xPos = (i * 7) % 100;
          const yPos = ((i * 13) % 100);
          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                background: i % 3 === 0 
                  ? 'radial-gradient(circle, rgba(191,219,247,0.15) 0%, rgba(191,219,247,0.05) 50%, transparent 100%)'
                  : i % 3 === 1
                  ? 'radial-gradient(circle, rgba(31,122,140,0.2) 0%, rgba(31,122,140,0.08) 50%, transparent 100%)'
                  : 'radial-gradient(circle, rgba(2,43,58,0.18) 0%, rgba(2,43,58,0.06) 50%, transparent 100%)',
                left: `${xPos}%`,
                top: `${yPos}%`,
                filter: isMobile ? 'blur(30px)' : 'blur(40px)',
              }}
              animate={{
                y: [0, isMobile ? -30 : -60 - Math.random() * 40, 0],
                x: [0, (Math.random() - 0.5) * (isMobile ? 30 : 60), 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          );
        })}
        
        {/* Professional interactive cursor spotlight - disabled on mobile */}
        {!isMobile && (
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-soft-light"
            style={{
              background: 'radial-gradient(circle, rgba(191,219,247,0.25) 0%, rgba(191,219,247,0.1) 30%, rgba(31,122,140,0.15) 50%, transparent 80%)',
              left: mousePosition.x - 300,
              top: mousePosition.y - 300,
              opacity: mousePosition.x ? 0.8 : 0,
              willChange: 'transform',
              transition: 'opacity 0.3s ease-out',
            }}
          />
        )}
        
        {/* Professional geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 48%, rgba(255,255,255,0.4) 49%, rgba(255,255,255,0.4) 51%, transparent 52%),
            linear-gradient(150deg, transparent 48%, rgba(255,255,255,0.4) 49%, rgba(255,255,255,0.4) 51%, transparent 52%)
          `,
          backgroundSize: '60px 60px'
        }}></div>
        
        {/* Subtle grid pattern for depth */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
          animate={{ backgroundPosition: ['0 0', '50px 50px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated floating particles - reduced count for mobile */}
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
            }}
            animate={{
              y: [0, -150 - Math.random() * 100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Subtle pattern overlay with animation */}
        <motion.div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
          }}
          animate={{ backgroundPosition: ['0 0', '28px 28px'] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-16 sm:py-20 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start order-1 lg:order-1 relative"
              style={{ perspective: "1200px" }}
            >
              <motion.div 
                animate={{
                  rotateX: isCardHovered && !isMobile ? cardRotation.x : 0,
                  rotateY: isCardHovered && !isMobile ? cardRotation.y : 0,
                  scale: isCardHovered ? 1.06 : 1,
                  y: isCardHovered ? -18 : 0
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                onMouseMove={!isMobile ? handleCardMouseMove : undefined}
                onMouseEnter={() => setIsCardHovered(true)}
                onMouseLeave={() => {
                  setIsCardHovered(false);
                  setCardRotation({ x: 0, y: 0 });
                }}
                onTouchStart={() => setIsCardHovered(true)}
                onTouchEnd={() => setIsCardHovered(false)}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: isCardHovered 
                    ? "0 60px 120px -20px rgba(0, 0, 0, 0.7), 0 0 80px rgba(20,184,166,0.4), inset 0 0 0 1px rgba(255,255,255,0.2)" 
                    : "0 30px 60px -15px rgba(0, 0, 0, 0.4), 0 0 40px rgba(20,184,166,0.15)",
                  transition: 'box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                className="w-full max-w-[280px] h-[380px] sm:max-w-xs sm:w-72 sm:h-96 md:max-w-sm md:w-80 md:h-[420px] lg:w-[340px] lg:h-[440px] xl:w-[360px] xl:h-[460px] bg-gradient-to-br from-white/95 via-[#E1E5F2]/90 to-[#BFDBF7]/95 rounded-[2rem] shadow-2xl overflow-hidden ring-[6px] ring-[#1F7A8C]/80 ring-offset-[6px] ring-offset-[#1F7A8C]/10 backdrop-blur-md relative group cursor-pointer touch-manipulation mx-auto"
              >
                {/* Multi-layered animated gradient border */}
                <motion.div
                  className="absolute -inset-[4px] rounded-[2.2rem] opacity-75"
                  style={{
                    background: 'conic-gradient(from 0deg, #1F7A8C, #022B3A, #BFDBF7, #1F7A8C, #1F7A8C)',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                {/* Secondary rotating border */}
                <motion.div
                  className="absolute -inset-[3px] rounded-[2.1rem] opacity-60"
                  style={{
                    background: 'conic-gradient(from 180deg, transparent, #022B3A, transparent)',
                  }}
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                {/* Pulsing glow layer */}
                <motion.div
                  className="absolute -inset-[6px] rounded-[2.3rem] blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: 'radial-gradient(circle, rgba(31,122,140,0.6), rgba(2,43,58,0.4), transparent 70%)',
                  }}
                />
                <img 
                  src={profPhoto} 
                  alt="Dr. Harish Chandra - Assistant Professor" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  style={{ 
                    transform: isCardHovered ? 'translateZ(35px)' : 'translateZ(0)',
                    filter: isCardHovered 
                      ? 'contrast(1.08) saturate(1.15) brightness(1.05) drop-shadow(0 10px 20px rgba(0,0,0,0.3))' 
                      : 'contrast(1.02) saturate(1.05) brightness(1) drop-shadow(0 5px 10px rgba(0,0,0,0.2))',
                    transition: 'transform 0.5s ease-out, filter 0.5s ease-out',
                    imageRendering: 'crisp-edges',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    objectFit: 'cover',
                    objectPosition: 'center 30%',
                    minHeight: '100%',
                    minWidth: '100%'
                  }}
                  loading="eager"
                />
                {/* Enhanced glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl ring-4 ring-[#BFDBF7]"
                  animate={isCardHovered ? {
                    opacity: [0.4, 0.9, 0.4],
                    scale: [1, 1.015, 1],
                    boxShadow: [
                      '0 0 30px rgba(31, 122, 140, 0.5), inset 0 0 40px rgba(31, 122, 140, 0.3)',
                      '0 0 60px rgba(31, 122, 140, 0.9), inset 0 0 60px rgba(31, 122, 140, 0.5)',
                      '0 0 30px rgba(31, 122, 140, 0.5), inset 0 0 40px rgba(31, 122, 140, 0.3)'
                    ]
                  } : { opacity: 0.3, boxShadow: 'inset 0 0 20px rgba(31,122,140,0.2)' }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Overlay effect on hover */}
                {/* Enhanced gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#022B3A]/70 via-[#022B3A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"
                  whileHover={{ 
                    background: 'linear-gradient(to top, rgba(2, 43, 58, 0.8), rgba(2, 43, 58, 0.2), transparent)'
                  }}
                />
                
                {/* Decorative corner accents */}
                <motion.div 
                  className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-white/40 rounded-tl-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isCardHovered ? 1 : 0, scale: isCardHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-white/40 rounded-tr-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isCardHovered ? 1 : 0, scale: isCardHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-white/40 rounded-bl-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isCardHovered ? 1 : 0, scale: isCardHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
                <motion.div 
                  className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-white/40 rounded-br-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isCardHovered ? 1 : 0, scale: isCardHovered ? 1 : 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                />
                {/* Enhanced shine effect with continuous animation */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  animate={isCardHovered ? {
                    x: ['-120%', '120%'],
                  } : { x: '-120%' }}
                  transition={{ 
                    duration: 1.5, 
                    ease: [0.4, 0, 0.2, 1],
                    repeat: isCardHovered ? Infinity : 0,
                    repeatDelay: 0.5
                  }}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)',
                    transform: 'skewX(-20deg)',
                    width: '40%',
                    height: '100%'
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-5 sm:space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-2 px-2 sm:px-4 lg:px-0"
            >
              {/* Name with underline */}
              <div className="space-y-3 relative">
                <motion.h1 
                  initial={{ opacity: 0, y: 40, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.35 }}
                  whileHover={{ 
                    scale: 1.03,
                    textShadow: "0 0 50px rgba(255,255,255,0.9), 0 5px 30px rgba(20,184,166,0.5)",
                    letterSpacing: "0.03em",
                    y: -3
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight relative cursor-pointer select-none leading-tight drop-shadow-2xl"
                >
                  <motion.span 
                    className="relative z-10"
                    animate={{
                      textShadow: [
                        "0 0 15px rgba(255,255,255,0.4)",
                        "0 0 25px rgba(16,185,129,0.6)",
                        "0 0 15px rgba(255,255,255,0.4)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Harish Chandra
                  </motion.span>
                </motion.h1>
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '8rem', opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
                  className="h-1.5 bg-gradient-to-r from-[#BFDBF7] via-white to-[#BFDBF7] rounded-full shadow-2xl relative overflow-hidden mx-auto lg:mx-0"
                  style={{
                    boxShadow: '0 0 20px rgba(255,255,255,0.5), 0 4px 10px rgba(0,0,0,0.3)'
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
              </div>

              {/* Info card container - Mobile optimized */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, type: "spring", bounce: 0.3 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(20,184,166,0.4), inset 0 2px 60px rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(74, 222, 128, 0.25)",
                  y: -3,
                  borderColor: "rgba(74, 222, 128, 0.6)"
                }}
                className="bg-gradient-to-br from-[#1F7A8C]/25 via-[#BFDBF7]/20 to-[#E1E5F2]/15 backdrop-blur-2xl rounded-[1.5rem] p-5 sm:p-5 md:p-6 lg:p-8 border-2 border-[#BFDBF7]/60 shadow-2xl relative overflow-hidden group cursor-pointer transition-all duration-500 touch-manipulation"
                style={{ 
                  transformStyle: "preserve-3d",
                  boxShadow: '0 25px 70px rgba(0,0,0,0.35), inset 0 1px 40px rgba(255,255,255,0.05), inset 0 -1px 40px rgba(20,184,166,0.1)'
                }}
              >
                {/* Floating particles inside card */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white/20"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                  />
                ))}

                {/* Enhanced animated background shimmer */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.15) 60%, transparent 80%)',
                      'linear-gradient(240deg, transparent 20%, rgba(255,255,255,0.15) 40%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.15) 60%, transparent 80%)'
                    ],
                    backgroundPosition: ['0% 50%', '100% 50%']
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ backgroundSize: '200% 100%' }}
                />
                
                {/* Edge highlight effect */}
                <motion.div
                  className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(191,219,247,0.1) 0%, transparent 50%), linear-gradient(225deg, rgba(31,122,140,0.1) 0%, transparent 50%)',
                    mixBlendMode: 'overlay'
                  }}
                />
                
                <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 relative z-10">
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold cursor-pointer tracking-wide font-serif drop-shadow-lg"
                  >
                    Assistant Professor
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.02, x: 5, color: "#ffffff" }}
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/95 leading-relaxed cursor-pointer font-normal font-serif drop-shadow-md"
                  >
                    Department of Mathematics and Scientific Computing
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    whileHover={{ scale: 1.02, x: 5, color: "#ffffff" }}
                    className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/95 font-medium cursor-pointer font-serif drop-shadow-md"
                  >
                    Madan Mohan Malaviya University of Technology
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    whileHover={{ scale: 1.02, x: 5, color: "#ffffff" }}
                    className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-white/90 cursor-pointer font-normal font-serif drop-shadow-md"
                  >
                    Gorakhpur, Uttar Pradesh, India
                  </motion.p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 md:gap-5 pt-2"
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[48px] min-h-[48px] w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl border-2 border-[#BFDBF7]/80 relative group shadow-xl overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#1F7A8C]/50 focus:ring-offset-2 focus:ring-offset-[#1F7A8C] transition-all duration-300 touch-manipulation active:scale-95"
                    aria-label={link.label}
                    role="link"
                    tabIndex={0}
                    initial={{ opacity: 0, scale: 0, rotate: -180, y: 30 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                    transition={{ 
                      delay: 1.6 + index * 0.08, 
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      bounce: 0.5
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -4, 4, -4, 0],
                      boxShadow: "0 30px 70px rgba(0,0,0,0.4), 0 0 40px rgba(31,122,140,0.6), inset 0 0 20px rgba(31,122,140,0.1)",
                      y: -10,
                      borderColor: "rgba(31,122,140,0.9)",
                      backgroundColor: "rgba(255,255,255,1)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileFocus={{ 
                      scale: 1.08,
                      boxShadow: "0 0 0 4px rgba(31,122,140,0.4)"
                    }}
                    onHoverStart={() => setHoveredLink(index)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    <img src={link.logo} alt={link.label} className="w-full h-full object-contain transition-all duration-300 group-hover:brightness-110" />
                    
                    {/* Enhanced Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.7 }}
                      animate={{ 
                        opacity: hoveredLink === index ? 1 : 0,
                        y: hoveredLink === index ? -60 : -45,
                        scale: hoveredLink === index ? 1 : 0.7
                      }}
                      transition={{ type: "spring", stiffness: 450, damping: 22 }}
                      className="absolute bottom-full mb-4 px-5 py-2.5 bg-gradient-to-r from-[#1F7A8C] via-[#022B3A] to-[#1F7A8C] text-white text-sm font-bold rounded-xl shadow-2xl whitespace-nowrap pointer-events-none border border-white/30 backdrop-blur-sm"
                      style={{
                        boxShadow: '0 10px 40px rgba(0,0,0,0.4), 0 0 20px rgba(31,122,140,0.3)'
                      }}
                    >
                      {link.label}
                      <motion.div 
                        className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-[6px] border-transparent border-t-[#1F7A8C]"
                        animate={hoveredLink === index ? { y: [0, 2, 0] } : {}}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Enhanced Ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C]"
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={hoveredLink === index ? {
                        opacity: [0, 0.5, 0],
                        scale: [0.4, 1.4, 1.8],
                      } : { opacity: 0, scale: 0.4 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    {/* Enhanced Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border-3 border-[#1F7A8C]"
                      animate={hoveredLink === index ? {
                        scale: [1, 1.25, 1.5],
                        opacity: [0.9, 0.5, 0],
                      } : { opacity: 0, scale: 1 }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                    />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}

export default Herosection;
