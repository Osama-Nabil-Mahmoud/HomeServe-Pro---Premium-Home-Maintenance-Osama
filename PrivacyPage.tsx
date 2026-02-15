
import React from 'react';
import { useSettings } from './context/SettingsContext';

const PrivacyPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const { t, lang } = useSettings();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-blue-600 dark:text-blue-400 font-bold hover:underline rtl:space-x-reverse"
        >
          <svg className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.footer.links.backToHome}
        </button>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 text-start">
          {t.privacy.title}
        </h1>
        <p className="text-slate-500 font-medium mb-12 text-start">
          {t.privacy.lastUpdated}
        </p>

        <div className="space-y-12 text-start">
          {t.privacy.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {section.h}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {section.p}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
