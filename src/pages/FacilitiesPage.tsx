import React from 'react';

const FacilitiesPage: React.FC = () => {
    return (
        <div className="pt-20 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0A192F] mb-6">Кампус и условия</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Современное пространство для учебы, творчества и спорта.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">Фотогалерея</div>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">Лаборатории</div>
                    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">Спортзал</div>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesPage;
