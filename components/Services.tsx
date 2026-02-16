
import React from 'react';
import { useSettings } from '../context/SettingsContext';

interface ServicesProps {
  onServiceSelect: (serviceTitle: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceSelect }) => {
  const { t } = useSettings();
  
  const servicesList = [
    { 
      id: 'plumbing', 
      name: t.services.items.plumbing.title, 
      desc: t.services.items.plumbing.desc,
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors">
          <circle cx="50" cy="50" r="40" className="fill-blue-100 dark:fill-blue-900/30 group-hover:fill-white/20 transition-colors" />
          <path d="M30 70 L70 30 M30 30 L70 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="opacity-20" />
          <path d="M40 30 Q50 20 60 30 L60 60 Q50 70 40 60 Z" className="fill-blue-500 group-hover:fill-white drop-shadow-lg transition-colors" />
          <path d="M45 25 L55 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-hover:stroke-blue-500 transition-colors" />
        </svg>
      )
    },
    { 
      id: 'electrical', 
      name: t.services.items.electrical.title, 
      desc: t.services.items.electrical.desc,
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-yellow-600 dark:text-yellow-400 group-hover:text-white transition-colors">
          <circle cx="50" cy="50" r="40" className="fill-yellow-100 dark:fill-yellow-900/30 group-hover:fill-white/20 transition-colors" />
          <path d="M50 20 L30 55 L50 55 L40 85 L70 45 L50 45 L60 15 Z" className="fill-yellow-500 group-hover:fill-white drop-shadow-md transition-colors" />
        </svg>
      )
    },
    { 
      id: 'ac', 
      name: t.services.items.ac.title, 
      desc: t.services.items.ac.desc,
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors">
          <circle cx="50" cy="50" r="40" className="fill-cyan-100 dark:fill-cyan-900/30 group-hover:fill-white/20 transition-colors" />
          <g className="animate-spin-slow origin-center">
            <path d="M50 50 L50 20 M50 50 L80 50 M50 50 L50 80 M50 50 L20 50" stroke="currentColor" strokeWidth="6" />
            <circle cx="50" cy="50" r="5" className="fill-cyan-700 group-hover:fill-white transition-colors" />
          </g>
        </svg>
      )
    },
    { 
      id: 'cleaning', 
      name: t.services.items.cleaning.title, 
      desc: t.services.items.cleaning.desc,
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-green-600 dark:text-green-400 group-hover:text-white transition-colors">
          <circle cx="50" cy="50" r="40" className="fill-green-100 dark:fill-green-900/30 group-hover:fill-white/20 transition-colors" />
          <path d="M40 40 L60 40 L65 70 L35 70 Z" className="fill-green-500 group-hover:fill-white transition-colors" />
          <path d="M45 35 L55 35 L55 40 L45 40 Z" className="fill-green-600 group-hover:fill-green-500 transition-colors" />
          <circle cx="45" cy="55" r="2" className="fill-white opacity-60" />
          <circle cx="55" cy="62" r="3" className="fill-white opacity-40" />
        </svg>
      )
    },
    { 
      id: 'maintenance', 
      name: t.services.items.maintenance.title, 
      desc: t.services.items.maintenance.desc,
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors">
          <circle cx="50" cy="50" r="40" className="fill-slate-100 dark:fill-slate-800 group-hover:fill-white/20 transition-colors" />
          <path d="M35 35 L65 35 L65 65 L35 65 Z" className="fill-slate-600 group-hover:fill-white transition-colors" />
          <path d="M40 30 L60 30 L60 35 L40 35 Z" className="fill-slate-700 group-hover:fill-slate-600 transition-colors" />
          <rect x="45" y="45" width="10" height="10" className="fill-blue-400 group-hover:fill-blue-300 transition-colors" />
        </svg>
      )
    },
    { 
      id: 'painting', 
      name: t.services.items.painting.title, 
      desc: t.services.items.painting.desc,
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-purple-600 dark:text-purple-400 group-hover:text-white transition-colors">
          <circle cx="50" cy="50" r="40" className="fill-purple-100 dark:fill-purple-900/30 group-hover:fill-white/20 transition-colors" />
          <rect x="35" y="30" width="30" height="20" rx="2" className="fill-purple-500 group-hover:fill-white transition-colors" />
          <rect x="45" y="50" width="10" height="25" className="fill-amber-700 group-hover:fill-purple-300 transition-colors" />
          <path d="M35 35 L65 35" stroke="currentColor" strokeWidth="2" opacity="0.3" className="group-hover:stroke-purple-500 transition-colors" />
        </svg>
      )
    },
    { 
      id: 'carpentry', 
      name: t.services.items.carpentry.title, 
      desc: t.services.items.carpentry.desc,
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-orange-800 dark:text-orange-500 group-hover:text-white transition-colors">
          <circle cx="50" cy="50" r="40" className="fill-orange-100 dark:fill-orange-900/30 group-hover:fill-white/20 transition-colors" />
          <path d="M30 40 L70 40 L65 65 L35 65 Z" className="fill-orange-800 group-hover:fill-white transition-colors" />
          <path d="M30 40 L70 40 L75 35 L35 35 Z" className="fill-orange-700 group-hover:fill-orange-800 transition-colors" />
          <path d="M35 65 L35 80 M65 65 L65 80" stroke="currentColor" strokeWidth="6" />
        </svg>
      )
    },
    { 
      id: 'appliances', 
      name: t.services.items.appliances.title, 
      desc: t.services.items.appliances.desc,
      icon: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 text-red-600 dark:text-red-400 group-hover:text-white transition-colors">
          <circle cx="50" cy="50" r="40" className="fill-red-100 dark:fill-red-900/30 group-hover:fill-white/20 transition-colors" />
          <rect x="35" y="30" width="30" height="45" rx="3" className="fill-red-500 group-hover:fill-white transition-colors" />
          <rect x="40" y="35" width="20" height="15" className="fill-slate-800 group-hover:fill-red-500 transition-colors" />
          <circle cx="45" cy="60" r="3" className="fill-white/40 group-hover:fill-red-200 transition-colors" />
          <circle cx="55" cy="60" r="3" className="fill-white/40 group-hover:fill-red-200 transition-colors" />
        </svg>
      )
    },
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white sm:text-5xl mb-6">{t.services.title}</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">{t.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-800 text-start flex flex-col h-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-700"
            >
              <div className="mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors mb-3">{service.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 group-hover:text-blue-100 transition-colors text-sm leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              
              <button 
                onClick={() => onServiceSelect(service.name)}
                className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-sm group-hover:bg-white group-hover:text-blue-600 dark:group-hover:bg-white dark:group-hover:text-blue-600 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse active:scale-95 shadow-lg group-hover:shadow-blue-600/20"
              >
                <span>{t.services.cta}</span>
                <svg className="w-4 h-4 ml-2 rtl:mr-2 rtl:ml-0 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Services;
