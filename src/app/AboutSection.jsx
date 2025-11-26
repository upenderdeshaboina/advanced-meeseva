const AboutSection = () => {
  const features = [
    {
      icon: '⚡',
      title: 'వేగవంతమైన సేవ',
      description: 'మీ పనులు ఆలస్యం కాకుండా వేగంగా పూర్తి చేస్తాము.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🎯',
      title: 'ఖచ్చితమైన ప్రాసెసింగ్',
      description: 'ప్రతి డాక్యుమెంట్‌ను జాగ్రత్తగా, తప్పులు లేకుండా ప్రాసెస్ చేస్తాము.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🤝',
      title: 'వ్యక్తిగత సహాయం',
      description: 'ప్రతి కస్టమర్‌కు వారి అవసరాలకు అనుగుణంగా సహాయం అందిస్తాము.',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="mb-8 animate-fadeIn">
          <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full mb-4">
            <span className="text-indigo-700 font-semibold text-sm">About Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About Ambati Net World
          </h2>
        </div>

        <p className="text-lg md:text-xl leading-8 text-gray-700 max-w-3xl mx-auto mb-16 backdrop-blur-sm bg-white/50 p-8 rounded-2xl border border-indigo-200">
          Ambati Net World అనేది Chandupatla గ్రామంలో ప్రజలకు నమ్మకంగా, వేగంగా మరియు తక్కువ ఛార్జీలతో డిజిటల్ సేవలను అందించడానికి ప్రారంభించబడిన ఒక Common Service Centre.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              <div className={`bg-linear-to-br ${feature.gradient} p-0.5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                <div className="bg-white rounded-2xl p-8 text-center h-full">
                  <div className="text-5xl mb-4 group-hover:scale-125 transition-transform inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="inline-block">
          <div className="bg-linear-to-r from-indigo-600 to-pink-600 p-0.5 rounded-2xl">
            <div className="bg-white rounded-2xl px-8 py-6 text-center">
              <p className="text-xl md:text-2xl font-black text-transparent bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text">
                మీరు ఏ ఆన్‌లైన్ పని చెప్పినా — మేము మాత్రమే చేసేందుకు సిద్ధంగా ఉన్నాము! ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
