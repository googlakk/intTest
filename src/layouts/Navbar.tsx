
import React, { useState, useEffect } from 'react';
import { X, Globe, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru');
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Pill Menu Items (Visible on Desktop)
  const pillItems = [
    { label: language === 'en' ? 'Book a Tour' : 'Экскурсия', path: '/book-tour' },
    { label: t.nav.businessCenter, path: '/admissions' },
    { label: t.nav.objects, path: '/academics' },
    { label: t.nav.contacts, path: '/contact' },
  ];

  // Full Menu Categories (Visible in Overlay)
  const fullMenu = [
    { label: t.nav.about, path: '/about' },
    { label: language === 'en' ? 'Our Approach' : 'Наш подход', path: '/approach' },
    { label: t.nav.objects, path: '/academics' },
    { label: t.nav.fitness, path: '/facilities' },
    { label: t.nav.businessCenter, path: '/admissions' },
    { label: t.nav.live, path: '/news' },
    { label: t.nav.contacts, path: '/contact' },
  ];

  // Useful Links (Sidebar in Overlay)
  const usefulLinks = [
    { label: language === 'en' ? 'Book a Tour' : 'Экскурсия', path: '/book-tour' },
    { label: t.nav.contactBtn, path: '/admissions' },
    { label: language === 'en' ? 'School Fees' : 'Стоимость', path: '/admissions' },
    { label: t.nav.contacts, path: '/contact' },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 pointer-events-none`}>
        <div className="relative flex justify-between items-center px-6 lg:px-10 py-6">

          {/* Logo - Always visible */}
          <div
            className="flex-shrink-0 flex flex-col cursor-pointer z-[101] pointer-events-auto"
            onClick={() => handleLinkClick('/')}
          >
            <div className="text-2xl font-bold tracking-tight flex items-center italic text-white uppercase drop-shadow-md">
              <span className="bg-white text-[#0A192F] px-2 mr-1 rounded-sm not-italic">IP</span>
              <span className="text-[10px] tracking-[0.2em] font-light not-italic">Intellect Pro</span>
            </div>
          </div>

          {/* Floating Pill - Desktop Only - CENTERED ABSOLUTELY */}
          <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center bg-[#0A192F] text-white rounded-full px-2 py-2 shadow-2xl transition-all duration-300 pointer-events-auto ${isScrolled ? 'opacity-90 hover:opacity-100' : 'opacity-100'} ${mobileMenuOpen ? 'opacity-0 invisible' : ''}`}>
            {pillItems.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(item.path)}
                  className="relative px-4 py-2 text-[13px] font-medium rounded-full transition-colors z-10"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${isActive ? 'text-[#0A192F] font-bold' : 'text-white/80 hover:text-white'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
            <div className="w-px h-4 bg-white/20 mx-2"></div>
            <button className="p-2 text-white/80 hover:text-white">
              <Search size={18} />
            </button>
          </div>

          <div className="flex items-center space-x-4 pointer-events-auto">
            {/* Language & Burger */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="hidden lg:flex items-center space-x-2 cursor-pointer bg-[#0A192F] text-white px-4 py-3 rounded-full hover:bg-[#112240] transition-all shadow-lg"
              >
                <Globe size={16} />
                <span className="text-[11px] font-bold uppercase tracking-widest">{language.toUpperCase()}</span>
              </button>

              <button
                className="w-14 h-14 flex items-center justify-center rounded-full bg-[#0A192F] text-white shadow-xl hover:bg-[#112240] transition-all z-[120]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <div className="flex flex-col space-y-1.5 items-center w-6">
                  <div className="w-6 h-0.5 bg-white rounded-full"></div>
                  <div className="w-6 h-0.5 bg-white rounded-full"></div>
                </div>}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[110] transition-all duration-500 flex ${mobileMenuOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-20 py-24 w-full h-full flex flex-col lg:flex-row">

          {/* Sidebar (Useful Links) */}
          <div className="lg:w-1/4 hidden lg:block border-r border-gray-100 pr-10">
            <div className="w-20 mb-10">
              {/* Logo in Black/Blue for White bg */}
              <div className="text-2xl font-bold tracking-tight flex items-center italic text-[#0A192F] uppercase">
                <span className="bg-[#0A192F] text-white px-2 mr-1 rounded-sm not-italic">IP</span>
              </div>
            </div>

            <h3 className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-6">{t.footer.useful}</h3>
            <div className="space-y-4 flex flex-col items-start">
              {usefulLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-[#0A192F] hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Menu Links */}
          <div className="lg:w-3/4 flex flex-col justify-center h-full pl-0 lg:pl-20">
            <div className="space-y-2">
              {fullMenu.map((item, idx) => (
                <div key={idx} className="group">
                  <button
                    onClick={() => handleLinkClick(item.path)}
                    className="block text-3xl lg:text-5xl font-medium text-[#0A192F] hover:text-blue-700 transition-all text-left py-2 border-b border-transparent hover:border-gray-100 w-full"
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer in Overlay */}
        <div className="absolute bottom-10 left-0 w-full px-6 lg:px-20 text-xs text-gray-400 flex justify-between items-center">
          <div className="space-x-4">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
          <div className="space-x-4">
            <span>{t.footer.privacy}</span>
            <span>{t.footer.childSafety}</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
