import { BookOpen } from "lucide-react";
import publications from "./PublicationData";
import { motion } from 'framer-motion';

function Publications() {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 sm:py-10 md:py-12 bg-gray-50 mb-12 sm:mb-14 md:mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-2xl mb-4 sm:mb-6 shadow-lg"
          >
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2"
          >
            Publications
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600"
          >
            Dr. Harish Chandra, Assistant Professor
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -12, scale: 1.03, rotateX: 5, boxShadow: '0 35px 70px -15px rgba(16, 185, 129, 0.4)' }}
              className="relative bg-gradient-to-br from-[#E1E5F2] via-[#BFDBF7] to-[#E1E5F2] border-2 border-[#1F7A8C] rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#1F7A8C] overflow-hidden group active:scale-95 cursor-pointer"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 via-[#BFDBF7]/0 to-[#1F7A8C]/0 group-hover:from-[#1F7A8C]/10 group-hover:via-[#BFDBF7]/10 group-hover:to-[#1F7A8C]/10 transition-all duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#BFDBF7]/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {pub.title}
              </h2>

              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold">Authors:</span> {pub.authors}
              </p>

              {pub.article && (
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Article:</span> {pub.article}
                </p>
              )}

              {pub.Conferencepaper && (
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Conference Paper:</span>{" "}
                  {pub.Conferencepaper}
                </p>
              )}

              {pub.journalarticle && (
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Journal Article:</span>{" "}
                  {pub.journalarticle}
                </p>
              )}

              {pub.link && (
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 text-sm bg-gradient-to-r from-[#1F7A8C] via-[#1F7A8C] to-[#1F7A8C] text-white font-semibold rounded-lg hover:from-[#022B3A] hover:via-[#1F7A8C] hover:to-[#1F7A8C] transition-all duration-300 hover:shadow-xl hover:shadow-[#1F7A8C]/30 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                  <span className="relative">View Publication</span>
                  <span className="relative group-hover:translate-x-1 transition-transform duration-300">→</span>
                </motion.a>
              )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;
