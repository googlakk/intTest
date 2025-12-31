
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      span: "md:col-span-2 md:row-span-2",
      title: "Collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      span: "md:col-span-1 md:row-span-1",
      title: "Discovery"
    },
    {
      url: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&q=80&w=800",
      span: "md:col-span-1 md:row-span-1",
      title: "Athletics"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      span: "md:col-span-1 md:row-span-2",
      title: "Creativity"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      span: "md:col-span-1 md:row-span-1",
      title: "Mentorship"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F]">{t.gallery.title}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">{t.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
          {photos.map((photo, idx) => (
            <div 
              key={idx} 
              className={`relative group overflow-hidden rounded-[2rem] shadow-lg ${photo.span}`}
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-[0.3em] font-bold border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  {photo.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
