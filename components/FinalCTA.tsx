
import React from 'react';
import { useSettings } from '../context/SettingsContext';

const FinalCTA: React.FC = () => {
  const { t } = useSettings();

  // Helper to ensure the WhatsApp link works for Egyptian numbers if they start with '01'
  const getCleanWhatsAppLink = (number: string) => {
    let clean = number.replace(/\D/g, '');
    // If it's a local Egyptian number starting with 01, prepend the country code 2
    if (clean.startsWith('01')) {
      clean = '2' + clean;
    }
    return `https://wa.me/${clean}`;
  };

  return (
    <section className="py-24 bg-slate-900 dark:bg-black text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[120px]"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
          {t.finalCTA.title}
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          {t.finalCTA.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Button */}
          <a 
            href={getCleanWhatsAppLink(t.finalCTA.whatsappNumber)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-green-600 hover:bg-green-700 p-8 rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-green-600/20 active:scale-95 overflow-hidden"
          >
            <div className="bg-white/20 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <span className="text-lg font-black uppercase tracking-widest text-green-200 mb-1">{t.finalCTA.whatsappLabel}</span>
            <span className="text-2xl font-bold">{t.finalCTA.whatsappNumber}</span>
          </a>

          {/* Email Button */}
          <a 
            href={`mailto:${t.finalCTA.emailAddress}`}
            className="group relative bg-slate-800 hover:bg-slate-700 p-8 rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/40 active:scale-95 border border-slate-700 overflow-hidden"
          >
            <div className="bg-white/10 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-lg font-black uppercase tracking-widest text-slate-400 mb-1">{t.finalCTA.emailLabel}</span>
            <span className="text-xl md:text-2xl font-bold break-all px-2">{t.finalCTA.emailAddress}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
