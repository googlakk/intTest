
import React from 'react';
import { Instagram, Facebook, Youtube, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white pt-24 pb-12 relative overflow-hidden">
      {/* Circuit Board Oyu Marquee */}
      <div className="absolute top-0 left-0 w-full h-[60px] overflow-hidden opacity-10 pointer-events-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Repeated for seamless loop */}
          {[...Array(10)].map((_, i) => (
            <img key={i} src="/circuit-oyu.svg" className="h-[60px] w-auto inline-block" alt="" />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Logo Column */}
          <div className="space-y-8">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-[#0A192F] italic uppercase">Intellect <span className="text-xs uppercase font-light not-italic">Pro School</span></div>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.footer.tagline}</p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="text-xl font-bold text-gray-400 uppercase tracking-tight">IP Primary</div>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Foundation Years</p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="text-xl font-bold text-blue-900 italic">IP <span className="text-xs uppercase font-light not-italic">Athletics</span></div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Elite Sport Division</p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-lg font-bold text-[#0A192F] mb-6">{t.footer.menu}</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><Link to="/about" className="hover:text-[#0A192F]">{t.nav.about}</Link></li>
              <li><Link to="/academics" className="hover:text-[#0A192F]">{t.nav.objects}</Link></li>
              <li><Link to="/admissions" className="hover:text-[#0A192F]">{t.nav.businessCenter}</Link></li>
              <li><Link to="/facilities" className="hover:text-[#0A192F]">{t.nav.fitness}</Link></li>
              <li><Link to="/news" className="hover:text-[#0A192F]">{t.nav.live}</Link></li>
            </ul>
          </div>

          {/* Useful */}
          <div>
            <h4 className="text-lg font-bold text-[#0A192F] mb-6">{t.footer.useful}</h4>
            <ul className="space-y-4 text-sm text-gray-600 font-medium">
              <li><Link to="/about" className="hover:text-[#0A192F]">{t.footer.vacancies}</Link></li>
              <li><Link to="/contact" className="hover:text-[#0A192F]">{t.footer.procurement}</Link></li>
              <li><Link to="/news" className="hover:text-[#0A192F]">{t.footer.media}</Link></li>
              <li><Link to="/contact" className="hover:text-[#0A192F]">{t.nav.contacts}</Link></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-bold text-[#0A192F] mb-6">{t.footer.address}</h4>
            <ul className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <li>Main Campus: 125/1 Academic St.</li>
              <li>Primary Branch: 15/2 Knowledge Ave.</li>
              <li>Science Park: 53/1 Tech Blvd.</li>
              <li>Sports Complex: Olympic Village</li>
              <li>Summer Camp: Tamchy Resort Hub</li>
            </ul>
          </div>
        </div>

        {/* Social and Newsletter */}
        <div className="flex flex-col items-center space-y-12">
          <div className="flex space-x-6">
            {[MessageCircle, Instagram, Facebook, Youtube, Twitter].map((Icon, idx) => (
              <a key={idx} href="#" className="bg-[#0A192F] text-white p-3 rounded-full hover:bg-slate-700 transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="w-full max-w-md relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#0A192F] text-white py-4 px-8 rounded-full text-sm placeholder:text-gray-400 focus:outline-none"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:translate-x-1 transition-transform">
              <ChevronRight size={24} />
            </button>
            <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest font-semibold">{t.footer.subscribe}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ChevronRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default Footer;
