import React from 'react';
import { useLocation } from 'react-router-dom';
import PageBuilder from './PageBuilder';
import { getPagesConfig } from '../constants/pagesConfig';
import { useLanguage } from '../LanguageContext';

const DynamicPage: React.FC = () => {
    const location = useLocation();
    const { t } = useLanguage();
    const pagesConfig = getPagesConfig(t);
    const config = pagesConfig[location.pathname];

    if (!config) {
        return (
            <div className="pt-32 pb-20 text-center container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0A192F] mb-4">404 - Page Config Not Found</h1>
                <p className="text-gray-600">The configuration for <code>{location.pathname}</code> is missing.</p>
            </div>
        );
    }

    return (
        <div className="pt-0"> {/* PageBuilder handles padding/sections */}
            <PageBuilder config={config} />
        </div>
    );
};

export default DynamicPage;
