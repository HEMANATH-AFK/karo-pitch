import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroLoader from '../components/IntroLoader';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import WhoCanApply from '../components/WhoCanApply';
import Investors from '../components/Investors';
import FeaturedStartups from '../components/FeaturedStartups';
import AboutKaroStartup from '../components/AboutKaroStartup';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 30,
      y: (e.clientY / window.innerHeight - 0.5) * 30
    });
  };

  return (
    <div 
      className="bg-white min-h-screen text-slate-800 selection:bg-blue-600/10 overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {isLoading && (
          <IntroLoader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Global Parallax Background Items (Subtle Light Theme) */}
          <div className="fixed inset-0 pointer-events-none -z-10">
            <motion.div 
               animate={{ x: mousePosition.x * 0.3, y: mousePosition.y * 0.3 }}
               className="absolute top-[15%] right-[5%] w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]"
            />
            <motion.div 
               animate={{ x: -mousePosition.x * 0.5, y: -mousePosition.y * 0.5 }}
               className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] bg-slate-100/30 rounded-full blur-[120px]"
            />
          </div>

          <Navbar />
          <main>
            <Hero />
            <div className="relative">
              {/* Subtle background patterns */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.01] pointer-events-none"></div>
              <About />
              <HowItWorks />
              <WhoCanApply />
              <Investors />
              <FeaturedStartups />
              <AboutKaroStartup />
            </div>
            <CTA />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
