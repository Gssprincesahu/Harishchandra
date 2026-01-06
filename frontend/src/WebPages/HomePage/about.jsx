import { Users, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="bg-white py-12 px-6 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">About</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '4rem' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-emerald-600 rounded-full"
            ></motion.div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-700 leading-relaxed"
            >
              <p className="mb-6">
                Dr. Harish Chandra is an Assistant Professor of Mathematics at Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur, where he has been actively engaged in teaching, research, and academic administration for nearly two decades.
              </p>
              <p className="mb-6">
                He earned his Ph.D. in Mathematics from the University of Lucknow and is a UGC-NET (JRF & SRF) qualified scholar, reflecting his strong academic foundation and research capabilities. His core research interests lie in Algebra, particularly Group Rings, along with interdisciplinary exposure to Solar Physics, demonstrating a blend of pure and applied scientific inquiry.
              </p>
              <p>
                Dr. Chandra is a dedicated educator known for his structured approach to mathematical concepts and his commitment to nurturing analytical and problem-solving skills among students. He believes that effective teaching goes beyond classroom instruction and involves mentoring, motivation, and continuous academic engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-lg border border-emerald-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Teaching Experience</h3>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-emerald-700">9 years</span> of UG teaching
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-emerald-700">7 years</span> of PG teaching
                </p>
              </motion.div>

              <motion.div            initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-lg border border-emerald-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Research Output</h3>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold text-emerald-700">14 publications</span> in reputed journals & conferences
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold text-emerald-700">1 funded</span> research project completed
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                className="bg-linear-to-br from-emerald-50 to-green-50 p-8 rounded-lg border border-emerald-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Knowledge Sharing</h3>
                </div>
                <p className="text-gray-700">
                  Organized <span className="font-semibold text-emerald-700">11 seminars, workshops & conferences</span>
                </p>
                <p className="text-gray-700 mt-2">
                  Attended <span className="font-semibold text-emerald-700">29 national & international</span> events
                </p>
              </motion.div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Expertise</h3>
              <div className="bg-linear-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-8">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Mathematics</h3>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research & Academic Interests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2 text-lg">Primary Research Focus</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Algebra, particularly Group Rings</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-2 text-lg">Interdisciplinary Expertise</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>Solar Physics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Awards & Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <p className="text-gray-700 font-semibold mb-1">Junior Research Fellowship (JRF–UGC)</p>
                  <p className="text-amber-700 text-sm font-medium">2007</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <p className="text-gray-700 font-semibold mb-1">Senior Research Fellowship (SRF–UGC)</p>
                  <p className="text-amber-700 text-sm font-medium">2010</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <p className="text-gray-700 font-semibold mb-1">Early Career Research Award (DST)</p>
                  <p className="text-amber-700 text-sm font-medium">2017</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Memberships</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">Indian Science Congress</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">Bharat Ganita Parishad</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">Indian Mathematical Society</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">Vigyan Parishad, Lucknow</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 text-xl mt-1">✓</span>
                  <p className="text-gray-700">Allahabad Mathematical Society</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Administrative Leadership</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-3">Key Administrative Roles</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Warden (Tagore Hostel)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Joint Controller of Examination</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Assistant Centre Superintendent (Examinations)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Deputy Officer-in-Charge of Timetable</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Member Secretary, University Academic Reform Committee</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-700 mb-3">Committee Involvement</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Campus Development</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Library Affairs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>Cultural Sub-Council</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>EDP Cell</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-600">•</span>
                      <span>ITRC Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
  );
}

export default About;