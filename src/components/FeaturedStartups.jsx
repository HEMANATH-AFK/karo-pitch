import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowSmRight, HiBadgeCheck } from 'react-icons/hi';

const FeaturedStartups = () => {
  const startups = [
    {
      name: "FarmFresh India",
      category: "AgriTech",
      stage: "Seed Round",
      description: "Connecting 10,000+ small farmers with urban markets using a proprietary digital supply chain.",
      image: "/assets/farm_fresh.png",
    },
    {
      name: "GlowSkin Naturals",
      category: "D2C Beauty",
      stage: "Pre-Series A",
      description: "Omni-channel Ayurvedic skincare brand achieving 300% Y-o-Y growth in tier 2 markets.",
      image: "/assets/glow_skin.png",
    },
    {
      name: "ToolForge Industries",
      category: "Manufacturing",
      stage: "Bootstrapped",
      description: "Developing smart precision industrial tools specifically for the Indian MSME sector.",
      image: "/assets/tool_forge.png",
    },
  ];

  return (
    <section id="startups" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[11px] mb-4 block">Cohort Showcase</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                Startups to <span className="text-blue-600">Watch</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Explore the disruptive startups from our previous cohorts that successfully secured investment.
              </p>
            </motion.div>
          </div>
          <motion.button 
            whileHover={{ x: 10, color: "#2563eb" }}
            className="flex items-center gap-2 text-slate-500 font-black text-xs uppercase tracking-[0.2em] group transition-all"
          >
            All Case Studies <HiArrowSmRight className="text-2xl group-hover:text-blue-600 transition-colors" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group saas-card overflow-hidden h-full flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={startup.image} 
                  alt={startup.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-5 left-5 px-4 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest border border-blue-50">
                  {startup.category}
                </div>
                <div className="absolute bottom-5 right-5 px-4 py-1.5 bg-slate-900/90 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                  {startup.stage}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow bg-white group-hover:bg-blue-50/10 transition-colors">
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                  {startup.name} <HiBadgeCheck className="text-blue-600" />
                </h3>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium flex-grow text-sm md:text-base">
                  {startup.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all text-xs uppercase tracking-widest shadow-lg shadow-blue-100"
                  >
                    View Details
                  </motion.button>
                  <div className="flex -space-x-3">
                     {[1,2].map(i => (
                       <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-800 shadow-sm">
                         {i === 1 ? 'KP' : '🚀'}
                       </div>
                     ))}
                  </div>
                </div>
              </div>
              
              {/* Bottom focus bar */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStartups;
