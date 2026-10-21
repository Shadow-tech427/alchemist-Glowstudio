import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service, icon, category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/booking', { state: { service } });
    };

    return (
        <div
            onClick={handleClick}
            className="service-card group text-center"
        >
            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {icon || ''}
            </div>
            <h3 className="text-lg font-medium text-white group-hover:text-gold-400 transition-colors">
                {service}
            </h3>
            {category && (
                <p className="text-gold-400/60 text-xs mt-1">{category}</p>
            )}
            <div className="mt-3 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Book Now</span>
            </div>
        </div>
    );
};

export default ServiceCard;