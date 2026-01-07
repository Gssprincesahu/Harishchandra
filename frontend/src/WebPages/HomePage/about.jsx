import { Users, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 mb-12 sm:mb-14 md:mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <motion.h2 
              whileHover={{ scale: 1.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold animated-gradient-text mb-4"
              style={{
                background: 'linear-gradient(90deg, #1F7A8C, #022B3A, #BFDBF7, #022B3A, #1F7A8C)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              About
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '8rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1.5 animated-border rounded-full mx-auto shadow-lg"
              style={{
                background: 'linear-gradient(90deg, #1F7A8C, #BFDBF7, #022B3A, #BFDBF7, #1F7A8C)',
                backgroundSize: '200% 200%'
              }}
            ></motion.div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-700 leading-relaxed bg-gradient-to-br from-[#E1E5F2]/50 to-[#BFDBF7]/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-[#BFDBF7] shadow-lg"
            >
              <p className="mb-6">
                Dr. Harish Chandra is an Assistant Professor of Mathematics in the Department of Mathematics and Scientific Computing at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, where he has been actively engaged in teaching, research, and academic administration for nearly two decades.
              </p>
              <p className="mb-6">
                He earned his Ph.D. in Mathematics from the University of Lucknow and is a UGC-NET (JRF & SRF) qualified scholar, reflecting his strong academic foundation and research capabilities. His core research interests lie in Algebra, particularly Group Rings, along with interdisciplinary exposure to Solar Physics, demonstrating a blend of pure and applied scientific inquiry.
              </p>
              <p>
                Dr. Chandra is a dedicated educator known for his structured approach to mathematical concepts and his commitment to nurturing analytical and problem-solving skills among students. He believes that effective teaching goes beyond classroom instruction and involves mentoring, motivation, and continuous academic engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="relative bg-gradient-to-br from-[#E1E5F2] to-[#BFDBF7] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-[#1F7A8C] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group active:scale-95\"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/10 group-hover:to-[#BFDBF7]/10 transition-all duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-xl shadow-md"
                  >
                    <Users className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent">Teaching Experience</h3>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#1F7A8C]">9 years</span> of UG teaching
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#1F7A8C]">7 years</span> of PG teaching
                </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="relative bg-gradient-to-br from-[#E1E5F2] to-[#BFDBF7] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-[#1F7A8C] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/10 group-hover:to-[#BFDBF7]/10 transition-all duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-xl shadow-md"
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent">Research Output</h3>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#1F7A8C]">14 publications</span> in reputed journals & conferences
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold text-[#1F7A8C]">1 funded</span> research project completed
                </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="relative bg-gradient-to-br from-[#E1E5F2] to-[#BFDBF7] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-[#1F7A8C] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/10 group-hover:to-[#BFDBF7]/10 transition-all duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-xl shadow-md"
                  >
                    <Briefcase className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent">Knowledge Sharing</h3>
                </div>
                <p className="text-gray-700">
                  Organized <span className="font-semibold text-[#1F7A8C]">11 seminars, workshops & conferences</span>
                </p>
                <p className="text-gray-700 mt-2">
                  Attended <span className="font-semibold text-[#1F7A8C]">29 national & international</span> events
                </p>
                </div>
              </motion.div>
            </div>

            <div className="border-t-2 border-gray-200 pt-12">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent mb-6"
              >
                Expertise
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#E1E5F2] to-[#BFDBF7] border-2 border-[#1F7A8C] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-xl shadow-md">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent">Mathematics</h3>
                </div>
              </motion.div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research & Academic Interests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#1F7A8C] mb-2 text-lg">Primary Research Focus</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#1F7A8C] mt-1">•</span>
                      <span>Algebra, particularly Group Rings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-[#1F7A8C] mb-2 text-lg">Interdisciplinary Expertise</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-[#1F7A8C] mt-1">•</span>
                      <span>Solar Physics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-[#BFDBF7]/50 pt-12">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent mb-6"
              >
                Awards & Recognition
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border-2 border-amber-300 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-300/20 to-transparent rounded-bl-full"></div>
                  <p className="text-gray-700 font-semibold mb-1 relative z-10">Junior Research Fellowship (JRF–UGC)</p>
                  <p className="text-amber-700 text-sm font-medium relative z-10">2007</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border-2 border-amber-300 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-300/20 to-transparent rounded-bl-full"></div>
                  <p className="text-gray-700 font-semibold mb-1 relative z-10">Senior Research Fellowship (SRF–UGC)</p>
                  <p className="text-amber-700 text-sm font-medium relative z-10">2010</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 border-2 border-amber-300 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-300/20 to-transparent rounded-bl-full"></div>
                  <p className="text-gray-700 font-semibold mb-1 relative z-10">Early Career Research Award (DST)</p>
                  <p className="text-amber-700 text-sm font-medium relative z-10">2017</p>
                </motion.div>
              </div>
            </div>

            <div className="border-t-2 border-[#BFDBF7]/50 pt-12">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent mb-6"
              >
                Professional Memberships
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Indian Science Congress",
                  "Bharat Ganita Parishad",
                  "Indian Mathematical Society",
                  "Vigyan Parishad, Lucknow",
                  "Allahabad Mathematical Society"
                ].map((membership, index) => (
                  <motion.div 
                    key={membership}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-[#E1E5F2]/50 to-transparent hover:from-[#BFDBF7]/70 hover:to-[#E1E5F2]/50 transition-all duration-300"
                  >
                    <span className="text-[#1F7A8C] text-xl mt-0.5 group-hover:scale-110 transition-transform">✓</span>
                    <p className="text-gray-700 font-medium">{membership}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="border-t-2 border-[#BFDBF7]/50 pt-12">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent mb-6"
              >
                Administrative Leadership
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-[#E1E5F2] to-[#BFDBF7] border-2 border-[#1F7A8C] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="font-semibold text-[#1F7A8C] mb-3 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-[#1F7A8C] to-[#022B3A] rounded-full"></span>
                    Key Administrative Roles
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>Warden (Tagore Hostel)</span>
                    </li>
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>Joint Controller of Examination</span>
                    </li>
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>Assistant Centre Superintendent (Examinations)</span>
                    </li>
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>Deputy Officer-in-Charge of Timetable</span>
                    </li>
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>Member Secretary, University Academic Reform Committee</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-[#E1E5F2] to-[#BFDBF7] border-2 border-[#1F7A8C] rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="font-semibold text-[#1F7A8C] mb-3 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-[#1F7A8C] to-[#022B3A] rounded-full"></span>
                    Committee Involvement
                  </h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>Campus Development</span>
                    </li>
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>Library Affairs</span>
                    </li>
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>Cultural Sub-Council</span>
                    </li>
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>EDP Cell</span>
                    </li>
                    <li className="flex gap-2 hover:translate-x-1 transition-transform duration-200">
                      <span className="text-[#1F7A8C] mt-0.5">•</span>
                      <span>ITRC Management</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
  );
}

export default About;
