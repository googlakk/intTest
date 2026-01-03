import React from 'react';
import { SectionData } from '../../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
    data: SectionData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
            {/* Background Media */}
            <div className="absolute inset-0 z-0">
                {data.video ? (
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src={data.video} type="video/mp4" />
                    </video>
                ) : (
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${data.image})` }}
                    />
                )}
                <div className="absolute inset-0 bg-[#0A192F]/60" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up">
                    {data.title}
                </h1>
                {data.subtitle && (
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        {data.subtitle}
                    </p>
                )}
                {data.ctaLink && (
                    <Link
                        to={data.ctaLink}
                        className="inline-flex items-center bg-[#64FFDA] text-[#0A192F] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
                    >
                        {data.ctaLabel} <ArrowRight className="ml-2" />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HeroSection;
