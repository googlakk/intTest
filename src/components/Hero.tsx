
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, decimals = 0, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <div ref={elementRef}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </div>
  );
};

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-end pb-12 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=90&w=2000" 
          alt="Modern School Campus"
          className="w-full h-full object-cover animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col space-y-12">
          
          <div className="max-w-3xl space-y-6">
            <h1 className="text-white text-5xl sm:text-7xl font-light leading-[1.1] tracking-tight">
              {t.hero.title1} <br/>
              <span className="font-bold italic">{t.hero.title2}</span>
            </h1>
            <p className="text-white/70 text-lg sm:text-xl font-light max-w-xl">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md border border-white/20">
            <div className="p-8 sm:p-12 text-center text-white bg-black/20 group hover:bg-black/30 transition-colors">
              <div className="text-4xl sm:text-5xl font-light mb-3">
                <Counter end={1998} />
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">{t.hero.stat1}</div>
            </div>
            
            <div className="p-8 sm:p-12 text-center text-white bg-black/20 group hover:bg-black/30 transition-colors">
              <div className="text-4xl sm:text-5xl font-light mb-3 flex justify-center">
                <Counter end={450} suffix="+" />
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">{t.hero.stat2}</div>
            </div>

            <div className="p-8 sm:p-12 text-center text-white bg-black/20 group hover:bg-black/30 transition-colors">
              <div className="text-4xl sm:text-5xl font-light mb-3 flex justify-center">
                <Counter end={25000} suffix=" м²" />
              </div>
              <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">{t.hero.stat3}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
