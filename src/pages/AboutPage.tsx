
import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Award, Globe, Shield, Users, Clock, Target } from 'lucide-react';
import { IMAGES } from '../constants/assets';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: <Target className="w-8 h-8" />, title: t.about.mission, desc: t.about.missionText },
    { icon: <Clock className="w-8 h-8" />, title: t.about.history, desc: t.about.historyText },
  ];

  const leaders = [
    { name: "Алиса Ибрагимова", role: "Директор школы", img: IMAGES.ABOUT.LEADERS.ALISA },
    { name: "Марк Уильямс", role: "Академический советник", img: IMAGES.ABOUT.LEADERS.MARK },
    { name: "Елена Кузнецова", role: "Глава методического совета", img: IMAGES.ABOUT.LEADERS.ELENA },
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={IMAGES.ABOUT.HERO_BG}
          alt="Intellect Pro Architecture"
          className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-[#0A192F]/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center space-y-4 px-6">
          <h4 className="text-white/60 text-xs uppercase tracking-[0.4em] font-bold">{t.nav.about}</h4>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
            Intellect <span className="italic font-light">Pro school</span>
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F] leading-tight">
              Наша философия <br /> <span className="text-gray-400 font-light italic">и стремления</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Мы верим, что образование — это не просто накопление знаний, а процесс открытия талантов.
              В Intellect Pro school мы создаем пространство, где академическая строгость встречается с творческой свободой.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {t.about.valuesItems.map((val: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0A192F] rounded-full"></div>
                  <span className="text-sm font-bold uppercase tracking-widest text-[#0A192F]">{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] space-y-6 hover:shadow-xl transition-shadow">
                <div className="text-[#0A192F]">{f.icon}</div>
                <h3 className="text-xl font-bold text-[#0A192F]">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Heritage Image Section */}
      <section className="py-12 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="rounded-[3.5rem] overflow-hidden relative group">
          <img
            src={IMAGES.ABOUT.CAMPUS_HERITAGE}
            alt="School Heritage"
            className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/80 to-transparent flex items-center p-12 md:p-24">
            <div className="max-w-md text-white space-y-4">
              <h3 className="text-3xl font-light italic">Наследие и инновации</h3>
              <p className="text-sm text-white/70 leading-relaxed">Наши учебные пространства спроектированы так, чтобы вдохновлять на открытия каждый день.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-[#0A192F] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.about.leadership}</h2>
            <div className="w-24 h-1 bg-white/20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group space-y-6">
                <div className="aspect-[3/4] overflow-hidden rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-light">{leader.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mt-1">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0A192F] uppercase tracking-[0.2em]">Международные стандарты</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 opacity-40 hover:opacity-100 transition-opacity">
          <div className="flex flex-col items-center space-y-2">
            <Globe className="w-12 h-12" />
            <span className="text-[10px] font-bold uppercase tracking-widest">IB World School</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Award className="w-12 h-12" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Cambridge Assessment</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Shield className="w-12 h-12" />
            <span className="text-[10px] font-bold uppercase tracking-widest">CIS Member</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Users className="w-12 h-12" />
            <span className="text-[10px] font-bold uppercase tracking-widest">UNESCO Partner</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
