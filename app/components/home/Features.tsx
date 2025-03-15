"use client"
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { 
  CpuChipIcon, 
  CloudArrowUpIcon, 
  ShieldCheckIcon,
  TrophyIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: CpuChipIcon,
    title: 'AI-Powered Sorting',
    description: 'Advanced algorithms categorize e-waste for optimal recycling and resource recovery.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    highlight: 'primary-green'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Data Wiping',
    description: 'Military-grade data destruction ensures your personal information remains protected.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    highlight: 'accent-orange'
  },
  {
    icon: TrophyIcon,
    title: 'Rewards Program',
    description: 'Earn Green Points for every recycled device that can be redeemed for eco-friendly products.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    highlight: 'tech-blue'
  },
  {
    icon: ChartBarIcon,
    title: 'Impact Tracking',
    description: 'Monitor your environmental contribution with detailed metrics and visualizations.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    highlight: 'primary-green'
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud Reports',
    description: 'Access your recycling history anytime and share your impact with your network.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    highlight: 'tech-blue'
  },
  {
    icon: UserGroupIcon,
    title: 'Community Events',
    description: 'Join local recycling initiatives and connect with like-minded environmentalists.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
    highlight: 'accent-orange'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Value Recovery',
    description: 'Get fair value for recyclable components and precious metals in your devices.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
    highlight: 'tech-blue'
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Impact',
    description: 'Be part of worldwide sustainability efforts to reduce e-waste and carbon emissions.',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50',
    highlight: 'primary-green'
  }
];

// Add this constant for predetermined circle positions
const floatingCircles = [
  {
    width: 80,
    height: 100,
    left: 25,
    top: 15,
    animationOffset: 20
  },
  {
    width: 120,
    height: 90,
    left: 65,
    top: 35,
    animationOffset: 15
  },
  {
    width: 95,
    height: 110,
    left: 45,
    top: 60,
    animationOffset: 25
  },
  {
    width: 85,
    height: 85,
    left: 15,
    top: 75,
    animationOffset: 18
  },
  {
    width: 110,
    height: 100,
    left: 75,
    top: 85,
    animationOffset: 22
  }
];

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.1, 1, 1, 0.1]);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
  
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2
      }
    }
  };
  
  const floatingCircleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary-green/5 to-white z-0"
        style={{ y: backgroundY }}
      />
      
      <motion.div 
        className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-green/5 rounded-full blur-3xl -z-10"
        style={{ opacity }}
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
        className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-green/5 rounded-full blur-3xl -z-10"
        style={{ opacity }}
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
      
      {/* Replace the random circles with predetermined ones */}
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary-green/10 blur-xl -z-10"
          variants={floatingCircleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            width: `${circle.width}px`,
            height: `${circle.height}px`,
            left: `${circle.left}%`,
            top: `${circle.top}%`,
          }}
          animate={{
            y: [0, circle.animationOffset, 0],
            x: [0, circle.animationOffset / 2, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div 
            className="inline-block mb-3 sm:mb-4"
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
            <span className="bg-primary-green/10 text-primary-green px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
              INNOVATIVE FEATURES
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-green mb-3 sm:mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="block"
            >
              Cutting-Edge Technology
            </motion.span>
          </h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our platform combines innovative features to make e-waste recycling efficient, secure, and rewarding
          </motion.p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden"
            >
              <div className={`p-4 sm:p-6 flex flex-col h-full`}>
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg ${feature.bgColor} mr-3`}>
                    <feature.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${feature.color}`} />
                  </div>
                  <h3 className={`text-base sm:text-lg font-semibold text-${feature.highlight}`}>
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 flex-grow">
                  {feature.description}
                </p>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <button className={`text-${feature.highlight} text-sm sm:text-base flex items-center font-medium hover:underline`}>
                    Learn more
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center"
        >
          <motion.button
            className="bg-primary-green text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-primary-green/90 transition-all text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 