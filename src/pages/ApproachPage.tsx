import React from 'react';

const ApproachPage: React.FC = () => {
    return (
        <div className="pt-20 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0A192F] mb-6">Наш подход</h1>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                    Мы объединяем передовые методики нейро-педагогики с глубоким уважением к личности ребенка.
                    Здесь мы развиваем не только академические знания, но и гибкие навыки, необходимые для будущего.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold mb-3">Методология</h3>
                        <p className="text-gray-500">Индивидуальные треки развития и адаптивное обучение.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold mb-3">Технологии</h3>
                        <p className="text-gray-500">Использование AI и современных образовательных платформ.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApproachPage;
