
import React from 'react';
import { useSettings } from '../context/SettingsContext';

interface EmergencyBannerProps {
  onDispatch: () => void;
}

const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ onDispatch }) => {
  const { t, lang } = useSettings();

  return (
    <section className="bg-red-600 dark:bg-red-700 py-6 relative overflow-hidden group">
      {/* Animated pulses in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-red-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-start gap-6">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:sm:space-x-reverse">
            <div className="relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-red-600 shadow-xl animate-bounce">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-red-600 animate-ping"></div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {lang === 'ar' ? 'طوارئ 24/7' : t.emergency.title}
              </h2>
              <p className="text-red-50 text-base sm:text-lg font-medium opacity-90">
                {t.emergency.subtitle}
              </p>
            </div>
          </div>
          
          <button 
            onClick={onDispatch}
            className="px-8 py-4 bg-white text-red-600 hover:bg-red-50 rounded-2xl font-black text-lg transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center group/btn"
          >
            <span className="relative flex h-3 w-3 mr-3 rtl:mr-0 rtl:ml-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
            {t.emergency.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
