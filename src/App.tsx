
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import News from './components/News';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider } from './LanguageContext';

const Home: React.FC = () => (
  <>
    <Hero />
    <AboutSection />
    <Projects />
    <Gallery />
    <News />
    <ContactSection />
  </>
);

const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/996312988958" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      >
        <div className="absolute -top-12 right-0 bg-white text-[#0A192F] px-3 py-1 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </div>
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </Router>
  );
};

export default App;
