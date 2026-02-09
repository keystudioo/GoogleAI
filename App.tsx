
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ValueSection from './components/ValueSection';
import HowItWorks from './components/HowItWorks';
import TrustSafety from './components/TrustSafety';
import Resources from './components/Resources';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <ValueSection />
        <HowItWorks />
        <TrustSafety />
        <Resources />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
