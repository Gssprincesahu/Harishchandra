import profPhoto from '../../assets/prof_photo.jpg';
import linkedinLogo from '../../assets/linkedin.PNG';
import googleScholarLogo from '../../assets/google-scholar.png';
import researchGateLogo from '../../assets/research_gate.png';
import vidwanLogo from '../../assets/vidwan.webp';
import orcidLogo from '../../assets/orcid.png';
import scopusLogo from '../../assets/scopusid.png';
import { motion } from 'framer-motion';

function Herosection() {
  return (
    <section className="min-h-fit md:h-[79vh] bg-linear-to-br from-emerald-500 via-teal-600 to-cyan-700 relative overflow-hidden">
        {/* Animated gradient overlay */}
 
        <div className="absolute inset-0 bg-linear-to-tr from-emerald-600/30 via-transparent to-cyan-500/20"></div>
        
        {/* Radial glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.2),transparent_50%)]"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]"></div>

        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-0 md:flex md:items-center md:justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 md:order-0"
            >
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-70 aspect-3/4 sm:w-72 sm:h-96 md:w-80 md:h-96 bg-linear-to-br from-white to-emerald-50 rounded-2xl shadow-2xl overflow-hidden ring-4 ring-white/20 backdrop-blur-sm"
              >
                <img 
                  src={profPhoto} 
                  alt="Dr. Harish Chandra" 
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 sm:space-y-4 text-center md:text-left order-2 md:order-0"
            >
              <div className="space-y-3 sm:space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight hover:text-emerald-100 transition-colors duration-300 cursor-default"
                >
                  Harish Chandra
                </motion.h1>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-2 bg-white rounded-full shadow-lg"
                ></motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="space-y-1 sm:space-y-1.5"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-xl sm:text-2xl md:text-2xl text-white font-light"
                >
                  Assistant Professor
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-sm sm:text-base md:text-lg text-emerald-50 leading-relaxed"
                >
                  Department of Computer Science and Engineering
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="text-sm sm:text-base md:text-lg text-emerald-100"
                >
                  Madan Mohan Malaviya University of Technology
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="text-xs sm:text-sm md:text-base text-emerald-200"
                >
                  Gorakhpur, Uttar Pradesh, India
                </motion.p>
              </motion.div>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
                <a
                  href="https://www.linkedin.com/in/harish-chandra-1335086a/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl"
                  aria-label="LinkedIn"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=VeAyaAgAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl"
                  aria-label="Google Scholar"
                >
                  <img src={googleScholarLogo} alt="Google Scholar" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Harish-Chandra-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl"
                  aria-label="Research Gate"
                >
                  <img src={researchGateLogo} alt="Research Gate" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://vidwan.inflibnet.ac.in/profile/142799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl"
                  aria-label="Vidwan"
                >
                  <img src={vidwanLogo} alt="Vidwan" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://orcid.org/0000-0001-5232-6043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl"
                  aria-label="ORCID"
                >
                  <img src={orcidLogo} alt="ORCID" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57224648437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:shadow-xl"
                  aria-label="Scopus"
                >
                  <img src={scopusLogo} alt="Scopus" className="w-full h-full object-contain" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}

export default Herosection;
