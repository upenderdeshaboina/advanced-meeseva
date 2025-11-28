"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-4 bg-linear-to-b from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden">
    <div className="absolute inset-0">
        <div className="absolute -top-32 +right-10 h-96 w-96 bg-indigo-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-1-lg h-1g bg-pink-500/20 rounded-full blur-3xl"></div>
    </div>
    <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16 animate-fadeIn">
            <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold bg-white/10 border border-white/5 backdrop-blur">
                <span className="text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                </span>
                " Stay connected with MeeSeva experts"
            </p>
            <h2 className="mt-6 text-4xl md:text-5xl font-black bg-linear-to-r from-indigo-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">Let's Talk</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                "Reach Ambati Net World - Common Service Centre for any government, documentation, or digital service. We respond quickly across all channels."
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 space-y-6">
                <div className="bg-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur shadow-2xl shadow-indigo-900/40">
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
                        <span className="px-3 py-1 rounded-full bg-indigo-500/10">Ambati Net World</span>
                        <span className="px-3 py-1 rounded-full bg-pink-500/10">MeeSeva Centre</span>
                    </div>
                    <h3 className="mt-6 text-3xl font-bold">Common Service Centre</h3>
                    <a href="https://google.com/maps/place/Chandupatla,+Telangana+508286/@17.861165,%2F2F810X7or4/entry=tt&amp;ug=EgoyMDITEMg4YlKDMCOXSAQFA&amp;esrc=s" target="_blank" rel="noopener noreferrer" className="mt-4 text-gray-300 leading-relaxed inline-flex items-start gap-2 group">
                        <span className="mt-1 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M12 18s-4-9-4-11a4 4 0 0 1 8 0c0 2-4 11-4 11z"/><circle cx="12" cy="10" r="3"/></svg>
                        </span>
                        <span className="font-normal group-hover:text-indigo-300 transition-colors group-hover:underline">Chandupatla Village, Nakrekal Mandal, Nalgonda District, Telangana.</span>
                    </a>
                    
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 rounded-2xl bg-linear-to-br from-white/15 to-white/5 border border-white/10">
                            <p className="text-xs uppercase tracking-wide text-gray-300">Service Highlights</p>
                            <p className="mt-2 text-2xl font-black text-white">1500+</p>
                            <p className="text-sm text-gray-300">Successful service requests handled</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-linear-to-br from-white/5 to-white/15 border border-white/10">
                            <p className="text-xs uppercase tracking-wide text-gray-300">Average Response:</p>
                            <p className="mt-2 text-2xl font-black text-white">10 min</p>
                            <p className="text-sm text-gray-300">During working hours</p>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="tel:9848728062" className="inline-flex items-center center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 font-semibold shadow-lg shadow-indigo-900/40 hover:scale-[1.02] transition">
                            Call Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.73l.48 4.09a2 2 0 0 1-.68 1.95L5.75 12a14.33 14.33 0 0 0 7.5 7.5l2.23-2.23a2 2 0 0 1 1.95-.68l4.09.48A2 2 0 0 1 22 16.92z"/></svg>
                        </a>
                        <a href="https://wa.me/919848728062" target="_blank" rel="noopener noreferrer" className="inline-flex items-center center gap-2 px-6 py-3 rounded-full border border-white/20 font-semibold text-white/80 hover:text-white hover:border-white/40 transition">
                            WhatsApp
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 15-5-5-15 7Z"/><path d="m22 2-7 15-5-5-15 7z"/></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-6"> 
                <a href="tel:9848728062" className="block bg-linear-to-br from-indigo-500 to-sky-500 rounded-3xl p-1 shadow-2xl shadow-indigo-900/30 hover:scale-[1.01] transition-transform">
                    <div className="bg-slate-950/90 rounded-[22px] p-6 h-full">
                        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
                            <span className="text-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.73l.48 4.09a2 2 0 0 1-.68 1.95L5.75 12a14.33 14.33 0 0 0 7.5 7.5l2.23-2.23a2 2 0 0 1 1.95-.68l4.09.48A2 2 0 0 1 22 16.92z"/><path d="M14.05 13.95a1 1 0 0 0 .1.1L20.8 19.2a.5.5 0 0 0 .7-.1L22 18.2a1 1 0 0 0-.1-.1l-6.85-5.2a.5.5 0 0 0-.7.1z"/></svg>
                            </span>
                            "Call Us"
                        </div>
                        <p className="mt-3 text-2xl font-bold text-white">9848728062</p>
                        <p className="mt-1 text-sm text-white/70">Get instant assistance for any service</p>
                    </div>
                </a>
                <a href="https://wa.me/919848728062" target="_blank" rel="noopener noreferrer" className="block bg-linear-to-br from-emerald-500 to-lime-500 rounded-3xl p-1 shadow-2xl shadow-indigo-900/30 hover:scale-[1.01] transition-transform">
                    <div className="bg-slate-950/90 rounded-[22px] p-6 h-full">
                        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
                            <span className="text-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-code"><path d="M7.9 20.9c-.8-.7-1.4-1.5-1.9-2.2L3.6 15c-1.3-1.6-1.5-3.7-.6-5.4a6 6 0 0 1 10.9-1.9L22 11l-3 3-2 2-3 3H7.9Z"/><path d="m10 9-2 2 2 2"/><path d="m14 9 2 2-2 2"/></svg>
                            </span>
                            "Whatsapp"
                        </div>
                        <p className="mt-3 text-2xl font-bold text-white">Chat with us</p>
                        <p className="mt-1 text-sm text-white/70">Quick replies on WhatsApp 9 AM - 8 PM</p>
                    </div>
                </a>
                <div className="block bg-linear-to-br from-amber-500 to-orange-500 rounded-3xl p-1 shadow-2xl shadow-indigo-900/30">
                    <div className="bg-slate-950/90 rounded-[22px] p-6 h-full">
                        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
                            <span className="text-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            </span>
                            "Working Hours"
                        </div>
                        <p className="mt-3 text-2xl font-bold text-white">9:00 AM - 8:00 PM</p>
                        <p className="mt-1 text-sm text-white/70">Open all days for your convenience</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}