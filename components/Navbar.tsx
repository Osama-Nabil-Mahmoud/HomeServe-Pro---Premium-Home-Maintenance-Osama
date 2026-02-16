
import React, { useState, useEffect } from 'react';
import { useSettings } from '../context/SettingsContext';

interface NavbarProps {
  onBookNow: () => void;
  onNavigate?: (view: 'main') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookNow, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, lang, toggleTheme, setLanguage, t } = useSettings();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, id: 'home' },
    { name: t.nav.services, id: 'services' },
    { name: t.nav.howItWorks, id: 'how-it-works' },
    { name: t.nav.pricing, id: 'pricing' },
    { name: t.nav.faq, id: 'faq' },
    { name: t.nav.contact, id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Ensure we are on the main view
    if (onNavigate) onNavigate('main');

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Delay slightly to allow App to switch back to main view if needed
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg border-b dark:border-slate-800' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer" 
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <div className="bg-blue-600 p-2 rounded-lg shadow-md shadow-blue-600/20">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
            <span className="text-xl font-bold tracking-tight dark:text-white" dir="ltr">
              HomeServe <span className="text-blue-600">Pro</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse border-l rtl:border-l-0 rtl:border-r border-slate-200 dark:border-slate-700 pl-4 rtl:pl-0 rtl:pr-4">
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 6.343l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z"></path></svg>
                )}
              </button>
              
              {/* Lang Toggle */}
              <button 
                onClick={() => setLanguage(lang === 'en' ? 'ar' : 'en')}
                className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
              >
                {lang === 'en' ? 'عربي' : 'EN'}
              </button>
            </div>

            {/* CTA */}
            <button 
              onClick={onBookNow}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
            >
              {t.nav.bookNow}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3 rtl:space-x-reverse">
             <button onClick={toggleTheme} className="p-2 text-slate-600 dark:text-slate-300">
                {theme === 'light' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M7.757 6.343l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z"></path></svg>
                )}
             </button>
             <button onClick={() => setLanguage(lang === 'en' ? 'ar' : 'en')} className="font-bold text-sm px-2 text-slate-600 dark:text-slate-300">
                {lang === 'en' ? 'عربي' : 'EN'}
             </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-900 dark:text-white p-2"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 glass border-b dark:border-slate-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-base font-bold text-slate-800 dark:text-slate-100 hover:text-blue-600 w-full text-center py-2"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => { setIsMenuOpen(false); onBookNow(); }}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
          >
            {t.nav.bookNow}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
