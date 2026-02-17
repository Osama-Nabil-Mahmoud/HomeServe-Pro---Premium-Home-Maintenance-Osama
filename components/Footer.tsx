
import React from 'react';
import { useSettings } from '../context/SettingsContext';

interface FooterProps {
  onNavigate?: (view: 'main' | 'privacy' | 'terms' | 'guarantee' | 'cookies') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, lang } = useSettings();
  
  const handleNav = (e: React.MouseEvent, view: 'main' | 'privacy' | 'terms' | 'guarantee' | 'cookies', sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
      if (view === 'main' && sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Helper to format tel link correctly
  const telLink = t.finalCTA.whatsappNumber.startsWith('0') 
    ? `tel:+2${t.finalCTA.whatsappNumber}` 
    : `tel:${t.finalCTA.whatsappNumber}`;

  return (
    <footer className="bg-slate-900 dark:bg-black text-white pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-start">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                HomeServe <span className="text-blue-500">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
            <p className="text-blue-400/80 text-xs font-bold italic mb-6">
              "{t.footer.oneLiner}"
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-6">{t.footer.columns.company}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={(e) => handleNav(e, 'main', 'home')} className="hover:text-white transition-colors">{t.nav.home}</button></li>
              <li><button onClick={(e) => handleNav(e, 'main', 'services')} className="hover:text-white transition-colors">{t.nav.services}</button></li>
              <li><button onClick={(e) => handleNav(e, 'main', 'how-it-works')} className="hover:text-white transition-colors">{t.nav.howItWorks}</button></li>
              <li><button onClick={(e) => handleNav(e, 'main', 'pricing')} className="hover:text-white transition-colors">{t.nav.pricing}</button></li>
              <li><button onClick={(e) => handleNav(e, 'main', 'faq')} className="hover:text-white transition-colors">{t.nav.faq}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-6">{t.footer.columns.legal}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><button onClick={(e) => handleNav(e, 'privacy')} className="hover:text-white transition-colors">{t.footer.links.privacy}</button></li>
              <li><button onClick={(e) => handleNav(e, 'terms')} className="hover:text-white transition-colors">{t.footer.links.terms}</button></li>
              <li><button onClick={(e) => handleNav(e, 'guarantee')} className="hover:text-white transition-colors">{t.footer.links.guarantee}</button></li>
              <li><button onClick={(e) => handleNav(e, 'cookies')} className="hover:text-white transition-colors">{t.footer.links.cookies}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200 mb-6">{t.nav.contact}</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href={`mailto:${t.finalCTA.emailAddress}`} className="hover:text-white transition-colors">{t.finalCTA.emailAddress}</a></li>
              <li><a href={telLink} className="hover:text-white transition-colors" dir="ltr">{t.finalCTA.whatsappNumber}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 text-center md:flex md:justify-between items-center">
          <p className="text-slate-500 text-xs mb-4 md:mb-0">&copy; 2024 {t.footer.copy}</p>
          <p className="text-slate-500 text-xs">{t.footer.madeBy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
