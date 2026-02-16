
import React, { useEffect, useRef, useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import HouseIcon from './HouseIcon'; // Import the new component

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { t } = useSettings();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient dark:from-slate-950 dark:to-slate-900 transition-colors"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className={`text-center lg:text-start transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8">
              {t.hero.title} <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300">
                {t.hero.titleAccent}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-5 rtl:space-x-reverse mb-12">
              <button 
                onClick={onCtaClick}
                className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xl shadow-2xl shadow-blue-600/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
              >
                {t.hero.ctaPrimary}
                <svg className="w-6 h-6 ml-3 rtl:mr-3 rtl:ml-0 rtl:rotate-180 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 rtl:space-x-reverse text-slate-500">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-800 shadow-xl" alt="User" />
                ))}
              </div>
              <div className="text-start">
                <div className="flex text-yellow-400 mb-0.5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                  4,800+ <span className="text-slate-500 font-medium">{t.hero.stats}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Visual Content: Isometric House SVG */}
          <div className={`mt-20 lg:mt-0 relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="relative w-full max-w-lg aspect-square">
              <HouseIcon />

              {/* Technician Arrival Float */}
              <div className="absolute -bottom-10 -left-10 rtl:left-auto rtl:-right-10 bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-[220px] -rotate-3 rtl:rotate-3 animate-float transition-colors">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 p-2 rounded-xl mr-3 rtl:mr-0 rtl:ml-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">{t.hero.techCard.badge}</span>
                </div>
                <p className="text-base font-bold text-slate-900 dark:text-white mb-1">{t.hero.techCard.status}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t.hero.techCard.arrival}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className={`mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-4 rtl:space-x-reverse group">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <span className="text-sm lg:text-base font-bold text-slate-700 dark:text-slate-300">{t.hero.trustBadges.vetted}</span>
          </div>
          
          <div className="flex items-center space-x-4 rtl:space-x-reverse group">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <span className="text-sm lg:text-base font-bold text-slate-700 dark:text-slate-300">{t.hero.trustBadges.warranty}</span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse group">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="text-sm lg:text-base font-bold text-slate-700 dark:text-slate-300">{t.hero.trustBadges.support}</span>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse group">
            <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-sm lg:text-base font-bold text-slate-700 dark:text-slate-300">{t.hero.trustBadges.response}</span>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
