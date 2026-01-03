import React from 'react';

const NewsPage: React.FC = () => {
    return (
        <div className="pt-20 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0A192F] mb-6">Новости и Блог</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                            <div className="h-48 bg-gray-200"></div>
                            <div className="p-6">
                                <div className="text-sm text-gray-400 mb-2">02.01.2026</div>
                                <h3 className="text-xl font-bold mb-2">Школьное событие {i}</h3>
                                <p className="text-gray-600">Краткое описание события...</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
