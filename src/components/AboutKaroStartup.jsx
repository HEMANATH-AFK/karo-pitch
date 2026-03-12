import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = numericValue;
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {isInView ? count : 0}{suffix}
    </span>
  );
};

const AboutKaroStartup = () => {
  const stats = [
    { label: "Startup Stories", value: "5000+" },
    { label: "Monthly Readers", value: "1M+" },
    { label: "Founder Community", value: "100K+" },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-1/2 -z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest text-blue-600 uppercase border border-blue-100 rounded-md bg-blue-50">
              The Voice of Bharat
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
              The Legacy of <br />
              <span className="text-blue-600">KaroStartup</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium mb-12">
              <p>
                KaroStartup is one of India's most trusted startup storytelling platforms. For half a decade, we have been documenting the struggles and celebrating the exits of entrepreneurs.
              </p>
              <p>
                We build bridges between dreamers and movers, accelerating the journey of the "Next Big Thing" from the streets of India to global boards.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-3xl md:text-5xl font-black text-blue-600 mb-2">
                    <Counter value={stat.value} />
                  </p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square bg-slate-100 rounded-[60px] relative overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200">
              <img 
                src="/assets/startup_community.png" 
                alt="KaroStartup Community" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
            </div>
            
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutKaroStartup;
