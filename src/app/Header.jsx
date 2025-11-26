'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg border-b border-white/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="text-3xl font-black bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            ⚡ Ambati
          </div>
          <span className="hidden sm:inline text-white font-bold text-lg">Net World</span>
        </Link>

        <div className="hidden md:flex space-x-1">
          <Link href="#home" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium">
            Home
          </Link>
          <Link href="#about" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium">
            About
          </Link>
          <Link href="#services" className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium">
            Services
          </Link>
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
          <Link href="#home" className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all font-medium">
            Home
          </Link>
          <Link href="#about" className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all font-medium">
            About
          </Link>
          <Link href="#services" className="block px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all font-medium">
            Services
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
