import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-emerald-50 border-t border-emerald-100 pt-6 pb-4">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Contact Details */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Contact Details</h3>
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
                    </div>

                    {/* Google Map */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Location</h3>
                        <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-emerald-600">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8315821487365!2d83.43097807534985!3d26.73145767672855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991445deb5b65d9%3A0x395c8057c425a46!2sMadan%20Mohan%20Malaviya%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1704441600000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="MMMUT Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-4 text-center text-gray-600 text-sm">
                    <p>© 2024 Dr. Harish Chandra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}