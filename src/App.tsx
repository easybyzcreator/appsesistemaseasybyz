/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ShowcaseSection from './components/ShowcaseSection';
import BenefitsSection from './components/BenefitsSection';
import BrandingAutonomySection from './components/BrandingAutonomySection';
import PricingSection from './components/PricingSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import AboutUsSection from './components/AboutUsSection';
import Footer from './components/Footer';

export default function App() {
  const [activeAppId, setActiveAppId] = useState<string>('easy-beauty');

  return (
    <LanguageProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-[#030303] text-white selection:bg-[#10B981]/20 selection:text-[#10B981] antialiased">
        {/* Floating Modern Header */}
        <Navbar />

        {/* Hero Section styled like Apple scroll transitions */}
        <HeroSection />

        {/* Main product visual showcases with real micro-interactive systems */}
        <main className="relative z-10 w-full overflow-x-hidden">
          
          {/* Visual Product showcase with interactive cards */}
          <ShowcaseSection activeTab={activeAppId} setActiveTab={setActiveAppId} />

          {/* Core pillars + Interactive efficiency calculator in Portuguese/English */}
          <BenefitsSection />

          {/* Branding & Autonomy Section */}
          <BrandingAutonomySection />

          {/* Pricing & Fair Transparency Section */}
          <PricingSection />

          {/* Interactive FAQ Section */}
          <FaqSection />

          {/* Glassmorphic budget request custom form and contact list */}
          <ContactSection selectedAppId={activeAppId} setSelectedAppId={setActiveAppId} />
          
          {/* About Us section positioned immediately before the footer */}
          <AboutUsSection />
          
          {/* Premium elegant bottom footer */}
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}
