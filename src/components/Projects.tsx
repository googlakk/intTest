
import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../LanguageContext';

const campusesData: Project[] = [
  { id: '1', name: 'Science Lab', image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=600', isNew: true },
  { id: '2', name: 'Art Studio', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600' },
  { id: '3', name: 'Robotics Center', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600' },
  { id: '4', name: 'Central Library', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=600' },
  { id: '5', name: 'Olympic Pool', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600' },
  { id: '6', name: 'Music Conservatory', image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=600' },
];

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('active');
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A192F]">{t.projects.title}</h2>
            <div className="flex space-x-6">
              {['active', 'completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold pb-2 border-b-2 transition-all ${
                    activeTab === tab ? 'border-[#0A192F] text-[#0A192F]' : 'border-transparent text-gray-300 hover:text-gray-500'
                  }`}
                >
                  {tab === 'active' ? t.projects.active : t.projects.completed}
                </button>
              ))}
            </div>
          </div>
          
          <button className="flex items-center text-[#0A192F] font-bold text-xs uppercase tracking-widest group">
            {t.projects.all}
            <span className="ml-3 bg-[#0A192F] text-white p-2 rounded-full group-hover:bg-slate-700 transition-colors">
              <ChevronRight size={16} />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {campusesData.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl mb-8">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                
                {project.isNew && (
                  <div className="absolute top-6 left-6 bg-[#B8E2E8] text-[#0A192F] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {t.projects.new}
                  </div>
                )}
                
                <div className="absolute bottom-8 left-8 right-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-light mb-4">{project.name}</h3>
                  <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] uppercase tracking-widest font-bold">{t.projects.learnMore}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
