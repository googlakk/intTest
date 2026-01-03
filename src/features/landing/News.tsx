
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { NewsItem } from '../../types';
import { useLanguage } from '../../LanguageContext';
import { IMAGES } from '../../constants/assets';

const schoolNews: NewsItem[] = [
  {
    id: '1',
    title: 'Intellect Pro побеждает на международной олимпиаде по математике!',
    date: '15.05.2025',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    title: 'Открытие новой STEAM лаборатории в кампусе "Старшая школа"',
    date: '10.05.2025',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '3',
    title: 'Прием документов на 2025-2026 учебный год открыт!',
    date: '01.05.2025',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?auto=format&fit=crop&q=80&w=600'
  },
];

const News: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#0A192F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{t.news.title}</h2>
          <button className="flex items-center text-2xl font-light hover:translate-x-2 transition-transform">
            {t.news.more} <ChevronRight size={24} className="ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolNews.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full">
              <div className="relative aspect-[16/9]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#0A192F] text-white px-4 py-1 rounded-full text-[10px] font-bold">
                  {item.date}
                </div>
              </div>
              <div className="p-8 flex-grow">
                <p className="text-[#0A192F] font-bold text-lg leading-tight line-clamp-2">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
