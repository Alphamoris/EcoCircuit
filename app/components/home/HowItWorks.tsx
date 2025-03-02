"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DevicePhoneMobileIcon, 
  TruckIcon, 
  CogIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Schedule Pickup",
    description: "Book a convenient time for e-waste collection through our easy-to-use platform."
  },
  {
    icon: TruckIcon,
    title: "We Collect",
    description: "Our certified team picks up your e-waste directly from your location."
  },
  {
    icon: CogIcon,
    title: "AI Processing",
    description: "Advanced AI technology sorts and processes materials for maximum recovery."
  },
  {
    icon: SparklesIcon,
    title: "Earn Rewards",
    description: "Get Green Points for your contribution to sustainable recycling."
  }
];

export default function HowItWorks() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  // Item animation variants
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

  // Arrow animation variants
  const arrowVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { 
      opacity: 1, 
      width: "100%",
      transition: {
        delay: 1,
        duration: 0.8
      }
    }
  };

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-gradient-to-b from-primary-green/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-green mb-4">
            How It Works
          </h2>
          <p className="text-text max-w-2xl mx-auto text-lg">
            Our streamlined process makes e-waste recycling simple and rewarding
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative z-10"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-primary-green/10 hover:border-primary-green/30 transition-all h-full">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary-green/5 rounded-full blur-lg"></div>
                    <div className="bg-[#E7F4E8] w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10">
                      <step.icon className="h-8 w-8 text-primary-green" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <motion.div 
                        className="text-4xl font-bold text-primary-green/10"
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.1 }}
                        transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-green mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 left-full w-full h-0.5 z-0">
                  <motion.div 
                    className="h-full bg-primary-green/20"
                    variants={arrowVariants}
                  >
                    <div className="absolute right-0 -top-1.5 w-3 h-3 bg-primary-green transform rotate-45" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <motion.button
            className="bg-primary-green text-white px-6 py-3 rounded-full hover:bg-primary-green/90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your First Pickup
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 