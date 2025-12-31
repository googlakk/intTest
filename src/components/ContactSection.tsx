
import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Contact Form */}
        <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-xl">
          <form className="space-y-6">
            <div className="relative">
              <label className="text-[10px] text-gray-400 uppercase font-semibold absolute top-2 left-4">{t.contact.subject}</label>
              <div className="relative">
                <select className="w-full bg-[#F3F4F6] border-none rounded-xl pt-6 pb-2 px-4 text-sm appearance-none focus:ring-1 focus:ring-slate-300">
                  {t.contact.topics.map((topic: string) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
                <X className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" size={14} />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] text-gray-400 uppercase font-semibold absolute top-2 left-4">{t.contact.name}</label>
              <input 
                type="text" 
                required
                className="w-full bg-[#F3F4F6] border-none rounded-xl pt-6 pb-2 px-4 text-sm focus:ring-1 focus:ring-slate-300"
              />
            </div>

            <div className="relative">
              <label className="text-[10px] text-gray-400 uppercase font-semibold absolute top-2 left-4">{t.contact.phone}</label>
              <div className="flex">
                <span className="bg-[#F3F4F6] pt-6 pb-2 pl-4 text-sm text-gray-500 rounded-l-xl">+996</span>
                <input 
                  type="tel" 
                  placeholder="--- --- ---"
                  required
                  className="w-full bg-[#F3F4F6] border-none rounded-r-xl pt-6 pb-2 px-4 text-sm focus:ring-0"
                />
              </div>
            </div>

            <button className="w-full bg-[#0A192F] text-white py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-slate-800 transition-colors">
              {t.contact.submit}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:max-w-md">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] mb-12">{t.contact.title}</h2>
          
          <div className="space-y-6 text-xl font-medium text-slate-800">
            <div>
              <a href="tel:+996312988958" className="hover:text-blue-600 transition-colors">+996 312 98 89 58</a>
            </div>
            <div>
              <a href="tel:+996221007003" className="hover:text-blue-600 transition-colors">+996 221 007 003</a>
            </div>
            <div className="pt-4">
              <a href="mailto:sales@avangardstyle.kg" className="text-slate-600 hover:text-blue-600 transition-colors">sales@avangardstyle.kg</a>
            </div>
            <div>
              <a href="mailto:info@avangardstyle.kg" className="text-slate-600 hover:text-blue-600 transition-colors">info@avangardstyle.kg</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
