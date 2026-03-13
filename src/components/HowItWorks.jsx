import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { HiDocumentText, HiCheckCircle, HiMicrophone, HiChartBar } from 'react-icons/hi';

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    {
      title: "Apply with Pitch Deck",
      description: "Submit your business plan through our streamlined application portal. We look for vision and scalability.",
      icon: <HiDocumentText />,
      sub: "Phase 01"
    },
    {
      title: "Expert Curation",
      description: "Our panel of industry veterans selects the most promising and scalable business models for the next cohort.",
      icon: <HiCheckCircle />,
      sub: "Phase 02"
    },
    {
      title: "The Main Pitch",
      description: "Present your vision directly to active angel investors and VC partners in a high-stakes setting.",
      icon: <HiMicrophone />,
      sub: "Phase 03"
    },
    {
      title: "Scale Nationally",
      description: "Secure the investment and gain the strategic mentorship required to take your startup to every corner of India.",
      icon: <HiChartBar />,
      sub: "Phase 04"
    },
  ];

  return (
    <section id="how-it-works" ref={containerRef} className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-slate-100/50 select-none pointer-events-none -z-0">
        PROCESS
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[11px] mb-4 block">The Journey</span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
              A Transparent <br />
              <span className="text-blue-600">Pathway to Success</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              We've simplified the fundraising process into four strategic phases for the modern Indian founder.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto relative px-6">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden md:block" />
          <motion.div 
            style={{ scaleY: pathLength, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-600 -translate-x-1/2 hidden md:block z-10"
          />

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right text-center' : 'md:text-left text-center'}`}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end items-center' : 'md:items-start items-center'}`}>
                    <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-3">{step.sub}</span>
                    <h3 className="text-3xl font-black text-slate-900 mb-5 tracking-tight">{step.title}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Point */}
                <div className="relative z-20 flex-shrink-0">
                  <motion.div 
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    className="w-20 h-20 bg-white rounded-3xl shadow-xl border-4 border-slate-50 flex items-center justify-center text-3xl text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"
                  >
                    {step.icon}
                  </motion.div>
                </div>

                {/* Empty space for balance */}
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
