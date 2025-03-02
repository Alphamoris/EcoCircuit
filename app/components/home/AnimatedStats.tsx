"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DevicePhoneMobileIcon, 
  ComputerDesktopIcon, 
  TvIcon, 
  CpuChipIcon 
} from '@heroicons/react/24/outline';

interface StatProps {
  icon: React.ElementType;
  title: string;
  value: number;
  unit: string;
  color: string;
  delay?: number;
}

const stats: StatProps[] = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Phones Recycled",
    value: 5280,
    unit: "+",
    color: "primary-green"
  },
  {
    icon: ComputerDesktopIcon,
    title: "Computers Recycled",
    value: 3150,
    unit: "+",
    color: "tech-blue"
  },
  {
    icon: TvIcon,
    title: "Displays Recycled",
    value: 2430,
    unit: "+",
    color: "accent-orange"
  },
  {
    icon: CpuChipIcon,
    title: "Components Recovered",
    value: 18700,
    unit: "+",
    color: "primary-green"
  }
];

const Stat = ({ icon: Icon, title, value, unit, color, delay = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const interval = duration / steps;
      const increment = value / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        if (currentStep < steps) {
          setCount(prev => Math.min(prev + increment, value));
          currentStep++;
        } else {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-gray-200 transition-colors h-full">
        <div className="flex items-center mb-4">
          <motion.div 
            className={`w-12 h-12 rounded-full bg-${color}/10 flex items-center justify-center mr-4`}
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className={`h-6 w-6 text-${color}`} />
          </motion.div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        
        <div className="relative">
          <div className={`text-4xl font-bold text-${color} mb-1`}>
            {Math.round(count).toLocaleString()}{unit}
          </div>
          <motion.div 
            className={`absolute -inset-4 bg-${color}/5 rounded-full blur-lg -z-10`}
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
    </motion.div>
  );
};

export default function AnimatedStats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
            <span className="bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium">
              RECYCLING METRICS
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="block"
            >
              Our Recycling Impact
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We&apos;ve helped thousands of users recycle their electronic devices responsibly
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Stat 
              key={stat.title}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              unit={stat.unit}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 