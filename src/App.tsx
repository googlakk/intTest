
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ApproachPage from './pages/ApproachPage';
import AcademicsPage from './pages/AcademicsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import BookTourPage from './pages/BookTourPage';
import NewsPage from './pages/NewsPage';
// import KeepExploringBlock from './components/KeepExploringBlock'; // Now handled by PageBuilder
import DynamicPage from './components/DynamicPage';
import { MessageCircle } from 'lucide-react';
import { LanguageProvider } from './LanguageContext';



const AppContent: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/enrolments" element={<DynamicPage />} />
          <Route path="/about" element={<DynamicPage />} />
          <Route path="/approach" element={<DynamicPage />} />
          <Route path="/academics" element={<DynamicPage />} />
          <Route path="/facilities" element={<DynamicPage />} />
          <Route path="/admissions" element={<DynamicPage />} />

          {/* Fallback to simple pages or placeholders for deeper logic */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-tour" element={<BookTourPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/apply" element={<AdmissionsPage />} /> {/* Use placeholder for generic apply link for now */}
          <Route path="*" element={<DynamicPage />} /> {/* Fallback for configured pages that match pattern but miss explicit route */}
        </Routes>
      </main>



      {/* KeepExploringBlock is now a section in DynamicPage */}

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
    </div >
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
