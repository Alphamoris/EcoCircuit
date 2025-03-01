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

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-primary-green/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-primary-green mb-4">
            How It Works
          </h2>
          <p className="text-text max-w-2xl mx-auto">
            Our streamlined process makes e-waste recycling simple and rewarding
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-xl shadow-sm p-8 border border-primary-green/10">
                <div className="bg-[#E7F4E8] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary-green" />
                </div>
                <h3 className="text-xl font-bold text-primary-green mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 left-full w-full h-0.5 bg-primary-green/20 transform -translate-y-1/2">
                  <div className="absolute right-0 -top-1.5 w-3 h-3 bg-primary-green transform rotate-45" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
