import React, { useState } from 'react';
import { SectionData } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionSectionProps {
    data: SectionData;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ data }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-bold text-[#0A192F] mb-12 text-center">{data.title}</h2>
                <div className="space-y-4">
                    {data.items?.map((item: any, idx: number) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="text-xl font-bold text-[#0A192F]">{item.title}</span>
                                {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            {openIndex === idx && (
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccordionSection;
