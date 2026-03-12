import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { HiRocketLaunch, HiArrowTrendingUp, HiCurrencyDollar, HiUsers } from 'react-icons/hi2';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Interaction for Icons
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const icons = [
    { Icon: HiRocketLaunch, color: "text-blue-500", top: "15%", left: "12%", delay: 0 },
    { Icon: HiArrowTrendingUp, color: "text-blue-600", bottom: "20%", left: "15%", delay: 1 },
    { Icon: HiCurrencyDollar, color: "text-blue-400", top: "25%", right: "15%", delay: 0.5 },
    { Icon: HiUsers, color: "text-blue-500", bottom: "15%", right: "12%", delay: 1.5 },
  ];

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* Particle Background Layer */}
      <ParticleBackground />

      {/* Cinematic Film Grain */}
      <div className="film-grain" />

      {/* Soft Background Gradient */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(37,99,235,0.03),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>
      </div>

      {/* Floating Interactive Startup Icons */}
      <div className="absolute inset-0 pointer-events-none -z-0">
        {icons.map((item, i) => {
          // Individual physics-based springs for each icon
          const iconX = useSpring(useTransform(mouseX, (x) => (x - window.innerWidth / 2) * 0.05 * (i + 1)));
          const iconY = useSpring(useTransform(mouseY, (y) => (y - window.innerHeight / 2) * 0.05 * (i + 1)));

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 0.6, 
                scale: 1,
              }}
              style={{ 
                top: item.top, 
                bottom: item.bottom, 
                left: item.left, 
                right: item.right,
                x: iconX,
                y: iconY
              }}
              transition={{ 
                opacity: { duration: 1, delay: item.delay }
              }}
              className={`absolute p-5 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl shadow-slate-200/30 border border-slate-100/50 ${item.color} text-4xl`}
            >
              <item.Icon />
            </motion.div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4 }}
             className="inline-flex items-center gap-2 px-5 py-2 mb-10 text-[11px] font-black tracking-widest text-blue-600 uppercase bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-full"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            India's Most Active Pitch Platform
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
            Pitch Your Startup to <br />
            <span className="gradient-text-blue">India's Top Investors</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-500 mb-14 leading-relaxed font-medium">
            Karo Pitch is a curated national platform where Bharat's most innovative founders present directly to institutional capital and strategic mentors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.03, y: -4, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-100 flex items-center gap-3 transition-all"
            >
              Apply to Pitch <HiArrowRight className="text-2xl" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03, y: -4, backgroundColor: "#f8fafc" }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-5 bg-white/80 backdrop-blur-sm text-slate-900 border border-slate-200 rounded-2xl font-black text-lg shadow-md transition-all"
            >
              See the Cohort
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1.5px] h-10 bg-slate-200 rounded-full relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 40, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
