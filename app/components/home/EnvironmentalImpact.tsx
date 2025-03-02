"use client"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { 
  GlobeAltIcon, 
  CloudIcon, 
  ArrowPathIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const impacts = [
  {
    title: "Reduced CO₂ Emissions",
    value: 28000,
    unit: "kg",
    description: "of CO₂ emissions prevented through proper e-waste recycling",
    icon: GlobeAltIcon,
    color: "emerald"
  },
  {
    title: "Water Saved",
    value: 15000,
    unit: "liters",
    description: "of water saved through our efficient recycling processes",
    icon: CloudIcon,
    color: "blue"
  },
  {
    title: "Materials Recovered",
    value: 850,
    unit: "kg",
    description: "of valuable materials recovered and returned to the supply chain",
    icon: ArrowPathIcon,
    color: "amber"
  }
];

export default function EnvironmentalImpact() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [counts, setCounts] = useState(impacts.map(() => 0));

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      const incrementValues = impacts.map(impact => impact.value / steps);
      
      let step = 0;
      const timer = setInterval(() => {
        if (step < steps) {
          setCounts(prev => 
            prev.map((count, i) => 
              Math.min(count + incrementValues[i], impacts[i].value)
            )
          );
          step++;
        } else {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary-green to-primary-green/90 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 10,
              delay: 0.2
            }}
            viewport={{ once: true }}
          >
            <span className="bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              ENVIRONMENTAL IMPACT
            </span>
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="block"
            >
              Our Environmental Impact
            </motion.span>
          </h2>
          
          <motion.p 
            className="max-w-2xl mx-auto opacity-90 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Every device recycled through EcoCircuit contributes to a healthier planet
          </motion.p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2 }
              }}
              className={`bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden`}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-xl" />
              
              <div className="relative">
                <motion.div 
                  className={`w-16 h-16 rounded-full bg-${impact.color}-500/20 flex items-center justify-center mb-6`}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  <impact.icon className={`h-8 w-8 text-${impact.color}-400`} />
                </motion.div>
                
                <div className="flex items-baseline mb-4">
                  <motion.div 
                    className="text-5xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.2) }}
                  >
                    {Math.round(counts[index]).toLocaleString()}
                  </motion.div>
                  <span className="text-2xl ml-1 opacity-90">{impact.unit}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{impact.title}</h3>
                <p className="opacity-90 mb-6">{impact.description}</p>
                
                <motion.div 
                  className="mt-auto"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className={`text-${impact.color}-300 font-medium flex items-center text-sm group`}>
                    Learn more
                    <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.button 
            className="bg-white text-primary-green px-8 py-4 rounded-full hover:bg-opacity-90 transition-all font-bold shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Calculate Your Impact
          </motion.button>
          
          <motion.div 
            className="mt-8 text-white/80 text-sm max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p>
              Our impact calculations are based on industry standards and verified by independent environmental agencies. 
              Join us in our mission to create a sustainable future through responsible e-waste management.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 