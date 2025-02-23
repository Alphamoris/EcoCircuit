"use client"
import { motion } from 'framer-motion';
import ScheduleCollection from '../components/collection/ScheduleCollection';

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-background bg-gradient-to-b from-[#E7F4E8] via-[#F2F9F3] to-white">
      <div className="pt-10 pb-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-green mb-6">
            Schedule E-Waste Collection
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Schedule a convenient pickup time for your e-waste. Our team will collect it directly from your location.
          </p>
        </motion.div>

        <ScheduleCollection />
      </div>
    </main>
  );
} 