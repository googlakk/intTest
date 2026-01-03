import React from 'react';

const AdmissionsPage: React.FC = () => {
    return (
        <div className="pt-20 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0A192F] mb-6">Поступление</h1>
                <p className="text-lg text-gray-600 mb-12">
                    3 простых шага, чтобы стать частью Intellect Pro School.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#64FFDA] text-[#0A192F] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                        <h3 className="text-xl font-bold mb-2">Заявка</h3>
                        <p className="text-gray-500">Заполните форму на сайте или позвоните нам.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#64FFDA] text-[#0A192F] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                        <h3 className="text-xl font-bold mb-2">Тестирование</h3>
                        <p className="text-gray-500">Пройдите вступительные испытания и собеседование.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#64FFDA] text-[#0A192F] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                        <h3 className="text-xl font-bold mb-2">Договор</h3>
                        <p className="text-gray-500">Подпишите документы и добро пожаловать!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionsPage;
