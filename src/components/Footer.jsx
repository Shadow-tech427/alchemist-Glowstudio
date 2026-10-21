import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black-900 border-t border-gold-500/20 py-12 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-playfair gold-text font-bold mb-4">
                            Alchemist Glow Studio
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Where Beauty Meets Alchemy. Experience luxury salon services crafted to perfection.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gold-400 hover:text-gold-300 transition-colors">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold-400 font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/booking" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                                    Book Appointment
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-gold-400 font-semibold mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm">Hair Services</li>
                            <li className="text-gray-400 text-sm">Nail Services</li>
                            <li className="text-gray-400 text-sm">Makeup Services</li>
                            <li className="text-gray-400 text-sm">Skin Services</li>
                            <li className="text-gray-400 text-sm">Professional Courses</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-gold-400 font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-gold-400 mt-1" />
                                <span className="text-gray-400 text-sm">Londhe Complex, 2nd Floor Near Palange Pharma, Natepute-Dahigao Road, Natepute</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaPhone className="text-gold-400" />
                                <span className="text-gray-400 text-sm">+91 9356434553</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gold-500/20 mt-8 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        {new Date(). getFullYear()} Alchemist Glow Studio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;