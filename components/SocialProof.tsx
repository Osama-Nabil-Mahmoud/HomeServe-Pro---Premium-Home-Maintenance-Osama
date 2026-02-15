
import React, { useEffect, useRef, useState } from 'react';
import { useSettings } from '../context/SettingsContext';

const Counter: React.FC<{ end: number; duration: number; suffix?: string; isVisible: boolean }> = ({ end, duration, suffix = "", isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const SocialProof: React.FC = () => {
  const { t } = useSettings();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Stats Container */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
            {t.socialProof.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium mb-16">
            {t.socialProof.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-black text-blue-600 dark:text-blue-400 mb-2">
                <Counter end={15000} duration={2000} suffix="+" isVisible={isVisible} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">{t.socialProof.stats.customers}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-black text-blue-600 dark:text-blue-400 mb-2">
                <Counter end={45} duration={1500} suffix={` ${t.socialProof.stats.min}`} isVisible={isVisible} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">{t.socialProof.stats.responseTime}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-black text-blue-600 dark:text-blue-400 mb-2">
                <Counter end={22000} duration={2000} suffix="+" isVisible={isVisible} />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">{t.socialProof.stats.jobs}</p>
            </div>
          </div>
        </div>

        {/* Rating Summary Card */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-[3rem] p-10 mb-20 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between text-center md:text-start transition-all">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t.socialProof.ratingLabel}</h3>
            <div className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
              <span className="text-4xl font-black text-slate-900 dark:text-white">4.8</span>
              <span className="text-slate-400 text-xl font-bold">/ 5.0</span>
            </div>
          </div>
          <div className="flex space-x-2 rtl:space-x-reverse mb-8 md:mb-0">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-10 h-10 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="flex -space-x-4 rtl:space-x-reverse">
            {[1, 2, 3, 4, 5].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/100?u=user${i}`} className="w-14 h-14 rounded-full border-4 border-white dark:border-slate-800 shadow-lg" alt="User" />
            ))}
            <div className="w-14 h-14 rounded-full bg-blue-600 border-4 border-white dark:border-slate-800 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10">
              +15k
            </div>
          </div>
        </div>

        {/* Testimonials Grid (6 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.socialProof.testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className={`bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-700 flex flex-col transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="flex items-center mb-6 rtl:space-x-reverse">
                <img src={item.avatar} className="w-14 h-14 rounded-full mr-4 rtl:mr-0 rtl:ml-4 border-2 border-white dark:border-slate-700 shadow-md" alt={item.name} />
                <div className="text-start">
                  <h4 className="font-bold text-slate-900 dark:text-white leading-none mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4 rtl:space-x-reverse space-x-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-start leading-relaxed flex-grow italic">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
