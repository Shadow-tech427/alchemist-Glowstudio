import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramGallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400',
        'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400',
        'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400',
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
    ];

    return (
        <div className="py-12 bg-black-800/30">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-3 mb-8">
                    <FaInstagram className="text-gold-400 text-3xl" />
                    <h2 className="text-3xl font-playfair gold-text font-bold">
                        Follow Us @alchemsitglowstudio
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="aspect-square overflow-hidden rounded-lg border-2 border-gold-500/20 hover:border-gold-500/60 transition-all duration-300"
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstagramGallery;