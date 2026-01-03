import React from 'react';
import { SectionData } from '../../types';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CtaGridSectionProps {
    data: SectionData;
}

const CtaGridSection: React.FC<CtaGridSectionProps> = ({ data }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {data.title && (
                    <h2 className="text-3xl font-bold mb-12 text-[#0A192F] tracking-tight">{data.title}</h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items?.map((link: any, idx: number) => (
                        <Link
                            key={idx}
                            to={link.link}
                            className="group relative h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer block"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${link.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 w-full text-white transform transition-transform duration-300">
                                {link.label && (
                                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-sm rounded-full">
                                        {link.label}
                                    </span>
                                )}
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#64FFDA] transition-colors duration-300">
                                    {link.title}
                                </h3>
                                <div className="flex items-center text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Detailed <ArrowRight size={16} className="ml-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CtaGridSection;
