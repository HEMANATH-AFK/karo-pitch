import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroLoader = ({ onComplete }) => {
  const [stage, setStage] = useState(0); // 0: Init, 1: Flash/Glow, 2: Logo, 3: Exit

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 400);
    const timer2 = setTimeout(() => setStage(2), 1000);
    const timer3 = setTimeout(() => onComplete(), 3800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(10px)",
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[1000] bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Premium Gravity Pulse BG */}
      <AnimatePresence>
        {stage >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute"
          >
            <div className="w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 m-auto w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-[80px]" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.div
          animate={stage >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Logo Icon with Gravity Drop */}
          <motion.div 
            initial={{ y: -100, opacity: 0, scale: 0.5 }}
            animate={stage >= 2 ? { y: 0, opacity: 1, scale: 1 } : {}}
            transition={{ 
              type: "spring", 
              stiffness: 70, 
              damping: 12, 
              delay: 0.2 
            }}
            className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-[30px] flex items-center justify-center shadow-[0_20px_50px_rgba(37,99,235,0.25)] mb-10 relative group"
          >
            <span className="text-white font-black text-4xl md:text-5xl select-none">K</span>
            <motion.div 
              animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-blue-400 rounded-[30px] -z-10"
            />
          </motion.div>

          {/* Headline Reveal */}
          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={stage >= 2 ? { y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter"
            >
              Karo <span className="text-blue-600">Pitch</span>
            </motion.h1>
          </div>

          {/* Sophisticated Subtitle */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={stage >= 2 ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-px bg-slate-200" />
            <p className="text-slate-400 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs">
              Elevation for Bharat
            </p>
            <div className="w-8 h-px bg-slate-200" />
          </motion.div>
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={stage >= 2 ? { scaleX: 1 } : {}}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent mt-12 rounded-full"
          />
        </motion.div>
      </div>

      {/* Extreme Low-Op Detail */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>
    </motion.div>
  );
};

export default IntroLoader;
