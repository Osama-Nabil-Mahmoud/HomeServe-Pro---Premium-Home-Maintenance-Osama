
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
      color: 'blue'
    },
    {
      key: 'standard',
      ...t.pricing.tiers.standard,
      featured: true,
      color: 'indigo'
    },
    {
      key: 'premium',
      ...t.pricing.tiers.premium,
      featured: false,
      color: 'slate'
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
              className={`relative bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 lg:p-10 shadow-xl transition-all duration-500 hover:-translate-y-4 border ${
                tier.featured 
                ? 'border-blue-500 scale-105 z-10 md:py-14' 
                : 'border-slate-100 dark:border-slate-700'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                  {t.pricing.mostPopular}
                </div>
              )}

              <div className="mb-8 text-start">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{tier.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{tier.desc}</p>
              </div>

              <div className="mb-8 text-start">
                <div className="flex items-baseline space-x-2 rtl:space-x-reverse">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">{tier.price}</span>
                  <span className="text-slate-400 font-bold text-sm">/ {t.pricing.estimated}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 text-start">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600 dark:text-slate-300 font-medium text-sm">
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-1 rounded-full mr-3 rtl:mr-0 rtl:ml-3">
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
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/30' 
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
