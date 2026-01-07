import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationPage() {
  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-8 sm:py-12 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-4 sm:mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-2xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-2"
          >
            Education
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 px-2"
          >
            Dr. Harish Chandra, Assistant Professor
          </motion.p>
        </div>
      </motion.section>

      <section className="bg-white pb-8 sm:pb-12 px-4 sm:px-6 mb-8 sm:mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent mb-2">Educational Qualification</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '6rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 sm:h-1.5 bg-gradient-to-r from-[#1F7A8C] to-[#022B3A] rounded-full shadow-md"
            ></motion.div>
          </motion.div>

          <div className="space-y-4 sm:space-y-8">
            {/* Ph.D. */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ x: [0, 10, 0], scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative border-l-4 border-[#1F7A8C] bg-gradient-to-br from-[#E1E5F2]/80 via-[#BFDBF7]/80 to-[#E1E5F2]/80 pl-4 sm:pl-6 py-4 sm:py-6 rounded-r-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1F7A8C] to-[#BFDBF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/5 group-hover:to-[#BFDBF7]/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Ph.D. (Mathematics)</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Institution:</span>
                    <span>University of Lucknow, Lucknow</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Thesis Title:</span>
                    <span>Group Rings - Their Unit Groups and Associated Lie Rings</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Year of Passing:</span>
                    <span>2013</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* M.Sc. */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: [0, 10, 0], scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative border-l-4 border-[#1F7A8C] bg-gradient-to-br from-[#E1E5F2]/80 via-[#BFDBF7]/80 to-[#E1E5F2]/80 pl-4 sm:pl-6 py-4 sm:py-6 rounded-r-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1F7A8C] to-[#BFDBF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/5 group-hover:to-[#BFDBF7]/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">M.Sc. (Mathematics)</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Institution:</span>
                    <span>University of Lucknow, Lucknow</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Year of Passing:</span>
                    <span>2007</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* B.Sc. */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ x: [0, 10, 0], scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative border-l-4 border-[#1F7A8C] bg-gradient-to-br from-[#E1E5F2]/80 via-[#BFDBF7]/80 to-[#E1E5F2]/80 pl-4 sm:pl-6 py-4 sm:py-6 rounded-r-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1F7A8C] to-[#BFDBF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/5 group-hover:to-[#BFDBF7]/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">B.Sc. (Mathematics)</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Institution:</span>
                    <span>University of Lucknow, Lucknow</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Year of Passing:</span>
                    <span>2005</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Intermediate */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: [0, 10, 0], scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative border-l-4 border-[#1F7A8C] bg-gradient-to-br from-[#E1E5F2]/80 via-[#BFDBF7]/80 to-[#E1E5F2]/80 pl-4 sm:pl-6 py-4 sm:py-6 rounded-r-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1F7A8C] to-[#BFDBF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/5 group-hover:to-[#BFDBF7]/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Intermediate (PCM)</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Board:</span>
                    <span>U.P. Board</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Year of Passing:</span>
                    <span>2002</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* High School */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: [0, 10, 0], scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative border-l-4 border-[#1F7A8C] bg-gradient-to-br from-[#E1E5F2]/80 via-[#BFDBF7]/80 to-[#E1E5F2]/80 pl-4 sm:pl-6 py-4 sm:py-6 rounded-r-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1F7A8C] to-[#BFDBF7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/5 group-hover:to-[#BFDBF7]/5 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">High School (PCM)</h3>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Board:</span>
                    <span>U.P. Board</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold mb-0.5 sm:mb-0 sm:min-w-[140px]">Year of Passing:</span>
                    <span>2000</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Achievements & Fellowships */}
          <div className="mt-12 sm:mt-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Achievements & Fellowships</h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '4rem' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-1 bg-[#1F7A8C] rounded-full"
              ></motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-br from-[#E1E5F2] via-[#BFDBF7] to-[#E1E5F2] border-2 border-[#1F7A8C] p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-xl shadow-md flex-shrink-0"
                    >
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">UGC-NET (JRF) Qualified</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Qualified UGC - Junior Research Fellowship (NET) in 2007</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-300 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-md flex-shrink-0"
                    >
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">RBS-MMATE Fellowship</h4>
                      <p className="text-gray-700 text-xs sm:text-sm">Awarded by RBS Foundation in 2006 for securing 1st rank in M.Sc. First Year and demonstrating exceptional research motivation</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
