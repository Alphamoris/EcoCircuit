"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { label: 'E-Waste Collected', value: 1500, unit: 'tons', icon: '♻️' },
  { label: 'CO₂ Emissions Saved', value: 2800, unit: 'tons', icon: '🌿' },
  { label: 'Materials Recovered', value: 850, unit: 'tons', icon: '🔄' },
  { label: 'Green Points Awarded', value: 125000, unit: '', icon: '🏆' },
];

export default function ImpactCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;

      const incrementValues = stats.map(stat => stat.value / steps);
      
      let step = 0;
      const timer = setInterval(() => {
        if (step < steps) {
          setCounts(prev => 
            prev.map((count, i) => 
              Math.min(count + incrementValues[i], stats[i].value)
            )
          );
          step++;
        } else {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView]);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section ref={ref} className="py-10 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-green/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-green mb-3 sm:mb-4">
            Our Impact So Far
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Every device recycled through EcoCircuit contributes to these impressive environmental metrics
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8 border border-primary-green/10 hover:border-primary-green/30 transition-colors h-full">
                <div className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-primary-green/5 rounded-full blur-xl" />
                
                <div className="flex flex-col items-center">
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{stat.icon}</div>
                  <h3 className="text-base sm:text-lg font-bold text-primary-green mb-2 sm:mb-3 text-center">
                    {stat.label}
                  </h3>
                  <div className="relative">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-green">
                      {Math.round(counts[index]).toLocaleString()}
                      {stat.unit && <span className="text-lg sm:text-xl md:text-2xl ml-1">{stat.unit}</span>}
                    </p>
                    <motion.div 
                      className="absolute -inset-3 sm:-inset-4 bg-primary-green/5 rounded-full blur-lg -z-10"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-16 text-center"
        >
          <motion.button
            className="bg-primary-green text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-primary-green/90 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Detailed Impact Report
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 