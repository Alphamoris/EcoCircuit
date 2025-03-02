"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingDevicesVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-green/5 via-primary-green/3 to-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl"
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-[30rem] h-[30rem] bg-[#E1F0E3] rounded-full blur-3xl"
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        <motion.div
          style={{ scale, opacity }}
          className="mb-12"
        >
          <motion.div 
            className="flex justify-center mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full p-2 shadow-xl">
              <Image
                src="/logo.png"
                alt="EcoCircuit Logo"
                width={128}
                height={128}
                className="object-contain p-2 w-full h-full"
                priority
              />
              <div className="absolute -inset-2 bg-primary-green/10 rounded-full blur-xl -z-10" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight tracking-tight"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <motion.span 
              className="text-primary-green block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform E-Waste
            </motion.span>
            <motion.span 
              className="text-[#2C7A3F] block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Into Environmental Impact
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            Join the revolution in sustainable e-waste management. 
            Our AI-powered platform makes recycling electronics easier than ever.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <motion.a 
            href="/collection"
            className="group bg-primary-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary-green/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              Schedule Collection
              <SparklesIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
            </span>
          </motion.a>
          <motion.a 
            href="#how-it-works"
            className="group border-2 border-primary-green text-primary-green px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary-green hover:text-white transition-all transform hover:scale-105 inline-flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Floating devices */}
        <motion.div
          className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96"
          initial="hidden"
          animate="visible"
          variants={floatingDevicesVariants}
        >
          <motion.div 
            className="absolute left-[10%] top-[20%] w-24 h-24 sm:w-32 sm:h-32"
            style={{ y: y3 }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [-5, 5, -5]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/iphone.jpg"
                alt="Smartphone"
                width={128}
                height={128}
                className="object-contain rounded-lg shadow-lg w-full h-full"
                sizes="(max-width: 640px) 96px, 128px"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute left-[40%] top-[10%] w-32 h-32 sm:w-40 sm:h-40"
            style={{ y: y2 }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [5, -5, 5]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/mac.jpg"
                alt="Laptop"
                width={160}
                height={160}
                className="object-contain rounded-lg shadow-lg w-full h-full"
                sizes="(max-width: 640px) 128px, 160px"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute right-[15%] top-[30%] w-28 h-28 sm:w-36 sm:h-36"
            style={{ y: y1 }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [-3, 3, -3]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/applewatch.jpg"
                alt="Smartwatch"
                width={144}
                height={144}
                className="object-contain rounded-lg shadow-lg w-full h-full"
                sizes="(max-width: 640px) 112px, 144px"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ opacity }}
        >
          <ArrowDownIcon className="h-8 w-8 text-primary-green" />
        </motion.div>
      </div>
    </section>
  );
} 