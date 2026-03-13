import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroLoader = ({ onComplete }) => {
  const [stage, setStage] = useState(0); // 0: Init, 1: Flash/Glow, 2: Logo, 3: Exit
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 400);
    const timer2 = setTimeout(() => setStage(2), 1000);
    const timer3 = setTimeout(() => onComplete(), 4200);

    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 25);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(interval);
    };
  }, [onComplete]);

  const letters = "Karo Pitch".split("");

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
      {/* Scanline Effect */}
      <motion.div 
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[30vh] bg-gradient-to-b from-transparent via-blue-50/40 to-transparent z-0"
      />

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
      <div className="relative z-10 text-center px-4">
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
            className="w-16 h-16 md:w-24 md:h-24 bg-blue-600 rounded-[20px] md:rounded-[30px] flex items-center justify-center shadow-[0_20px_50px_rgba(37,99,235,0.25)] mb-8 md:mb-10 relative group"
          >
            <span className="text-white font-black text-3xl md:text-5xl select-none">K</span>
            <motion.div 
              animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-blue-400 rounded-[20px] md:rounded-[30px] -z-10"
            />
          </motion.div>

          {/* Headline Reveal (Staggered) */}
          <div className="flex flex-wrap justify-center mb-4 md:mb-6 leading-none">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={stage >= 2 ? { y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + (i * 0.05), 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter ${char === ' ' ? 'w-2 md:w-4' : ''} ${i > 4 ? 'text-blue-600' : 'text-slate-900'}`}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Sophisticated Subtitle */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={stage >= 2 ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="flex items-center gap-3 md:gap-4"
          >
            <div className="w-6 md:w-8 h-px bg-slate-200" />
            <p className="text-slate-400 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-xs">
              Elevation for Bharat
            </p>
            <div className="w-6 md:w-8 h-px bg-slate-200" />
          </motion.div>
          
          {/* Tech Progress Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={stage >= 2 ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="mt-10 md:mt-14 flex flex-col items-center gap-3 w-full max-w-[200px] md:max-w-[250px]"
          >
            <div className="text-[10px] font-mono font-bold text-blue-600 tracking-[0.2em]">
               INITIALIZING_SUCCESS_{progress}%
            </div>
            <div className="w-full h-[2px] bg-slate-100 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${progress}%` }}
                 className="h-full bg-blue-600"
               />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Extreme Low-Op Detail */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
      </div>
    </motion.div>
  );
};

export default IntroLoader;
