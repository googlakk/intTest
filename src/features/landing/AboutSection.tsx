
import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../LanguageContext';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h4 className="text-[#0A192F] font-bold text-xs uppercase tracking-[0.3em] opacity-50">{t.about.tag}</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] leading-[1.1]">
                {t.about.title.split(' будущего')[0]} <br /> <span className="text-gray-400 font-light italic">будущего</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl font-light">
              {t.about.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#F8F9FA] p-4 rounded-2xl text-[#0A192F]">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-[#0A192F] uppercase text-xs tracking-wider mb-1">{t.about.premium}</h5>
                  <p className="text-xs text-gray-500">{t.about.premiumDesc}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#F8F9FA] p-4 rounded-2xl text-[#0A192F]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-[#0A192F] uppercase text-xs tracking-wider mb-1">{t.about.reliable}</h5>
                  <p className="text-xs text-gray-500">{t.about.reliableDesc}</p>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="group flex items-center text-[#0A192F] font-bold text-sm uppercase tracking-widest border-b-2 border-[#0A192F] pb-1 hover:opacity-70 transition-all"
            >
              {t.about.more}
              <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000"
                alt="Intellect Pro Learning"
                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-50 rounded-full -z-10 blur-3xl opacity-60"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gray-100 rounded-full -z-10 blur-3xl opacity-80"></div>

            <div className="absolute -bottom-10 -right-10 bg-[#0A192F] p-10 rounded-3xl text-white shadow-2xl hidden md:block">
              <div className="text-5xl font-light mb-2">25+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">{t.about.years}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
