
import React, { useState, useEffect, useRef } from 'react';
import { useSettings } from '../context/SettingsContext';
import { formatServiceMessage, getWhatsAppUrl } from '../lib/utils';

interface BookingFormProps {
  onClose: () => void;
  preselectedService?: string;
  preselectedPlan?: string;
}

const WHATSAPP_NUMBER = '201210285859';

const BookingForm: React.FC<BookingFormProps> = ({ onClose, preselectedService, preselectedPlan }) => {
  const { t, lang } = useSettings();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    preferredTime: '',
    notes: ''
  });
  const [selectedCategory, setSelectedCategory] = useState(t.booking.categories.maintenance);
  
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    if (preselectedService) {
      const categories = Object.values(t.booking.categories);
      const match = categories.find(c => c.toLowerCase() === preselectedService.toLowerCase());
      if (match) setSelectedCategory(match);
    }
    
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, preselectedService, t.booking.categories]);

  const handleWhatsAppAction = () => {
    if (!formData.name || !formData.address || !formData.preferredTime) {
      alert(t.booking.fillFieldsAlert);
      return;
    }

    const message = formatServiceMessage({
      lang,
      service: selectedCategory,
      plan: preselectedPlan,
      name: formData.name,
      address: formData.address,
      time: formData.preferredTime,
      notes: formData.notes
    });

    window.open(getWhatsAppUrl(WHATSAPP_NUMBER, message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto py-10">
      <div 
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className="relative bg-white dark:bg-slate-950 w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 transition-all transform scale-100 animate-in fade-in zoom-in duration-300"
      >
        {/* Header */}
        <div className="p-8 md:p-10 border-b border-slate-50 dark:border-slate-900 flex justify-between items-center rtl:flex-row-reverse">
          <div className="text-start">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
              {t.booking.title}
            </h3>
            <p className="text-slate-500 font-medium text-sm mt-1">
              {t.booking.subtitle}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-red-500 transition-colors"
            aria-label={t.booking.close}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-10 space-y-8">
          {/* Service & Plan Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100/50 dark:border-blue-900/20">
              <label className="block text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
                {t.booking.selectedService}
              </label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent font-bold text-slate-900 dark:text-white outline-none cursor-pointer"
              >
                {Object.values(t.booking.categories).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            {preselectedPlan && (
              <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                  {t.booking.selectedPlan}
                </label>
                <div className="font-bold text-slate-900 dark:text-white">{preselectedPlan}</div>
              </div>
            )}
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start">
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1 rtl:mr-1">
                {t.booking.fullName} *
              </label>
              <input 
                ref={firstInputRef}
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                placeholder={t.booking.fullNamePlaceholder}
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1 rtl:mr-1">
                {t.booking.preferredTime} *
              </label>
              <input 
                type="text" 
                value={formData.preferredTime}
                onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                placeholder={t.booking.preferredTimePlaceholder}
                required 
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1 rtl:mr-1">
                {t.booking.address} *
              </label>
              <input 
                type="text" 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                placeholder={t.booking.addressPlaceholder}
                required 
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-black text-slate-700 dark:text-slate-300 ml-1 rtl:mr-1">
                {t.booking.notes}
              </label>
              <textarea 
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none"
                placeholder={t.booking.notesPlaceholder}
              ></textarea>
            </div>
          </div>

          {/* Action Button - Centered and Large */}
          <div className="pt-4">
            <button 
              type="button"
              onClick={handleWhatsAppAction}
              className="group relative w-full flex items-center justify-center px-8 py-6 bg-green-600 hover:bg-green-700 text-white rounded-[2rem] font-black text-xl transition-all shadow-2xl shadow-green-600/30 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <svg className="w-8 h-8 mr-4 rtl:mr-0 rtl:ml-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              {t.booking.sendWhatsApp}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
