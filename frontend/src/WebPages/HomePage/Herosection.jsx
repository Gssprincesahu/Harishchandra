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
    <section className="h-[75vh] bg-linear-to-br from-emerald-600 via-green-700 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

        <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-64 h-80 md:w-80 md:h-96 bg-white rounded-xl shadow-2xl overflow-hidden"
              >
                <img 
                  src={profPhoto} 
                  alt="Dr. Harish Chandra" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 text-left md:text-left"
            >
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-5xl md:text-6xl font-bold text-white tracking-tight hover:text-emerald-100 transition-colors duration-300 cursor-default"
                >
                  Harish Chandra
                </motion.h1>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-2 bg-white rounded-full"
                ></motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="space-y-1"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-2xl md:text-2xl text-white font-light"
                >
                  Assistant Professor
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-base md:text-lg text-emerald-50 leading-relaxed"
                >
                  Department of Computer Science and Engineering
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="text-base md:text-lg text-emerald-100"
                >
                  Madan Mohan Malaviya University of Technology
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="text-sm md:text-base text-emerald-200"
                >
                  Gorakhpur, Uttar Pradesh, India
                </motion.p>
              </motion.div>

              <div className="flex gap-6 pt-4">
                <a
                  href="https://www.linkedin.com/in/harish-chandra-1335086a/?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://scholar.google.com/citations?user=VeAyaAgAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Google Scholar"
                >
                  <img src={googleScholarLogo} alt="Google Scholar" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Harish-Chandra-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Research Gate"
                >
                  <img src={researchGateLogo} alt="Research Gate" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://vidwan.inflibnet.ac.in/profile/142799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Vidwan"
                >
                  <img src={vidwanLogo} alt="Vidwan" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://orcid.org/0000-0001-5232-6043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="ORCID"
                >
                  <img src={orcidLogo} alt="ORCID" className="w-full h-full object-contain" />
                </a>
                <a
                  href="https://www.scopus.com/authid/detail.uri?authorId=57224648437"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110"
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
