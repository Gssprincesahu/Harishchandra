import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#022B3A] via-[#022B3A] to-[#1F7A8C] border-t-4 border-[#1F7A8C] pt-8 pb-6 relative overflow-hidden"
        >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            
            {/* Floating gradient orbs */}
            <motion.div
                className="absolute top-10 left-10 w-64 h-64 bg-[#1F7A8C]/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-10 right-10 w-80 h-80 bg-[#BFDBF7]/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-[#022B3A]/80 to-[#1F7A8C]/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-[#1F7A8C]/30 hover:border-[#1F7A8C]/60 transition-all duration-300"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#BFDBF7] to-[#E1E5F2] bg-clip-text text-transparent">Contact Details</h3>
                        <div className="space-y-2 text-gray-300 text-sm">
                            <p className="font-semibold text-lg text-[#E1E5F2]">Dr. Harish Chandra</p>
                            <p className="text-gray-400">Assistant Professor</p>
                            <p className="text-gray-400">Department of Mathematics and Scientific Computing</p>
                            <p className="text-gray-400">Madan Mohan Malaviya University of Technology</p>
                            <p className="text-gray-400">Gorakhpur, Uttar Pradesh - 273010, India</p>
                            
                            <div className="pt-4 space-y-3">
                                    <motion.div 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F7A8C]/10 transition-all duration-300 group"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="p-2 bg-gradient-to-br from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300"
                        >
                            <Phone className="w-4 h-4 text-white" />
                        </motion.div>
                        <div>
                            <a href="tel:+919450656757" className="hover:text-[#BFDBF7] transition-colors">
                                +91-9450656757
                            </a>
                            {'; '}
                            <a href="tel:+919235501647" className="hover:text-[#BFDBF7] transition-colors">
                                +91-9235501647
                            </a>
                        </div>
                    </motion.div>
                                
                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#1F7A8C]/10 transition-all duration-300 group"
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="p-2 bg-gradient-to-br from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300"
                                    >
                                        <Mail className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <div>
                                        <a href="mailto:hcas@mmmut.ac.in" className="hover:text-[#BFDBF7] transition-colors underline">
                                            hcas@mmmut.ac.in
                                        </a>
                                        {'; '}
                                        <a href="mailto:hc19856@gmail.com" className="hover:text-[#BFDBF7] transition-colors underline">
                                            hc19856@gmail.com
                                        </a>
                                    </div>
                                </motion.div>
                                
                                <motion.div 
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1F7A8C]/10 transition-all duration-300 group"
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="p-2 bg-gradient-to-br from-[#1F7A8C] via-[#BFDBF7] to-[#1F7A8C] rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300"
                                    >
                                        <MapPin className="w-4 h-4 text-white" />
                                    </motion.div>
                                    <p>26°43'53.2"N 83°25'59.3"E</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Google Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-[#022B3A]/80 to-[#1F7A8C]/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-[#1F7A8C]/30 hover:border-[#1F7A8C]/60 transition-all duration-300"
                    >
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#BFDBF7] to-[#E1E5F2] bg-clip-text text-transparent">Location</h3>
                        <div className="w-full h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden border-2 border-[#1F7A8C]/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#1F7A8C] relative group">
                            {/* Overlay glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A8C]/0 to-[#BFDBF7]/0 group-hover:from-[#1F7A8C]/10 group-hover:to-[#BFDBF7]/10 transition-all duration-500 pointer-events-none z-10"></div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8315821487365!2d83.43097807534985!3d26.73145767672855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991445deb5b65d9%3A0x395c8057c425a46!2sMadan%20Mohan%20Malaviya%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1704441600000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="MMMUT Location"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-t-2 border-[#1F7A8C]/30 pt-6 text-center"
                >
                    <motion.p 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm font-semibold bg-gradient-to-r from-[#BFDBF7] via-[#E1E5F2] to-[#BFDBF7] bg-clip-text text-transparent cursor-default"
                    >
                        © 2024 Dr. Harish Chandra. All rights reserved.
                    </motion.p>
                    <p className="text-xs text-gray-500 mt-2">Build and Maintained by Team FLUX</p>
                </motion.div>
            </div>
        </motion.footer>
    );
}