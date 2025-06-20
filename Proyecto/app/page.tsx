import React from 'react';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection'; 
import CasesSection from './components/CasesSection';
import TrustedMessageSection from './components/TrustedMessageSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CasesSection />
      <TrustedMessageSection />
    </>
  );
}