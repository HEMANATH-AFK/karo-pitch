import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const CTA = () => {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-blue-600 rounded-[50px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200 border border-blue-500"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.span 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-white/70 font-black text-xs uppercase tracking-[0.4em] mb-6 block"
            >
              Joining the Cohort
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[1.05] tracking-tighter">
              Ready to <span className="text-blue-100 underline decoration-blue-300 underline-offset-8">Scale</span> Your Vision?
            </h2>
            <p className="text-xl text-blue-50/80 mb-14 leading-relaxed font-medium max-w-2xl mx-auto">
              Join Karo Pitch and get the platform you need to reach India’s most influential investors. The next cohort is now accepting applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-6 bg-white text-blue-600 rounded-2xl font-black text-xl shadow-xl transition-all flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                Apply Now <HiArrowRight className="text-2xl" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -4, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-6 bg-transparent text-white border-2 border-white/30 rounded-2xl font-black text-xl hover:border-white transition-all uppercase tracking-wider"
              >
                Partner with Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
