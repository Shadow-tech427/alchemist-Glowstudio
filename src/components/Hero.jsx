import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center bg-linear-to-b from-dark-900 to-black overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gold-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-lg h-128 bg-gold-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="animate-fade-in-up">
                    <span className="inline-block px-4 py-1 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-6">
                        Luxury Beauty Salon
                    </span>

                    <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
                        <span className="gold-text">Where Beauty</span>
                        <br />
                        <span className="text-white">Meets Alchemy</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Experience luxury beauty services crafted with precision and passion,
                        Your journey to radiance starts here.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/booking" className="btn-primary text-lg">
                            Book Appointment
                        </Link>
                        <a href="#services" className="btn-secondary text-lg">
                            Explore Services
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
                        <div className="text-center">
                            <p className="text-3xl font-playfair gold-text font-bold">2+</p>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-playfair gold-text font-bold">50+</p>
                            <p className="text-gray-400 text-sm">Services</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-playfair gold-text font-bold">200+</p>
                            <p className="text-gray-400 text-sm">Happy Clients</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-playfair gold-text font-bold">5+</p>
                            <p className="text-gray-400 text-sm">Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;