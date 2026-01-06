import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EducationPage() {
  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-12 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Education
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-gray-600"
          >
            Dr. Harish Chandra, Assistant Professor
          </motion.p>
        </div>
      </motion.section>

      <section className="bg-white pb-12 px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Educational Qualification</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-emerald-600 rounded-full"
            ></motion.div>
          </motion.div>

          <div className="space-y-8">
            {/* Ph.D. */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ x: 10 }}
              className="border-l-4 border-emerald-600 pl-6 py-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ph.D. (Mathematics)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Institution:</span>
                  <span>University of Lucknow, Lucknow</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Thesis Title:</span>
                  <span>Group Rings - Their Unit Groups and Associated Lie Rings</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Year of Passing:</span>
                  <span>2013</span>
                </li>
              </ul>
            </motion.div>

            {/* M.Sc. */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 10 }}
              className="border-l-4 border-emerald-600 pl-6 py-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">M.Sc. (Mathematics)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Institution:</span>
                  <span>University of Lucknow, Lucknow</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Year of Passing:</span>
                  <span>2007</span>
                </li>
              </ul>
            </motion.div>

            {/* B.Sc. */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ x: 10 }}
              className="border-l-4 border-emerald-600 pl-6 py-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">B.Sc. (Mathematics)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Institution:</span>
                  <span>University of Lucknow, Lucknow</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Year of Passing:</span>
                  <span>2005</span>
                </li>
              </ul>
            </motion.div>

            {/* Intermediate */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ x: 10 }}
              className="border-l-4 border-emerald-600 pl-6 py-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Intermediate (PCM)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Board:</span>
                  <span>U.P. Board</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Year of Passing:</span>
                  <span>2002</span>
                </li>
              </ul>
            </motion.div>

            {/* High School */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ x: 10 }}
              className="border-l-4 border-emerald-600 pl-6 py-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">High School (PCM)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Board:</span>
                  <span>U.P. Board</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold min-w-45">Year of Passing:</span>
                  <span>2000</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Achievements & Fellowships */}
          <div className="mt-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Achievements & Fellowships</h2>
              <div className="h-1 w-16 bg-emerald-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-linear-to-br from-emerald-50 to-green-50 border border-emerald-200 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">UGC-NET (JRF) Qualified</h4>
                    <p className="text-gray-700 text-sm">Qualified UGC - Junior Research Fellowship (NET) in 2007</p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-amber-50 to-yellow-50 border border-amber-200 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-amber-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">RBS-MMATE Fellowship</h4>
                    <p className="text-gray-700 text-sm">Awarded by RBS Foundation in 2006 for securing 1st rank in M.Sc. First Year and demonstrating exceptional research motivation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}