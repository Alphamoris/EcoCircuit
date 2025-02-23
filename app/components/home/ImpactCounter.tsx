"use client"
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { label: 'E-Waste Collected', value: 1500, unit: 'tons' },
  { label: 'CO₂ Emissions Saved', value: 2800, unit: 'tons' },
  { label: 'Materials Recovered', value: 850, unit: 'tons' },
  { label: 'Green Points Awarded', value: 125000, unit: '' },
];

export default function ImpactCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const { ref, inView } = useInView({
    threshold: 0.5,
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

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-primary-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-green mb-16">
          Our Impact So Far
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-sm p-6 border border-primary-green/10 hover:border-primary-green/20 transition-colors">
                <h3 className="text-lg font-bold text-primary-green mb-2">
                  {stat.label}
                </h3>
                <p className="text-4xl font-bold text-primary-green">
                  {Math.round(counts[index]).toLocaleString()}
                  {stat.unit && <span className="text-2xl ml-1">{stat.unit}</span>}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 