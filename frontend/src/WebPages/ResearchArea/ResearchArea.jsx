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
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6"
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
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-300"
            >
              <h3 className="text-xl font-bold mb-2">
                {researchProject.title}
              </h3>
              <p className="text-gray-700">
                <b>Period:</b> {researchProject.period}
              </p>
              <p className="text-gray-700">
                <b>Funding:</b> {researchProject.funding}
              </p>
              <p className="text-gray-700">
                <b>Amount:</b> {researchProject.amount}
              </p>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}
