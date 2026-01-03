import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="pt-20 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0A192F] mb-6">Контакты</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Свяжитесь с нами</h2>
                        <p className="text-gray-600 mb-2">Телефон: +996 312 988 958</p>
                        <p className="text-gray-600 mb-2">Email: info@intellectpro.kg</p>
                        <p className="text-gray-600">Адрес: г. Бишкек, ул. Токомбаева, 21/3</p>
                    </div>
                    <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
                        Карта
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
