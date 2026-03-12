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
    { name: "D2C Brands", icon: <HiShoppingBag />, description: "Direct-to-consumer product brands scaling in the Indian market." },
    { name: "SaaS Startups", icon: <HiDesktopComputer />, description: "Software solutions leveraging cloud and AI for institutional impact." },
    { name: "MSMEs", icon: <HiOfficeBuilding />, description: "Small and medium enterprises with high scalability and innovation." },
    { name: "Manufacturing", icon: <HiCube />, description: "Industrial and deep-tech startups building the future of Bharat." },
    { name: "Bharat-focused", icon: <HiGlobeAlt />, description: "Tailored solutions for the next billion users in tier 2/3 cities." },
    { name: "Consumer Tech", icon: <HiLightningBolt />, description: "Scalable tech solutions solving everyday consumer challenges." },
  ];

  return (
    <section id="apply" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[11px] mb-4 block">Eligibility</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
              Looking for <span className="text-blue-600">Visionaries</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              We are scouting for passionate founders across these key high-growth sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative p-12 saas-card h-full flex flex-col items-center text-center cursor-pointer overflow-hidden group-hover:border-blue-300 group-hover:shadow-blue-100/50">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center text-4xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors uppercase leading-tight">
                  {category.name}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
