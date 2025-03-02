"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function AnimatedCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-white to-primary-green/10 z-0" />
      
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl"
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
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Content */}
            <div className="p-8 sm:p-12 lg:p-16">
              <motion.div variants={itemVariants}>
                <span className="inline-block bg-primary-green/10 text-primary-green px-4 py-1 rounded-full text-sm font-medium mb-6">
                  JOIN THE MOVEMENT
                </span>
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              >
                Ready to Make a <span className="text-primary-green">Positive Impact</span> on Our Planet?
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8"
              >
                Join thousands of environmentally conscious individuals and businesses in our mission to create a sustainable future through responsible e-waste management.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a 
                  href="/collection"
                  className="bg-primary-green text-white px-6 py-3 rounded-full hover:bg-primary-green/90 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Collection
                  <SparklesIcon className="h-5 w-5" />
                </motion.a>
                
                <motion.a 
                  href="#how-it-works"
                  className="border-2 border-primary-green text-primary-green px-6 py-3 rounded-full hover:bg-primary-green hover:text-white transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                  <ArrowRightIcon className="h-5 w-5" />
                </motion.a>
              </motion.div>
            </div>
            
            {/* Right side - Stats */}
            <div className="bg-gradient-to-br from-primary-green to-primary-green/90 p-8 sm:p-12 lg:p-16 text-white">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold mb-8"
              >
                Our Collective Impact
              </motion.h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { value: "1,500+", label: "Devices Recycled" },
                  { value: "2,800+", label: "CO₂ Tons Saved" },
                  { value: "850+", label: "Materials Recovered" },
                  { value: "125,000+", label: "Green Points Awarded" }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    variants={itemVariants}
                    className="relative"
                  >
                    <motion.div 
                      className="absolute -inset-4 bg-white/5 rounded-full blur-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.5
                      }}
                    />
                    <div className="relative">
                      <div className="text-3xl font-bold mb-2">{stat.value}</div>
                      <div className="text-white/80">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="mt-12 pt-8 border-t border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Certified Recycling Partner</div>
                    <div className="text-white/80 text-sm">ISO 14001 Environmental Management</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 