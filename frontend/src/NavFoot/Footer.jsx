import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 border-t-4 border-emerald-400 pt-6 pb-4 relative overflow-hidden"
        >
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(16,185,129,0.1)_20px,rgba(16,185,129,0.1)_40px)]"></div>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/30"></div>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Contact Details</h3>
                        <div className="space-y-1 text-gray-700 text-sm">
                            <p className="font-semibold text-gray-900">Dr. Harish Chandra</p>
                            <p>Assistant Professor</p>
                            <p>Department of Mathematics and Scientific Computing</p>
                            <p>Madan Mohan Malaviya University of Technology</p>
                            <p>Gorakhpur, Uttar Pradesh - 273010, India</p>
                            
                            <div className="pt-2 space-y-1">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-emerald-600" />
                                    <div>
                                        <a href="tel:+919450656757" className="hover:text-emerald-600 transition-colors">
                                            +91-9450656757
                                        </a>
                                        {'; '}
                                        <a href="tel:+919235501647" className="hover:text-emerald-600 transition-colors">
                                            +91-9235501647
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-emerald-600" />
                                    <div>
                                        <a href="mailto:hcas@mmmut.ac.in" className="hover:text-emerald-600 transition-colors underline">
                                            hcas@mmmut.ac.in
                                        </a>
                                        {'; '}
                                        <a href="mailto:hc19856@gmail.com" className="hover:text-emerald-600 transition-colors underline">
                                            hc19856@gmail.com
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-2">
                                    <MapPin className="w-4 h-4 text-emerald-600 mt-0.5" />
                                    <p>26°43'53.2"N 83°25'59.3"E</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Google Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">Location</h3>
                        <div className="w-full h-40 rounded-xl overflow-hidden border-2 border-emerald-300 shadow-md hover:shadow-lg transition-shadow duration-300">
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
                    className="border-t-2 border-emerald-200 pt-4 text-center"
                >
                    <p className="text-sm font-medium text-transparent bg-clip-text bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600">
                        © 2024 Dr. Harish Chandra. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500 mt-2">Build and Maintained by Team FLUX</p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
