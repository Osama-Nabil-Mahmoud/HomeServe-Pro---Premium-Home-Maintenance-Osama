
import React from 'react';
import { useSettings } from '../context/SettingsContext';

const Testimonials: React.FC = () => {
  const { t } = useSettings();

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Fix: Property 'testimonials' does not exist on type, using 'socialProof' from i18n.ts */}
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">{t.socialProof.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fix: Property 'testimonials' does not exist on type, using 'socialProof.testimonials' array directly as defined in translations */}
          {t.socialProof.testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-6 rtl:space-x-reverse">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic mb-8 text-start leading-relaxed">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center rtl:space-x-reverse">
                <img src={testimonial.avatar} className="w-12 h-12 rounded-full mr-4 rtl:mr-0 rtl:ml-4 border-2 border-white dark:border-slate-800 shadow-sm" alt={testimonial.name} />
                <div className="text-start">
                  <h4 className="font-bold text-slate-900 dark:text-white leading-none mb-1">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
