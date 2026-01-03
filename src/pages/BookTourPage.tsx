import React from 'react';

const BookTourPage: React.FC = () => {
    return (
        <div className="pt-20 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0A192F] mb-6">Записаться на экскурсию</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Оставьте свои данные, и мы свяжемся с вами, чтобы согласовать удобное время.
                </p>
                <form className="max-w-md space-y-4">
                    <input type="text" placeholder="Ваше имя" className="w-full p-3 border rounded-lg" />
                    <input type="tel" placeholder="Номер телефона" className="w-full p-3 border rounded-lg" />
                    <button className="w-full bg-[#0A192F] text-white p-3 rounded-lg font-bold hover:bg-[#112240] transition">
                        Отправить заявку
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookTourPage;
