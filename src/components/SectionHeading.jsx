import React from "react";

const SectionHeading = ({
    title,
    subtitle,
    className = '',
    centered = true
}) => {
    return (
        <div className={`${centered ? 'text-center' : ''} ${className}`}>
            <h2 className="text-3xl md:text-4xl font-playfair gold-text font-bold mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-x-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;