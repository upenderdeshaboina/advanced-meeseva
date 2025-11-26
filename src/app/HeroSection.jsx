const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 z-0"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4 animate-fadeIn">
        <div className="mb-6 text-6xl animate-bounce">⚡</div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          Ambati Net World
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold">
          Common Service Centre in Chandupatla Village
        </p>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 backdrop-blur-sm bg-white/10 p-6 rounded-2xl border border-white/20">
          మా లక్ష్యం — గ్రామ ప్రజలు నగరానికి వెళ్లకుండా అన్ని సర్వీసులు ఒకే చోట అందుబాటులోకి తీసుకురావడం.
        </p>

        <a href="#services" className="inline-block px-8 py-4 bg-white text-transparent bg-clip-text font-bold text-lg border-2 border-white rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          Explore Services ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
