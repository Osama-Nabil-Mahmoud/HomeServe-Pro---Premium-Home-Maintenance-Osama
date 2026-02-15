
import React, { useState } from 'react';
import { useSettings } from '../context/SettingsContext';

const FAQ: React.FC = () => {
  const { t } = useSettings();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
            {t.faq.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div 
              key={index} 
              className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-start flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                aria-expanded={activeIndex === index}
              >
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.q}
                </span>
                <svg 
                  className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed text-start">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
