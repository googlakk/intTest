import React from 'react';
import { SectionData } from '../../types';
import { Link } from 'react-router-dom';

interface TextMediaSectionProps {
    data: SectionData;
}

const TextMediaSection: React.FC<TextMediaSectionProps> = ({ data }) => {
    const isRight = data.layout === 'right';
    const isCenter = data.layout === 'center';

    if (isCenter) {
        return (
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-4xl font-bold text-[#0A192F] mb-6">{data.title}</h2>
                    <div className="w-20 h-1 bg-[#64FFDA] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">{data.content}</p>
                    {data.ctaLink && (
                        <Link to={data.ctaLink} className="inline-block border-2 border-[#0A192F] text-[#0A192F] px-8 py-3 rounded-full font-bold hover:bg-[#0A192F] hover:text-white transition-colors">
                            {data.ctaLabel}
                        </Link>
                    )}
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col md:flex-row items-center gap-16 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                    {/* Image Side */}
                    <div className="w-full md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                            <img src={data.image} alt={data.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="text-4xl font-bold text-[#0A192F] leading-tight">{data.title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{data.content}</p>
                        {data.ctaLink && (
                            <Link to={data.ctaLink} className="inline-block bg-[#0A192F] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#172A46] transition-colors">
                                {data.ctaLabel}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextMediaSection;
