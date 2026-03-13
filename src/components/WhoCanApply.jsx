import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiShoppingBag, 
  HiDesktopComputer, 
  HiOfficeBuilding, 
  HiLightningBolt, 
  HiGlobeAlt, 
  HiCube 
} from 'react-icons/hi';

const WhoCanApply = () => {
  const categories = [
    { 
      name: "D2C Brands", 
      icon: <HiShoppingBag />, 
      description: "Direct-to-consumer product brands scaling in the Indian market.",
      size: "col-span-2",
      color: "from-blue-500/10 to-blue-600/5",
      iconColor: "text-blue-600"
    },
    { 
      name: "SaaS Startups", 
      icon: <HiDesktopComputer />, 
      description: "Software solutions leveraging cloud and AI for institutional impact.",
      size: "col-span-1",
      color: "from-indigo-500/10 to-indigo-600/5",
      iconColor: "text-indigo-600"
    },
    { 
      name: "MSMEs", 
      icon: <HiOfficeBuilding />, 
      description: "Small and medium enterprises with high scalability and innovation.",
      size: "col-span-1 row-span-2",
      color: "from-sky-500/10 to-sky-600/5",
      iconColor: "text-sky-600"
    },
    { 
      name: "Manufacturing", 
      icon: <HiCube />, 
      description: "Industrial and deep-tech startups building the future of Bharat.",
      size: "col-span-1",
      color: "from-emerald-500/10 to-emerald-600/5",
      iconColor: "text-emerald-600"
    },
    { 
      name: "Consumer Tech", 
      icon: <HiLightningBolt />, 
      description: "Scalable tech solutions solving everyday consumer challenges.",
      size: "col-span-1",
      color: "from-purple-500/10 to-purple-600/5",
      iconColor: "text-purple-600"
    },
    { 
      name: "Bharat-focused", 
      icon: <HiGlobeAlt />, 
      description: "Tailored solutions for the next billion users in tier 2/3 cities.",
      size: "col-span-2",
      color: "from-orange-500/10 to-orange-600/5",
      iconColor: "text-orange-600"
    },
  ];

  return (
    <section id="apply" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[11px] mb-4 block">Eligibility</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              Scouting for <br />
              <span className="text-blue-600">Pure Innovation</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">
              We look for passionate founders building high-impact solutions across these core industry pillars.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-10 rounded-[45px] border border-slate-100 overflow-hidden bg-white hover:border-blue-200 transition-all duration-700 shadow-sm hover:shadow-2xl hover:shadow-blue-100/40 flex flex-col justify-end ${category.size}`}
            >
              {/* Colored Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${category.color} rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-white rounded-[24px] flex items-center justify-center text-3xl mb-8 shadow-lg border border-slate-50 ${category.iconColor} group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight uppercase">
                  {category.name}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700">
                  {category.description}
                </p>
              </div>

              {/* Decorative Number */}
              <div className="absolute -top-10 -right-10 text-[180px] font-black text-slate-100/20 pointer-events-none group-hover:text-blue-50/30 transition-colors duration-700 select-none">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
