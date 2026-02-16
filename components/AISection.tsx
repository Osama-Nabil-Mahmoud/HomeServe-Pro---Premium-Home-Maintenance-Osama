
import React from 'react';
import { useSettings } from '../context/SettingsContext';
import AIServiceAssistant from './AIServiceAssistant';

const AISection: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="py-20 bg-slate-900 dark:bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-start">
            <h2 className="text-4xl font-extrabold mb-6">
              {t.ai.title} <span className="text-blue-400">{t.ai.titleAccent}</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              {t.ai.desc}
            </p>
            <div className="space-y-4">
              <div className="flex items-start rtl:space-x-reverse">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-4 rtl:mr-0 rtl:ml-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t.ai.feature1Title}</h4>
                  <p className="text-sm text-slate-400">{t.ai.feature1Desc}</p>
                </div>
              </div>
              <div className="flex items-start rtl:space-x-reverse">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-4 rtl:mr-0 rtl:ml-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-semibold">{t.ai.feature2Title}</h4>
                  <p className="text-sm text-slate-400">{t.ai.feature2Desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25"></div>
            <AIServiceAssistant />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
