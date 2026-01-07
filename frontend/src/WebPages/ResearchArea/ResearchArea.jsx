import {
  Award,
  Trophy,
  BookOpen,
  GraduationCap,
  Star,
  Medal,
  Microscope,
} from "lucide-react";
import Footer from "../../NavFoot/Footer";
import { motion } from 'framer-motion';

export default function ResearchArea() {
  const researchProject = {
    title: "Study of Derived Length and Nilpotency Class of Group Algebras",
    funding: "DST (SERB) New Delhi",
    period: "2017-2020",
    amount: "Rs. 5.45 Lac",
  };

  return (
    <>
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
              <Microscope className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl font-bold text-gray-900 mb-2"
            >
              Research Area
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
          
          

          {/* Research Grant */}
          <section className="mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8"
            >
              Research Grant
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative bg-gradient-to-br from-[#E1E5F2] via-[#BFDBF7] to-[#E1E5F2] rounded-2xl p-8 shadow-lg border-2 border-[#1F7A8C] hover:border-[#1F7A8C] hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/10 group-hover:to-[#BFDBF7]/10 transition-all duration-500"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-2xl opacity-0 group-hover:opacity-15 blur-xl transition-all duration-500"></div>
              
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#1F7A8C]/20 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#BFDBF7]/20 to-transparent rounded-tl-full"></div>
              
              <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {researchProject.title}
              </h3>
              <div className="space-y-2 mt-4">
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="font-bold text-[#022B3A] min-w-[80px]">Period:</span>
                  <span>{researchProject.period}</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="font-bold text-[#022B3A] min-w-[80px]">Funding:</span>
                  <span>{researchProject.funding}</span>
                </p>
                <p className="text-gray-700 flex items-start gap-2">
                  <span className="font-bold text-[#1F7A8C] min-w-[80px]">Amount:</span>
                  <span className="font-semibold text-[#1F7A8C]">{researchProject.amount}</span>
                </p>
              </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}
