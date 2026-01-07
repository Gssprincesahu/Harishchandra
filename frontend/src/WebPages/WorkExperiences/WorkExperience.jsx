import {
  BriefcaseBusiness,
  BookOpen,
  UserRound,
} from "lucide-react";
import { motion } from 'framer-motion';

function WorkExperience() {
  const work = [
    {
      year: "2007-2008",
      title: "Contractual Faculty",
      institution: "Lucknow University",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      year: "2008-2011",
      title: "Guest Faculty Under UGC Norms",
      institution: "Lucknow University",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      year: "2012-2014",
      title: "Senior Research Fellow",
      institution: "BBD University, Lucknow",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      year: "2015-Present",
      title: "Assistant Professor, Dept. of Mathematics and Scientific Computing",
      institution: "MMMUT, Gorakhpur",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  ];

  const experience = [
    {
      year: "2015-2017",
      title: "Officer In Charge, Lawn Tennis",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2015",
      title: "Member, Library Affairs Committee",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2015-2021",
      title: "Dy. O/C Timetable",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2016",
      title: "Assistant Centre Superintendent Exams",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017",
      title: "O/C Guest House",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017",
      title: "Joint Controller of Examination",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2018",
      title: "Member, Steering Committee",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2018",
      title: "Warden, Tilak Hostel",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2020",
      title: "Member, Cultural Society",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2020",
      title: "Warden, Sarojini Hostel",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2021",
      title: "Member, Women’s Grievance Redressal Cell",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017",
      title: "Member, ITRC Management Committee",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "O/C Horticulture",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "Member Secretary, Campus Development Cell (CDC)",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "O/C, Cultural Sub Council (Council of Student Activities)",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "O/C Badminton (Council of Student Activities)",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "Warden, Tagore Hostel",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2021",
      title: "Member, EDP Cell",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="min-h-screen mb-8 sm:mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-2xl mb-4 sm:mb-6 shadow-lg"
          >
            <BriefcaseBusiness className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 px-2"
          >
            Work Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg text-gray-600 px-2"
          >
            Dr. Harish Chandra, Assistant Professor
          </motion.p>
        </motion.div>

        {/* Professional Positions */}
        <section className="mb-10 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
          >
            Professional Positions
          </motion.h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {work.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03, rotateY: 5, boxShadow: '0 30px 60px -15px rgba(16, 185, 129, 0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-gradient-to-br from-[#E1E5F2] via-[#BFDBF7] to-[#E1E5F2] rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-[#1F7A8C] hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex gap-3 sm:gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1F7A8C] to-[#022B3A] rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">{item.year}</div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 leading-tight">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{item.institution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Administrative Experiences */}
        <section className="mb-10 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
          >
            Administrative Experiences
          </motion.h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5, boxShadow: '0 30px 60px -15px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-blue-300 hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="flex gap-3 sm:gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">{item.year}</div>
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 leading-tight">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{item.institution}</p>
                    </div>
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

export default WorkExperience;
