import React from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiUserGroup, HiGlobeAlt, HiTrendingUp } from 'react-icons/hi';

const About = () => {
  const features = [
    {
      title: "Direct Access",
      description: "Pitch directly to active angel investors and VC funds looking for Bharat's next big things.",
      icon: <HiLightningBolt />,
      color: "bg-amber-50 text-amber-600 group-hover:bg-amber-500",
    },
    {
      title: "Mentorship",
      description: "Get guidance from industry veterans to scale your startup with proven growth strategies.",
      icon: <HiUserGroup />,
      color: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
    },
    {
      title: "National Visibility",
      description: "Showcase your brand to a nationwide audience of entrepreneurs and industry leaders.",
      icon: <HiGlobeAlt />,
      color: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500",
    },
    {
      title: "Capital Infusion",
      description: "Secure the capital you need to take your business to the next level and dominate your market.",
      icon: <HiTrendingUp />,
      color: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-50/50 rounded-full blur-[100px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-indigo-50/30 rounded-full blur-[80px] md:blur-[100px] -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[11px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50/50 border border-blue-100 rounded-full"
            >
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              The Karo Pitch Mission
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] md:leading-[0.95] tracking-tighter">
              Empowering the <br className="hidden sm:block" />
              <span className="gradient-text-blue">Next Billion Users</span>
            </h2>
            
            <div className="space-y-6 text-xl text-slate-500 leading-relaxed font-medium max-w-xl">
              <p>
                Across India, visionary founders are building revolutionary businesses. However, networking barriers often block access to institutional capital.
              </p>
              <p className="text-slate-900 font-bold border-l-4 border-blue-600 pl-6 py-2 bg-slate-50/50 rounded-r-2xl">
                Karo Pitch acts as the catalyst. We provide a clean, professional stage where Bharat's most innovative founders meet India's top investors.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[50px] overflow-hidden group shadow-[0_50px_100px_-20px_rgba(37,99,235,0.15)] bg-slate-100">
              <img 
                src="/assets/startup_community.png" 
                alt="Startup Workshop" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 p-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[35px] shadow-2xl">
                <p className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3">The Impact</p>
                <h4 className="text-3xl font-black text-white tracking-tight leading-tight">
                  Driving Innovation at the Heart of India.
                </h4>
              </div>
            </div>
            
            {/* Floating Stat Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-10 md:-right-10 p-4 md:p-6 bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 hidden sm:block max-w-[140px] md:max-w-none"
            >
              <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Funding Raised</p>
              <div className="text-xl md:text-3xl font-black text-blue-600 tracking-tighter">₹50Cr+</div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-[35px] md:rounded-[40px] border border-slate-100 bg-white hover:border-blue-100 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.1)] transition-all duration-500 group relative overflow-hidden"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="font-black text-slate-900 mb-4 text-xl tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{feature.description}</p>
              
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-blue-600 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
