import React from 'react';
import { motion } from 'framer-motion';

const Investors = () => {
  const investorCategories = [
    { 
      name: "Angel Investors", 
      count: "50+", 
      detail: "Active high net-worth individuals specifically looking for early-stage startups.",
      image: "/assets/investor_angel.png" 
    },
    { 
      name: "VC Funds", 
      count: "20+", 
      detail: "Top-tier venture capital firms ready to participate in seed and growth rounds.",
      image: "/assets/investor_vc.png" 
    },
    { 
      name: "Strategic Mentors", 
      count: "100+", 
      detail: "Industry veterans providing smart capital and deep operational expertise.",
      image: "/assets/investor_mentor.png" 
    },
  ];

  const partners = ["SEQUOIA", "Accel", "Y Combinator", "SOFTBANK", "Matrix", "Tiger Global", "Nexus", "Elevation"];

  return (
    <section id="investors" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[11px] mb-4 block">Capital Network</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
              Meet Our <span className="text-blue-600">Investment Partners</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Access a clean, professional network of prestigious investors who drive the Indian startup growth.
            </p>
          </motion.div>
        </div>

        {/* Logo Marquee */}
        <div className="relative mb-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex items-center gap-24 py-16 animate-marquee whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...partners, ...partners].map((partner, i) => (
                <span key={i} className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter hover:text-blue-600 transition-colors cursor-default select-none uppercase">
                  {partner}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investorCategories.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative md:h-[450px] rounded-3xl overflow-hidden group shadow-xl shadow-slate-200 border border-slate-100"
            >
              <img 
                src={type.image} 
                alt={type.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-20 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent p-12 flex flex-col justify-end">
                <p className="text-blue-600 font-black text-5xl mb-3 tracking-tighter">{type.count}</p>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight mb-4">
                  {type.name}
                </h3>
                <p className="text-slate-600 font-semibold text-sm leading-relaxed max-w-[250px]">
                  {type.detail}
                </p>
                <div className="mt-8 w-14 h-1.5 bg-blue-600 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investors;
