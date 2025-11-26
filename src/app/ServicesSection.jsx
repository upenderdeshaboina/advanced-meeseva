'use client';

import { useState } from 'react';

const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      icon: '📄',
      title: 'Document Services',
      items: ['Xerox (B/W & Color)', 'Photo Print', 'Lamination', 'Scan to PDF', 'Online Prints (Email / WhatsApp నుండి)'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🆔',
      title: 'Identity & Certificate Services',
      items: ['Aadhar Update / Mobile Linking', 'PAN Card New / Corrections', 'Ration Card Apply / Corrections', 'Income, Caste, Residence Certificate Apply', 'Pension Applications'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🏛️',
      title: 'Government Online Services',
      items: ['Praja Palana Applications', 'TS MeeSeva Services', 'Dharani Services', 'Agriculture Services (Rythu Bandhu / Crop Booking)', 'TS bPASS Services', 'Health Card Apply'],
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: '🚗',
      title: 'Transport Services',
      items: ['Driving Licence Apply (LLR / DL)', 'Slot Booking', 'RC Transfer', 'Vehicle Insurance'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '💳',
      title: 'Bill Payments & Recharge',
      items: ['Electricity Bill, Mobile/DTH Recharge', 'Water Bill, Gas Booking'],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '✈️',
      title: 'Booking & Banking',
      items: ['Bus, Train, Flight Tickets', 'Account Opening Support', 'Mini Statement & ATM Assistance'],
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive services designed to simplify your digital and administrative needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-0.5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                <div className="bg-white rounded-2xl p-6 h-full">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{service.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-pink-600 group-hover:bg-clip-text">
                    {service.title}
                  </h3>
                  
                  <ul className={`space-y-2 transition-all duration-300 ${expandedCard === index ? 'max-h-96' : 'max-h-28 overflow-hidden'}`}>
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className="text-indigo-500 font-bold mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 text-center">
                    <span className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {expandedCard === index ? 'Show Less' : 'View All'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
