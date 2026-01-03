import React from 'react';

const AcademicsPage: React.FC = () => {
    return (
        <div className="pt-20 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0A192F] mb-6">Ступени обучения</h1>
                <p className="text-lg text-gray-600 mb-8">
                    От младших классов до старшей школы — полноценный образовательный маршрут.
                </p>
                <div className="space-y-6">
                    <div className="p-6 bg-blue-50 rounded-xl">
                        <h2 className="text-2xl font-bold mb-2">Начальная школа</h2>
                        <p>Фундаментальные знания и любовь к учебе.</p>
                    </div>
                    <div className="p-6 bg-indigo-50 rounded-xl">
                        <h2 className="text-2xl font-bold mb-2">Средняя школа</h2>
                        <p>Развитие критического мышления и проектная деятельность.</p>
                    </div>
                    <div className="p-6 bg-purple-50 rounded-xl">
                        <h2 className="text-2xl font-bold mb-2">Старшая школа</h2>
                        <p>Профориентация и подготовка к университету.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademicsPage;
