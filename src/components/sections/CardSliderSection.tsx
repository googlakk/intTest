import React from 'react';
import { SectionData } from '../../types';
import { Link } from 'react-router-dom';

interface CardSliderSectionProps {
    data: SectionData;
}

const CardSliderSection: React.FC<CardSliderSectionProps> = ({ data }) => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-4xl font-bold text-[#0A192F]">{data.title}</h2>
            </div>

            {/* Horizontal Scroll / Slider */}
            <div className="flex overflow-x-auto pb-12 snap-x px-6 gap-8 container mx-auto no-scrollbar">
                {data.items?.map((item: any, idx: number) => (
                    <Link
                        key={idx}
                        to={item.link}
                        className="flex-shrink-0 w-80 md:w-96 snap-center group block"
                    >
                        <div className="h-64 rounded-xl overflow-hidden mb-6 relative">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0A192F] mb-2">{item.title}</h3>
                        <p className="text-gray-500">{item.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CardSliderSection;
