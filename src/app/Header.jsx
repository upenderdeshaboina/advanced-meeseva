'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg border-b border-white/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group cursor-pointer">
          <div className="text-3xl font-black bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            ⚡ Ambati
          </div>
          <span className="hidden sm:inline text-white font-bold text-lg">Net World</span>
        </a>

        <div className="hidden md:flex space-x-1">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium cursor-pointer">
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium cursor-pointer">
            About
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium cursor-pointer">
            Services
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl hover:scale-110 transition-transform"
        >
          ☰
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-700 px-6 py-4 space-y-2 animate-slideDown">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all font-medium cursor-pointer">
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all font-medium cursor-pointer">
            About
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all font-medium cursor-pointer">
            Services
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
