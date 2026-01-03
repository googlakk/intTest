import React from 'react';
import { PageConfig, PageSection } from '../types';

import HeroSection from './sections/HeroSection';
import TextMediaSection from './sections/TextMediaSection';
import StatsSection from './sections/StatsSection';
import CtaGridSection from './sections/CtaGridSection';
import CardSliderSection from './sections/CardSliderSection';
import AccordionSection from './sections/AccordionSection';

interface PageBuilderProps {
    config: PageConfig;
}

const PageBuilder: React.FC<PageBuilderProps> = ({ config }) => {
    if (!config) return <div>Page configuration not found</div>;

    return (
        <div className="min-h-screen bg-white">
            {config.sections.map((section: PageSection) => {
                switch (section.type) {
                    case 'hero':
                        return <HeroSection key={section.id} data={section.data} />;
                    case 'text-media':
                        return <TextMediaSection key={section.id} data={section.data} />;
                    case 'stats':
                        return <StatsSection key={section.id} data={section.data} />;
                    case 'cta-grid':
                        return <CtaGridSection key={section.id} data={section.data} />;
                    case 'card-slider':
                        return <CardSliderSection key={section.id} data={section.data} />;
                    case 'accordion':
                        return <AccordionSection key={section.id} data={section.data} />;
                    default:
                        return <div key={section.id} className="p-10 text-center text-red-500">Unknown section type: {section.type}</div>;
                }
            })}
        </div>
    );
};

export default PageBuilder;
