
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmergencyBanner from './components/EmergencyBanner';
import Features from './components/Features';
import Steps from './components/Steps';
import Services from './components/Services';
import AIServiceAssistant from './components/AIServiceAssistant';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import PrivacyPage from './PrivacyPage';
import TermsPage from './TermsPage';
import GuaranteePage from './GuaranteePage';
import CookiePolicyPage from './CookiePolicyPage';
import { useSettings } from './context/SettingsContext';

type AppView = 'main' | 'privacy' | 'terms' | 'guarantee' | 'cookies';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('main');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedPlan, setPreselectedPlan] = useState<string | undefined>(undefined);
  const { t } = useSettings();

  const handleOpenBooking = (service?: string, plan?: string) => {
    setPreselectedService(service);
    setPreselectedPlan(plan);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService(undefined);
    setPreselectedPlan(undefined);
  };

  const handleNavigate = (newView: AppView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (view === 'privacy') {
      return <PrivacyPage onBack={() => handleNavigate('main')} />;
    }
    if (view === 'terms') {
      return <TermsPage onBack={() => handleNavigate('main')} />;
    }
    if (view === 'guarantee') {
      return <GuaranteePage onBack={() => handleNavigate('main')} />;
    }
    if (view === 'cookies') {
      return <CookiePolicyPage onBack={() => handleNavigate('main')} />;
    }

    return (
      <main className="flex-grow">
        <div id="home">
          <Hero onCtaClick={() => handleOpenBooking()} />
        </div>

        <EmergencyBanner onDispatch={() => handleOpenBooking(t.booking.categories.emergency)} />
        
        <section id="how-it-works" className="scroll-mt-20">
          <Steps />
          <Features />
        </section>
        
        <section id="services" className="scroll-mt-20">
          <Services onServiceSelect={(service) => handleOpenBooking(service)} />
        </section>
        
        {/* AI Section / How it works part 2 */}
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

        <section id="pricing" className="scroll-mt-20">
          <Pricing onPlanSelect={(plan) => handleOpenBooking(undefined, plan)} />
        </section>

        <section id="testimonials" className="scroll-mt-20">
          <SocialProof />
        </section>
        
        <section id="faq" className="scroll-mt-20">
          <FAQ />
        </section>

        <section id="contact" className="scroll-mt-20">
          <FinalCTA />
        </section>
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col scroll-smooth bg-slate-50 dark:bg-slate-950 transition-colors">
      <Navbar onBookNow={() => handleOpenBooking()} onNavigate={(v) => handleNavigate(v)} />
      
      {renderContent()}

      {isBookingOpen && (
        <BookingForm 
          onClose={handleCloseBooking} 
          preselectedService={preselectedService}
          preselectedPlan={preselectedPlan}
        />
      )}

      <Footer onNavigate={(v) => handleNavigate(v)} />
    </div>
  );
};

export default App;
