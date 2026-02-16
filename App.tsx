
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmergencyBanner from './components/EmergencyBanner';
import Features from './components/Features';
import Steps from './components/Steps';
import Services from './components/Services';
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
import AISection from './components/AISection';

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
        
        <AISection />

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
