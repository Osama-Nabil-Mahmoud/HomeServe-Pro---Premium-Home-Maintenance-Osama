
import React, { useEffect, useRef, useState } from 'react';
import { useSettings } from '../context/SettingsContext';

const Steps: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stepsData = [
    {
      id: 1,
      title: t.steps.step1.title,
      desc: t.steps.step1.desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      id: 2,
      title: t.steps.step2.title,
      desc: t.steps.step2.desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: t.steps.step3.title,
      desc: t.steps.step3.desc,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
            {t.steps.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            {t.steps.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 dark:bg-slate-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {stepsData.map((step, idx) => (
              <div 
                key={step.id} 
                className={`flex flex-col items-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="relative mb-8">
                  {/* Circle Indicator */}
                  <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xl border-4 border-blue-50 dark:border-slate-700 relative z-20 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-black text-lg border-4 border-slate-50 dark:border-slate-950 z-30 shadow-lg">
                    {step.id}
                  </div>
                </div>

                <div className="text-center px-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
