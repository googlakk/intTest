import React from 'react';
import { SectionData } from '../../types';

interface StatsSectionProps {
    data: SectionData;
}

const StatsSection: React.FC<StatsSectionProps> = ({ data }) => {
    return (
        <section className="bg-[#0A192F] py-20 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    {data.items?.map((item: any, idx: number) => (
                        <div key={idx} className="p-4">
                            <div className="text-5xl font-bold text-[#64FFDA] mb-2">{item.value}</div>
                            <div className="text-sm uppercase tracking-widest font-semibold text-white/60">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
