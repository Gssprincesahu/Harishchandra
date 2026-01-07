import {
  Award,
  Trophy,
  BookOpen,
  GraduationCap,
  Star,
  Medal,
} from "lucide-react";
import { motion } from 'framer-motion';

function AwardAndHonour() {
  const scholarships = [
    {
      year: "2010-2012",
      title: "Senior Research Fellow",
      institution: "University Grant Commission (UGC), India",
      icon: <Medal className="w-6 h-6 text-white" />,
    },
    {
      year: "2008-2010",
      title: "Junior Research Fellow",
      institution: "University Grant Commission (UGC), India",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      year: "2006-07",
      title: "RBS M Mate Fellow",
      institution: "Lucknow University",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
    },
  ];

  const qualifications = [
    {
      year: "2007",
      title: "NET (JRF) - Mathematics",
      institution: "University Grant Commission, India",
      icon: <Star className="w-6 h-6 text-white" />,
    },
  ];

  const moocCertificates = [
    {
      year: "2020",
      title: "Mathematical Methods and its Application",
      description:
        "12-week AICTE approved online course with Elite Certificate",
      platform: "SWAYAM",
      icon: <Trophy className="w-6 h-6 text-white" />,
    },
    {
      year: "2019",
      title: "Introduction to Abstract and Linear Algebra",
      description: "8-week AICTE approved online course with Elite Certificate",
      platform: "SWAYAM",
      icon: <Trophy className="w-6 h-6 text-white" />,
    },
    {
      year: "2019",
      title: "Modern Algebra",
      description: "8-week AICTE approved online course with Elite Certificate",
      platform: "SWAYAM",
      icon: <Trophy className="w-6 h-6 text-white" />,
    },
  ];



  return (
    <div className="min-h-screen mb-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-2xl mb-6 shadow-lg"
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl font-bold text-gray-900 mb-2"
          >
            Awards & Honours
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

        {/* Scholarships */}
        <section className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            Scholarships & Fellowships
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scholarships.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.3)' }}
                className="relative bg-gradient-to-br from-[#E1E5F2] via-[#BFDBF7] to-[#E1E5F2] rounded-2xl p-6 border-2 border-[#1F7A8C] hover:border-[#1F7A8C] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/5 group-hover:to-[#BFDBF7]/5 transition-all duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-all duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                <div className="relative z-10 flex gap-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#1F7A8C] via-[#022B3A] to-[#1F7A8C] rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">{item.year}</div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Qualifications */}
        <section className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent mb-8"
          >
            Qualifications
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-gradient-to-br from-[#E1E5F2] via-[#BFDBF7] to-[#E1E5F2] rounded-2xl p-6 border-2 border-[#1F7A8C] hover:border-[#1F7A8C] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/5 group-hover:to-[#BFDBF7]/5 transition-all duration-500"></div>
                
                <div className="relative z-10 flex gap-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#1F7A8C] via-[#022B3A] to-[#1F7A8C] rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">{item.year}</div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>



        {/* MOOC */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#022B3A] to-[#1F7A8C] bg-clip-text text-transparent mb-8"
          >
            MOOC / AICTE Certifications
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {moocCertificates.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-gradient-to-br from-[#E1E5F2] via-[#BFDBF7] to-[#E1E5F2] rounded-2xl p-6 border-2 border-[#BFDBF7] hover:border-[#BFDBF7] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/8 group-hover:to-[#BFDBF7]/8 transition-all duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                <div className="relative z-10 flex gap-4">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-[#BFDBF7] via-[#022B3A] to-[#1F7A8C] rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">{item.year}</div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <span className="text-xs text-[#1F7A8C] font-medium mt-1 inline-block">
                      {item.platform}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AwardAndHonour;
