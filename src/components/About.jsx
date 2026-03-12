import React from 'react';
import { motion } from 'framer-motion';
import { HiLightningBolt, HiUserGroup, HiGlobeAlt, HiTrendingUp } from 'react-icons/hi';

const About = () => {
  const features = [
    {
      title: "Direct Access",
      description: "Pitch directly to active angel investors and VC funds looking for Bharat's next big things.",
      icon: <HiLightningBolt />,
    },
    {
      title: "Mentorship",
      description: "Get guidance from industry veterans to scale your startup with proven growth strategies.",
      icon: <HiUserGroup />,
    },
    {
      title: "National Visibility",
      description: "Showcase your brand to a nationwide audience of entrepreneurs and industry leaders.",
      icon: <HiGlobeAlt />,
    },
    {
      title: "Capital Infusion",
      description: "Secure the capital you need to take your business to the next level and dominate your market.",
      icon: <HiTrendingUp />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-blue-600 uppercase border border-blue-100 rounded-md bg-blue-50">
              Transforming Fundraising
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              What is <span className="text-blue-600">Karo Pitch?</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                Across India, visionary founders are building revolutionary businesses. However, networking barriers often block access to institutional capital.
              </p>
              <p className="border-l-4 border-blue-600 pl-6 py-2 bg-blue-50 italic text-slate-700">
                Karo Pitch acts as the catalyst. We provide a clean, professional stage where Bharat's most innovative founders meet India's top investors.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 saas-card group"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[40px] overflow-hidden group shadow-2xl shadow-slate-200">
              <img 
                src="/assets/startup_community.png" 
                alt="Startup Workshop" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl">
                <p className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] mb-2">The Mission</p>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">Fueling the Next Unicorns of Bharat</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
