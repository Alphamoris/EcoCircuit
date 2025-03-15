"use client"
import { motion } from 'framer-motion';
import { ArrowDownIcon, SparklesIcon, GlobeAltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import ImpactCounter from './components/home/ImpactCounter';
import HowItWorks from './components/home/HowItWorks';
import Testimonials from './components/home/Testimonials';
import EnvironmentalImpact from './components/home/EnvironmentalImpact';
import Image from 'next/image';
import Features from './components/home/Features';
// import Contributors from './components/home/Contributors';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen z-0 flex items-center justify-center bg-gradient-to-b from-[#E7F4E8] via-[#F2F9F3] to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <motion.div 
            className="absolute top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary-green/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#E1F0E3] rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </div>

        <div className="relative z-10 pt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <motion.div 
              className="flex justify-center mb-6 sm:mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mt-6 sm:mt-8 bg-white rounded-full p-2 shadow-xl">
                <Image
                  src="/logo.png"
                  alt="EcoCircuit Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
                <div className="absolute -inset-2 bg-primary-green/10 rounded-full blur-xl -z-10" />
              </div>
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight tracking-tight">
              <span className="text-primary-green">Transform E-Waste</span>
              <br />
              <span className="text-[#2C7A3F]">Into Environmental Impact</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the revolution in sustainable e-waste management. 
              Our AI-powered platform makes recycling electronics easier than ever.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button className="group bg-primary-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary-green/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              <span className="flex items-center justify-center gap-2">
                Schedule Collection
                <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
              </span>
            </button>
            <button className="group border-2 border-primary-green text-primary-green px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary-green hover:text-white transition-all transform hover:scale-105 text-sm sm:text-base">
              Learn More
            </button>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-primary-green/20">
              <div className="bg-[#E7F4E8] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-green" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary-green mb-1 sm:mb-2">
                Earn Green Points
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                Get rewarded for your contribution to sustainability
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-primary-green/20">
              <div className="bg-[#E7F4E8] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <GlobeAltIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-green" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary-green mb-1 sm:mb-2">
                Reduce CO₂ Impact
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                Make a real difference to our planet&apos;s future
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-primary-green/20 sm:col-span-2 md:col-span-1 sm:max-w-xs sm:mx-auto md:max-w-none">
              <div className="bg-[#E7F4E8] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <ShieldCheckIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-green" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary-green mb-1 sm:mb-2">
                Secure Recycling
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                Your data is safely wiped before recycling
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDownIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-green" />
        </motion.div>
      </section>

      {/* Impact Counter Section - Light Background */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <ImpactCounter />
      </section>

      {/* Features Section - Light Green Background */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F2F9F3]">
        <Features />
      </section>

      {/* How It Works Section - White Background */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-white">
        <HowItWorks />
      </section>

      {/* Testimonials Section - Light Green Background */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F2F9F3]">
        <Testimonials />
      </section>

      {/* Environmental Impact - White Background */}
      <section id="environmental-impact" className="relative">
        <EnvironmentalImpact />
      </section>

      {/* Contributors Section */}
      {/* <Contributors /> */}

      {/* CTA Section - Green Gradient */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#F2F9F3] to-[#E7F4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-green mb-4 sm:mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of environmentally conscious individuals and businesses 
              in our mission to create a sustainable future.
            </p>
            <button className="bg-primary-green text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-primary-green/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

