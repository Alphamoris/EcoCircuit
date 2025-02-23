"use client"
import { motion } from 'framer-motion';
import WasteCalculator from '../components/home/WasteCalculator';

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-10 pb-20">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-green-500  mb-6">
            Green Points Calculator
          </h1>
          <p className="text-lg text-text max-w-2xl mx-auto">
            Calculate the Green Points you'll earn by recycling your e-waste. 
            The more you recycle, the more points you earn towards rewards!
          </p>
        </motion.div>

        <WasteCalculator />

        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-primary-green mb-4">
            Ready to Start Recycling?
          </h2>
          <p className="text-text mb-8">
            Schedule a collection now and start earning your Green Points!
          </p>
          <a 
            href="/collection" 
            className="inline-block bg-primary-green text-white px-8 py-3 rounded-full hover:bg-primary-green/90 transition-colors"
          >
            Schedule Collection
          </a>
        </motion.div>
      </div>
    </main>
  );
} 