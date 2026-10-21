import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import { serviceData } from "../data/services";

const ServiceGrid = () => {
    const [activeCategory, setActiveCategory] = useState('hair');

    const categories = [
        { id: 'hair', label: 'Hair', icon: '' },
        { id: 'nails', label: 'Nails', icon: '' },
        { id: 'makeup', label: 'Makeup', icon: '' },
        { id: 'skin', label: 'Skin', icon: '' },
    ];

    const getServices = () => {
        const data = serviceData[activeCategory];
        if (!data) return [];
        if (Array.isArray(data.services)) return data.services;
        if (data.services && typeof data.services === 'object') {
            return [...(data.services.basic || []), ...(data.services.advanced || [])];
        }
        return [];
    };

    const services = getServices();

    return (
        <div>
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                            activeCategory === cat.id
                                ? 'gold-gradient text-black-900 border-gold-500'
                                : 'border-gold-500/30 text-gray-300 hover:border-gold-500'
                        }`}
                    >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {(services || []).map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        icon={categories.find(c => c.id === activeCategory)?.icon}
                        category={activeCategory}
                    />
                ))}
            </div>

            {/* Courses */}
            <div className="mt-12">
                <h3 className="text-2xl font-playfair gold-text text-center mb-6">
                    Professional Courses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-x-4xl mx-auto">
                    {(serviceData?.courses || []).map((course, index) => (
                        <ServiceCard key={index} service={course} icon="" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceGrid;