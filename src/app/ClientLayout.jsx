'use client';

import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      {/* The children prop can be used for nested layouts or other content in the future */}
      { children }
    </>
  );
}