
import React from 'react';
import { useSettings } from '../context/SettingsContext';

interface PricingProps {
  onPlanSelect: (planName: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onPlanSelect }) => {
  const { t } = useSettings();

  const tiers = [
    {
      key: 'basic',
      ...t.pricing.tiers.basic,
      featured: false,
    },
    {
      key: 'standard',
      ...t.pricing.tiers.standard,
      featured: true,
    },
    {
      key: 'premium',
      ...t.pricing.tiers.premium,
      featured: false,
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {tiers.map((tier) => (
            <div 
              key={tier.key}
              className={`relative rounded-[2.5rem] p-8 lg:p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                tier.featured 
                ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-blue-700 scale-105 z-10 md:py-14' 
                : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                  {t.pricing.mostPopular}
                </div>
              )}

              <div className="mb-8 text-start">
                <h3 className={`text-2xl font-black mb-2 ${tier.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.name}</h3>
                <p className={`text-sm font-medium ${tier.featured ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>{tier.desc}</p>
              </div>

              <div className="mb-8 text-start">
                <div className="flex items-baseline space-x-2 rtl:space-x-reverse">
                  <span className={`text-4xl font-black ${tier.featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{tier.price}</span>
                  <span className={`font-bold text-sm ${tier.featured ? 'text-blue-200' : 'text-slate-400'}`}>/ {t.pricing.estimated}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 text-start">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center font-medium text-sm ${tier.featured ? 'text-blue-100' : 'text-slate-600 dark:text-slate-300'}`}>
                    <div className={`${tier.featured ? 'bg-white/20 text-white' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'} p-1 rounded-full mr-3 rtl:mr-0 rtl:ml-3`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onPlanSelect(tier.name)}
                className={`w-full py-4 rounded-2xl font-black text-sm transition-all shadow-lg active:scale-95 ${
                  tier.featured 
                  ? 'bg-white text-blue-600 hover:bg-blue-50' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {t.pricing.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
