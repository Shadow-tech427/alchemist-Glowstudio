import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const MobileCTA = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-black-800/95 backdrop-blur-sm border-t border-gold-500/20 p-3">
            <div className="flex items-center justify-around gap-2">
                <a
                    href="tel:+919356434353"
                    className="flex items-center gap-2 px-4 py-2 bg-gold-500/10 text-gold-400 rounded-lg hover:bg-gold-500/20 transition-colors"
                >
                    <FaPhone size={16} />
                    <span className="text-sm font-medium">Call</span>
                </a>
                <a
                    href="https://wa.me/919356434353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors"
                >
                    <FaWhatsapp size={16} />
                    <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <Link
                    to="/booking"
                    className="flex-1 btn-primary text-center py-2 text-sm"
                >
                    Book Now
                </Link>
            </div>
        </div>
    );
};

export default MobileCTA;