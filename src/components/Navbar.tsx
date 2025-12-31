
import React, { useState, useEffect } from 'react';
import { Search, X, Globe } from 'lucide-react';
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

  const navLinks = [
    { name: t.nav.home, id: 'home', path: '/' },
    { name: t.nav.about, id: 'about', path: '/about' },
    { name: t.nav.objects, id: 'programs', path: '#' },
    { name: t.nav.businessCenter, id: 'admission', path: '#' },
    { name: t.nav.live, id: 'life', path: '#' },
    { name: t.nav.contacts, id: 'contacts', path: '#' },
  ];

  const handleLinkClick = (path: string) => {
    if (path !== '#') {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 pt-6 px-6 lg:px-10 flex justify-between items-center ${isScrolled ? 'pointer-events-none' : ''}`}>
      {!isScrolled && <div className="absolute inset-0 nav-gradient -z-10 h-32 opacity-40 pointer-events-none"></div>}

      {/* Brand / Logo */}
      <div 
        className={`flex-shrink-0 flex flex-col cursor-pointer transition-opacity duration-300 pointer-events-auto ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
        onClick={() => handleLinkClick('/')}
      >
        <div className="text-2xl font-bold tracking-tight flex items-center italic text-white uppercase">
          <span className="bg-white text-[#0A192F] px-2 mr-1 rounded-sm not-italic">IP</span>
          <span className="text-[10px] tracking-[0.2em] font-light not-italic">Intellect Pro</span>
        </div>
        <div className="text-[7px] text-white/50 uppercase tracking-[0.3em] font-bold mt-1">School of excellence</div>
      </div>

      {/* Floating Pill Navigation */}
      <div className={`hidden lg:flex items-center bg-[#0A192F] rounded-full px-8 py-3.5 shadow-2xl transition-all duration-500 pointer-events-auto border border-white/10 ${isScrolled ? 'translate-y-2' : ''}`}>
        <div className="flex items-center space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={() => handleLinkClick(link.path)}
              className={`text-[11px] font-medium uppercase tracking-widest transition-all ${isActive(link.path) ? 'text-white border-b border-white/40' : 'text-white/60 hover:text-white'}`}
            >
              {link.name}
            </button>
          ))}
          <div className="w-px h-4 bg-white/20 ml-2"></div>
          <button className="text-white hover:text-gray-300 transition-colors pl-2">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4 pointer-events-auto">
        <button 
          onClick={toggleLanguage}
          className={`flex items-center space-x-2 cursor-pointer hover:opacity-70 transition-all ${isScrolled ? 'text-[#0A192F]' : 'text-white'}`}
        >
          <Globe size={16} />
          <span className="text-[11px] font-bold uppercase tracking-widest">{language.toUpperCase()}</span>
        </button>

        <button 
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-[#0A192F] text-white shadow-xl hover:scale-105 transition-transform group`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <div className="flex flex-col space-y-1 items-end">
            <div className="w-6 h-0.5 bg-white rounded-full"></div>
            <div className="w-4 h-0.5 bg-white rounded-full group-hover:w-6 transition-all"></div>
          </div>
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0A192F] z-[110] transition-all duration-500 transform ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="p-10 h-full flex flex-col">
          <div className="flex justify-between items-center mb-16">
            <div className="text-3xl font-bold text-white italic uppercase">Intellect Pro school</div>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X size={28} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-8">
            {navLinks.map((link, idx) => (
              <button 
                key={link.id} 
                onClick={() => handleLinkClick(link.path)}
                className="text-white text-4xl sm:text-5xl font-light tracking-wide text-left hover:translate-x-6 transition-transform inline-block group"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className="text-white/20 mr-4 font-mono text-xl">0{idx + 1}</span>
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="mt-auto pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="text-white/60 space-y-2">
              <p className="text-xs uppercase tracking-widest font-bold">Admission Office</p>
              <p className="text-2xl font-light">+996 312 98 89 58</p>
              <p className="text-lg font-light text-white/40 italic">admissions@intellectpro.school</p>
            </div>
            <button className="bg-white text-[#0A192F] px-10 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-2xl">
              {t.nav.contactBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
