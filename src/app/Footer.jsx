import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-linear-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6"> {/* Ensure content is on top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black mb-4">
              <span className="bg-linear-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">⚡ Ambati</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Bringing digital services to your doorstep with trust, speed, and affordability.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-300">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-indigo-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-indigo-300">Contact</h4>
            <a 
              href="https://www.google.com/maps/place/Chandupatla,+Telangana+508286/@17.5026165,78.9792856,15z/data=!3m1!4b1!4m6!3m5!1s0x3bcb685343b872d9:0x8eac737957029ce!8m2!3d17.5051133!4d78.9812861!16s%2Fm%2F010x7qr4?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-indigo-400 transition-colors"
            >
              <p className="text-gray-300 text-sm">📍 Chandupatla Village</p>
              <p className="text-gray-300 text-sm">Telangana, India</p>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} <span className="font-bold text-indigo-300">Ambati Net World</span>. All Rights Reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Empowering villages through digital transformation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
