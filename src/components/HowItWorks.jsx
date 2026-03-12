import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HiDocumentText, HiCheckCircle, HiMicrophone, HiChartBar } from 'react-icons/hi';

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      title: "Apply with pitch deck",
      description: "Submit your business plan through our streamlined application portal.",
      icon: <HiDocumentText />,
    },
    {
      title: "Experts shortlist",
      description: "Our panel selects the most promising and scalable business models.",
      icon: <HiCheckCircle />,
    },
    {
      title: "Pitch to investors",
      description: "Present your vision directly to active angel investors and VC partners.",
      icon: <HiMicrophone />,
    },
    {
      title: "Raise and Scale",
      description: "Secure investment and gain mentorship to take your startup national.",
      icon: <HiChartBar />,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-[11px] mb-4 block">How it Works</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
              Pathway to <span className="text-blue-600">Growth</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              A professional and transparent 4-step journey designed for the modern Indian founder.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-10 saas-card text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all shadow-sm">
                  {step.icon}
                </div>
                <div className="mb-4">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 block">Step 0{index + 1}</span>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{step.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
