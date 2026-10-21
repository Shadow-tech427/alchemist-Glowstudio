import React from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import ServiceGrid from "../components/ServiceGrid";
import SectionHeading from "../components/SectionHeading";
import InstagramGallery from "../components/InstagramGallery";
import MobileCTA from "../components/MobileCTA";

const Home = () => {
    return (
        <MainLayout>
            <Hero />

            <section id="services" className="py-20 bg-black-800/30">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Our Services"
                        subtitle="Discover out range of luxury beauty services crafted to perfection"
                    />
                    <ServiceGrid />
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeading
                                title="Why Choose Us"
                                subtitle="Experience the difference at Alchemist Glow Studio"
                                centered={false}
                            />
                            <div className="space-y-4 mt-6">
                                <div className="flex gap-4 items-start">
                                    <span className="text-gold-400 text-2xl"></span>
                                    <div>
                                        <h4 className="text-white font-semibold">Luxury Experience</h4>
                                        <p className="text-gray-400 text-sm">Premium services in a sophisticated environment</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-gold-400 text-2xl"></span>
                                    <div>
                                        <h4 className="text-white font-semibold">Expert Stylists</h4>
                                        <p className="text-gray-400 text-sm">Highly trained professionals with years of experience</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <span className="text-gold-400 text-2xl"></span>
                                    <div>
                                        <h4 className="text-white font-semibold">Premium Products</h4>
                                        <p className="text-gray-400 text-sm">Only the best quality products for your beauty</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400"
                                alt="Salon interior"
                                className="rounded-xl border-2 border-gold-500/20 w-full h-48 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <InstagramGallery />
            <MobileCTA />
        </MainLayout>
    );
};

export default Home;